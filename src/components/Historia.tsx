import { BookOpen, Building2, TreePine, Users } from "lucide-react";
import { CIDADE, CURIOSIDADES, PADRES_HISTORICOS, PARISH, TIMELINE } from "../data/content";
import { Reveal, SectionHeading } from "./ui";

export default function Historia() {
  return (
    <section id="historia" className="scroll-mt-20 bg-cream py-14 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <SectionHeading
          eyebrow="História"
          title={<>A história da paróquia</>}
          description="Da compra das terras, em 1946, à criação canônica da paróquia, em 13 de junho de 1962. A fé chegou antes das primeiras casas: chegou na cruz de madeira da fundação do povoado."
        />

        <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Linha do tempo */}
          <div className="relative">
            <div className="absolute top-2 bottom-2 left-0 w-px bg-ink/15" />
            <div className="space-y-10 sm:space-y-12">
              {TIMELINE.map((item, i) => (
                <Reveal key={item.year + item.title} delay={i * 0.05}>
                  <article className="relative pl-10 sm:pl-12">
                    <span className="absolute top-3 -left-[5px] h-2.5 w-2.5 rotate-45 bg-gold" />
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <span className="font-display text-5xl leading-none font-semibold text-gold sm:text-6xl">
                        {item.year}
                      </span>
                      <span className="rounded-full bg-ink/5 px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-cocoa uppercase">
                        {item.tag}
                      </span>
                    </div>
                    <p className="mt-2 text-[11px] font-bold tracking-[0.25em] text-cocoa uppercase">{item.date}</p>
                    <h3 className="mt-2 font-display text-2xl font-medium text-ink">{item.title}</h3>
                    <p className="mt-2 max-w-xl leading-relaxed text-cocoa">{item.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.08}>
              <div className="relative mt-10 overflow-hidden rounded-3xl">
                <img
                  src="/images/cruz.jpg"
                  alt="Cruz erguida na fundação do povoado de Santa Clara do Vale"
                  className="aspect-[16/9] w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-night/90 to-transparent p-6 pt-14">
                  <p className="text-sm leading-relaxed text-cream/90">
                    A cruz de madeira do senhor Possato, 13 de junho de 1948: o primeiro marco
                    da fé católica entre os desbravadores.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* A cidade e os números */}
          <div className="space-y-6">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src="/images/matriz.jpg"
                  alt="Igreja Matriz Santo Antônio do Vale em Santa Clara do Vale"
                  className="aspect-[16/10] w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-night/80 to-transparent p-5 pt-12">
                  <p className="text-xs font-bold tracking-[0.2em] text-cream/90 uppercase">
                    Igreja Matriz · Rua das Palmeiras, 245 — Centro
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: TreePine, rotulo: "Apelido", valor: `“${CIDADE.apelido}”` },
                  { icon: Users, rotulo: "Adjetivo pátrio", valor: CIDADE.adjetivo },
                  { icon: Building2, rotulo: "Emancipação", valor: CIDADE.emancipacao },
                  { icon: BookOpen, rotulo: "Significado", valor: CIDADE.significado },
                ].map((c) => (
                  <div key={c.rotulo} className="rounded-2xl border border-ink/10 bg-parchment p-5">
                    <c.icon className="h-5 w-5 text-gold" strokeWidth={1.8} />
                    <p className="mt-3 text-[10px] font-bold tracking-[0.25em] text-cocoa/70 uppercase">{c.rotulo}</p>
                    <p className="mt-1 text-sm leading-snug font-semibold text-ink">{c.valor}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-3xl bg-ink p-7 text-cream sm:p-8">
                <p className="text-[11px] font-bold tracking-[0.25em] text-goldlight uppercase">
                  A paróquia em dados
                </p>
                <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
                  {[
                    { v: "1962", l: "Criação da paróquia" },
                    { v: "10", l: "Capelas filiais" },
                    { v: "7 + 3", l: "Urbana / rural" },
                    { v: "3", l: "Clérigos a serviço" },
                  ].map((s) => (
                    <div key={s.l}>
                      <dt className="sr-only">{s.l}</dt>
                      <dd className="font-display text-3xl font-semibold text-goldlight">{s.v}</dd>
                      <dd className="mt-1 text-[10px] leading-relaxed tracking-[0.15em] text-cream/50 uppercase">{s.l}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-5 border-t border-cream/10 pt-5 text-sm leading-relaxed text-cream/55">
                  Comunidade da {PARISH.diocese}, {PARISH.region}. Na internet:{" "}
                  {PARISH.instagramSeguidores} seguidores e {PARISH.instagramPosts} no Instagram{" "}
                  {PARISH.instagram}, e {PARISH.facebookSeguidores} curtidas no Facebook —
                  tudo administrado pela PASCOM.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div>
                <p className="text-[11px] font-bold tracking-[0.25em] text-gold uppercase">
                  Sobre Santa Clara do Vale
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {CURIOSIDADES.map((c) => (
                    <article key={c.n} className="rounded-2xl border border-ink/10 bg-parchment p-5">
                      <h3 className="font-display text-lg font-medium text-ink">{c.titulo}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-cocoa">{c.texto}</p>
                    </article>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Padres que serviram */}
        <Reveal delay={0.08}>
          <div className="mt-16 sm:mt-20">
            <p className="text-[11px] font-bold tracking-[0.25em] text-gold uppercase">
              Padres e vigários que serviram nesta paróquia
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {PADRES_HISTORICOS.map((p) => (
                <article key={p.nome} className="rounded-2xl border border-ink/10 bg-parchment p-6">
                  <p className="font-display text-xl leading-snug font-medium text-ink">{p.nome}</p>
                  <p className="mt-1 text-[10px] font-bold tracking-[0.2em] text-gold uppercase">
                    {p.funcao} · {p.periodo}
                  </p>
                  <p className="mt-2.5 text-sm leading-relaxed text-cocoa">{p.texto}</p>
                </article>
              ))}
            </div>
            <p className="mt-4 text-xs text-cocoa/60">
              Relação em ordem cronológica aproximada, segundo os registros da comunidade.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
