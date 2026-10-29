import { AnimatePresence, motion } from "framer-motion";
import { Check, FileText } from "lucide-react";
import { useState } from "react";
import { SACRAMENTOS } from "../data/content";
import { GrupoIcon, Reveal, SectionHeading } from "./ui";

export default function Sacramentos() {
  const [ativo, setAtivo] = useState(0);
  const s = SACRAMENTOS[ativo];

  return (
    <section id="sacramentos" className="relative scroll-mt-20 overflow-hidden bg-night py-14 text-cream sm:py-24 lg:py-28">
      <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Sacramentos"
          dark
          title={<>Sacramentos: como agendar</>}
          description="O passo a passo para batismo, primeira comunhão, crisma, casamento e os demais sacramentos, com a documentação de cada um."
        />

        <div className="mt-10 sm:mt-16 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          {/* Lista */}
          <div className="flex flex-col gap-2">
            {SACRAMENTOS.map((item, i) => (
              <button
                key={item.nome}
                onClick={() => setAtivo(i)}
                className={`group flex items-center gap-4 rounded-2xl border p-5 text-left transition-all duration-400 ${
                  ativo === i
                    ? "border-gold bg-gold text-night"
                    : "border-cream/12 bg-cream/[0.03] text-cream hover:border-gold/45"
                }`}
              >
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                    ativo === i ? "bg-night text-goldlight" : "bg-cream/[0.06] text-goldlight"
                  }`}
                >
                  <GrupoIcon name={item.icon} className="h-5 w-5" />
                </span>
                <span className="flex-1">
                  <span className="block font-display text-xl font-medium">{item.nome}</span>
                  <span className={`block text-xs leading-snug ${ativo === i ? "text-night/70" : "text-cream/50"}`}>
                    {item.resumo}
                  </span>
                </span>
                <span className={`font-display text-sm italic ${ativo === i ? "text-night/60" : "text-cream/30"}`}>
                  0{i + 1}
                </span>
              </button>
            ))}
          </div>

          {/* Detalhe */}
          <AnimatePresence mode="wait">
            <motion.div
              key={s.nome}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex h-full flex-col rounded-3xl border border-cream/12 bg-cream/[0.04] p-8 sm:p-10"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold text-night">
                  <GrupoIcon name={s.icon} className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.3em] text-goldlight uppercase">Sacramento</p>
                  <h3 className="font-display text-3xl font-medium text-cream sm:text-4xl">{s.nome}</h3>
                </div>
              </div>

              <p className="mt-6 leading-relaxed text-cream/70">{s.resumo}</p>

              <p className="mt-8 text-[10px] font-bold tracking-[0.3em] text-goldlight uppercase">
                Passo a passo na paróquia
              </p>
              <ul className="mt-4 space-y-3">
                {s.passos.map((passo, i) => (
                  <li key={passo} className="flex items-start gap-3 rounded-2xl bg-cream/[0.04] p-4">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/20 text-goldlight">
                      <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                    <span className="text-sm leading-relaxed text-cream/75">
                      <span className="mr-2 font-display text-goldlight italic">{i + 1}.</span>
                      {passo}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-start gap-3 rounded-2xl border border-gold/30 bg-gold/[0.07] p-5">
                <FileText className="mt-0.5 h-4.5 w-4.5 shrink-0 text-goldlight" strokeWidth={1.8} />
                <div>
                  <p className="text-[10px] font-bold tracking-[0.25em] text-goldlight uppercase">Documentação</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-cream/75">{s.documento}</p>
                </div>
              </div>

              <p className="mt-auto pt-6 text-xs leading-relaxed text-cream/40">
                Agendamentos e dúvidas na secretaria paroquial: quarta a sábado, das 9h às 11h.
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <Reveal delay={0.1}>
          <p className="mt-12 text-center text-xs leading-relaxed tracking-[0.25em] text-cream/40 uppercase">
            O sacramento da ordem é celebrado na Diocese de Santa Clara · Ordem e Matrimônio são
            vocações de serviço
          </p>
        </Reveal>
      </div>
    </section>
  );
}
