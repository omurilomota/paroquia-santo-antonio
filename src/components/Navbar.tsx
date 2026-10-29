import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV_LINKS, PARISH } from "../data/content";
import { cn } from "../utils/cn";
import { CrossMark } from "./ui";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-ink/10 bg-cream/90 text-ink shadow-[0_8px_30px_-18px_rgba(36,24,17,0.4)] backdrop-blur-md"
            : "text-cream"
        )}
      >
        <div className="mx-auto flex h-16 max-w-[88rem] items-center justify-between px-5 sm:px-8 md:h-20">
          <a href="#inicio" className="group flex shrink-0 items-center gap-3">
            <CrossMark className="h-7 w-7 text-gold transition-transform duration-500 group-hover:rotate-90" />
            <span className="leading-tight">
              <span className="block font-display text-base font-semibold tracking-tight sm:text-lg">
                Santo Antônio do Vale
              </span>
              <span
                className={cn(
                  "block text-[10px] font-bold tracking-[0.28em] uppercase",
                  scrolled ? "text-gold" : "text-goldlight"
                )}
              >
                Paróquia · Santa Clara do Vale
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-3.5 xl:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-[11.5px] font-semibold tracking-wide opacity-80 transition-opacity hover:opacity-100"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href={PARISH.whatsapp}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "ml-2 rounded-full px-5 py-2.5 text-[11px] font-bold tracking-widest uppercase transition-all duration-300",
                scrolled
                  ? "bg-ink text-cream hover:bg-gold hover:text-night"
                  : "bg-gold text-night hover:bg-goldlight"
              )}
            >
              Intenções
            </a>
          </nav>

          <button
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-current/30 xl:hidden"
            aria-label="Abrir menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[70] flex flex-col overflow-y-auto bg-night text-cream"
          >
            <div className="flex h-16 shrink-0 items-center justify-between px-5 sm:px-8">
              <div className="flex items-center gap-3">
                <CrossMark className="h-7 w-7 text-gold" />
                <span className="font-display text-lg font-semibold">Santo Antônio do Vale</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/25"
                aria-label="Fechar menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-1 px-8 py-6">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 + i * 0.04, duration: 0.45 }}
                  className="group flex items-baseline gap-4 border-b border-cream/10 py-3.5"
                >
                  <span className="font-display text-sm text-gold italic">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-2xl font-medium transition-colors group-hover:text-goldlight sm:text-3xl">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </nav>
            <div className="shrink-0 px-8 pb-10 text-xs leading-relaxed tracking-widest text-cream/40 uppercase">
              {PARISH.address} · {PARISH.city}/SP
              <br />
              {PARISH.phones.join(" · ")}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
