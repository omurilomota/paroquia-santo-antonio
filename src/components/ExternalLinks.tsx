import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy, ExternalLink, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

/**
 * Abertura robusta de links externos (WhatsApp, Instagram, Facebook, Maps...).
 *
 * Quando o site roda dentro de um iframe com "sandbox" (painéis de pré-visualização,
 * alguns navegadores embutidos de redes sociais), o navegador bloqueia em silêncio
 * `target="_blank"` e `window.open`. A estratégia, em ordem:
 *   1. nova aba;
 *   2. mesma janela (navegação do topo, depois do próprio frame);
 *   3. aviso na tela com o link para copiar ou tocar.
 */

const EVENTO = "paroquia:link-bloqueado";

const CONTATO_FICTICIO = /wa\.me|api\.whatsapp\.com|instagram\.com|facebook\.com|mailto:/i;

export function openExternal(url: string) {
  // Nenhum contato fictício deve sair do site: o aviso de demonstração explica.
  if (CONTATO_FICTICIO.test(url)) {
    window.dispatchEvent(new CustomEvent("demo:contact"));
    return;
  }

  let aberto: Window | null = null;
  try {
    aberto = window.open(url, "_blank");
  } catch {
    aberto = null;
  }
  if (aberto) {
    try {
      aberto.opener = null;
    } catch {
      /* ignora */
    }
    return;
  }

  // Plano B: navegar na própria janela
  let navegou = false;
  try {
    if (window.top && window.top !== window.self) {
      window.top.location.href = url;
      navegou = true;
    } else {
      window.location.href = url;
      navegou = true;
    }
  } catch {
    try {
      window.location.href = url;
      navegou = true;
    } catch {
      navegou = false;
    }
  }

  // Plano C: se ainda estamos aqui depois de um instante, a navegação foi barrada
  window.setTimeout(() => {
    if (document.visibilityState === "visible") {
      window.dispatchEvent(new CustomEvent(EVENTO, { detail: url }));
    }
  }, navegou ? 900 : 0);
}

/** Instala a interceptação global de cliques em links externos e mostra o aviso de fallback. */
export default function ExternalLinks() {
  const [url, setUrl] = useState<string | null>(null);
  const [copiado, setCopiado] = useState(false);
  const campo = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const aoClicar = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
      const a = (e.target as HTMLElement | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute("href") ?? "";
      if (!/^https?:\/\//i.test(href)) return; // âncoras internas, tel: e mailto: seguem o padrão
      e.preventDefault();
      openExternal(a.href);
    };
    const aoBloquear = (e: Event) => {
      setCopiado(false);
      setUrl((e as CustomEvent<string>).detail);
    };
    document.addEventListener("click", aoClicar);
    window.addEventListener(EVENTO, aoBloquear);
    return () => {
      document.removeEventListener("click", aoClicar);
      window.removeEventListener(EVENTO, aoBloquear);
    };
  }, []);

  const copiar = async () => {
    if (!url) return;
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      campo.current?.select();
      try {
        document.execCommand("copy");
      } catch {
        /* o usuário ainda pode copiar manualmente */
      }
    }
    setCopiado(true);
  };

  const rotulo = (() => {
    if (!url) return "";
    try {
      const u = new URL(url);
      return u.hostname.replace(/^www\./, "");
    } catch {
      return url;
    }
  })();

  return (
    <AnimatePresence>
      {url && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-x-4 bottom-4 z-[120] mx-auto max-w-lg rounded-2xl border border-gold/40 bg-night p-5 text-cream shadow-2xl"
          role="alert"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold tracking-[0.25em] text-goldlight uppercase">
                Link bloqueado por este navegador
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-cream/70">
                Não foi possível abrir <strong className="text-cream">{rotulo}</strong> daqui. Copie o
                endereço e cole no navegador, ou abra direto em outra aba.
              </p>
            </div>
            <button
              onClick={() => setUrl(null)}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cream/20 hover:border-gold hover:text-gold"
              aria-label="Fechar aviso"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <input
            ref={campo}
            readOnly
            value={url}
            onFocus={(e) => e.currentTarget.select()}
            className="mt-4 w-full rounded-xl border border-cream/15 bg-cream/[0.06] px-4 py-2.5 text-xs text-cream/80 focus:border-gold focus:outline-none"
          />

          <div className="mt-3 flex flex-wrap gap-2">
            <button
              onClick={copiar}
              className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-[10px] font-bold tracking-[0.15em] text-night uppercase hover:bg-goldlight"
            >
              {copiado ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              {copiado ? "Copiado" : "Copiar link"}
            </button>
            <a
              href={url}
              target="_top"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-5 py-2.5 text-[10px] font-bold tracking-[0.15em] uppercase hover:border-gold hover:text-gold"
            >
              <ExternalLink className="h-3.5 w-3.5" /> Tentar abrir
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
