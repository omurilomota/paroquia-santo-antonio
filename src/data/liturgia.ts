/* =========================================================================
   MOTOR LITÚRGICO — cálculo do ano litúrgico, tempos, cores e santos
   ========================================================================= */

export type CorLiturgica = "verde" | "roxo" | "branco" | "vermelho" | "rosa" | "ouro";

export const CORES: Record<CorLiturgica, { hex: string; nome: string }> = {
  verde: { hex: "#3f7a4f", nome: "Verde" },
  roxo: { hex: "#6a4a8f", nome: "Roxo" },
  branco: { hex: "#e8e2d4", nome: "Branco" },
  vermelho: { hex: "#a32b28", nome: "Vermelho" },
  rosa: { hex: "#c98ba0", nome: "Rosa" },
  ouro: { hex: "#c9a13b", nome: "Dourado" },
};

/* ------------------------------ Páscoa (Computus) ------------------------------ */

export function pascoa(ano: number): Date {
  const a = ano % 19;
  const b = Math.floor(ano / 100);
  const c = ano % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const mes = Math.floor((h + l - 7 * m + 114) / 31);
  const dia = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(ano, mes - 1, dia);
}

const addDays = (d: Date, n: number) => {
  const x = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  x.setDate(x.getDate() + n);
  return x;
};

const startOfDay = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate());

export const sameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();

/** Domingo anterior (ou o próprio dia, se for domingo) */
function domingoAnterior(d: Date): Date {
  const x = startOfDay(d);
  return addDays(x, -x.getDay());
}

/** 1º domingo do Advento do ano dado */
export function primeiroAdvento(ano: number): Date {
  const natal = new Date(ano, 11, 25);
  const quartoDom = addDays(domingoAnterior(natal), -7 * 3); // 4º domingo antes do Natal
  return quartoDom;
}

/* --------------------------------- Santos --------------------------------- */

type Santo = { dia: number; mes: number; nome: string; nota?: string };

