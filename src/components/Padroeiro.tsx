import { BookOpen, CalendarHeart, Flame, Share2 } from "lucide-react";
import { ORACAO_PAO, ORACAO_SANTO_ANTONIO, PARISH, SEMANA_SANTA } from "../data/content";
import { openExternal } from "./ExternalLinks";
import { Ornament, Reveal } from "./ui";

const STATS = [
  { valor: "29 mai", legenda: "abertura da Trezena, na matriz, às 19h30" },
  { valor: "12 jun", legenda: "última noite da Trezena, com quermesse" },
  { valor: "13 jun", legenda: "festa do padroeiro, missa solene e carreata" },
  { valor: "1948", legenda: "ano da primeira cruz erguida em sua honra" },
];

export default function Padroeiro() {
  const compartilharOracao = () => {
    const texto = `${ORACAO_SANTO_ANTONIO.titulo}\n\n${ORACAO_SANTO_ANTONIO.texto}\n\n— ${PARISH.name}, ${PARISH.city}/${PARISH.state}`;
    openExternal(`https://wa.me/?text=${encodeURIComponent(texto)}`);
  };

  return (
    <section id="padroeiro" className="relative scroll-mt-20 overflow-hidden bg-night py-14 text-cream sm:py-24 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute top-0 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-gold/10 blur-[140px]" />

      <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Imagem em arco */}
          <Reveal>
            <div className="relative mx-auto max-w-md">
              <div className="rounded-t-[999px] rounded-b-[2rem] border border-gold/40 p-3 sm:p-4">
                <div className="overflow-hidden rounded-t-[999px] rounded-b-[1.6rem]">
                  <img
                    src="/images/santo-antonio.jpg"
                    alt="Imagem de Santo Antônio do Vale com o Menino Jesus e lírios"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-gold px-6 py-2.5 text-[11px] font-bold tracking-[0.25em] whitespace-nowrap text-night uppercase shadow-lg">
                Rogai por nós
              </div>

              <div className="mt-12 rounded-3xl border border-cream/12 bg-cream/[0.04] p-8">
                <div className="flex items-center gap-2.5 text-goldlight">
                  <CalendarHeart className="h-4.5 w-4.5" strokeWidth={1.8} />
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Semana Santa</span>
                </div>
                <ul className="mt-5 space-y-4">
                  {SEMANA_SANTA.map((d) => (
                    <li key={d.dia} className="border-l-2 border-gold/40 pl-4">
                      <p className="font-display text-lg font-medium text-cream">{d.dia}</p>
                      <p className="text-sm leading-relaxed text-cream/55">{d.texto}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 rounded-3xl border border-cream/12 bg-cream/[0.04] p-8">
                <div className="flex items-center gap-2.5 text-goldlight">
                  <Flame className="h-4.5 w-4.5" strokeWidth={1.8} />
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase">A Trezena, dia a dia</span>
                </div>
                <ul className="mt-5 space-y-4">
                  <li className="border-l-2 border-gold/40 pl-4">
                    <p className="font-display text-lg font-medium text-cream">29 de maio a 12 de junho</p>
                    <p className="text-sm leading-relaxed text-cream/55">
                      Missa e novena às 19h30 na matriz, com pregadores convidados e a
                      participação das dez comunidades.
                    </p>
                  </li>
                  <li className="border-l-2 border-gold/40 pl-4">
                    <p className="font-display text-lg font-medium text-cream">Bênção do pão</p>
                    <p className="text-sm leading-relaxed text-cream/55">
                      A cada dia da trezena, os fiéis levam o pão para a bênção, tradição
                      herdada dos imigrantes.
                    </p>
                  </li>
                  <li className="border-l-2 border-gold/40 pl-4">
                    <p className="font-display text-lg font-medium text-cream">13 de junho</p>
                    <p className="text-sm leading-relaxed text-cream/55">
                      Missa solene, encerramento da trezena e carreata com a imagem pelas
                      ruas da cidade — o aniversário de Santa Clara do Vale.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Texto */}
          <div>
            <Reveal>
              <div className="flex items-center gap-3 text-[11px] font-bold tracking-[0.3em] text-goldlight uppercase">
                <span className="h-px w-8 bg-goldlight/50" />
                O Padroeiro
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display text-[2.1rem] leading-[1.1] font-medium text-balance sm:mt-5 sm:text-4xl lg:text-5xl">
                Santo Antônio do Vale
              </h2>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-cream/60 sm:mt-5 sm:text-base">
                Nasceu em Lisboa por volta de 1195, viveu em Assis ao lado de São Francisco e
                é lembrado como pregador e amigo dos pobres. Em Santa Clara do Vale, a festa do
                santo é a festa da cidade.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl leading-relaxed text-cream/65">
                Fernando Martins de Bulhões nasceu em Lisboa por volta de 1195, tornou-se
                cônego agostiniano e, ao conhecer os frades franciscanos mártires de Marrocos,
                trocou de hábito e de nome: Antônio. Morou em Assis, ao lado de São Francisco,
                e se tornou o pregador mais ouvido da Europa medieval — eloquente, pobre e
                próximo do povo. Foi declarado Doutor da Igreja com o título de{" "}
                <em className="text-cream/85">Doctor Evangelicus</em>, o doutor evangélico.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 max-w-xl leading-relaxed text-cream/65">
                É representado com o <strong className="text-cream">Menino Jesus nos braços</strong>,
                os <strong className="text-cream">lírios da pureza</strong> e o livro da Palavra.
                Sua devoção chegou a Santa Clara do Vale antes da própria cidade: na cruz de
                madeira de 13 de junho de 1948 — data que também se tornou o aniversário do município.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-4">
              {STATS.map((stat, i) => (
                <Reveal key={stat.valor} delay={0.1 + i * 0.06}>
                  <div className="h-full rounded-2xl border border-cream/12 bg-cream/[0.04] p-5 transition-colors duration-500 hover:border-gold/40">
                    <p className="font-display text-2xl font-semibold text-goldlight sm:text-3xl">{stat.valor}</p>
                    <p className="mt-2 text-[11px] leading-relaxed text-cream/55">{stat.legenda}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Oração */}
            <Reveal delay={0.24}>
              <div className="mt-10 rounded-3xl border border-gold/30 bg-gold/[0.07] p-8 sm:p-10">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2.5 text-goldlight">
                    <BookOpen className="h-4.5 w-4.5" strokeWidth={1.8} />
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase">{ORACAO_SANTO_ANTONIO.titulo}</span>
                  </div>
                  <button
                    onClick={compartilharOracao}
                    className="flex items-center gap-2 rounded-full border border-cream/25 px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-cream/70 uppercase transition-colors hover:border-gold hover:text-gold"
                  >
                    <Share2 className="h-3.5 w-3.5" /> Enviar
                  </button>
                </div>
                <p className="mt-5 font-display text-lg leading-relaxed text-cream/85 italic sm:text-xl">
                  “{ORACAO_SANTO_ANTONIO.texto}”
                </p>
                <p className="mt-4 text-xs font-bold tracking-[0.25em] text-goldlight uppercase">
                  {ORACAO_SANTO_ANTONIO.final}
                </p>
                <Ornament className="mt-8" />
                <p className="mt-6 text-sm leading-relaxed text-cream/60">
                  <Flame className="mr-2 -mt-1 inline h-4 w-4 text-gold" />
                  <strong className="text-cream/85">{ORACAO_PAO.titulo}:</strong> {ORACAO_PAO.texto}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
