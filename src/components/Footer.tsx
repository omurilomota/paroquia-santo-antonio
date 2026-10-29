import { AtSign, Clock, Mail, MapPin, Phone } from "lucide-react";
import { NAV_LINKS, PARISH } from "../data/content";
import { CrossMark, Diamond } from "./ui";

function FbGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21v-7h2.4l.4-2.8h-2.8V9.4c0-.8.2-1.3 1.4-1.3h1.5V5.6c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v1.9H8v2.8h2.5V21h3z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-night pt-14 text-cream/60 sm:pt-20">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="grid gap-12 border-b border-cream/10 pb-14 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <CrossMark className="h-9 w-9 text-gold" />
              <div className="leading-tight">
                <p className="font-display text-xl font-semibold text-cream">Santo Antônio do Vale</p>
                <p className="text-[10px] font-bold tracking-[0.3em] text-gold uppercase">
                  Paróquia · Santa Clara do Vale/SP
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed">
              Comunidade de fé da {PARISH.diocese}, {PARISH.region}. Criada em{" "}
              {PARISH.criacao}, a serviço do povo santaclarense da cidade e do campo.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs tracking-[0.2em] uppercase">
              <span className="flex items-center gap-2 text-cream/40">
                <Diamond className="h-2 w-2 text-gold" /> Cidade Verde
              </span>
              <span className="flex items-center gap-2 text-cream/40">
                <Diamond className="h-2 w-2 text-gold" /> Oeste Paulista
              </span>
              <span className="flex items-center gap-2 text-cream/40">
                <Diamond className="h-2 w-2 text-gold" /> Desde 1962
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={PARISH.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-5 py-2.5 text-[10px] font-bold tracking-[0.18em] uppercase transition-colors hover:border-gold hover:text-gold"
              >
                <AtSign className="h-3.5 w-3.5" /> {PARISH.instagram} · {PARISH.instagramSeguidores}
              </a>
              <a
                href={PARISH.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-5 py-2.5 text-[10px] font-bold tracking-[0.18em] uppercase transition-colors hover:border-gold hover:text-gold"
              >
                <FbGlyph className="h-3.5 w-3.5" /> Facebook · {PARISH.facebookSeguidores}
              </a>
              <a
                href={PARISH.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-5 py-2.5 text-[10px] font-bold tracking-[0.18em] uppercase transition-colors hover:border-gold hover:text-gold"
              >
                <Phone className="h-3.5 w-3.5" /> WhatsApp {PARISH.phones[1]}
              </a>
              <a
                href={`mailto:${PARISH.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-5 py-2.5 text-[10px] font-bold tracking-[0.18em] uppercase transition-colors hover:border-gold hover:text-gold"
              >
                <Mail className="h-3.5 w-3.5" /> {PARISH.email}
              </a>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-bold tracking-[0.3em] text-gold uppercase">Navegue</p>
            <ul className="mt-5 grid grid-cols-2 gap-3 text-sm md:grid-cols-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-goldlight">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-bold tracking-[0.3em] text-gold uppercase">
              Missas · Matriz
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Clock className="h-3.5 w-3.5 text-gold" /> Domingo · 7h · 9h · 9h30 · 19h
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="h-3.5 w-3.5 text-gold" /> Terça a sexta · 7h
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="h-3.5 w-3.5 text-gold" /> Quarta · 7h e 19h30
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="h-3.5 w-3.5 text-gold" /> Sábado · 19h30
              </li>
              <li className="flex items-center gap-2.5 border-t border-cream/10 pt-3">
                <Clock className="h-3.5 w-3.5 text-gold" /> Secretaria: qua a sáb, 9h–11h
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 py-8 text-xs tracking-wider sm:flex-row">
          <p className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-gold" /> {PARISH.address} · {PARISH.addressExtra}
          </p>
          <p className="flex items-center gap-4">
            <a href={`tel:${PARISH.phones[1].replace(/\D/g, "")}`} className="flex items-center gap-2 transition-colors hover:text-goldlight">
              <Phone className="h-3.5 w-3.5 text-gold" /> {PARISH.phones[1]}
            </a>
            <span>{PARISH.email}</span>
          </p>
        </div>

        <div className="border-t border-cream/10 py-6 text-center text-[11px] leading-relaxed tracking-[0.2em] text-cream/35 uppercase">
          © {new Date().getFullYear()} {PARISH.name} · {PARISH.diocese} · Comunicação: PASCOM
          <span className="mt-2 block text-cream/25">
            Site conceito de portfólio · paróquia, clero e contatos fictícios
          </span>
        </div>
      </div>
    </footer>
  );
}
