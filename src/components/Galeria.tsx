import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { GALERIA } from "../data/content";
import { cn } from "../utils/cn";
import { Lightbox, Reveal, SectionHeading, Tabs } from "./ui";

const CATEGORIAS = ["Todas", "Igreja", "Fé", "Comunidade", "Tradições"];

export default function Galeria() {
  const [cat, setCat] = useState("Todas");
  const [index, setIndex] = useState<number | null>(null);

  const fotos = useMemo(
    () => GALERIA.filter((f) => cat === "Todas" || f.categoria === cat),
    [cat]
  );

  return (
    <section id="galeria" className="scroll-mt-20 bg-cream py-14 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Galeria"
            title={<>Fotos da comunidade</>}
            description="Imagens das celebrações, da catequese e das confraternizações, enviadas pela comunidade e pela PASCOM. Para enviar a sua, chame a secretaria no WhatsApp."
          />
          <Reveal delay={0.15}>
            <Tabs
              tabs={CATEGORIAS.map((c) => ({
                id: c,
                label: c,
                count: c === "Todas" ? GALERIA.length : GALERIA.filter((f) => f.categoria === c).length,
              }))}
              active={cat}
              onChange={setCat}
            />
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {fotos.map((foto, i) => (
            <motion.button
              layout
              key={foto.src}
              onClick={() => setIndex(i)}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "group relative overflow-hidden rounded-2xl text-left",
                i % 7 === 0 ? "aspect-[4/5]" : "aspect-square"
              )}
            >
              <img
                src={foto.src}
                alt={foto.titulo}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="text-[9px] font-bold tracking-[0.25em] text-goldlight uppercase">{foto.categoria}</p>
                <p className="mt-1 font-display text-base leading-tight font-medium text-cream sm:text-lg">
                  {foto.titulo}
                </p>
              </div>
            </motion.button>
          ))}
        </div>

        <Lightbox photos={fotos} index={index} onClose={() => setIndex(null)} onNavigate={setIndex} />
      </div>
    </section>
  );
}