export const SANTOS: Santo[] = [
  { dia: 1, mes: 1, nome: "Santa Maria, Mãe de Deus", nota: "Solenidade" },
  { dia: 2, mes: 1, nome: "São Basílio e São Gregório Nazianzeno" },
  { dia: 4, mes: 1, nome: "Santa Ângela de Foligno" },
  { dia: 5, mes: 1, nome: "São João Neumann" },
  { dia: 7, mes: 1, nome: "São Raimundo de Peñafort" },
  { dia: 13, mes: 1, nome: "Santo Hilário de Poitiers" },
  { dia: 17, mes: 1, nome: "Santo Antão, abade" },
  { dia: 20, mes: 1, nome: "São Fabião e São Sebastião" },
  { dia: 21, mes: 1, nome: "Santa Inês, virgem e mártir" },
  { dia: 22, mes: 1, nome: "São Vicente, diácono e mártir" },
  { dia: 24, mes: 1, nome: "São Francisco de Sales" },
  { dia: 25, mes: 1, nome: "Conversão de São Paulo", nota: "Festa" },
  { dia: 26, mes: 1, nome: "Santos Timóteo e Tito" },
  { dia: 27, mes: 1, nome: "Santa Ângela Merici" },
  { dia: 28, mes: 1, nome: "São Tomás de Aquino" },
  { dia: 31, mes: 1, nome: "São João Bosco" },
  { dia: 2, mes: 2, nome: "Apresentação do Senhor", nota: "Festa" },
  { dia: 3, mes: 2, nome: "São Brás, bispo e mártir" },
  { dia: 5, mes: 2, nome: "Santa Ágata, virgem e mártir" },
  { dia: 6, mes: 2, nome: "São Paulo Miki e companheiros" },
  { dia: 8, mes: 2, nome: "Santa Josefina Bakhita" },
  { dia: 10, mes: 2, nome: "Santa Escolástica" },
  { dia: 11, mes: 2, nome: "Nossa Senhora de Lourdes", nota: "Memória mariana" },
  { dia: 14, mes: 2, nome: "Santos Cirilo e Metódio" },
  { dia: 21, mes: 2, nome: "São Pedro Damião" },
  { dia: 22, mes: 2, nome: "Cátedra de São Pedro", nota: "Festa" },
  { dia: 23, mes: 2, nome: "São Policarpo" },
  { dia: 4, mes: 3, nome: "São Casimiro" },
  { dia: 7, mes: 3, nome: "Santas Perpétua e Felicidade" },
  { dia: 8, mes: 3, nome: "São João de Deus" },
  { dia: 9, mes: 3, nome: "Santa Francisca de Roma" },
  { dia: 17, mes: 3, nome: "São Patrício" },
  { dia: 18, mes: 3, nome: "São Cirilo de Jerusalém" },
  { dia: 23, mes: 3, nome: "São Turíbio de Mogrovejo" },
  { dia: 25, mes: 3, nome: "Anunciação do Senhor", nota: "Solenidade" },
  { dia: 2, mes: 4, nome: "São Francisco de Paula" },
  { dia: 5, mes: 4, nome: "São Vicente Ferrer" },
  { dia: 7, mes: 4, nome: "São João Batista de La Salle" },
  { dia: 11, mes: 4, nome: "São Estanislau, bispo e mártir" },
  { dia: 13, mes: 4, nome: "São Martinho I, papa" },
  { dia: 21, mes: 4, nome: "Santo Anselmo" },
  { dia: 23, mes: 4, nome: "São Jorge, mártir" },
  { dia: 25, mes: 4, nome: "São Marcos, evangelista", nota: "Festa" },
  { dia: 28, mes: 4, nome: "São Luís Maria Grignion de Montfort" },
  { dia: 29, mes: 4, nome: "Santa Catarina de Sena" },
  { dia: 30, mes: 4, nome: "São Pio V, papa" },
  { dia: 1, mes: 5, nome: "São José Operário" },
  { dia: 2, mes: 5, nome: "Santo Atanásio" },
  { dia: 3, mes: 5, nome: "Santos Filipe e Tiago, apóstolos", nota: "Festa" },
  { dia: 10, mes: 5, nome: "São João de Ávila" },
  { dia: 12, mes: 5, nome: "Santos Nereu e Aquiles" },
  { dia: 13, mes: 5, nome: "Nossa Senhora de Fátima", nota: "Festa da capela rural" },
  { dia: 14, mes: 5, nome: "São Matias, apóstolo" },
  { dia: 18, mes: 5, nome: "São João I, papa" },
  { dia: 20, mes: 5, nome: "São Bernardino de Sena" },
  { dia: 22, mes: 5, nome: "Santa Rita de Cássia" },
  { dia: 24, mes: 5, nome: "Maria, Mãe e Auxiliadora dos cristãos" },
  { dia: 26, mes: 5, nome: "São Filipe Neri" },
  { dia: 27, mes: 5, nome: "Santo Agostinho de Cantuária" },
  { dia: 31, mes: 5, nome: "Visitação de Nossa Senhora", nota: "Festa" },
  { dia: 1, mes: 6, nome: "São Justino, mártir" },
  { dia: 2, mes: 6, nome: "Santos Marcelino e Pedro" },
  { dia: 3, mes: 6, nome: "São Carlos Lwanga e companheiros" },
  { dia: 5, mes: 6, nome: "São Bonifácio" },
  { dia: 6, mes: 6, nome: "São Norberto" },
  { dia: 9, mes: 6, nome: "Santo Efrém" },
  { dia: 11, mes: 6, nome: "São Barnabé, apóstolo" },
  { dia: 13, mes: 6, nome: "Santo Antônio do Vale", nota: "Padroeiro da paróquia e aniversário da cidade" },
  { dia: 19, mes: 6, nome: "São Romualdo" },
  { dia: 21, mes: 6, nome: "São Luís Gonzaga" },
  { dia: 22, mes: 6, nome: "São Paulino de Nola" },
  { dia: 24, mes: 6, nome: "Nascimento de São João Batista", nota: "Solenidade · Vila São João" },
  { dia: 27, mes: 6, nome: "São Cirilo de Alexandria" },
  { dia: 28, mes: 6, nome: "Santo Irineu" },
  { dia: 29, mes: 6, nome: "São Pedro e São Paulo", nota: "Solenidade" },
  { dia: 30, mes: 6, nome: "Primeiros Mártires da Igreja de Roma" },
  { dia: 3, mes: 7, nome: "São Tomé, apóstolo" },
  { dia: 4, mes: 7, nome: "Santa Isabel de Portugal" },
  { dia: 5, mes: 7, nome: "Santo Antônio Maria Zaccaria" },
  { dia: 6, mes: 7, nome: "Santa Maria Goretti" },
  { dia: 11, mes: 7, nome: "São Bento, abade", nota: "Padroeiro da Europa" },
  { dia: 13, mes: 7, nome: "Santo Henrique" },
  { dia: 14, mes: 7, nome: "São Camilo de Lellis" },
  { dia: 15, mes: 7, nome: "São Boaventura" },
  { dia: 16, mes: 7, nome: "Nossa Senhora do Carmo" },
  { dia: 20, mes: 7, nome: "Santo Apolinário" },
  { dia: 21, mes: 7, nome: "São Lourenço de Brindisi" },
  { dia: 22, mes: 7, nome: "Santa Maria Madalena", nota: "Festa" },
  { dia: 23, mes: 7, nome: "Santa Brígida" },
  { dia: 24, mes: 7, nome: "São Charbel Makhluf" },
  { dia: 25, mes: 7, nome: "São Tiago, apóstolo", nota: "Festa" },
  { dia: 26, mes: 7, nome: "Santos Joaquim e Ana, pais de Maria", nota: "Festa" },
  { dia: 29, mes: 7, nome: "Santa Marta" },
  { dia: 30, mes: 7, nome: "São Pedro Crisólogo" },
  { dia: 31, mes: 7, nome: "Santo Inácio de Loyola" },
  { dia: 1, mes: 8, nome: "Santo Afonso Maria de Ligório" },
  { dia: 4, mes: 8, nome: "São João Maria Vianney", nota: "Santo Cura d'Ars" },
  { dia: 6, mes: 8, nome: "Transfiguração do Senhor", nota: "Festa" },
  { dia: 8, mes: 8, nome: "São Domingos" },
  { dia: 9, mes: 8, nome: "Santa Teresa Benedita da Cruz" },
  { dia: 10, mes: 8, nome: "São Lourenço, diácono e mártir", nota: "Festa" },
  { dia: 11, mes: 8, nome: "Santa Clara de Assis", nota: "Festa" },
  { dia: 14, mes: 8, nome: "São Maximiliano Maria Kolbe" },
  { dia: 15, mes: 8, nome: "Assunção de Nossa Senhora", nota: "Solenidade" },
  { dia: 20, mes: 8, nome: "São Bernardo de Claraval" },
  { dia: 21, mes: 8, nome: "São Pio X, papa" },
  { dia: 22, mes: 8, nome: "Nossa Senhora Rainha", nota: "Memória mariana" },
  { dia: 23, mes: 8, nome: "Santa Rosa de Lima" },
  { dia: 24, mes: 8, nome: "São Bartolomeu, apóstolo", nota: "Festa" },
  { dia: 25, mes: 8, nome: "São Luís, rei" },
  { dia: 27, mes: 8, nome: "Santa Mônica" },
  { dia: 28, mes: 8, nome: "Santo Agostinho, bispo e doutor", nota: "Festa" },
  { dia: 29, mes: 8, nome: "Martírio de São João Batista", nota: "Memória" },
  { dia: 3, mes: 9, nome: "São Gregório Magno, papa" },
  { dia: 5, mes: 9, nome: "Santa Teresa de Calcutá" },
  { dia: 8, mes: 9, nome: "Natividade de Nossa Senhora", nota: "Festa" },
  { dia: 9, mes: 9, nome: "São Pedro Claver" },
  { dia: 12, mes: 9, nome: "Santíssimo Nome de Maria" },
  { dia: 13, mes: 9, nome: "São João Crisóstomo" },
  { dia: 14, mes: 9, nome: "Exaltação da Santa Cruz", nota: "Festa" },
  { dia: 15, mes: 9, nome: "Nossa Senhora das Dores" },
  { dia: 16, mes: 9, nome: "Santos Cornélio e Cipriano" },
  { dia: 20, mes: 9, nome: "Santos André Kim e companheiros" },
  { dia: 21, mes: 9, nome: "São Mateus, apóstolo e evangelista", nota: "Festa" },
  { dia: 23, mes: 9, nome: "São Pio de Pietrelcina", nota: "Padre Pio" },
  { dia: 26, mes: 9, nome: "Santos Cosme e Damião" },
  { dia: 27, mes: 9, nome: "São Vicente de Paulo" },
  { dia: 29, mes: 9, nome: "Santos Miguel, Gabriel e Rafael", nota: "Festa · São Miguel Arcanjo" },
  { dia: 30, mes: 9, nome: "São Jerônimo" },
  { dia: 1, mes: 10, nome: "Santa Teresinha do Menino Jesus", nota: "Doutora da Igreja" },
  { dia: 2, mes: 10, nome: "Santos Anjos da Guarda" },
  { dia: 4, mes: 10, nome: "São Francisco de Assis", nota: "Bênção dos animais" },
  { dia: 7, mes: 10, nome: "Nossa Senhora do Rosário" },
  { dia: 11, mes: 10, nome: "São João XXIII, papa" },
  { dia: 15, mes: 10, nome: "Santa Teresa de Ávila" },
  { dia: 17, mes: 10, nome: "Santo Inácio de Antioquia" },
  { dia: 18, mes: 10, nome: "São Lucas, evangelista", nota: "Festa" },
  { dia: 22, mes: 10, nome: "São João Paulo II, papa" },
  { dia: 24, mes: 10, nome: "Santo Antônio Maria Claret" },
  { dia: 28, mes: 10, nome: "São Simão e São Judas, apóstolos", nota: "Festa" },
  { dia: 1, mes: 11, nome: "Todos os Santos", nota: "Solenidade" },
  { dia: 2, mes: 11, nome: "Fiéis Defuntos" },
  { dia: 3, mes: 11, nome: "São Martinho de Porres" },
  { dia: 4, mes: 11, nome: "São Carlos Borromeu" },
  { dia: 9, mes: 11, nome: "Dedicação da Basílica de Latrão" },
  { dia: 10, mes: 11, nome: "São Leão Magno, papa" },
  { dia: 11, mes: 11, nome: "São Martinho de Tours" },
  { dia: 12, mes: 11, nome: "São Josafat" },
  { dia: 15, mes: 11, nome: "Santo Alberto Magno" },
  { dia: 17, mes: 11, nome: "Santa Isabel da Hungria" },
  { dia: 21, mes: 11, nome: "Apresentação de Nossa Senhora" },
  { dia: 22, mes: 11, nome: "Santa Cecília, virgem e mártir" },
  { dia: 24, mes: 11, nome: "Santos André Dũng Lạc e companheiros" },
  { dia: 25, mes: 11, nome: "Santa Catarina de Alexandria" },
  { dia: 30, mes: 11, nome: "Santo André, apóstolo", nota: "Festa" },
  { dia: 3, mes: 12, nome: "São Francisco Xavier" },
  { dia: 4, mes: 12, nome: "São João Damasceno" },
  { dia: 6, mes: 12, nome: "São Nicolau, bispo" },
  { dia: 7, mes: 12, nome: "Santo Ambrósio, bispo e doutor" },
  { dia: 8, mes: 12, nome: "Imaculada Conceição", nota: "Solenidade mariana" },
  { dia: 9, mes: 12, nome: "São João Diego" },
  { dia: 12, mes: 12, nome: "Nossa Senhora de Guadalupe" },
  { dia: 13, mes: 12, nome: "Santa Luzia, virgem e mártir" },
  { dia: 14, mes: 12, nome: "São João da Cruz" },
  { dia: 26, mes: 12, nome: "Santo Estêvão, primeiro mártir", nota: "Festa" },
  { dia: 27, mes: 12, nome: "São João, apóstolo e evangelista", nota: "Festa" },
  { dia: 28, mes: 12, nome: "Santos Inocentes Mártires" },
  { dia: 29, mes: 12, nome: "São Tomás Becket" },
  { dia: 31, mes: 12, nome: "São Silvestre I, papa" },
];

