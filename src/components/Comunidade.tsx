import { AnimatePresence, motion } from "framer-motion";
import { Check, Flame, HandHeart, Megaphone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { AVISOS } from "../data/content";
import { Reveal, SectionHeading } from "./ui";

/* --------------------------------- Tipos --------------------------------- */

type Vela = { id: string; nome: string; intencao: string; quando: string };
type Pedido = { id: string; nome: string; texto: string; amem: number; quando: string };

function useLocal<T>(key: string, inicial: T) {
  const [valor, setValor] = useState<T>(() => {
    try {
      const bruto = localStorage.getItem(key);
      return bruto ? (JSON.parse(bruto) as T) : inicial;
    } catch {
      return inicial;
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(valor));
    } catch {
      /* armazenamento indisponível */
    }
  }, [key, valor]);
  return [valor, setValor] as const;
}

const VELAS_INICIAIS: Vela[] = [
  { id: "v1", nome: "Família Nogueira", intencao: "Pela saúde do Sr. Antônio", quando: "hoje" },
  { id: "v2", nome: "Comunidade da Vila São João", intencao: "Pela festa de São João", quando: "hoje" },
  { id: "v3", nome: "Ana Clara", intencao: "Em ação de graças", quando: "ontem" },
  { id: "v4", nome: "Pastoral da Saúde", intencao: "Pelos doentes da cidade", quando: "ontem" },
  { id: "v5", nome: "Jovens da PJ", intencao: "Pelas vocações", quando: "há 2 dias" },
  { id: "v6", nome: "Dizimistas", intencao: "Pela paróquia e pelo pároco", quando: "há 3 dias" },
];

const PEDIDOS_INICIAIS: Pedido[] = [
  { id: "p1", nome: "Maria Aparecida", texto: "Minha mãe está internada em Dracena. Peço que rezem por ela e pela equipe que cuida dela. Que Nossa Senhora a cubra com o manto.", amem: 12, quando: "hoje" },
  { id: "p2", nome: "Família Pereira", texto: "Ação de graças pelos 50 anos de casamento, celebrados na matriz no último sábado. Obrigado a todos que participaram.", amem: 21, quando: "ontem" },
  { id: "p3", nome: "Anônimo", texto: "Pelo emprego do meu marido e pela paz dentro da nossa casa.", amem: 8, quando: "há 2 dias" },
];

/* ---------------------------------- Vela ---------------------------------- */

function VelaAcesa({ nome, intencao, nova = false }: { nome: string; intencao: string; nova?: boolean }) {
  return (
    <motion.div
      layout
      initial={nova ? { opacity: 0, y: 10, scale: 0.9 } : false}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center rounded-2xl bg-night/40 p-4 text-center ring-1 ring-gold/15"
    >
      {/* vela */}
      <div className="relative flex h-16 w-6 flex-col items-center justify-end">
        <span className="flame absolute -top-1 h-5 w-3 rounded-full bg-gradient-to-t from-gold via-goldlight to-cream shadow-[0_0_16px_4px_rgba(221,175,99,0.55)]" />
        <span className="absolute top-3 h-2 w-px bg-cocoa" />
        <span className="h-11 w-5 rounded-t-sm rounded-b-md bg-gradient-to-b from-parchment to-parchment/70 shadow-inner" />
      </div>
      <p className="mt-3 text-[10px] font-bold tracking-[0.15em] text-cream/80 uppercase">{nome}</p>
      <p className="mt-1 text-[11px] leading-snug text-cream/50">{intencao}</p>
    </motion.div>
  );
}

/* -------------------------------- Componente ------------------------------- */

