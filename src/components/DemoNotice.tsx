import { useEffect, useState } from "react";
import { X } from "lucide-react";

const CONTACT_SELECTOR = [
  'a[href^="tel:"]',
  'a[href^="mailto:"]',
  'a[href*="wa.me"]',
  'a[href*="api.whatsapp.com"]',
  'a[href*="instagram.com"]',
  'a[href*="facebook.com"]',
].join(",");

/**
 * Aviso de demonstração.
 *
 * O site apresenta uma paróquia fictícia. Para não sugerir uma instituição
 * real, todos os canais de contato são interceptados e explicados aqui.
 * Formulários disparam `demo:contact` no window.
 */
export default function DemoNotice() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const aoClicar = (event: MouseEvent) => {
      const alvo = event.target as HTMLElement | null;
      const link = alvo?.closest("a");
      if (link && link.matches(CONTACT_SELECTOR)) {
        event.preventDefault();
        setOpen(true);
      }
    };
    const aoContato = () => setOpen(true);
    const aoTeclar = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("click", aoClicar, true);
    window.addEventListener("demo:contact", aoContato);
    window.addEventListener("keydown", aoTeclar);
    return () => {
      document.removeEventListener("click", aoClicar, true);
      window.removeEventListener("demo:contact", aoContato);
      window.removeEventListener("keydown", aoTeclar);
    };
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[130] flex items-center justify-center bg-night/80 p-5 backdrop-blur-sm"
      onClick={() => setOpen(false)}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-title"
        className="relative w-full max-w-md rounded-3xl border border-gold/30 bg-night p-8 text-cream shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Fechar aviso"
          className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 text-cream/70 transition-colors hover:border-gold hover:text-gold"
        >
          <X className="h-4 w-4" />
        </button>
        <p className="text-[10px] font-bold tracking-[0.3em] text-goldlight uppercase">
          Demonstração
        </p>
        <h2 id="demo-title" className="mt-3 font-display text-3xl leading-tight font-medium">
          Esta paróquia é fictícia
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-cream/65">
          Nome, cidade, endereço, telefone, redes sociais e nomes do clero foram criados para
          esta peça de portfólio. Nenhuma mensagem será enviada e nenhum dado real de
          instituição ou pessoa é usado aqui.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-cream/65">
          O visual, a arquitetura de informação e os fluxos de agenda e contato são reais e
          podem ser adaptados para uma paróquia de verdade.
        </p>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="mt-6 rounded-full bg-gold px-6 py-3 text-[11px] font-bold tracking-[0.2em] text-night uppercase transition-colors hover:bg-goldlight"
        >
          Entendi
        </button>
      </div>
    </div>
  );
}