export function santoDoDia(d: Date): Santo | undefined {
  return SANTOS.find((s) => s.dia === d.getDate() && s.mes === d.getMonth() + 1);
}

/* ------------------------------ Tempos e cores ------------------------------ */

export type DiaLiturgico = {
  tempo: string;
  cor: CorLiturgica;
  descricao: string;
  ano: string; // A, B ou C
  ciclo: string; // I ou II
  semana?: string;
  santo?: Santo;
};

export function diaLiturgico(data: Date): DiaLiturgico {
  const d = startOfDay(data);
  const ano = d.getFullYear();
  const pasc = pascoa(ano);
  const cinzas = addDays(pasc, -46);
  const quintaSanta = addDays(pasc, -3);
  const sextaSanta = addDays(pasc, -2);
  const sabadoAleluia = addDays(pasc, -1);
  const ramos = addDays(pasc, -7);
  const pentecostes = addDays(pasc, 49);
  const ascensao = addDays(pasc, 39);
  const corpusChristi = addDays(pasc, 60);
  const advento = primeiroAdvento(ano);
  const cristoRei = addDays(advento, -7);
  const epifania = new Date(ano, 0, 6);
  // Batismo do Senhor: domingo seguinte ao domingo em que cai a Epifania
  const batismoSenhor = addDays(domingoAnterior(epifania), 7);

  // Ano litúrgico (A/B/C) e ciclo ferial (I/II)
  const anoLiturgico = d >= advento ? ano + 1 : ano;
  const idx = ((anoLiturgico - 2026) % 3 + 3) % 3;
  const letra = ["A", "B", "C"][idx];
  const ciclo = ano % 2 === 0 ? "II" : "I";

  const base = {
    ano: letra,
    ciclo,
    santo: santoDoDia(d),
  };

  // Solenidades e dias próprios
  if (sameDay(d, quintaSanta))
    return { ...base, tempo: "Tríduo Pascal", cor: "branco", descricao: "Quinta-feira Santa — Missa da Ceia do Senhor e Lava-Pés." };
  if (sameDay(d, sextaSanta))
    return { ...base, tempo: "Tríduo Pascal", cor: "vermelho", descricao: "Sexta-feira Santa — Celebração da Paixão do Senhor e adoração da cruz." };
  if (sameDay(d, sabadoAleluia))
    return { ...base, tempo: "Tríduo Pascal", cor: "branco", descricao: "Sábado de Aleluia — Vigília Pascal com a bênção do fogo novo." };
  if (sameDay(d, ramos))
    return { ...base, tempo: "Semana Santa", cor: "vermelho", descricao: "Domingo de Ramos — bênção dos ramos e procissão." };
  if (sameDay(d, pasc))
    return { ...base, tempo: "Tempo Pascal", cor: "ouro", descricao: "Domingo de Páscoa — o Senhor ressuscitou, aleluia!" };
  if (sameDay(d, pentecostes))
    return { ...base, tempo: "Tempo Pascal", cor: "vermelho", descricao: "Pentecostes — a vinda do Espírito Santo sobre a Igreja." };
  if (sameDay(d, ascensao))
    return { ...base, tempo: "Tempo Pascal", cor: "branco", descricao: "Ascensão do Senhor." };
  if (sameDay(d, corpusChristi))
    return { ...base, tempo: "Tempo Comum", cor: "branco", descricao: "Corpus Christi — solenidade do Corpo e Sangue do Senhor, com procissão." };
  if (sameDay(d, cristoRei))
    return { ...base, tempo: "Tempo Comum", cor: "branco", descricao: "Nosso Senhor Jesus Cristo, Rei do Universo — encerra o ano litúrgico." };
  if (sameDay(d, cinzas))
    return { ...base, tempo: "Quaresma", cor: "roxo", descricao: "Quarta-feira de Cinzas — início da Quaresma, jejum e abstinência." };

  // Natal e Epifania
  const natal = new Date(ano, 11, 25);
  if (sameDay(d, natal))
    return { ...base, tempo: "Tempo do Natal", cor: "ouro", descricao: "Natal do Senhor — o Verbo se fez carne." };
  if (sameDay(d, epifania))
    return { ...base, tempo: "Tempo do Natal", cor: "branco", descricao: "Epifania do Senhor — a manifestação aos Magos." };
  if (sameDay(d, batismoSenhor))
    return { ...base, tempo: "Tempo do Natal", cor: "branco", descricao: "Batismo do Senhor — encerra o tempo do Natal." };

  // Intervalos
  if (d >= advento && d < natal) {
    const dom = 1 + Math.floor((d.getTime() - advento.getTime()) / (7 * 86400000));
    const gaudete = dom === 3;
    return {
      ...base,
      tempo: "Tempo do Advento",
      cor: gaudete ? "rosa" : "roxo",
      semana: `${dom}ª semana`,
      descricao: gaudete
        ? "3º domingo do Advento — domingo da alegria (Gaudete)."
        : "Tempo de espera e preparação para o Natal do Senhor.",
    };
  }
  if (d >= natal || d <= new Date(ano, 0, 6))
    return { ...base, tempo: "Tempo do Natal", cor: "branco", descricao: "O tempo do Natal celebra a encarnação do Filho de Deus." };
  if (d >= cinzas && d < quintaSanta) {
    const semanas = Math.floor((d.getTime() - cinzas.getTime()) / (7 * 86400000));
    const laetare = semanas === 3;
    return {
      ...base,
      tempo: "Quaresma",
      cor: laetare ? "rosa" : "roxo",
      semana: `${semanas + 1}ª semana`,
      descricao: laetare
        ? "4º domingo da Quaresma — domingo da alegria (Laetare)."
        : "Tempo de conversão, oração, jejum e caridade.",
    };
  }
  if (d >= pasc && d <= pentecostes) {
    const semanas = Math.floor((d.getTime() - pasc.getTime()) / (7 * 86400000));
    return {
      ...base,
      tempo: "Tempo Pascal",
      cor: "branco",
      semana: semanas === 0 ? "Oitava da Páscoa" : `${semanas}ª semana`,
      descricao: "Cinquenta dias de alegria, da Páscoa a Pentecostes.",
    };
  }
  return {
    ...base,
    tempo: "Tempo Comum",
    cor: "verde",
    descricao: "O tempo comum nos faz crescer, dia a dia, no seguimento de Cristo.",
  };
}

