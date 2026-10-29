const ATALHOS = [
  { label: "Missas", href: "#horarios" },
  { label: "Liturgia de hoje", href: "#liturgia" },
  { label: "Agenda", href: "#agenda" },
  { label: "Capelas", href: "#capelas" },
  { label: "Pastorais", href: "#movimentos" },
  { label: "Sacramentos", href: "#sacramentos" },
  { label: "Intenções", href: "#comunidade" },
  { label: "Galeria", href: "#galeria" },
  { label: "Contato", href: "#contato" },
];

export default function QuickLinks() {
  return (
    <nav
      aria-label="Atalhos"
      className="border-b border-ink/10 bg-cream"
    >
      <div className="no-scrollbar mx-auto flex max-w-[88rem] gap-2 overflow-x-auto px-5 py-3 sm:px-8">
        {ATALHOS.map((a) => (
          <a
            key={a.href}
            href={a.href}
            className="shrink-0 rounded-full border border-ink/15 bg-parchment px-4 py-2 text-[11px] font-bold tracking-widest text-cocoa uppercase transition-colors hover:border-gold hover:text-gold"
          >
            {a.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
