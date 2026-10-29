import { AtSign, Mail, MessageCircle, Phone } from "lucide-react";
import { useMemo, useState } from "react";
import { CANAIS, GRUPOS, PARISH, canaisDoGrupo, linkCanal } from "../data/content";
import type { Canal } from "../data/content";
import { GrupoIcon, Reveal, SectionHeading, Tabs } from "./ui";

function FbIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21v-7h2.4l.4-2.8h-2.8V9.4c0-.8.2-1.3 1.4-1.3h1.5V5.6c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v1.9H8v2.8h2.5V21h3z" />
    </svg>
  );
}

const CANAL_ICONE: Record<Canal, React.ComponentType<{ className?: string }>> = {
  whatsapp: MessageCircle,
  instagram: AtSign,
  facebook: FbIcon,
  telefone: Phone,
  email: Mail,
};

const CANAIS_GERAIS: Canal[] = ["whatsapp", "instagram", "facebook", "telefone", "email"];

const CATEGORIAS = ["Pastorais", "Movimentos", "Serviços e Grupos"] as const;

export default function Movimentos() {
  const [categoria, setCategoria] = useState<string>("Todas");

  const tabs = useMemo(
    () => [
      { id: "Todas", label: "Todas", count: GRUPOS.length },
      ...CATEGORIAS.map((c) => ({ id: c, label: c, count: GRUPOS.filter((g) => g.categoria === c).length })),
    ],
    []
  );

  const lista = GRUPOS.filter((g) => categoria === "Todas" || g.categoria === categoria);

  return (
    <section id="movimentos" className="scroll-mt-20 bg-parchment py-14 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Pastorais e movimentos"
            title={<>Os grupos da paróquia</>}
            description="Cada grupo tem seu coordenador e seu dia de encontro. Para falar com qualquer um deles, use o botão do próprio cartão — a mensagem chega ao WhatsApp da secretaria, que encaminha ao grupo."
          />
          <Reveal delay={0.15}>
            <div className="space-y-4">
              <Tabs tabs={tabs} active={categoria} onChange={setCategoria} />
              <div className="flex flex-wrap gap-1.5">
                {CANAIS_GERAIS.map((canal) => {
                  const Icon = CANAL_ICONE[canal];
                  return (
                    <a
                      key={canal}
                      href={linkCanal(canal, "")}
                      target={canal === "telefone" || canal === "email" ? undefined : "_blank"}
                      rel="noreferrer"
                      title={CANAIS[canal].rotulo}
                      className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream px-4 py-2 text-[10px] font-bold tracking-[0.12em] text-cocoa uppercase transition-all hover:-translate-y-0.5 hover:border-gold hover:text-gold"
                    >
                      <Icon className="h-3.5 w-3.5" /> {CANAIS[canal].curto}
                    </a>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {lista.map((grupo, i) => (
            <Reveal key={grupo.nome} delay={(i % 3) * 0.06}>
              <article className="group flex h-full flex-col rounded-3xl border border-ink/10 bg-cream p-8 transition-all duration-500 hover:-translate-y-2 hover:border-gold/50 hover:shadow-[0_24px_50px_-24px_rgba(36,24,17,0.3)]">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-ink text-goldlight transition-colors duration-500 group-hover:bg-gold group-hover:text-night">
                    <GrupoIcon name={grupo.icon} className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-ink/5 px-3 py-1.5 text-[9px] font-bold tracking-[0.2em] text-cocoa uppercase">
                    {grupo.categoria}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl leading-snug font-medium text-ink">
                  {grupo.nome}
                  {grupo.sigla && <span className="ml-2 text-base text-gold italic">{grupo.sigla}</span>}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-cocoa">{grupo.texto}</p>
                <div className="mt-5 border-t border-ink/10 pt-4">
                  <p className="text-[10px] font-bold tracking-[0.2em] text-gold uppercase">{grupo.encontro}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {canaisDoGrupo(grupo.nome).map((canal) => {
                      const Icon = CANAL_ICONE[canal];
                      return (
                        <a
                          key={canal}
                          href={linkCanal(canal, grupo.nome)}
                          target={canal === "telefone" || canal === "email" ? undefined : "_blank"}
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-parchment px-3 py-1.5 text-[9px] font-bold tracking-[0.12em] text-cocoa uppercase transition-all hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-night"
                        >
                          <Icon className="h-3 w-3" /> {CANAIS[canal].curto}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12}>
          <div className="mt-14 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="/images/comunidade.jpg"
                alt="Mãos da comunidade reunidas em oração"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-night/92 via-night/70 to-night/25" />
              <div className="relative flex flex-col items-start gap-6 p-10 sm:p-12">
                <div className="max-w-xl">
                  <p className="text-[11px] font-bold tracking-[0.3em] text-goldlight uppercase">Quer servir?</p>
                  <p className="mt-3 font-display text-2xl leading-snug text-cream italic sm:text-3xl">
                    “Cada um recebeu um dom: coloquem-no a serviço uns dos outros.”
                  </p>
                  <p className="mt-2 text-xs font-bold tracking-[0.25em] text-cream/50 uppercase">1 Pedro 4, 10</p>
                </div>
                <a
                  href="#contato"
                  className="rounded-full bg-gold px-8 py-4 text-xs font-bold tracking-[0.2em] text-night uppercase transition-colors duration-300 hover:bg-goldlight"
                >
                  Fale com a secretaria
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-center rounded-3xl bg-ink p-10 text-cream">
              <p className="text-[11px] font-bold tracking-[0.3em] text-goldlight uppercase">
                Horários dos encontros
              </p>
              <p className="mt-4 text-sm leading-relaxed text-cream/65">
                Os grupos se reúnem na matriz, nas capelas e nas casas das famílias. Os
                horários podem mudar ao longo do ano — confirme sempre com o coordenador do
                grupo ou na secretaria paroquial, de quarta a sábado, das 9h às 11h.
              </p>
              <p className="mt-5 text-sm leading-relaxed text-cream/65">
                Quem coordena as pastorais e movimentos é o pároco, com o apoio do conselho
                paroquial de pastoral e das lideranças de cada comunidade.
              </p>
              <p className="mt-5 border-t border-cream/10 pt-5 text-sm leading-relaxed text-cream/65">
                <strong className="text-cream/85">Onde encontrar cada grupo:</strong> as
                pastorais não têm páginas próprias — quem publica os avisos e fotos de todas
                elas é a PASCOM, no Instagram{" "}
                <span className="text-goldlight">{PARISH.instagram}</span> (
                {PARISH.instagramSeguidores} seguidores, {PARISH.instagramPosts}) e no Facebook{" "}
                <span className="text-goldlight">{PARISH.facebookNome}</span> (
                {PARISH.facebookSeguidores} curtidas). Para falar direto com um coordenador,
                use o WhatsApp {PARISH.whatsappLabel} ou o fixo {PARISH.telefoneFixo}.
              </p>
              <p className="mt-6 font-display text-lg text-goldlight italic">
                “Onde dois ou três estiverem reunidos em meu nome…”
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
