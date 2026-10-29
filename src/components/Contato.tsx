import { useState } from "react";
import { AtSign, Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";

function FbGlyph({ className, strokeWidth: _strokeWidth }: { className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21v-7h2.4l.4-2.8h-2.8V9.4c0-.8.2-1.3 1.4-1.3h1.5V5.6c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v1.9H8v2.8h2.5V21h3z" />
    </svg>
  );
}
import { FAQ, PARISH } from "../data/content";
import { openExternal } from "./ExternalLinks";
import { Accordion, Reveal, SectionHeading } from "./ui";

const MAPS_URL =
  "https://www.openstreetmap.org/search?query=Santa%20Clara%20do%20Vale%20SP";

const CANAIS = [
  {
    icon: MapPin,
    titulo: "Igreja Matriz e secretaria",
    linha1: PARISH.address,
    linha2: PARISH.addressExtra,
    href: MAPS_URL,
  },
  {
    icon: Phone,
    titulo: "Telefones",
    linha1: `Fixo ${PARISH.telefoneFixo}`,
    linha2: `Celular e WhatsApp ${PARISH.phones[1]}`,
    href: `tel:+551735550102`,
  },
  {
    icon: Mail,
    titulo: "E-mail",
    linha1: PARISH.email,
    linha2: "Atendido pela secretaria paroquial",
    href: `mailto:${PARISH.email}`,
  },
  {
    icon: AtSign,
    titulo: "Instagram · administrado pela PASCOM",
    linha1: `${PARISH.instagram}`,
    linha2: `${PARISH.instagramSeguidores} seguidores · ${PARISH.instagramPosts}`,
    href: PARISH.instagramUrl,
  },
  {
    icon: FbGlyph,
    titulo: "Facebook",
    linha1: PARISH.facebookNome,
    linha2: `${PARISH.facebookSeguidores} curtidas · ${PARISH.facebookVisitas}`,
    href: PARISH.facebookUrl,
  },
];

const ASSUNTOS = [
  "Intenção de missa",
  "Batismo",
  "Casamento",
  "Catequese / crisma",
  "Confissão",
  "Dízimo",
  "Pastorais e movimentos",
  "Outro assunto",
];

export default function Contato() {
  const [form, setForm] = useState({ nome: "", telefone: "", assunto: ASSUNTOS[0], mensagem: "" });

  const enviar = (e: React.FormEvent) => {
    e.preventDefault();
    const texto = [
      `Olá! Falo com a Paróquia Santo Antônio de Santa Clara do Vale.`,
      ``,
      `Nome: ${form.nome || "—"}`,
      `Telefone: ${form.telefone || "—"}`,
      `Assunto: ${form.assunto}`,
      ``,
      `Mensagem: ${form.mensagem}`,
    ].join("\n");
    openExternal(`${PARISH.whatsapp}?text=${encodeURIComponent(texto)}`);
  };

  const campo =
    "mt-2 w-full rounded-2xl border border-cream/15 bg-cream/[0.05] px-5 py-3.5 text-sm text-cream placeholder:text-cream/35 focus:border-gold focus:outline-none";

  return (
    <section id="contato" className="relative scroll-mt-20 overflow-hidden bg-ink py-14 text-cream sm:py-24 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 -bottom-32 h-[32rem] w-[32rem] rounded-full bg-gold/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-12">
          <div>
              <SectionHeading
              eyebrow="Contato e visitação"
              dark
              title={<>Fale com a secretaria</>}
              description="Telefone, WhatsApp, e-mail e o endereço da secretaria paroquial. A mensagem do formulário vai direto para o WhatsApp da paróquia."
            />

            <div className="mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {CANAIS.map((canal, i) => (
                <Reveal key={canal.titulo} delay={0.05 + i * 0.06}>
                  <a
                    href={canal.href}
                    target={canal.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group flex gap-4 rounded-2xl p-2 -m-2 transition-colors hover:bg-cream/[0.05]"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 text-goldlight transition-colors group-hover:border-gold group-hover:bg-gold group-hover:text-night">
                      <canal.icon className="h-4.5 w-4.5" strokeWidth={1.8} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[10px] font-bold tracking-[0.25em] text-goldlight uppercase">
                        {canal.titulo}
                      </span>
                      <span className="mt-1.5 block text-sm font-semibold break-words group-hover:underline">
                        {canal.linha1}
                      </span>
                      <span className="block text-sm break-words text-cream/50">{canal.linha2}</span>
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.25}>
              <div className="mt-12 rounded-3xl border border-gold/30 bg-gold/[0.07] p-8">
                <div className="flex items-center gap-3 text-goldlight">
                  <Clock className="h-4.5 w-4.5" strokeWidth={1.8} />
                  <span className="text-[11px] font-bold tracking-[0.3em] uppercase">Atendimento</span>
                </div>
                <p className="mt-3 font-display text-2xl font-medium italic">{PARISH.atendimento}</p>
                <p className="mt-3 text-sm leading-relaxed text-cream/70">
                  Confissões, batizados, casamentos, crisma, dízimo, documentos paroquiais e
                  intenções de missa. Para urgências, ligue ou envie mensagem no WhatsApp.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={PARISH.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-full bg-gold px-7 py-3.5 text-[11px] font-bold tracking-[0.2em] text-night uppercase transition-colors hover:bg-goldlight"
                  >
                    <MessageCircle className="h-4 w-4" /> {PARISH.whatsappLabel}
                  </a>
                  <a
                    href={`mailto:${PARISH.email}`}
                    className="inline-flex items-center gap-2.5 rounded-full border border-cream/25 px-7 py-3.5 text-[11px] font-bold tracking-[0.2em] uppercase transition-colors hover:border-gold hover:text-gold"
                  >
                    <Mail className="h-4 w-4" /> Escrever e-mail
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 overflow-hidden rounded-3xl border border-cream/15 bg-cream/[0.04]">
                <div className="relative flex h-[300px] flex-col items-center justify-center gap-2 overflow-hidden p-8 text-center">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-[0.14]"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #b9882f 1px, transparent 1px), linear-gradient(to bottom, #b9882f 1px, transparent 1px)",
                      backgroundSize: "46px 46px",
                    }}
                  />
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <p className="relative mt-2 font-display text-xl">Igreja Matriz Santo Antônio do Vale</p>
                  <p className="relative text-sm text-cream/55">
                    {PARISH.address} · {PARISH.city}/{PARISH.state}
                  </p>
                  <p className="relative mt-4 rounded-full border border-cream/15 px-4 py-1.5 text-[10px] font-bold tracking-[0.18em] text-cream/40 uppercase">
                    Endereço fictício · mapa ilustrativo
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Formulário + FAQ */}
          <div>
            <Reveal delay={0.1}>
              <form
                onSubmit={enviar}
                className="rounded-3xl border border-cream/12 bg-cream/[0.03] p-8 sm:p-10"
              >
                <p className="text-[11px] font-bold tracking-[0.3em] text-goldlight uppercase">
                  Fale com a secretaria
                </p>
                <h3 className="mt-3 font-display text-3xl leading-tight font-medium">
                  Envie sua mensagem
                </h3>
                <p className="mt-2 text-sm text-cream/55">
                  Preencha e envie direto pelo WhatsApp da paróquia.
                </p>

                <div className="mt-7 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-[10px] font-bold tracking-[0.25em] text-cream/50 uppercase">Nome</span>
                      <input
                        required
                        value={form.nome}
                        onChange={(e) => setForm({ ...form, nome: e.target.value })}
                        placeholder="Seu nome"
                        className={campo}
                      />
                    </label>
                    <label className="block">
                      <span className="text-[10px] font-bold tracking-[0.25em] text-cream/50 uppercase">Telefone</span>
                      <input
                        value={form.telefone}
                        onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                        placeholder="(17) 90000-0000"
                        className={campo}
                      />
                    </label>
                  </div>
                  <label className="block">
                    <span className="text-[10px] font-bold tracking-[0.25em] text-cream/50 uppercase">Assunto</span>
                    <select
                      value={form.assunto}
                      onChange={(e) => setForm({ ...form, assunto: e.target.value })}
                      className={campo}
                    >
                      {ASSUNTOS.map((a) => (
                        <option key={a} value={a} className="bg-night text-cream">
                          {a}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="block">
                    <span className="text-[10px] font-bold tracking-[0.25em] text-cream/50 uppercase">Mensagem</span>
                    <textarea
                      required
                      rows={4}
                      value={form.mensagem}
                      onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                      placeholder="Como podemos ajudar?"
                      className={`${campo} resize-none`}
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-gold py-4 text-xs font-bold tracking-[0.2em] text-night uppercase transition-colors hover:bg-goldlight"
                >
                  <Send className="h-4 w-4" /> Enviar pelo WhatsApp
                </button>
              </form>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-10 rounded-3xl border border-cream/12 bg-cream/[0.03] p-8 sm:p-10">
                <p className="text-[11px] font-bold tracking-[0.3em] text-goldlight uppercase">
                  Perguntas frequentes
                </p>
                <div className="mt-4">
                  <Accordion dark items={FAQ} />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
