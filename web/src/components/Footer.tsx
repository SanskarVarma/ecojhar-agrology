export function Footer() {
  return (
    <footer className="flex flex-col items-start justify-between gap-3 border-t border-white/10 bg-surface-inverse px-6 py-8 md:flex-row md:items-center md:px-16">
      <p className="font-heading text-xl text-fg-inverse">Ecojhar Agrology</p>
      <div className="flex flex-col gap-1 text-sm text-white/70 md:items-end">
        <p>
          FSSAI Regd. No.:{" "}
          <span className="font-data text-fg-inverse">21126244000056</span>
        </p>
        <p>© 2026 All rights reserved</p>
      </div>
    </footer>
  );
}
