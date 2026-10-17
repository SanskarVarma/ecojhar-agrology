"use client";

import { useState, type FormEvent } from "react";

const EMAIL = "safal.organic05@gmail.com";
const intents = ["I want to buy", "I want to invest or partner"];

const inputClass =
  "w-full rounded-lg border border-line bg-surface-primary px-4 py-3.5 text-[15px] text-fg-primary placeholder:text-[#8A948A] focus:border-accent focus:outline-none";

export function ContactForm() {
  const [intent, setIntent] = useState(intents[0]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `${intent} - website enquiry`;
    const body = [
      `Name: ${data.get("name")}`,
      `Phone or email: ${data.get("contact")}`,
      "",
      `${data.get("message")}`,
    ].join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
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

      <button
        type="submit"
        className="w-full rounded-full bg-accent px-8 py-4 text-base font-semibold text-fg-inverse hover:brightness-110"
      >
        Send message
      </button>
    </form>
  );
}
