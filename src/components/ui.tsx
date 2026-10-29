import { AnimatePresence, motion } from "framer-motion";
import {
  Baby, BookOpen, ChevronDown, Church, Crown, Droplet, Flame, HandHeart,
  Heart, HeartHandshake, Mail, MessageCircle, Minus, Music, Plus, Radio,
  Gem, ScrollText, Shield, Sparkles, Stethoscope, Users, X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { PARISH } from "../data/content";
import { cn } from "../utils/cn";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ---------------------------------- Ícones ---------------------------------- */

export const ICONS: Record<string, LucideIcon> = {
  radio: Radio,
  book: BookOpen,
  heartHandshake: HeartHandshake,
  music: Music,
  scroll: ScrollText,
  handHeart: HandHeart,
  baby: Baby,
  stethoscope: Stethoscope,
  church: Church,
  users: Users,
  sparkles: Sparkles,
  flame: Flame,
  heart: Heart,
  crown: Crown,
  droplet: Droplet,
  dove: Sparkles,
  rings: Gem,
  shield: Shield,
};

export function GrupoIcon({ name, className }: { name: string; className?: string }) {
  const Icon = ICONS[name] ?? Church;
  return <Icon className={className} strokeWidth={1.8} />;
}

/* ---------------------------------- Logo ---------------------------------- */

export function CrossMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path d="M16 3v26M7 11.5h18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M16 7.2l2.6 2.6-2.6 2.6-2.6-2.6z" fill="currentColor" />
    </svg>
  );
}

/* -------------------------------- Ornamentos -------------------------------- */

export function Diamond({ className }: { className?: string }) {
  return (
    <svg width="10" height="10" viewBox="0 0 14 14" className={className} aria-hidden="true">
      <path d="M7 0l7 7-7 7-7-7z" fill="currentColor" />
    </svg>
  );
}

export function Ornament({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3 text-gold", className)} aria-hidden="true">
      <span className="h-px w-10 bg-current opacity-60 sm:w-14" />
      <Diamond />
      <span className="h-px w-10 bg-current opacity-60 sm:w-14" />
    </div>
  );
}

/* ------------------------------ Scroll reveal ------------------------------ */

