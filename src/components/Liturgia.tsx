import { CalendarDays } from "lucide-react";
import { useState } from "react";
import { CORES, diaLiturgico, formatarData } from "../data/liturgia";
import { cn } from "../utils/cn";
import { Ornament, Reveal } from "./ui";

const DIAS_LONGO = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

export default function Liturgia() {
  const hoje = new Date();
  const [data, setData] = useState(hoje);
  const lit = diaLiturgico(data);
  const cor = CORES[lit.cor];

  const mudar = (n: number) => {
    const d = new Date(data.getFullYear(), data.getMonth(), data.getDate() + n);
    setData(d);
  };

  return (
    <section id="liturgia" className="relative scroll-mt-20 overflow-hidden bg-parchment py-14 sm:py-24 lg:py-28">
      <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Coluna esquerda: cabeçalho + oração do dia */}
          <div>
            <Reveal>
              <div className="flex items-center gap-3 text-[11px] font-bold tracking-[0.3em] text-gold uppercase">
                <span className="h-px w-8 bg-gold/50" />
                <span>Ano litúrgico</span>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display text-[2.1rem] leading-[1.1] font-medium text-balance sm:mt-5 sm:text-4xl lg:text-5xl">
                Liturgia de hoje
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-cocoa sm:mt-5 sm:text-base">
                Tempo, cor e santo de cada dia da paróquia. Use as setas do cartão ao lado
                para consultar qualquer data e se preparar para a missa.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 rounded-2xl border border-ink/10 bg-cream p-6">
                <p className="text-[10px] font-bold tracking-[0.25em] text-gold uppercase">
                  As cores da missa
                </p>
                <ul className="mt-4 grid gap-x-6 gap-y-2.5 text-sm text-cocoa sm:grid-cols-2">
                  {[
                    { hex: "#6a4a8f", nome: "Roxo", uso: "Advento e Quaresma — conversão" },
                    { hex: "#3f7a4f", nome: "Verde", uso: "Tempo comum — crescimento na fé" },
                    { hex: "#e8e2d4", nome: "Branco", uso: "Natal, Páscoa e solenidades do Senhor" },
                    { hex: "#a32b28", nome: "Vermelho", uso: "Ramos, Pentecostes e mártires" },
                    { hex: "#c98ba0", nome: "Rosa", uso: "3º domingo de Advento e de Quaresma" },
                    { hex: "#c9a13b", nome: "Dourado", uso: "Festas solenes, como a do padroeiro" },
                  ].map((c) => (
                    <li key={c.nome} className="flex items-center gap-2.5">
                      <span className="h-3.5 w-3.5 shrink-0 rounded-full border border-ink/15" style={{ backgroundColor: c.hex }} />
                      <span>
                        <strong className="font-semibold text-ink">{c.nome}</strong> · {c.uso}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Cartão da liturgia */}
          <Reveal delay={0.12}>
            <div className="overflow-hidden rounded-[2rem] bg-night text-cream shadow-[0_40px_80px_-40px_rgba(21,13,7,0.6)]">
              <div className="flex items-center justify-between border-b border-cream/10 px-7 py-5">
                <button
                  onClick={() => mudar(-1)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 text-sm transition-colors hover:border-gold hover:text-gold"
                  aria-label="Dia anterior"
                >
                  ‹
                </button>
                <div className="text-center">
                  <p className="text-[10px] font-bold tracking-[0.3em] text-goldlight uppercase">
                    {DIAS_LONGO[data.getDay()]}
                  </p>
                  <p className="font-display text-xl font-medium">{formatarData(data)}</p>
                </div>
                <button
                  onClick={() => mudar(1)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 text-sm transition-colors hover:border-gold hover:text-gold"
                  aria-label="Próximo dia"
                >
                  ›
                </button>
              </div>

              <div className="p-7 sm:p-9">
                <div className="flex items-center gap-4">
                  <span
                    className="h-14 w-14 shrink-0 rounded-2xl border border-cream/15 shadow-inner"
                    style={{ backgroundColor: cor.hex }}
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.3em] text-goldlight uppercase">Cor litúrgica</p>
                    <p className="font-display text-2xl font-medium">{cor.nome}</p>
                    <p className="text-xs text-cream/45">Tempo: {lit.tempo}</p>
                  </div>
                </div>

                <p className="mt-7 leading-relaxed text-cream/70">{lit.descricao}</p>
                {lit.semana && (
                  <p className="mt-2 text-xs font-bold tracking-[0.25em] text-gold uppercase">{lit.semana}</p>
                )}

                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-cream/[0.05] p-5">
                    <p className="text-[10px] font-bold tracking-[0.25em] text-cream/40 uppercase">Ano litúrgico</p>
                    <p className="mt-1 font-display text-4xl font-semibold text-goldlight italic">Ano {lit.ano}</p>
                    <p className="mt-1 text-[11px] text-cream/40">
                      {lit.ano === "A" ? "Evangelho de Mateus" : lit.ano === "B" ? "Evangelho de Marcos" : "Evangelho de Lucas"}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-cream/[0.05] p-5">
                    <p className="text-[10px] font-bold tracking-[0.25em] text-cream/40 uppercase">Ciclo ferial</p>
                    <p className="mt-1 font-display text-4xl font-semibold text-goldlight italic">{lit.ciclo}</p>
                    <p className="mt-1 text-[11px] text-cream/40">Leituras dos dias de semana</p>
                  </div>
                </div>

                {lit.santo && (
                  <div className="mt-4 rounded-2xl border border-gold/30 bg-gold/[0.08] p-6">
                    <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] text-goldlight uppercase">
                      <CalendarDays className="h-4 w-4" /> Santo do dia
                    </div>
                    <p className="mt-3 font-display text-2xl leading-snug font-medium text-balance">{lit.santo.nome}</p>
                    {lit.santo.nota && (
                      <p className={cn("mt-2 text-sm", lit.santo.nota.includes("Padroeiro") ? "font-semibold text-goldlight" : "text-cream/55")}>
                        {lit.santo.nota}
                      </p>
                    )}
                  </div>
                )}

                <Ornament className="mt-8 justify-center" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
