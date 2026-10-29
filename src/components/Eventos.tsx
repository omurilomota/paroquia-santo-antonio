import { Sparkles } from "lucide-react";
import { EVENTOS, PARISH } from "../data/content";
import { Reveal, SectionHeading } from "./ui";

export default function Eventos() {
  return (
    <section id="eventos" className="relative scroll-mt-20 overflow-hidden bg-night py-14 text-cream sm:py-24 lg:py-28">
      <div className="absolute inset-0">
        <img src="/images/carreata.jpg" alt="" className="h-full w-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-night via-night/85 to-night" />
      </div>

      <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Festas e tradições"
          dark
          title={<>As festas do ano paroquial</>}
          description="Trezena do padroeiro, festas das capelas, novenas de outubro e as celebrações da Páscoa e do Natal — o calendário que a comunidade já marca na agenda."
        />

        <div className="mt-10 sm:mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {EVENTOS.map((evento, i) => (
            <Reveal key={evento.titulo} delay={(i % 4) * 0.07}>
              <article className="group flex h-full flex-col rounded-3xl border border-cream/12 bg-cream/[0.03] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-gold/50 hover:bg-cream/[0.06]">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full border border-gold/40 px-3.5 py-1.5 text-[9px] font-bold tracking-[0.2em] text-goldlight uppercase">
                    {evento.periodo}
                  </span>
                  <span className="text-[9px] font-bold tracking-[0.2em] text-cream/30 uppercase">{evento.tag}</span>
                </div>
                <h3 className="mt-5 font-display text-xl leading-snug font-medium text-balance sm:text-2xl">
                  {evento.titulo}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-cream/55">{evento.texto}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_1fr]">
          <Reveal delay={0.1}>
            <div className="relative h-full overflow-hidden rounded-3xl">
              <img src="/images/festa.jpg" alt="Festa da paróquia" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-night/95 via-night/45 to-transparent" />
              <div className="relative flex h-full flex-col justify-end p-8 sm:p-10">
                <p className="text-[10px] font-bold tracking-[0.3em] text-goldlight uppercase">Confraternizações</p>
                <p className="mt-3 font-display text-2xl leading-snug text-cream italic sm:text-3xl">
                  A festa é o povo reunido: barraquinhas, almoços, leilões e a alegria de
                  quem constrói a paróquia junto.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="flex h-full flex-col justify-between gap-6 rounded-3xl bg-gold p-8 text-night sm:p-10">
              <div className="flex items-center gap-4">
                <Sparkles className="h-7 w-7 shrink-0" strokeWidth={1.6} />
                <p className="font-display text-xl leading-snug italic sm:text-2xl">
                  Acompanhe a agenda completa, com fotos e avisos, nas redes oficiais da PASCOM.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={PARISH.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-night px-6 py-3.5 text-[11px] font-bold tracking-[0.2em] text-cream uppercase transition-colors hover:bg-ink"
                >
                  Instagram · {PARISH.instagramSeguidores}
                </a>
                <a
                  href={PARISH.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-night/30 px-6 py-3.5 text-[11px] font-bold tracking-[0.2em] uppercase transition-colors hover:bg-night hover:text-cream"
                >
                  Facebook · {PARISH.facebookSeguidores}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
