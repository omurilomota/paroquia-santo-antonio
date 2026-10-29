import { Clock, Flame, MapPin, Sun } from "lucide-react";
import { DEVOCOES, MISSAS_DOMINICAIS, MISSAS_FERIAIS, PARISH } from "../data/content";
import { cn } from "../utils/cn";
import { Reveal, SectionHeading } from "./ui";

function ScheduleCard({
  title, subtitle, rows, delay,
}: {
  title: string;
  subtitle: string;
  rows: { dia: string; horario: string; destaque: boolean }[];
  delay: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="flex h-full flex-col rounded-3xl border border-cream/12 bg-cream/[0.04] p-8 backdrop-blur-sm transition-colors duration-500 hover:border-gold/40 sm:p-10">
        <div className="flex items-center gap-3 text-goldlight">
          <Sun className="h-5 w-5" strokeWidth={1.8} />
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase">{subtitle}</span>
        </div>
        <h3 className="mt-4 font-display text-3xl font-medium text-cream sm:text-4xl">{title}</h3>
        <ul className="mt-8 flex-1 space-y-0">
          {rows.map((row, i) => (
            <li
              key={row.dia + row.horario}
              className={cn("flex items-baseline justify-between gap-4 py-4", i !== rows.length - 1 && "border-b border-cream/10")}
            >
              <span className="font-display text-lg text-cream/85 italic sm:text-xl">{row.dia}</span>
              <span className="flex-1 border-b border-dotted border-cream/20" />
              <span className={cn("text-sm font-bold tracking-wider whitespace-nowrap", row.destaque ? "text-goldlight" : "text-cream/70")}>
                {row.horario}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export default function Horarios() {
  return (
    <section id="horarios" className="relative scroll-mt-20 overflow-hidden bg-night py-14 text-cream sm:py-24 lg:py-28">
      <div className="absolute inset-0">
        <img src="/images/velas.jpg" alt="" className="h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-night via-night/70 to-night" />
      </div>

      <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Igreja Matriz · Santo Antônio do Vale"
          dark
          title={<>Horários das missas</>}
          description="Celebrações da matriz, na Rua das Palmeiras, 245 — Centro, e as devoções semanais. Em dias de festa e na Semana Santa a escala pode mudar."
        />

        <div className="mt-10 sm:mt-16 grid gap-6 lg:grid-cols-3">
          <ScheduleCard title="Missas Dominicais" subtitle="Domingo, dia do Senhor" rows={MISSAS_DOMINICAIS} delay={0.05} />
          <ScheduleCard title="Missas Feriais" subtitle="Terça a sábado" rows={MISSAS_FERIAIS} delay={0.12} />

          <Reveal delay={0.19} className="h-full">
            <div className="flex h-full flex-col justify-between gap-8 rounded-3xl bg-gold p-8 text-night sm:p-10">
              <div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5" strokeWidth={1.8} />
                  <span className="text-[11px] font-bold tracking-[0.3em] uppercase">Atendimento</span>
                </div>
                <h3 className="mt-4 font-display text-3xl font-medium sm:text-4xl">Secretaria Paroquial</h3>
                <p className="mt-4 font-display text-2xl italic">Quarta a sábado, das 9h às 11h</p>
                <p className="mt-3 text-sm leading-relaxed text-night/70">
                  Confissões, aconselhamento, agendamento de batizados e casamentos,
                  intenções de missa, dízimo e documentos paroquiais.
                </p>
              </div>
              <div className="flex items-start gap-3 border-t border-night/15 pt-6 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  <strong className="font-bold">Igreja Matriz</strong> — {PARISH.address}, {PARISH.city}/{PARISH.state}
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Devoções */}
        <div className="mt-20">
          <Reveal>
            <div className="flex items-center gap-3 text-goldlight">
              <Flame className="h-5 w-5" strokeWidth={1.8} />
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase">
                Devoções e encontros na matriz
              </span>
              <span className="h-px flex-1 bg-goldlight/25" />
            </div>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DEVOCOES.map((dev, i) => (
              <Reveal key={dev.titulo} delay={(i % 3) * 0.07}>
                <article className="group h-full rounded-3xl border border-cream/12 bg-cream/[0.03] p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/45 hover:bg-cream/[0.06]">
                  <h3 className="font-display text-2xl font-medium text-cream">{dev.titulo}</h3>
                  <p className="mt-2 text-[11px] font-bold tracking-[0.2em] text-goldlight uppercase">{dev.horario}</p>
                  <p className="mt-3 text-sm leading-relaxed text-cream/55">{dev.texto}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <p className="mt-12 text-center text-xs leading-relaxed tracking-[0.25em] text-cream/40 uppercase">
            Em dias de festa e na Semana Santa os horários podem mudar · confira a agenda paroquial
          </p>
        </Reveal>
      </div>
    </section>
  );
}
