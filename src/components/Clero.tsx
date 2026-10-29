import { Clock, Mail, Phone } from "lucide-react";
import { CLERO, PARISH } from "../data/content";
import { Reveal, SectionHeading } from "./ui";

export default function Clero() {
  return (
    <section id="clero" className="scroll-mt-20 bg-parchment py-14 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Clero"
            title={<>O clero da paróquia</>}
            description="Pároco, vigário paroquial e diácono. O atendimento presencial é na secretaria, de quarta a sábado, das 9h às 11h."
          />
          <Reveal delay={0.2}>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-3 rounded-full border border-ink/15 bg-cream px-5 py-3 text-xs font-bold tracking-widest text-cocoa uppercase">
                <Clock className="h-4 w-4 text-gold" />
                {PARISH.atendimento}
              </div>
              <a
                href={PARISH.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-full bg-ink px-5 py-3 text-xs font-bold tracking-widest text-cream uppercase transition-colors hover:bg-gold hover:text-night"
              >
                <Phone className="h-4 w-4" /> {PARISH.phones[1]}
              </a>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {CLERO.map((membro, i) => (
            <Reveal key={membro.nome} delay={i * 0.08}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-ink/10 bg-cream p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:border-gold/50 hover:shadow-[0_24px_50px_-24px_rgba(36,24,17,0.35)] sm:p-10">
                <div
                  aria-hidden="true"
                  className="absolute -top-10 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-gold/0 blur-2xl transition-all duration-500 group-hover:bg-gold/25"
                />
                <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border-2 border-gold/50 bg-parchment">
                  <span className="font-display text-3xl font-semibold text-gold italic">{membro.iniciais}</span>
                </div>
                <p className="mt-6 text-[11px] font-bold tracking-[0.3em] text-gold uppercase">{membro.cargo}</p>
                <h3 className="mt-3 font-display text-2xl leading-snug font-medium text-ink text-balance">
                  {membro.nome}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cocoa">{membro.nota}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12}>
          <div className="mt-10 rounded-3xl bg-ink p-8 text-cream sm:p-10">
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-xl">
                <p className="text-[10px] font-bold tracking-[0.3em] text-goldlight uppercase">
                  Em comunhão com a {PARISH.diocese}
                </p>
                <p className="mt-2 font-display text-xl leading-snug italic sm:text-2xl">
                  A paróquia caminha com o bispo diocesano {PARISH.bispo},{" "}
                  {PARISH.bispoDesde}, na {PARISH.region}.
                </p>
              </div>
              <a
                href={`mailto:${PARISH.email}`}
                className="inline-flex shrink-0 items-center gap-2.5 rounded-full border border-cream/25 px-7 py-3.5 text-[11px] font-bold tracking-[0.2em] uppercase transition-colors hover:border-gold hover:text-gold"
              >
                <Mail className="h-4 w-4" /> {PARISH.email}
              </a>
            </div>

            <div className="mt-8 grid gap-4 border-t border-cream/10 pt-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { rotulo: "Criação da diocese", valor: PARISH.dioceseCriacao },
                { rotulo: "Catedral", valor: PARISH.catedral },
                { rotulo: "Abrangência", valor: `${PARISH.dioceseCidades} da região` },
                { rotulo: "Província", valor: PARISH.province },
              ].map((c) => (
                <div key={c.rotulo}>
                  <p className="text-[10px] font-bold tracking-[0.25em] text-cream/40 uppercase">{c.rotulo}</p>
                  <p className="mt-1.5 text-sm leading-snug text-cream/75">{c.valor}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