export default function Comunidade() {
  const [velas, setVelas] = useLocal<Vela[]>("psj-velas", VELAS_INICIAIS);
  const [pedidos, setPedidos] = useLocal<Pedido[]>("psj-pedidos", PEDIDOS_INICIAIS);
  // Pedidos em que este visitante já disse Amém (um por pessoa, guardado no aparelho)
  const [rezados, setRezados] = useLocal<string[]>("psj-amem", []);

  const [modal, setModal] = useState<"vela" | "pedido" | null>(null);
  const [nome, setNome] = useState("");
  const [texto, setTexto] = useState("");

  const abrir = (tipo: "vela" | "pedido") => {
    setNome("");
    setTexto("");
    setModal(tipo);
  };

  const salvar = () => {
    if (!texto.trim()) return;
    const item = { id: `${Date.now()}`, nome: nome.trim() || "Anônimo", quando: "agora" };
    if (modal === "vela") setVelas([{ ...item, intencao: texto.trim() }, ...velas]);
    else setPedidos([{ ...item, texto: texto.trim(), amem: 0 }, ...pedidos]);
    setModal(null);
  };

  const amem = (id: string) => {
    // Lê direto do armazenamento: protege contra dois cliques seguidos antes de re-renderizar
    let ja: string[] = rezados;
    try {
      ja = JSON.parse(localStorage.getItem("psj-amem") ?? "[]") as string[];
    } catch {
      /* usa o estado */
    }
    if (ja.includes(id) || rezados.includes(id)) return;
    const novo = [...ja, id];
    try {
      localStorage.setItem("psj-amem", JSON.stringify(novo));
    } catch {
      /* armazenamento indisponível */
    }
    setRezados(novo);
    setPedidos((atual) => atual.map((p) => (p.id === id ? { ...p, amem: p.amem + 1 } : p)));
  };

  const campoEscuro =
    "mt-2 w-full rounded-2xl border border-cream/15 bg-cream/[0.05] px-5 py-3.5 text-sm text-cream placeholder:text-cream/35 focus:border-gold focus:outline-none";

  return (
    <section id="comunidade" className="relative scroll-mt-20 overflow-hidden bg-night py-14 text-cream sm:py-24 lg:py-28">
      <div className="absolute inset-0">
        <img src="/images/velas.jpg" alt="" className="h-full w-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-night via-night/92 to-night" />
      </div>

      <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Mural da comunidade"
          dark
          center
          title={<>Vela e pedido de oração</>}
          description="São dois gestos diferentes: a vela acende uma luz pela sua intenção, como as que ficam junto ao altar; o pedido é uma mensagem que a comunidade lê e responde rezando junto."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* -------------------------- ACENDER VELA -------------------------- */}
          <Reveal>
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-b from-gold/[0.09] to-night p-7 sm:p-9">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-gold/20 blur-[70px]"
              />
              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2.5 text-goldlight">
                    <Flame className="h-5 w-5" strokeWidth={1.8} />
                    <span className="text-[10px] font-bold tracking-[0.28em] uppercase">Gesto 1 · Acender vela</span>
                  </div>
                  <h3 className="mt-3 font-display text-3xl leading-tight font-medium">
                    {velas.length} velas acesas neste mural
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/60">
                    Uma luz pela sua intenção — pela saúde de alguém, em ação de graças ou por
                    uma necessidade. Escreva pouco: a vela fala por si.
                  </p>
                </div>
              </div>

              <button
                onClick={() => abrir("vela")}
                className="relative mt-6 inline-flex w-fit items-center gap-2.5 rounded-full bg-gold px-7 py-3.5 text-[11px] font-bold tracking-[0.18em] text-night uppercase transition-colors hover:bg-goldlight"
              >
                <Flame className="h-4 w-4" /> Acender minha vela
              </button>

              {/* suporte de velas */}
              <div className="relative mt-7 grid max-h-[24rem] grid-cols-2 gap-3 overflow-y-auto pr-1 sm:grid-cols-3">
                <AnimatePresence>
                  {velas.slice(0, 18).map((v, i) => (
                    <VelaAcesa key={v.id} nome={v.nome} intencao={v.intencao} nova={i === 0 && v.quando === "agora"} />
                  ))}
                </AnimatePresence>
              </div>

              <p className="relative mt-6 border-t border-cream/10 pt-5 text-[10px] leading-relaxed tracking-[0.12em] text-cream/35 uppercase">
                As velas deste mural são simbólicas e ficam salvas no seu dispositivo. Na matriz,
                as velas de verdade ficam acesas junto ao altar durante todo o dia.
              </p>
            </div>
          </Reveal>

          {/* ------------------------ PEDIDO DE ORAÇÃO ------------------------ */}
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col rounded-3xl bg-cream p-7 text-ink sm:p-9">
              <div className="flex items-center gap-2.5 text-gold">
                <HandHeart className="h-5 w-5" strokeWidth={1.8} />
                <span className="text-[10px] font-bold tracking-[0.28em] uppercase">Gesto 2 · Pedir oração</span>
              </div>
              <h3 className="mt-3 font-display text-3xl leading-tight font-medium text-ink">
                Pedidos desta semana
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-cocoa">
                Aqui você escreve com calma: conte o que precisa e quem responde marca{" "}
                <strong className="text-ink">Amém</strong>, dizendo que vai rezar junto.
              </p>

              <button
                onClick={() => abrir("pedido")}
                className="mt-6 inline-flex w-fit items-center gap-2.5 rounded-full bg-ink px-7 py-3.5 text-[11px] font-bold tracking-[0.18em] text-cream uppercase transition-colors hover:bg-gold hover:text-night"
              >
                <HandHeart className="h-4 w-4" /> Deixar meu pedido
              </button>

              <ul className="mt-7 max-h-[24rem] flex-1 space-y-3 overflow-y-auto pr-1">
                <AnimatePresence>
                  {pedidos.slice(0, 8).map((p) => (
                    <motion.li
                      key={p.id}
                      layout
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="rounded-2xl border border-ink/10 bg-parchment p-5"
                    >
                      <div className="flex items-baseline justify-between gap-3">
                        <p className="text-[10px] font-bold tracking-[0.2em] text-gold uppercase">
                          {p.nome}
                        </p>
                        <span className="text-[10px] tracking-[0.15em] text-cocoa/60 uppercase">{p.quando}</span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-cocoa">{p.texto}</p>
                      {(() => {
                        const jaRezou = rezados.includes(p.id);
                        return (
                          <button
                            onClick={() => amem(p.id)}
                            disabled={jaRezou}
                            aria-pressed={jaRezou}
                            className={`mt-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[10px] font-bold tracking-[0.15em] uppercase transition-all ${
                              jaRezou
                                ? "cursor-default border-gold bg-gold/15 text-gold"
                                : "border-ink/15 bg-cream text-cocoa hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-night"
                            }`}
                          >
                            {jaRezou ? <Check className="h-3.5 w-3.5" /> : <HandHeart className="h-3.5 w-3.5" />}
                            {jaRezou ? "Você está rezando" : "Amém, vou rezar"} · {p.amem}
                          </button>
                        );
                      })()}
                    </motion.li>
                  ))}
                </AnimatePresence>
              </ul>

              <p className="mt-6 border-t border-ink/10 pt-5 text-[10px] leading-relaxed tracking-[0.12em] text-cocoa/60 uppercase">
                Os pedidos ficam salvos no seu dispositivo · quem preferir pode pedir oração
                em sigilo ao padre, no atendimento de quarta a sábado
              </p>
            </div>
          </Reveal>
        </div>

        {/* ------------------------------ AVISOS ------------------------------ */}
        <Reveal delay={0.12}>
          <div className="mt-6 rounded-3xl border border-cream/12 bg-cream/[0.04] p-7 sm:p-9">
            <div className="flex items-center gap-3 text-goldlight">
              <Megaphone className="h-5 w-5" strokeWidth={1.8} />
              <span className="text-[10px] font-bold tracking-[0.28em] uppercase">Avisos da semana</span>
            </div>
            <div className="mt-6 grid gap-x-10 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
              {AVISOS.map((a) => (
                <div key={a.titulo} className="border-l-2 border-gold/40 pl-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-display text-lg leading-snug font-medium text-cream">{a.titulo}</p>
                    <span className="rounded-full bg-gold/15 px-2.5 py-0.5 text-[9px] font-bold tracking-[0.15em] text-goldlight uppercase">
                      {a.tag}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-cream/55">{a.texto}</p>
                </div>
              ))}
            </div>
            <p className="mt-7 border-t border-cream/10 pt-5 text-[10px] tracking-[0.15em] text-cream/35 uppercase">
              Avisos também publicados pela PASCOM no Instagram e no Facebook da paróquia
            </p>
          </div>
        </Reveal>
      </div>

      {/* ------------------------------- MODAIS ------------------------------- */}
      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[95] flex items-center justify-center bg-night/88 p-5 backdrop-blur-sm"
            onClick={() => setModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className={
                modal === "vela"
                  ? "w-full max-w-md rounded-3xl border border-gold/30 bg-night p-8 text-cream sm:p-9"
                  : "w-full max-w-lg rounded-3xl bg-cream p-8 text-ink sm:p-9"
              }
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  {modal === "vela" ? (
                    <span className="relative flex h-14 w-6 shrink-0 flex-col items-center justify-end">
                      <span className={texto.trim() ? "flame absolute -top-1 h-5 w-3 rounded-full bg-gradient-to-t from-gold via-goldlight to-cream shadow-[0_0_16px_4px_rgba(221,175,99,0.55)]" : "absolute -top-1 h-5 w-3 rounded-full bg-cream/10"} />
                      <span className="h-11 w-5 rounded-t-sm rounded-b-md bg-gradient-to-b from-parchment to-parchment/70" />
                    </span>
                  ) : (
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-ink text-goldlight">
                      <HandHeart className="h-6 w-6" strokeWidth={1.8} />
                    </span>
                  )}
                  <div>
                    <p className={`text-[10px] font-bold tracking-[0.28em] uppercase ${modal === "vela" ? "text-goldlight" : "text-gold"}`}>
                      {modal === "vela" ? "Acender uma vela" : "Pedido de oração"}
                    </p>
                    <h3 className="mt-2 font-display text-2xl leading-tight font-medium">
                      {modal === "vela" ? "Uma luz pela sua intenção" : "A comunidade reza com você"}
                    </h3>
                  </div>
                </div>
                <button
                  onClick={() => setModal(null)}
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors ${
                    modal === "vela" ? "border-cream/20 hover:border-gold hover:text-gold" : "border-ink/15 hover:border-gold hover:text-gold"
                  }`}
                  aria-label="Fechar"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <p className={`mt-4 text-sm leading-relaxed ${modal === "vela" ? "text-cream/60" : "text-cocoa"}`}>
                {modal === "vela"
                  ? "Escreva a intenção em poucas palavras. A vela acende assim que você começar a digitar."
                  : "Conte com calma o que você quer pedir. O texto aparece no mural e os visitantes respondem com um Amém."}
              </p>

              <div className="mt-6 space-y-4">
                <label className="block">
                  <span className={`text-[10px] font-bold tracking-[0.22em] uppercase ${modal === "vela" ? "text-cream/50" : "text-cocoa"}`}>
                    Seu nome {modal === "vela" ? "(opcional)" : "(opcional — pode ser anônimo)"}
                  </span>
                  <input
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Anônimo"
                    className={modal === "vela" ? campoEscuro : "mt-2 w-full rounded-2xl border border-ink/15 bg-parchment px-5 py-3.5 text-sm focus:border-gold focus:outline-none"}
                  />
                </label>
                <label className="block">
                  <span className={`text-[10px] font-bold tracking-[0.22em] uppercase ${modal === "vela" ? "text-cream/50" : "text-cocoa"}`}>
                    {modal === "vela" ? "Intenção (curta)" : "Seu pedido"}
                  </span>
                  {modal === "vela" ? (
                    <input
                      value={texto}
                      onChange={(e) => setTexto(e.target.value)}
                      maxLength={60}
                      placeholder="Pela saúde da minha família"
                      className={campoEscuro}
                    />
                  ) : (
                    <textarea
                      value={texto}
                      onChange={(e) => setTexto(e.target.value)}
                      rows={4}
                      maxLength={400}
                      placeholder="Ex.: minha mãe está internada e peço que rezem por ela"
                      className="mt-2 w-full resize-none rounded-2xl border border-ink/15 bg-parchment px-5 py-3.5 text-sm leading-relaxed focus:border-gold focus:outline-none"
                    />
                  )}
                  <span className={`mt-1.5 block text-right text-[10px] tracking-wider ${modal === "vela" ? "text-cream/35" : "text-cocoa/60"}`}>
                    {texto.length}/{modal === "vela" ? 60 : 400}
                  </span>
                </label>
              </div>

              <button
                onClick={salvar}
                disabled={!texto.trim()}
                className={`mt-5 inline-flex w-full items-center justify-center gap-2.5 rounded-full py-4 text-[11px] font-bold tracking-[0.18em] uppercase transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${
                  modal === "vela"
                    ? "bg-gold text-night hover:bg-goldlight"
                    : "bg-ink text-cream hover:bg-gold hover:text-night"
                }`}
              >
                {modal === "vela" ? <Flame className="h-4 w-4" /> : <HandHeart className="h-4 w-4" />}
                {modal === "vela" ? "Acender a vela" : "Publicar no mural"}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
