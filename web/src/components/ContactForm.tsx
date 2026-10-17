"use client";

import { useState, type FormEvent } from "react";
import { CircleAlert, CircleCheck } from "lucide-react";

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
const intents = ["I want to buy", "I want to invest or partner"];

const inputClass =
  "w-full rounded-lg border border-line bg-surface-primary px-4 py-3.5 text-[15px] text-fg-primary placeholder:text-[#8A948A] focus:border-accent focus:outline-none";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [intent, setIntent] = useState(intents[0]);
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!ACCESS_KEY) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `${intent} - Ecojhar Agrology website enquiry`,
          from_name: "Ecojhar Agrology website",
          intent,
          name: data.get("name"),
          contact: data.get("contact"),
          message: data.get("message"),
          botcheck: data.get("botcheck"),
        }),
      });
      const result = await res.json();
      if (result.success) {
        form.reset();
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        className="flex w-full flex-col items-start justify-center gap-4 rounded-2xl bg-surface-primary p-6 md:p-9"
      >
        <CircleCheck size={36} className="text-accent" />
        <h3 className="font-heading text-[28px] font-medium">Message sent</h3>
        <p className="text-base leading-[1.5] text-fg-secondary">
          Thank you. We have received your message and will get back to you
          soon.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="rounded-full border border-line px-6 py-3 text-sm font-medium hover:bg-surface-secondary"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full flex-col gap-4 rounded-2xl bg-surface-primary p-6 md:p-9"
    >
      <h3 className="font-heading text-[28px] font-medium">Send us a message</h3>

      <div className="flex flex-wrap gap-2.5" role="group" aria-label="I want to">
        {intents.map((i) => (
          <button
            key={i}
            type="button"
            aria-pressed={intent === i}
            onClick={() => setIntent(i)}
            className={`rounded-full px-[18px] py-2.5 text-sm font-medium ${
              intent === i
                ? "bg-accent text-fg-inverse"
                : "border border-line text-fg-primary hover:bg-surface-secondary"
            }`}
          >
            {i}
          </button>
        ))}
      </div>

      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <label className="flex flex-col gap-1.5 text-[13px] font-medium text-fg-secondary">
        Name
        <input
          name="name"
          required
          placeholder="Your name"
          className={inputClass}
        />
      </label>
      <label className="flex flex-col gap-1.5 text-[13px] font-medium text-fg-secondary">
        Phone or email
        <input
          name="contact"
          required
          placeholder="How we can reach you"
          className={inputClass}
        />
      </label>
      <label className="flex flex-col gap-1.5 text-[13px] font-medium text-fg-secondary">
        Message
        <textarea
          name="message"
          required
          rows={4}
          placeholder="What would you like to know?"
          className={inputClass}
        />
      </label>

      {status === "error" && (
        <p
          role="alert"
          className="flex items-start gap-2 text-sm leading-[1.4] text-[#B3261E]"
        >
          <CircleAlert size={18} className="mt-0.5 shrink-0" />
          <span>
            Sorry, your message could not be sent. Please call us on 9431491403
            or 8825331013.
          </span>
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-accent px-8 py-4 text-base font-semibold text-fg-inverse hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
