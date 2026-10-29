import { Diamond } from "./ui";

const AVISOS = [
  "Confissões: quarta a sábado, das 9h às 11h",
  "Missa das Crianças: domingos às 9h30",
  "Catequese: matrículas abertas na secretaria",
  "Trezena de Santo Antônio: 29 de maio a 12 de junho",
  "Intenções de missa: (17) 99999-0102",
  "Festa do Padroeiro: 13 de junho, com carreata",
];

export default function Marquee() {
  const linha = [...AVISOS, ...AVISOS, ...AVISOS];
  return (
    <section className="relative overflow-hidden border-y border-night/20 bg-gold py-3" aria-label="Avisos da paróquia">
      <div className="flex w-max animate-marquee items-center">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center" aria-hidden={copy === 1}>
            {linha.map((aviso, i) => (
              <span
                key={`${copy}-${i}`}
                className="flex items-center gap-6 pr-6 text-[11px] font-bold tracking-[0.15em] whitespace-nowrap text-night uppercase"
              >
                {aviso}
                <Diamond className="h-2 w-2 shrink-0 opacity-60" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
