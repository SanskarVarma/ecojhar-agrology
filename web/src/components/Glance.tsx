const stats = [
  { value: "4.16", label: "acres of farmland in Tiuj Village" },
  { value: "3", label: "acres for vegetables and fruit" },
  { value: "50", label: "goats housed in our shed" },
  { value: "100×100", label: "pond for fish farming" },
];

export function Glance() {
  return (
    <section className="bg-surface-tint px-6 py-12 md:px-16 md:py-14">
      <dl className="mx-auto grid max-w-[1312px] grid-cols-2 gap-y-8 md:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="flex flex-col gap-1.5 border-l border-accent/25 pl-5 md:pl-8"
          >
            <dd className="font-heading text-[32px] font-medium leading-none text-accent sm:text-[40px] md:text-[60px]">
              {s.value}
            </dd>
            <dt className="max-w-[240px] text-sm text-fg-secondary md:text-[15px]">
              {s.label}
            </dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
