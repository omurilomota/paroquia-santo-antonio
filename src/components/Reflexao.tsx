import { BookOpen, Radio, Tv } from "lucide-react";
import { REFLEXOES, TRANSMISSAO } from "../data/content";
import { diaLiturgico } from "../data/liturgia";
import { Ornament, Reveal, SectionHeading } from "./ui";

const EVANGELISTAS: Record<string, string> = {
  A: "São Mateus — o evangelista que mostra Jesus como o Messias prometido.",
  B: "São Marcos — o mais antigo dos evangelhos, direto e urgente.",
  C: "São Lucas — o evangelista da misericórdia e dos pobres.",
};

export default function Reflexao() {
  const lit = diaLiturgico(new Date());
  const reflexao = REFLEXOES[lit.tempo] ?? REFLEXOES["Tempo Comum"];

  return (
    <section id="reflexao" className="scroll-mt-20 bg-parchment py-14 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* Reflexão do tempo */}
          <div>
            <SectionHeading
              eyebrow="Reflexão da semana"
              title={<>Reflexão do tempo litúrgico</>}
              description="O texto muda conforme o tempo que a paróquia está celebrando agora. No cartão ao lado, os links das transmissões e as dicas para a missa."
            />

            <Reveal delay={0.15}>
              <div className="mt-10 rounded-3xl border border-ink/10 bg-cream p-8 sm:p-10">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-ink px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] text-cream uppercase">
                    {lit.tempo}
                  </span>
                  {lit.semana && (
                    <span className="rounded-full border border-gold/50 px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] text-gold uppercase">
                      {lit.semana}
                    </span>
                  )}
                </div>
                <h3 className="mt-6 font-display text-3xl leading-tight font-medium text-ink sm:text-4xl">
                  {reflexao.titulo}
                </h3>
                <p className="mt-5 text-base leading-relaxed text-cocoa sm:text-lg">{reflexao.texto}</p>
                <Ornament className="mt-8" />
                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-parchment p-6">
                    <p className="text-[10px] font-bold tracking-[0.25em] text-gold uppercase">Prática sugerida</p>
                    <p className="mt-2 text-sm leading-relaxed text-cocoa">{reflexao.pratica}</p>
                  </div>
                  <div className="rounded-2xl bg-ink p-6 text-cream">
                    <p className="text-[10px] font-bold tracking-[0.25em] text-goldlight uppercase">
                      Ano litúrgico {lit.ano}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-cream/70">
                      {reflexao.evangelista} {EVANGELISTAS[lit.ano]}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Transmissão + leituras */}
          <div className="flex flex-col gap-5">
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-3xl">
                <img src="/images/catequese.jpg" alt="Celebração na paróquia" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-night/95 via-night/70 to-night/30" />
                <div className="relative p-8 sm:p-10">
                  <div className="flex items-center gap-2.5 text-goldlight">
                    <Tv className="h-4.5 w-4.5" strokeWidth={1.8} />
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Transmissão ao vivo</span>
                  </div>
                  <h3 className="mt-4 font-display text-3xl leading-tight font-medium text-cream sm:text-4xl">
                    {TRANSMISSAO.titulo}
                  </h3>
                  <p className="mt-4 leading-relaxed text-cream/70">{TRANSMISSAO.texto}</p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href={TRANSMISSAO.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-[10px] font-bold tracking-[0.2em] text-night uppercase transition-colors hover:bg-goldlight"
                    >
                      <Radio className="h-3.5 w-3.5" /> Instagram
                    </a>
                    <a
                      href={TRANSMISSAO.facebook}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-6 py-3 text-[10px] font-bold tracking-[0.2em] text-cream uppercase transition-colors hover:border-gold hover:text-gold"
                    >
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="rounded-3xl border border-ink/10 bg-cream p-8">
                <div className="flex items-center gap-3 text-gold">
                  <BookOpen className="h-5 w-5" strokeWidth={1.8} />
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Para preparar a missa</span>
                </div>
                <ul className="mt-5 space-y-3.5">
                  {[
                    "Leia as leituras do domingo antes de ir à celebração",
                    "Chegue alguns minutos antes para rezar em silêncio",
                    "Traga a bíblia de casa ou o folheto da missa",
                    "Escolha uma intenção para oferecer a sua participação",
                    "Fique alguns minutos em ação de graças após a bênção final",
                  ].map((dica, i) => (
                    <li key={dica} className="flex gap-3 text-sm leading-relaxed text-cocoa">
                      <span className="font-display text-base text-gold italic">{i + 1}.</span>
                      {dica}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