/* ------------------------------ Próxima missa ------------------------------ */

import { MISSAS } from "./content";

export type ProximaMissa = {
  quando: Date;
  nome: string;
  nota?: string;
  em: { dias: number; horas: number; minutos: number };
};

export function proximaMissa(agora: Date = new Date()): ProximaMissa | null {
  const candidatos: ProximaMissa[] = [];
  for (let offset = 0; offset <= 14; offset++) {
    const dia = addDays(agora, offset);
    const dow = dia.getDay();
    for (const m of MISSAS) {
      if (!m.dias.includes(dow)) continue;
      const quando = new Date(dia.getFullYear(), dia.getMonth(), dia.getDate(), m.hora, m.minuto, 0);
      if (quando.getTime() <= agora.getTime()) continue;
      const diff = quando.getTime() - agora.getTime();
      candidatos.push({
        quando,
        nome: m.nome,
        nota: m.nota,
        em: {
          dias: Math.floor(diff / 86400000),
          horas: Math.floor((diff % 86400000) / 3600000),
          minutos: Math.floor((diff % 3600000) / 60000),
        },
      });
    }
    if (candidatos.length) break;
  }
  return candidatos[0] ?? null;
}

/* --------------------------------- Agenda --------------------------------- */

export type EventoAgenda = {
  titulo: string;
  hora: string;
  tipo: "Missa" | "Capela" | "Festa" | "Devoção" | "Comunidade" | "Sacramento" | "Igreja no Brasil";
  local: string;
};