export function Reveal({
  children, delay = 0, y = 28, className,
}: {
  children: ReactNode; delay?: number; y?: number; className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* ----------------------------- Section heading ----------------------------- */

export function SectionHeading({
  eyebrow, title, description, dark = false, center = false,
}: {
  eyebrow: string; title: ReactNode; description?: string;
  dark?: boolean; center?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl", center && "mx-auto text-center")}>
      <Reveal>
        <div
          className={cn(
            "flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em]",
            center && "justify-center",
            dark ? "text-goldlight" : "text-gold"
          )}
        >
          <span className={cn("h-px w-8", dark ? "bg-goldlight/50" : "bg-gold/50")} />
          <span>{eyebrow}</span>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "mt-4 font-display text-[2.1rem] leading-[1.1] font-medium text-balance sm:mt-5 sm:text-4xl lg:text-5xl",
            dark ? "text-cream" : "text-ink"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "mt-4 max-w-xl text-[15px] leading-relaxed sm:mt-5 sm:text-base",
              dark ? "text-cream/60" : "text-cocoa",
              center && "mx-auto"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* --------------------------------- Abas ----------------------------------- */

export function Tabs({
  tabs, active, onChange, dark = false,
}: {
  tabs: { id: string; label: string; count?: number }[];
  active: string;
  onChange: (id: string) => void;
  dark?: boolean;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {tabs.map((t) => (
        <button
          key={t.id}
          onClick={() => onChange(t.id)}
          className={cn(
            "rounded-full border px-5 py-2.5 text-[11px] font-bold tracking-widest uppercase transition-all duration-300",
            active === t.id
              ? "border-transparent bg-gold text-night"
              : dark
                ? "border-cream/20 text-cream/60 hover:border-goldlight/60 hover:text-goldlight"
                : "border-ink/20 text-cocoa hover:border-gold hover:text-gold"
          )}
        >
          {t.label}
          {typeof t.count === "number" && <span className="ml-2 opacity-60">{t.count}</span>}
        </button>
      ))}
    </div>
  );
}

/* -------------------------------- Acordeão -------------------------------- */

export function Accordion({ items, dark = false }: { items: { pergunta: string; resposta: string }[]; dark?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className={cn("divide-y", dark ? "divide-cream/12" : "divide-ink/10")}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.pergunta}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="group flex w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span
                className={cn(
                  "font-display text-lg leading-snug font-medium transition-colors sm:text-xl",
                  dark ? "text-cream group-hover:text-goldlight" : "text-ink group-hover:text-gold"
                )}
              >
                {item.pergunta}
              </span>
              <span
                className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors",
                  dark ? "border-cream/25 text-cream" : "border-ink/20 text-ink",
                  isOpen && "border-gold bg-gold text-night"
                )}
              >
                {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="overflow-hidden"
                >
                  <p className={cn("max-w-2xl pr-10 pb-6 leading-relaxed", dark ? "text-cream/60" : "text-cocoa")}>
                    {item.resposta}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

/* -------------------------------- Lightbox -------------------------------- */

export function Lightbox({
  photos, index, onClose, onNavigate,
}: {
  photos: { src: string; titulo: string; legenda: string }[];
  index: number | null;
  onClose: () => void;
  onNavigate: (i: number) => void;
}) {
  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % photos.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, photos.length, onClose, onNavigate]);

  const foto = index !== null ? photos[index] : null;

  return (
    <AnimatePresence>
      {foto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex flex-col bg-night/95 backdrop-blur-md"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:border-gold hover:text-gold"
            aria-label="Fechar"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="flex flex-1 items-center justify-center overflow-hidden p-5 sm:p-10">
            <motion.img
              key={foto.src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: EASE }}
              src={foto.src}
              alt={foto.titulo}
              className="max-h-[75vh] max-w-full rounded-2xl object-contain shadow-2xl"
            />
          </div>
          <div className="flex flex-col items-center gap-3 px-6 pb-10 text-center">
            <p className="font-display text-2xl text-cream italic sm:text-3xl">{foto.titulo}</p>
            <p className="max-w-xl text-sm text-cream/55">{foto.legenda}</p>
            <div className="mt-3 flex items-center gap-4">
              <button
                onClick={() => onNavigate((index! - 1 + photos.length) % photos.length)}
                className="rounded-full border border-cream/25 px-5 py-2 text-[11px] font-bold tracking-widest text-cream uppercase transition-colors hover:border-gold hover:text-gold"
              >
                Anterior
              </button>
              <span className="text-xs tracking-widest text-cream/40">
                {index! + 1} / {photos.length}
              </span>
              <button
                onClick={() => onNavigate((index! + 1) % photos.length)}
                className="rounded-full border border-cream/25 px-5 py-2 text-[11px] font-bold tracking-widest text-cream uppercase transition-colors hover:border-gold hover:text-gold"
              >
                Próxima
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* --------------------------- Barra de contatos ---------------------------- */

export function ContactRow({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3 text-sm", className)}>
      <a
        href={PARISH.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-[11px] font-bold tracking-widest text-night uppercase transition-colors hover:bg-goldlight"
      >
        <MessageCircle className="h-4 w-4" /> WhatsApp
      </a>
      <a
        href={`mailto:${PARISH.email}`}
        className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-5 py-2.5 text-[11px] font-bold tracking-widest text-cream uppercase transition-colors hover:border-gold hover:text-gold"
      >
        <Mail className="h-4 w-4" /> E-mail
      </a>
    </div>
  );
}

/* -------------------------------- Chevron --------------------------------- */

export { ChevronDown };

/* --------------------------- WhatsApp flutuante ---------------------------- */

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={PARISH.whatsapp}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.4, duration: 0.5, ease: EASE }}
      className="group fixed right-5 bottom-5 z-50 flex items-center gap-3 rounded-full bg-gold py-3 pr-5 pl-4 text-night shadow-[0_12px_32px_-8px_rgba(185,136,47,0.7)] transition-colors duration-300 hover:bg-goldlight"
      aria-label="Falar com a paróquia pelo WhatsApp"
    >
      <MessageCircle className="h-5 w-5" strokeWidth={2.2} />
      <span className="hidden text-xs font-bold tracking-widest uppercase sm:inline">Fale conosco</span>
    </motion.a>
  );
}
