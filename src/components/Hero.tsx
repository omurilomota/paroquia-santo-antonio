import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Clock, MapPin, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { PARISH } from "../data/content";
import { formatarData, proximaMissa, type ProximaMissa } from "../data/liturgia";

const EASE = [0.22, 1, 0.36, 1] as const;

const DIAS_SEMANA_LONGO = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

function useProximaMissa() {
  const [state, setState] = useState<ProximaMissa | null>(null);
  useEffect(() => {
    const tick = () => setState(proximaMissa(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);
  return state;
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  // No celular o herói precisa "segurar" o conteúdo por mais tempo:
  // o parallax é curto e a opacidade só cai no final do deslocamento.
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "9%"]);
  const fade = useTransform(scrollYProgress, [0, 0.62, 1], [1, 1, 0]);
  const missa = useProximaMissa();

  const contagem = missa
    ? [
        { v: missa.em.dias, l: "dias" },
        { v: missa.em.horas, l: "horas" },
        { v: missa.em.minutos, l: "min" },
      ]
    : [];

  return (
    <section ref={ref} id="inicio" className="relative flex min-h-[100svh] flex-col overflow-hidden bg-night text-cream">
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <img src="/images/hero.jpg" alt="Interior da Igreja Matriz de Santo Antônio" className="h-[115%] w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-night/80 via-night/45 to-night" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(21,13,7,0.55)_100%)]" />
      </motion.div>

      <motion.div style={{ opacity: fade }} className="mx-auto flex w-full max-w-[88rem] flex-1 flex-col justify-end px-5 pt-32 pb-10 sm:px-8 sm:pt-40 sm:pb-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          className="flex flex-wrap items-center gap-3 text-[10px] font-bold tracking-[0.35em] text-goldlight uppercase sm:text-[11px]"
        >
          <span className="h-px w-10 bg-goldlight/60" />
          {PARISH.diocese} · {PARISH.region}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: EASE }}
          className="mt-6 font-display text-[15vw] leading-[0.92] font-medium tracking-tight sm:text-[11vw] lg:text-[8.2rem]"
        >
          Santo <span className="text-goldlight italic">Antônio</span>
          <span className="block font-light">do Vale</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: EASE }}
          className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="max-w-md text-sm leading-relaxed text-cream/70 sm:text-base">
              Paróquia criada em 13 de junho de 1962, com a Igreja Matriz na{" "}
              <span className="text-cream">Rua das Palmeiras, 245 — Centro</span> e dez capelas
              filiais na cidade e no interior.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="#horarios"
                className="group inline-flex items-center gap-3 rounded-full bg-gold px-7 py-4 text-xs font-bold tracking-[0.2em] text-night uppercase transition-all duration-300 hover:bg-goldlight"
              >
                Horários das Missas
                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
              </a>
              <a
                href="#agenda"
                className="inline-flex items-center gap-3 rounded-full border border-cream/30 px-7 py-4 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:border-goldlight hover:text-goldlight"
              >
                Agenda Paroquial
              </a>
            </div>
          </div>

          {/* Próxima missa — ao vivo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9, ease: EASE }}
            className="w-full max-w-sm rounded-3xl border border-gold/35 bg-night/60 p-6 backdrop-blur-md"
          >
            <div className="flex items-center gap-2.5 text-[10px] font-bold tracking-[0.3em] text-goldlight uppercase">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
              </span>
              Próxima missa na matriz
            </div>
            {missa ? (
              <>
                <p className="mt-3 font-display text-2xl leading-tight font-medium text-cream sm:text-3xl">
                  {DIAS_SEMANA_LONGO[missa.quando.getDay()]}
                  <span className="text-goldlight"> · {missa.quando.getHours()}h</span>
                  {missa.quando.getMinutes() > 0 && `:${String(missa.quando.getMinutes()).padStart(2, "0")}`}
                </p>
                <p className="mt-1 text-sm text-cream/60">{missa.nome}</p>
                <div className="mt-5 flex gap-2">
                  {contagem.map((c) => (
                    <div key={c.l} className="flex-1 rounded-xl bg-cream/[0.06] px-3 py-2.5 text-center">
                      <p className="font-display text-xl font-semibold text-cream tabular-nums">{String(c.v).padStart(2, "0")}</p>
                      <p className="text-[9px] font-bold tracking-[0.2em] text-cream/45 uppercase">{c.l}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-[10px] tracking-widest text-cream/35 uppercase">
                  Hoje é {formatarData(new Date())}
                </p>
              </>
            ) : (
              <p className="mt-3 text-sm text-cream/60">Consulte os horários na secretaria paroquial.</p>
            )}
          </motion.div>
        </motion.div>

        {/* Info bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="mt-10 grid grid-cols-1 gap-4 border-t border-cream/15 pt-6 text-sm sm:grid-cols-3"
        >
          <a href="#contato" className="group flex items-center gap-3">
            <MapPin className="h-4 w-4 shrink-0 text-gold" />
            <span className="text-cream/75 transition-colors group-hover:text-goldlight">
              {PARISH.address} — {PARISH.city}/{PARISH.state}
            </span>
          </a>
          <a href={`tel:${PARISH.phones[1].replace(/\D/g, "")}`} className="group flex items-center gap-3">
            <Phone className="h-4 w-4 shrink-0 text-gold" />
            <span className="text-cream/75 transition-colors group-hover:text-goldlight">{PARISH.phones.join(" · ")}</span>
          </a>
          <a href="#horarios" className="group flex items-center gap-3">
            <Clock className="h-4 w-4 shrink-0 text-gold" />
            <span className="text-cream/75 transition-colors group-hover:text-goldlight">
              Domingos: 7h · 9h · 9h30 · 19h
            </span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