/** Verifica se a data é o n-ésimo determinado dia da semana do mês */
function enesimo(d: Date, ordem: number, dow: number): boolean {
  if (d.getDay() !== dow) return false;
  return Math.floor((d.getDate() - 1) / 7) === ordem;
}

const CAPELAS_AGENDA: { nome: string; local: string; ordem: number; dow: number }[] = [
  { nome: "Missa na capela São José", local: "R. São Luiz, 74", ordem: 0, dow: 6 },
  { nome: "Missa na capela N. Sra. das Graças", local: "Centro Comunitário — R. São Salvador", ordem: 0, dow: 4 },
  { nome: "Missa na capela N. Sra. de Fátima", local: "Zona rural", ordem: 1, dow: 4 },
  { nome: "Missa na capela N. Sra. Aparecida", local: "R. Porto Alegre, 1748", ordem: 1, dow: 6 },
  { nome: "Missa na capela Cristo Redentor", local: "R. Rio de Janeiro", ordem: 1, dow: 5 },
  { nome: "Missa na capela Sagrado Coração de Jesus", local: "R. Liogi Iwaki, 735", ordem: 2, dow: 4 },
  { nome: "Missa na capela São João Batista", local: "Vila São João — zona rural", ordem: 2, dow: 5 },
  { nome: "Missa na capela São Francisco", local: "R. Bandeirantes, 2004", ordem: 2, dow: 6 },
  { nome: "Missa na capela N. Sra. Aparecida", local: "Bairro Duas Barras — zona rural", ordem: 3, dow: 4 },
  { nome: "Missa na capela São Miguel Arcanjo", local: "Av. Campos Sales, 1036", ordem: 3, dow: 6 },
];

/**
 * Datas fixas do ano paroquial: festas das capelas com seus padroeiros,
 * solenidades, devoções marianas e os dias da Igreja no Brasil.
 */
