import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { useMemo, useState } from "react";
import { CORES, DIAS_SEMANA, MESES, diaLiturgico, eventosDoDia, sameDay } from "../data/liturgia";
import type { EventoAgenda } from "../data/liturgia";
import { cn } from "../utils/cn";
import { Reveal, SectionHeading } from "./ui";

const TIPO_ESTILO: Record<string, string> = {
  Missa: "bg-gold text-night",
  Capela: "bg-bordeaux text-cream",
  Festa: "bg-goldlight text-night",
  Devoção: "bg-cream/12 text-cream",
  Comunidade: "bg-cream/12 text-cream",
  Sacramento: "bg-gold/25 text-goldlight",
  "Igreja no Brasil": "bg-gold/25 text-goldlight",
};

/** Tipos que merecem destaque na lista do mês (o resto é rotina semanal). */
const DESTAQUE = new Set(["Festa", "Capela", "Sacramento", "Igreja no Brasil", "Comunidade", "Devoção"]);

function EventoItem({ e }: { e: EventoAgenda }) {
  return (
    <li className="rounded-2xl bg-cream/[0.04] p-4">
      <div className="flex items-start justify-between gap-3">
        <p className="font-display text-lg leading-snug font-medium">{e.titulo}</p>
        <span
          className={cn(
            "shrink-0 rounded-full px-2.5 py-1 text-[9px] font-bold tracking-[0.12em] whitespace-nowrap uppercase",
            TIPO_ESTILO[e.tipo] ?? "bg-cream/12 text-cream"
          )}
        >
          {e.tipo}
        </span>
      </div>
      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-cream/50">
        <MapPin className="h-3.5 w-3.5 shrink-0 text-gold/70" /> {e.local}
      </p>
      {e.hora !== "—" && (
        <p className="mt-1 text-xs font-bold tracking-wider text-goldlight">{e.hora}</p>
      )}
    </li>
  );
}

