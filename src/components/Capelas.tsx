import { AnimatePresence, motion } from "framer-motion";
import { Church, MapPin, Search, Wheat } from "lucide-react";
import { useMemo, useState } from "react";
import { CAPELAS } from "../data/content";
import { cn } from "../utils/cn";
import { Reveal, SectionHeading } from "./ui";

type Filtro = "todas" | "urbana" | "rural";

const FILTROS: { id: Filtro; label: string }[] = [
  { id: "todas", label: "Todas (10)" },
  { id: "urbana", label: "Área urbana (7)" },
  { id: "rural", label: "Zona rural (3)" },
];

export default function Capelas() {
  const [filtro, setFiltro] = useState<Filtro>("todas");
  const [busca, setBusca] = useState("");

  const lista = useMemo(
    () =>
      CAPELAS.filter((c) => filtro === "todas" || c.area === filtro).filter((c) =>
        (c.nome + c.endereco + c.celebracao + c.padroeiro).toLowerCase().includes(busca.toLowerCase())
      ),
    [filtro, busca]
  );

  return (
    <section id="capelas" className="scroll-mt-20 bg-cream py-14 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Capelas filiais"
            title={<>As dez capelas filiais</>}
            description="Sete na área urbana e três na zona rural — Bairro Duas Barras, N. Sra. de Fátima e Vila São João. Todas celebram mensalmente, às 19h30."
          />
          <Reveal delay={0.15}>
            <div className="flex flex-col gap-3">
              <label className="flex items-center gap-3 rounded-full border border-ink/15 bg-parchment px-5 py-3">
                <Search className="h-4 w-4 shrink-0 text-gold" />
                <input
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                  placeholder="Buscar por padroeiro, rua ou bairro…"
                  className="w-full bg-transparent text-sm text-ink placeholder:text-cocoa/50 focus:outline-none"
                />
              </label>
              <div className="flex flex-wrap gap-2">
                {FILTROS.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setFiltro(f.id)}
                    className={cn(
                      "rounded-full border px-5 py-2.5 text-[11px] font-bold tracking-widest uppercase transition-all duration-300",
                      filtro === f.id
                        ? "border-ink bg-ink text-cream"
                        : "border-ink/20 text-cocoa hover:border-gold hover:text-gold"
                    )}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {lista.map((capela, i) => (
              <motion.article
                layout
                key={capela.nome + capela.endereco}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.45, delay: i * 0.03, ease: [0.22, 1, 0.36, 1] }}
                className="group flex h-full flex-col rounded-3xl border border-ink/10 bg-parchment p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-[0_24px_50px_-28px_rgba(36,24,17,0.35)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-ink text-goldlight transition-colors duration-500 group-hover:bg-gold group-hover:text-night">
                    {capela.area === "rural" ? (
                      <Wheat className="h-5 w-5" strokeWidth={1.8} />
                    ) : (
                      <Church className="h-5 w-5" strokeWidth={1.8} />
                    )}
                  </div>
                  <span
                    className={cn(
                      "rounded-full px-3 py-1.5 text-[9px] font-bold tracking-[0.2em] uppercase",
                      capela.area === "rural" ? "bg-bordeaux/10 text-bordeaux" : "bg-gold/15 text-gold"
                    )}
                  >
                    {capela.area === "rural" ? "Zona rural" : "Área urbana"}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-2xl leading-snug font-medium text-ink text-balance">
                  {capela.nome}
                </h3>
                <p className="mt-1.5 flex items-start gap-1.5 text-sm text-cocoa">
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold/70" />
                  {capela.endereco}
                </p>
                <p className="mt-3 inline-flex w-fit rounded-lg border border-gold/40 bg-gold/10 px-3 py-1.5 text-[11px] font-bold tracking-[0.15em] text-gold uppercase">
                  {capela.celebracao}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-cocoa">{capela.nota}</p>
                <a
                  href={`https://www.openstreetmap.org/search?query=${encodeURIComponent(`${capela.endereco}, Santa Clara do Vale SP`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 border-t border-ink/10 pt-4 text-[10px] font-bold tracking-[0.25em] text-cocoa/70 uppercase transition-colors hover:text-gold"
                >
                  Ver no mapa →
                </a>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {lista.length === 0 && (
          <p className="mt-14 text-center text-sm text-cocoa/70">
            Nenhuma capela encontrada. Tente outro nome de padroeiro, rua ou bairro.
          </p>
        )}

        <Reveal delay={0.1}>
          <p className="mt-10 text-center text-xs leading-relaxed tracking-[0.2em] text-cocoa/60 uppercase">
            Em dias de festa, os horários podem mudar · confirme nas redes sociais da PASCOM
          </p>
        </Reveal>
      </div>
    </section>
  );
}