const FIXOS: { mes: number; dia: number; evento: EventoAgenda }[] = [
  /* ---------------- Janeiro ---------------- */
  { mes: 1, dia: 1, evento: { titulo: "Ano-novo · Santa Maria, Mãe de Deus · Dia Mundial da Paz", hora: "7h · 9h · 19h", tipo: "Festa", local: "Igreja Matriz" } },
  { mes: 1, dia: 6, evento: { titulo: "Visita dos Reis Magos às famílias (Folia de Reis)", hora: "durante o dia", tipo: "Comunidade", local: "Casas dos bairros e do interior" } },
  { mes: 1, dia: 20, evento: { titulo: "São Sebastião · bênção dos produtores rurais", hora: "19h30", tipo: "Devoção", local: "Zona rural" } },
  /* ---------------- Fevereiro ---------------- */
  { mes: 2, dia: 2, evento: { titulo: "Apresentação do Senhor · bênção das velas", hora: "7h e 19h30", tipo: "Devoção", local: "Igreja Matriz" } },
  { mes: 2, dia: 11, evento: { titulo: "Nossa Senhora de Lourdes · Dia Mundial do Enfermo", hora: "19h30, com unção dos enfermos", tipo: "Igreja no Brasil", local: "Igreja Matriz" } },
  /* ---------------- Março ---------------- */
  { mes: 3, dia: 8, evento: { titulo: "Dia Internacional da Mulher · oração pelas mulheres da paróquia", hora: "7h", tipo: "Comunidade", local: "Igreja Matriz" } },
  { mes: 3, dia: 19, evento: { titulo: "São José · festa da capela e dia do carpinteiro", hora: "19h30", tipo: "Capela", local: "R. São Luiz, 74" } },
  { mes: 3, dia: 25, evento: { titulo: "Anunciação do Senhor · Dia Nacional do Nascituro", hora: "7h e 19h30", tipo: "Festa", local: "Igreja Matriz" } },
  /* ---------------- Abril ---------------- */
  { mes: 4, dia: 23, evento: { titulo: "São Jorge", hora: "19h30", tipo: "Devoção", local: "Igreja Matriz" } },
  /* ---------------- Maio ---------------- */
  { mes: 5, dia: 1, evento: { titulo: "São José Operário · Dia do Trabalhador", hora: "9h", tipo: "Igreja no Brasil", local: "Igreja Matriz" } },
  { mes: 5, dia: 13, evento: { titulo: "Nossa Senhora de Fátima · festa da capela rural", hora: "19h30", tipo: "Capela", local: "Capela N. Sra. de Fátima — zona rural" } },
  { mes: 5, dia: 24, evento: { titulo: "Nossa Senhora Auxiliadora · coroação de Maria pelas crianças da catequese", hora: "19h30", tipo: "Devoção", local: "Igreja Matriz" } },
  { mes: 5, dia: 29, evento: { titulo: "Abertura da Trezena de Santo Antônio", hora: "19h30", tipo: "Festa", local: "Igreja Matriz" } },
  { mes: 5, dia: 31, evento: { titulo: "Visitação de Nossa Senhora · encerramento do mês mariano", hora: "19h30", tipo: "Devoção", local: "Igreja Matriz" } },
  /* ---------------- Junho ---------------- */
  { mes: 6, dia: 12, evento: { titulo: "Véspera da festa do padroeiro · última noite da Trezena e quermesse", hora: "19h30", tipo: "Festa", local: "Igreja Matriz e salão" } },
  { mes: 6, dia: 13, evento: { titulo: "Festa de Santo Antônio, padroeiro e aniversário da cidade", hora: "missa solene e carreata", tipo: "Festa", local: "Matriz e ruas do Centro" } },
  { mes: 6, dia: 13, evento: { titulo: "Bênção e distribuição dos pães de Santo Antônio", hora: "após as missas", tipo: "Devoção", local: "Igreja Matriz" } },
  { mes: 6, dia: 24, evento: { titulo: "São João Batista · festa da Vila São João e festa junina", hora: "19h30", tipo: "Capela", local: "Vila São João — zona rural" } },
  { mes: 6, dia: 29, evento: { titulo: "São Pedro e São Paulo · bênção das chaves e dos imóveis", hora: "19h30", tipo: "Devoção", local: "Igreja Matriz" } },
  /* ---------------- Julho ---------------- */
  { mes: 7, dia: 16, evento: { titulo: "Nossa Senhora do Carmo · entrega dos escapulários", hora: "19h30", tipo: "Devoção", local: "Igreja Matriz" } },
  { mes: 7, dia: 26, evento: { titulo: "Santos Joaquim e Ana · Dia dos Avós e dos Idosos", hora: "9h", tipo: "Igreja no Brasil", local: "Igreja Matriz" } },
  /* ---------------- Agosto ---------------- */
  { mes: 8, dia: 4, evento: { titulo: "São João Maria Vianney · Dia do Padre, oração pelo pároco e pelo vigário", hora: "7h", tipo: "Igreja no Brasil", local: "Igreja Matriz" } },
  { mes: 8, dia: 15, evento: { titulo: "Assunção de Nossa Senhora", hora: "9h e 19h", tipo: "Festa", local: "Igreja Matriz" } },
  { mes: 8, dia: 22, evento: { titulo: "Nossa Senhora Rainha", hora: "19h30", tipo: "Devoção", local: "Igreja Matriz" } },
  /* ---------------- Setembro ---------------- */
  { mes: 9, dia: 7, evento: { titulo: "Independência do Brasil · oração pela pátria", hora: "9h", tipo: "Comunidade", local: "Igreja Matriz" } },
  { mes: 9, dia: 14, evento: { titulo: "Exaltação da Santa Cruz · memória da cruz de 1948", hora: "19h30", tipo: "Devoção", local: "Igreja Matriz" } },
  { mes: 9, dia: 27, evento: { titulo: "São Vicente de Paulo · dia da Sociedade São Vicente de Paulo", hora: "19h30", tipo: "Comunidade", local: "Igreja Matriz" } },
  { mes: 9, dia: 29, evento: { titulo: "São Miguel Arcanjo · festa da capela", hora: "19h30", tipo: "Capela", local: "Av. Campos Sales, 1036" } },
  /* ---------------- Outubro ---------------- */
  { mes: 10, dia: 1, evento: { titulo: "Abertura do mês do Rosário e das missões", hora: "19h30", tipo: "Devoção", local: "Igreja Matriz" } },
  { mes: 10, dia: 4, evento: { titulo: "São Francisco · festa da capela e bênção dos animais", hora: "19h30 e bênção às 16h", tipo: "Capela", local: "R. Bandeirantes, 2004" } },
  { mes: 10, dia: 12, evento: { titulo: "Nossa Senhora Aparecida · novena, festa e Dia das Crianças", hora: "9h e 19h", tipo: "Festa", local: "R. Porto Alegre, 1748 e Duas Barras" } },
  { mes: 10, dia: 18, evento: { titulo: "São Lucas · Dia do Médico, oração pelos profissionais da saúde", hora: "7h", tipo: "Igreja no Brasil", local: "Igreja Matriz" } },
  /* ---------------- Novembro ---------------- */
  { mes: 11, dia: 1, evento: { titulo: "Solenidade de Todos os Santos", hora: "9h e 19h", tipo: "Festa", local: "Igreja Matriz" } },
  { mes: 11, dia: 2, evento: { titulo: "Fiéis Defuntos · missa no cemitério e sufrágio pelos falecidos", hora: "7h no cemitério", tipo: "Devoção", local: "Cemitério municipal e matriz" } },
  { mes: 11, dia: 15, evento: { titulo: "Proclamação da República · oração pelos governantes", hora: "9h", tipo: "Comunidade", local: "Igreja Matriz" } },
  { mes: 11, dia: 20, evento: { titulo: "Cristo Redentor · festa da capela", hora: "19h30", tipo: "Capela", local: "R. Rio de Janeiro, s/n" } },
  { mes: 11, dia: 27, evento: { titulo: "Nossa Senhora das Graças · novena e festa da capela", hora: "19h30", tipo: "Capela", local: "Centro Comunitário — R. São Salvador" } },
  { mes: 11, dia: 30, evento: { titulo: "Santo André · início do tempo do Advento e da Novena de Natal", hora: "19h30", tipo: "Devoção", local: "Igreja Matriz" } },
  /* ---------------- Dezembro ---------------- */
  { mes: 12, dia: 8, evento: { titulo: "Imaculada Conceição · solenidade mariana", hora: "7h · 9h · 19h30", tipo: "Festa", local: "Igreja Matriz" } },
  { mes: 12, dia: 13, evento: { titulo: "Santa Luzia", hora: "7h", tipo: "Devoção", local: "Igreja Matriz" } },
  { mes: 12, dia: 24, evento: { titulo: "Missa do Galo · véspera de Natal", hora: "20h", tipo: "Missa", local: "Igreja Matriz" } },
  { mes: 12, dia: 25, evento: { titulo: "Natal do Senhor · bênção do Menino Jesus nas famílias", hora: "7h · 9h · 19h", tipo: "Festa", local: "Igreja Matriz" } },
  { mes: 12, dia: 28, evento: { titulo: "Santos Inocentes · oração pelas crianças", hora: "7h", tipo: "Devoção", local: "Igreja Matriz" } },
  { mes: 12, dia: 31, evento: { titulo: "São Silvestre · missa de ação de graças pelo ano que termina", hora: "19h30", tipo: "Missa", local: "Igreja Matriz" } },
];