export default function Agenda() {
  const hoje = new Date();
  const [mes, setMes] = useState(hoje.getMonth());
  const [ano, setAno] = useState(hoje.getFullYear());
  const [sel, setSel] = useState<Date>(hoje);

  const navegar = (delta: number) => {
    let m = mes + delta;
    let a = ano;
    if (m < 0) { m = 11; a--; }
    if (m > 11) { m = 0; a++; }
    setMes(m);
    setAno(a);
    setSel(new Date(a, m, 1));
  };

  const grade = useMemo(() => {
    const primeiroDia = new Date(ano, mes, 1).getDay();
    const dias = new Date(ano, mes + 1, 0).getDate();
    const celulas: (Date | null)[] = Array.from({ length: primeiroDia }, () => null);
    for (let d = 1; d <= dias; d++) celulas.push(new Date(ano, mes, d));
    while (celulas.length % 7 !== 0) celulas.push(null);
    return celulas;
  }, [mes, ano]);

  const destaques = useMemo(() => {
    const total = new Date(ano, mes + 1, 0).getDate();
    const lista: { dia: Date; eventos: EventoAgenda[] }[] = [];
    for (let d = 1; d <= total; d++) {
      const data = new Date(ano, mes, d);
      const evs = eventosDoDia(data).filter((e) => DESTAQUE.has(e.tipo));
      if (evs.length) lista.push({ dia: data, eventos: evs });
    }
    return lista;
  }, [mes, ano]);

  const eventosSel = eventosDoDia(sel);
  const litSel = diaLiturgico(sel);
  const corSel = CORES[litSel.cor];

  return (
    <section id="agenda" className="scroll-mt-20 bg-cream py-14 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Agenda paroquial"
          title={<>Agenda do mês</>}
          description="Missas da matriz, celebrações das dez capelas, trezena, festas dos padroeiros, sacramentos comunitários e os dias da Igreja no Brasil. Toque em um dia para ver a programação completa."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
          {/* Coluna esquerda: calendário + destaques */}
          <div className="space-y-6">
            <Reveal>
              <div className="rounded-3xl border border-ink/10 bg-parchment p-5 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <button
                    onClick={() => navegar(-1)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 transition-colors hover:border-gold hover:text-gold"
                    aria-label="Mês anterior"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <div className="text-center">
                    <p className="font-display text-2xl font-medium text-ink sm:text-3xl">
                      {MESES[mes]} <span className="text-gold italic">{ano}</span>
                    </p>
                    <button
                      onClick={() => { setMes(hoje.getMonth()); setAno(hoje.getFullYear()); setSel(hoje); }}
                      className="text-[10px] font-bold tracking-[0.25em] text-cocoa/70 uppercase transition-colors hover:text-gold"
                    >
                      Voltar para hoje
                    </button>
                  </div>
                  <button
                    onClick={() => navegar(1)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 transition-colors hover:border-gold hover:text-gold"
                    aria-label="Próximo mês"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-6 grid grid-cols-7 gap-1 text-center sm:mt-7">
                  {DIAS_SEMANA.map((d) => (
                    <span key={d} className="pb-2 text-[9px] font-bold tracking-[0.15em] text-cocoa/60 uppercase sm:text-[10px]">
                      {d}
                    </span>
                  ))}
                  {grade.map((dia, i) => {
                    if (!dia) return <span key={`vazio-${i}`} />;
                    const evs = eventosDoDia(dia);
                    const destaque = evs.some((e) => DESTAQUE.has(e.tipo));
                    const isHoje = sameDay(dia, hoje);
                    const isSel = sameDay(dia, sel);
                    const lit = diaLiturgico(dia);
                    return (
                      <button
                        key={dia.toISOString()}
                        onClick={() => setSel(dia)}
                        className={cn(
                          "group relative flex aspect-square flex-col items-center justify-center rounded-xl text-sm transition-all duration-200",
                          isSel ? "bg-ink text-cream" : isHoje ? "bg-gold/20 text-ink" : "text-ink hover:bg-ink/5",
                          destaque && !isSel && "bg-gold/10 hover:bg-gold/20"
                        )}
                      >
                        <span className="font-semibold tabular-nums">{dia.getDate()}</span>
                        {evs.length > 0 && (
                          <span className="absolute bottom-1.5 flex gap-0.5">
                            {evs.slice(0, 3).map((e, j) => (
                              <span
                                key={j}
                                className={cn(
                                  "h-1 w-1 rounded-full",
                                  e.tipo === "Capela" ? "bg-bordeaux" : e.tipo === "Festa" ? "bg-gold" : "bg-gold/60",
                                  isSel && "bg-cream"
                                )}
                              />
                            ))}
                          </span>
                        )}
                        <span
                          className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full opacity-75"
                          style={{ backgroundColor: CORES[lit.cor].hex }}
                          title={lit.tempo}
                        />
                      </button>
                    );
                  })}
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-ink/10 pt-4 text-[9px] font-bold tracking-[0.12em] text-cocoa/70 uppercase sm:text-[10px]">
                  <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-gold/20 ring-1 ring-gold/50" /> dia com festa ou evento</span>
                  <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-bordeaux" /> capela filial</span>
                  <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-[#6a4a8f]" /> roxo</span>
                  <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-[#3f7a4f]" /> verde</span>
                  <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-[#a32b28]" /> vermelho</span>
                  <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-[#c9a13b]" /> dourado</span>
                </div>
              </div>
            </Reveal>

            {/* Destaques do mês */}
            <Reveal delay={0.08}>
              <div className="rounded-3xl bg-ink p-6 text-cream sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <p className="text-[11px] font-bold tracking-[0.25em] text-goldlight uppercase">
                    Destaques de {MESES[mes].toLowerCase()}
                  </p>
                  <span className="text-[10px] tracking-[0.15em] text-cream/40 uppercase">
                    {destaques.length} dias com programação especial
                  </span>
                </div>
                <div className="mt-5 space-y-5">
                  {destaques.map(({ dia, eventos }) => (
                    <div key={dia.toISOString()} className="flex gap-4">
                      <button
                        onClick={() => setSel(dia)}
                        className={cn(
                          "flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-2xl border transition-colors",
                          sameDay(dia, sel)
                            ? "border-gold bg-gold text-night"
                            : "border-cream/15 text-cream hover:border-gold/60"
                        )}
                      >
                        <span className="font-display text-xl leading-none font-semibold tabular-nums">{dia.getDate()}</span>
                        <span className="text-[9px] font-bold tracking-[0.15em] uppercase">{DIAS_SEMANA[dia.getDay()]}</span>
                      </button>
                      <ul className="flex-1 space-y-2">
                        {eventos.map((e, j) => (
                          <li key={j}>
                            <p className="font-display text-base leading-snug font-medium text-cream">{e.titulo}</p>
                            <p className="text-xs text-cream/50">
                              {e.hora !== "—" && <span className="font-semibold text-goldlight">{e.hora} · </span>}
                              {e.local}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  {destaques.length === 0 && (
                    <p className="text-sm text-cream/50">
                      Neste mês a programação segue a rotina semanal da matriz e das capelas.
                    </p>
                  )}
                </div>
                <p className="mt-6 border-t border-cream/10 pt-5 text-[10px] leading-relaxed tracking-[0.12em] text-cream/35 uppercase">
                  Datas confirmadas pela PASCOM nas redes oficiais · batizados, crisma e encontro
                  de noivos dependem de agendamento na secretaria
                </p>
              </div>
            </Reveal>
          </div>

          {/* Coluna direita: dia selecionado */}
          <Reveal delay={0.12}>
            <div className="flex h-full flex-col rounded-3xl bg-night p-6 text-cream sm:p-8 lg:sticky lg:top-28 lg:self-start">
              <p className="text-[10px] font-bold tracking-[0.3em] text-goldlight uppercase">
                {sameDay(sel, hoje) ? "Hoje" : "Dia selecionado"}
              </p>
              <p className="mt-2 font-display text-3xl leading-tight font-medium">
                {sel.getDate()} de {MESES[sel.getMonth()].toLowerCase()}
              </p>

              <div className="mt-4 flex items-center gap-3 rounded-2xl bg-cream/[0.05] p-4">
                <span className="h-9 w-9 shrink-0 rounded-lg border border-cream/15" style={{ backgroundColor: corSel.hex }} />
                <div>
                  <p className="text-sm font-semibold">{litSel.tempo}</p>
                  <p className="text-xs text-cream/50">Cor {corSel.nome.toLowerCase()} · Ano {litSel.ano} · Ciclo {litSel.ciclo}</p>
                </div>
              </div>

              {litSel.santo && (
                <div className="mt-3 rounded-2xl border border-gold/30 bg-gold/[0.08] p-4">
                  <p className="text-[10px] font-bold tracking-[0.25em] text-goldlight uppercase">Santo do dia</p>
                  <p className="mt-1.5 font-display text-lg leading-snug font-medium">{litSel.santo.nome}</p>
                  {litSel.santo.nota && <p className="mt-1 text-xs text-cream/60">{litSel.santo.nota}</p>}
                </div>
              )}

              <p className="mt-6 text-[10px] font-bold tracking-[0.3em] text-goldlight uppercase">Programação</p>
              <ul className="mt-3 flex-1 space-y-3">
                {eventosSel.length ? (
                  eventosSel.map((e, i) => <EventoItem key={i} e={e} />)
                ) : (
                  <li className="rounded-2xl bg-cream/[0.04] p-4 text-sm text-cream/50">
                    Sem programação neste dia. Consulte os horários fixos da matriz.
                  </li>
                )}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