/** Verdadeiro se a data é o último domingo do próprio mês. */
function ultimoDomingoDoMes(d: Date): boolean {
  if (d.getDay() !== 0) return false;
  const proximo = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 7);
  return proximo.getMonth() !== d.getMonth();
}

/** Dias ligados a um domingo específico do mês (ordem 0 = 1º, 3 = 4º, ultimo = último). */
const DOMINGOS_ESPECIAIS: { mes: number; ordem?: number; ultimo?: boolean; evento: EventoAgenda }[] = [
  { mes: 8, ordem: 1, evento: { titulo: "Abertura da Semana Nacional da Família · Dia dos Pais", hora: "9h", tipo: "Igreja no Brasil", local: "Igreja Matriz e capelas" } },
  { mes: 8, ultimo: true, evento: { titulo: "Encerramento da Semana Nacional da Família · Dia do Catequista", hora: "9h", tipo: "Igreja no Brasil", local: "Igreja Matriz" } },
  { mes: 9, ultimo: true, evento: { titulo: "Dia da Bíblia · procissão com a Palavra e entrega das bíblias aos catequizandos", hora: "9h", tipo: "Igreja no Brasil", local: "Igreja Matriz" } },
  { mes: 10, ultimo: true, evento: { titulo: "Dia Nacional da Juventude · encontro dos jovens da paróquia", hora: "após a missa das 19h", tipo: "Comunidade", local: "Salão paroquial" } },
  { mes: 11, ordem: 1, evento: { titulo: "Primeira comunhão das crianças da catequese", hora: "9h", tipo: "Sacramento", local: "Igreja Matriz" } },
  { mes: 11, ordem: 2, evento: { titulo: "Crisma dos jovens e adultos · presidida pelo bispo diocesano", hora: "19h", tipo: "Sacramento", local: "Igreja Matriz" } },
  { mes: 12, ordem: 1, evento: { titulo: "Batizados comunitários das famílias preparadas pela pastoral", hora: "após a missa das 9h", tipo: "Sacramento", local: "Igreja Matriz" } },
  { mes: 6, ordem: 2, evento: { titulo: "Quermesse da paróquia · barracas, leilão de prendas e almoço", hora: "a partir das 11h", tipo: "Comunidade", local: "Salão paroquial" } },
  { mes: 5, ordem: 0, evento: { titulo: "Coroação de Nossa Senhora pelas crianças da catequese", hora: "9h30", tipo: "Devoção", local: "Igreja Matriz" } },
];

/** Celebrações móveis do ano */
function moveis(ano: number): { data: Date; evento: EventoAgenda }[] {
  const pasc = pascoa(ano);
  const cinzas = addDays(pasc, -46);
  const advento = primeiroAdvento(ano);
  return [
    { data: cinzas, evento: { titulo: "Quarta-feira de Cinzas · início da Quaresma", hora: "7h e 19h30", tipo: "Devoção", local: "Matriz" } },
    { data: addDays(pasc, -7), evento: { titulo: "Domingo de Ramos · Campanha da Fraternidade", hora: "missas do domingo", tipo: "Festa", local: "Matriz" } },
    { data: addDays(pasc, -3), evento: { titulo: "Quinta-feira Santa · Lava-Pés", hora: "20h", tipo: "Devoção", local: "Matriz" } },
    { data: addDays(pasc, -2), evento: { titulo: "Sexta-feira Santa · Paixão do Senhor", hora: "15h e 19h30", tipo: "Devoção", local: "Matriz" } },
    { data: addDays(pasc, -1), evento: { titulo: "Vigília Pascal · Sábado de Aleluia", hora: "20h", tipo: "Devoção", local: "Matriz" } },
    { data: pasc, evento: { titulo: "Domingo de Páscoa · almoço comunitário após a missa das 9h", hora: "7h · 9h · 19h", tipo: "Festa", local: "Matriz e salão paroquial" } },
    { data: addDays(pasc, 60), evento: { titulo: "Corpus Christi · procissão", hora: "—", tipo: "Festa", local: "Ruas da cidade" } },
    { data: addDays(pasc, 68), evento: { titulo: "Festa do Sagrado Coração de Jesus", hora: "19h30", tipo: "Festa", local: "R. Liogi Iwaki, 735" } },
    { data: addDays(pasc, 28), evento: { titulo: "Dia Mundial de Oração pelas Vocações (4º domingo da Páscoa)", hora: "9h", tipo: "Igreja no Brasil", local: "Igreja Matriz" } },
    { data: addDays(advento, -7), evento: { titulo: "Cristo Rei · encerramento do ano litúrgico", hora: "7h · 9h · 19h", tipo: "Festa", local: "Matriz" } },
    { data: addDays(advento, -14), evento: { titulo: "Dia Mundial dos Pobres · almoço e partilha com os assistidos da SSVP", hora: "12h", tipo: "Igreja no Brasil", local: "Salão paroquial" } },
    { data: addDays(advento, 14), evento: { titulo: "Coleta para a Evangelização (3º domingo do Advento)", hora: "todas as missas", tipo: "Igreja no Brasil", local: "Matriz e capelas" } },
    { data: addDays(pasc, 48), evento: { titulo: "Vigília e retiro de preparação a Pentecostes com os grupos de oração", hora: "19h30", tipo: "Comunidade", local: "Igreja Matriz" } },
    { data: advento, evento: { titulo: "1º domingo do Advento", hora: "—", tipo: "Devoção", local: "Matriz" } },
    { data: addDays(cinzas, -21), evento: { titulo: "Abertura da Campanha da Fraternidade", hora: "—", tipo: "Festa", local: "Matriz" } },
  ];
}

/** Trezena: 29/05 a 12/06 */
const TREZENA = (ano: number) => ({
  inicio: new Date(ano, 4, 29),
  fim: new Date(ano, 5, 12),
});

export function eventosDoDia(d: Date): EventoAgenda[] {
  const eventos: EventoAgenda[] = [];
  const dow = d.getDay();

  // Nas grandes solenidades a rotina das capelas dá lugar à celebração principal
  const pas = pascoa(d.getFullYear());
  const triduo =
    sameDay(d, addDays(pas, -3)) || sameDay(d, addDays(pas, -2)) ||
    sameDay(d, addDays(pas, -1)) || sameDay(d, pas) ||
    sameDay(d, new Date(d.getFullYear(), 11, 25)) ||
    (d.getMonth() === 5 && d.getDate() === 13);

  // Missas da matriz
  if (dow === 0) {
    eventos.push({ titulo: "Missas dominicais", hora: "7h · 9h · 9h30 (crianças) · 19h", tipo: "Missa", local: "Igreja Matriz" });
  } else {
    const ferial: Record<number, string> = {
      1: "Missa ferial · 7h",
      2: "Missas · 7h e 19h30",
      3: "Missa ferial · 7h",
      4: "Missa ferial · 7h",
      5: "Missa vespertina · 19h30",
    };
    if (ferial[dow] && !triduo)
      eventos.push({ titulo: ferial[dow], hora: "ver horário", tipo: "Missa", local: "Igreja Matriz" });
  }

  // Capelas
  if (!triduo) {
    for (const c of CAPELAS_AGENDA) {
      if (enesimo(d, c.ordem, c.dow)) {
        eventos.push({ titulo: c.nome, hora: "19h30", tipo: "Capela", local: c.local });
      }
    }
  }

  // Trezena
  const t = TREZENA(d.getFullYear());
  if (d >= t.inicio && d <= t.fim) {
    eventos.push({ titulo: "Trezena de Santo Antônio", hora: "19h30", tipo: "Devoção", local: "Igreja Matriz" });
  }

  // Via-Sacra nas sextas-feiras da Quaresma
  const pasc = pascoa(d.getFullYear());
  const emQuaresma = d >= addDays(pasc, -46) && d < addDays(pasc, -3);
  if (emQuaresma && dow === 5) {
    eventos.push({ titulo: "Via-Sacra na matriz", hora: "19h30", tipo: "Devoção", local: "Igreja Matriz" });
  }

  // Novena de Natal durante o Advento
  const adv = primeiroAdvento(d.getFullYear());
  if (d >= adv && d < new Date(d.getFullYear(), 11, 24)) {
    eventos.push({ titulo: "Novena de Natal nas famílias", hora: "nas casas, após a missa", tipo: "Comunidade", local: "Bairros e zona rural" });
  }

  // Encontros de preparação ao matrimônio (um sábado por mês, exceto nas solenidades)
  if (enesimo(d, 1, 6) && !triduo) {
    eventos.push({ titulo: "Encontro de preparação ao matrimônio", hora: "14h às 18h", tipo: "Sacramento", local: "Salão paroquial" });
  }

  // Batizados comunitários (um domingo por mês, exceto no Advento e na Quaresma)
  if (enesimo(d, 1, 0) && !emQuaresma && d < adv) {
    eventos.push({ titulo: "Batizados comunitários", hora: "após a missa das 9h", tipo: "Sacramento", local: "Igreja Matriz" });
  }

  // Domingos ligados a uma ordem no mês
  for (const ds of DOMINGOS_ESPECIAIS) {
    if (ds.mes !== d.getMonth() + 1) continue;
    if (ds.ultimo ? ultimoDomingoDoMes(d) : enesimo(d, ds.ordem ?? 0, 0)) eventos.push(ds.evento);
  }

  // Fixos
  for (const f of FIXOS) {
    if (f.mes === d.getMonth() + 1 && f.dia === d.getDate()) eventos.push(f.evento);
  }

  // Móveis
  for (const m of moveis(d.getFullYear())) {
    if (sameDay(m.data, d)) eventos.push(m.evento);
  }

  return eventos;
}

export const MESES = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
];

export const DIAS_SEMANA = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

export const formatarData = (d: Date) =>
  `${d.getDate()} de ${MESES[d.getMonth()].toLowerCase()} de ${d.getFullYear()}`;

export const formatarDataCurta = (d: Date) =>
  `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}`;
