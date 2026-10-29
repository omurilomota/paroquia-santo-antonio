/* =========================================================================
   DADOS FICTÍCIOS — SITE CONCEITO DE PORTFÓLIO
   Paróquia Santo Antônio do Vale · Santa Clara do Vale/SP
   Diocese de Santa Clara · Região Pastoral II · criada em 13/06/1962
   Nenhuma pessoa, endereço ou canal de contato aqui é real.
   ========================================================================= */

export const PARISH = {
  name: "Paróquia Santo Antônio do Vale",
  shortName: "Santo Antônio",
  city: "Santa Clara do Vale",
  state: "SP",
  cep: "17980-000",
  diocese: "Diocese de Santa Clara",
  bispo: "Dom João Carlos Ferreira",
  bispoDesde: "desde 15 de março de 2015",
  dioceseCriacao: "12 de março de 1965",
  catedral: "Catedral de Santa Clara, em Santa Clara do Vale",
  dioceseCidades: "24 cidades",
  province: "Província Eclesiástica de Santa Clara",
  region: "Região Pastoral II",
  criacao: "13 de junho de 1962",
  criacaoAno: 1962,
  address: "Rua das Palmeiras, 245 — Centro",
  addressExtra: "Santa Clara do Vale/SP · CEP 17980-000",
  phones: ["(17) 3555-0102", "(17) 99999-0102"],
  whatsapp: "https://wa.me/5517999990102",
  whatsappLabel: "(17) 99999-0102",
  email: "secretaria@paroquia.exemplo",
  instagram: "@paroquia.exemplo",
  instagramUrl: "https://www.instagram.com/paroquia.exemplo/",
  instagramSeguidores: "1.284",
  instagramPosts: "486 publicações",
  instagramBio: "Rua das Palmeiras, 245 — Centro, Santa Clara do Vale · Diocese de Santa Clara/SP · Adm.: PASCOM",
  facebook: "facebook.com/paroquiasantoantonio.exemplo",
  facebookUrl: "https://www.facebook.com/paroquiasantoantonio.exemplo/",
  facebookSeguidores: "3.412",
  facebookVisitas: "1.208 registros de visita",
  facebookNome: "Paróquia Santo Antônio do Vale",
  atendimento: "Quarta a sábado, das 9h às 11h",
  telefoneFixo: "(17) 3555-0102",
  aniversarioCidade: "13 de junho de 1948",
  emancipacao: "24 de dezembro de 1952",
};

export const NAV_LINKS = [
  { label: "Horários", href: "#horarios" },
  { label: "Liturgia", href: "#liturgia" },
  { label: "Reflexão", href: "#reflexao" },
  { label: "História", href: "#historia" },
  { label: "Padroeiro", href: "#padroeiro" },
  { label: "Capelas", href: "#capelas" },
  { label: "Movimentos", href: "#movimentos" },
  { label: "Sacramentos", href: "#sacramentos" },
  { label: "Agenda", href: "#agenda" },
  { label: "Galeria", href: "#galeria" },
  { label: "Comunidade", href: "#comunidade" },
  { label: "Contato", href: "#contato" },
];

/* ------------------------------ MISSAS · MATRIZ ------------------------------ */

export type MissaFixa = {
  dias: number[]; // 0=domingo ... 6=sábado
  hora: number;
  minuto: number;
  nome: string;
  nota?: string;
};

export const MISSAS: MissaFixa[] = [
  { dias: [0], hora: 7, minuto: 0, nome: "Missa dominical" },
  { dias: [0], hora: 9, minuto: 0, nome: "Missa dominical" },
  { dias: [0], hora: 9, minuto: 30, nome: "Missa das Crianças", nota: "Com a catequese e as crianças da paróquia" },
  { dias: [0], hora: 19, minuto: 0, nome: "Missa dominical" },
  { dias: [1], hora: 7, minuto: 0, nome: "Missa ferial" },
  { dias: [2], hora: 7, minuto: 0, nome: "Missa ferial" },
  { dias: [2], hora: 19, minuto: 30, nome: "Missa vespertina" },
  { dias: [3], hora: 7, minuto: 0, nome: "Missa ferial" },
  { dias: [4], hora: 7, minuto: 0, nome: "Missa ferial" },
  { dias: [5], hora: 19, minuto: 30, nome: "Missa vespertina" },
  { dias: [6], hora: 19, minuto: 30, nome: "Missa vespertina" },
];

export const MISSAS_DOMINICAIS = [
  { dia: "Domingo", horario: "7h", destaque: false },
  { dia: "Domingo", horario: "9h", destaque: false },
  { dia: "Missa das Crianças", horario: "Domingo · 9h30", destaque: true },
  { dia: "Domingo", horario: "19h", destaque: false },
];

export const MISSAS_FERIAIS = [
  { dia: "Terça a sexta", horario: "7h", destaque: false },
  { dia: "Quarta-feira", horario: "19h30", destaque: false },
  { dia: "1ª sexta do mês", horario: "19h30 · Sagrado Coração", destaque: true },
  { dia: "4ª quinta do mês", horario: "19h30", destaque: false },
  { dia: "Sábado", horario: "19h30", destaque: false },
];

export const DEVOCOES = [
  {
    titulo: "Confissões",
    horario: "Quarta a sábado, 9h às 11h",
    texto: "Também antes das missas, ou em qualquer horário combinado com o padre na secretaria paroquial.",
  },
  {
    titulo: "Terço Mariano",
    horario: "Todos os dias, antes da missa das 7h",
    texto: "A comunidade se reúne na matriz para o terço da manhã, em devoção a Nossa Senhora.",
  },
  {
    titulo: "Adoração ao Santíssimo",
    horario: "1ª sexta-feira do mês",
    texto: "Adoração ao Santíssimo Sacramento após a missa das 19h30, encerrada com a bênção do Santíssimo.",
  },
  {
    titulo: "Via-Sacra",
    horario: "Sextas-feiras da Quaresma, 19h30",
    texto: "Caminhada das estações da cruz na matriz, conduzida pelos grupos de reflexão e pela pastoral litúrgica.",
  },
  {
    titulo: "Novena Perpétua",
    horario: "Terças-feiras, após a missa",
    texto: "Os devotos de Santo Antônio se reúnem para as trezenas semanais e a entrega dos pães bentos.",
  },
  {
    titulo: "Grupo de Reflexão",
    horario: "Semana a semana nos bairros",
    texto: "Encontros nas casas das famílias durante a Quaresma, preparando a Páscoa em cada comunidade.",
  },
];

/* --------------------------------- HISTÓRIA --------------------------------- */

export const TIMELINE = [
  {
    year: "1946",
    date: "1º de novembro",
    title: "As terras de Ferreira",
    text: "João Batista Ferreira, residente em São Paulo, compra as terras da região e entrega a administração aos corretores Antônio Lemos e Salvador Prado para o loteamento do patrimônio.",
    tag: "Origem",
  },
  {
    year: "1948",
    date: "13 de junho",
    title: "A cruz de madeira",
    text: "Na data oficial de fundação do vilarejo, é erguida uma cruz de madeira feita pelo senhor Possato em homenagem a Santo Antônio do Vale. A fé católica entra no cotidiano dos desbravadores.",
    tag: "Fé",
  },
  {
    year: "1952",
    date: "24 de dezembro",
    title: "Santa Clara do Vale é emancipada",
    text: "A Lei nº 233 cria o município. A economia cresce com a exploração de madeira de lei e a cafeicultura, e a cidade ganha o apelido de “Cidade Verde”.",
    tag: "Município",
  },
  {
    year: "1962",
    date: "13 de junho",
    title: "Criação da Paróquia",
    text: "Catorze anos após a fundação, a Paróquia Santo Antônio do Vale é canonicamente criada, vinculada à Diocese de Santa Clara, na Região Pastoral II do Oeste Paulista.",
    tag: "Paróquia",
  },
  {
    year: "Hoje",
    date: "2025 · 2026",
    title: "Uma paróquia, dez capelas",
    text: "A paróquia reúne a matriz no Centro e dez capelas filiais — sete na área urbana e três na zona rural — com pastorais, movimentos e a comunicação evangelizadora da PASCOM.",
    tag: "Presente",
  },
];

export const CURIOSIDADES = [
  { n: "01", titulo: "Cidade Verde", texto: "Santa Clara do Vale é conhecida como “Cidade Verde”, referência à Mata Atlântica que cobria a região no tempo dos desbravadores." },
  { n: "02", titulo: "Santaclarense", texto: "O adjetivo pátrio é santaclarense. O nome homenageia Santa Clara de Assis, padroeira das comunidades de fé simples e da vida fraterna." },
  { n: "03", titulo: "Oeste Paulista", texto: "O município integra a região do Oeste Paulista, numa das últimas frentes de colonização do estado de São Paulo." },
  { n: "04", titulo: "13 de junho", texto: "A mesma data vale para os dois aniversários: o da cidade (1948) e o da festa do padroeiro, Santo Antônio do Vale." },
  { n: "05", titulo: "1962", texto: "A paróquia foi criada em 13 de junho de 1962, na festa do padroeiro — o mesmo dia do aniversário da cidade." },
  { n: "06", titulo: "Região Pastoral II", texto: "A paróquia integra a Região Pastoral II da Diocese de Santa Clara, junto às comunidades vizinhas do Oeste Paulista." },
];

export const PADRES_HISTORICOS = [
  {
    nome: "Pe. Anselmo Ribeiro",
    funcao: "Pároco",
    periodo: "Anterior a Pe. Valdo",
    texto: "Pároco que precedeu Pe. Valdir Batista de Souza na condução da comunidade.",
  },
  {
    nome: "Pe. Carlos Eduardo Nunes",
    funcao: "Pároco",
    periodo: "Anterior a Pe. José Carlos",
    texto: "Pároco anterior a Pe. José Carlos Bertoldo, lembrado pela comunidade santaclarense.",
  },
  {
    nome: "Pe. Valdir Batista de Souza",
    funcao: "Pároco · 2017–2022",
    periodo: "Natural de Tupã-SP",
    texto: "Nascido em 24/08/1965, ordenado diácono em 10/07/1999 e presbítero em 22/01/2000. Foi pároco em Garça e Tupi Paulista antes de Santa Clara do Vale; transferido para Flórida Paulista em 2022.",
  },
  {
    nome: "Pe. José Carlos Bertoldo",
    funcao: "Pároco",
    periodo: "Anunciado em novembro de 2021",
    texto: "Anunciado como pároco pela Diocese de Santa Clara em novembro de 2021.",
  },
  {
    nome: "Pe. Sílvio César Andrade",
    funcao: "Vigário",
    periodo: "Serviço paroquial",
    texto: "Serviu como vigário na paróquia, auxiliando nas celebrações e na pastoral.",
  },
  {
    nome: "Pe. Daniel Cordeiro Alves",
    funcao: "Vigário Paroquial",
    periodo: "Natural de Santa Clara do Vale",
    texto: "Filho da terra: serviu como vigário paroquial na comunidade que o viu crescer.",
  },
  {
    nome: "Pe. Paulo Henrique Prado",
    funcao: "Sacerdote · “Pe. PH”",
    periodo: "Natural de Santa Clara do Vale",
    texto: "Natural da cidade e recentemente ordenado sacerdote — motivo de festa para toda a paróquia.",
  },
];

export const CLERO = [
  {
    iniciais: "JS",
    nome: "Pe. Joaquim Ribeiro Lopes",
    cargo: "Pároco",
    nota: "Responsável pela matriz e pelas comunidades filiais. Atendimento na secretaria de quarta a sábado, das 9h às 11h.",
  },
  {
    iniciais: "KC",
    nome: "Pe. Kléber Alexandre Moraes",
    cargo: "Vigário Paroquial",
    nota: "Concelebra nas missas da matriz e nas celebrações das capelas filiais da cidade e do campo.",
  },
  {
    iniciais: "DS",
    nome: "Diác. Dorival Nogueira Pires",
    cargo: "Diácono Permanente",
    nota: "Serviço da Palavra, da liturgia e da caridade: batismos, casamentos, visitas e acolhida.",
  },
];

/* ---------------------------------- CAPELAS ---------------------------------- */

export type Capela = {
  nome: string;
  padroeiro: string;
  endereco: string;
  celebracao: string;
  area: "urbana" | "rural";
  nota: string;
};

export const CAPELAS: Capela[] = [
  {
    nome: "São Miguel Arcanjo",
    padroeiro: "São Miguel Arcanjo",
    endereco: "Av. Campos Sales, 1036",
    celebracao: "4º sábado · 19h30",
    area: "urbana",
    nota: "Comunidade do bairro que celebra o príncipe dos anjos, com festa em 29 de setembro.",
  },
  {
    nome: "Sagrado Coração de Jesus",
    padroeiro: "Sagrado Coração de Jesus",
    endereco: "R. Liogi Iwaki, 735",
    celebracao: "3ª quinta · 19h30",
    area: "urbana",
    nota: "Festa em junho, logo após a Trezena de Santo Antônio, com missa solene e confraternização.",
  },
  {
    nome: "São Francisco",
    padroeiro: "São Francisco de Assis",
    endereco: "R. Bandeirantes, 2004",
    celebracao: "3º sábado · 19h30",
    area: "urbana",
    nota: "Tradicional bênção dos animais em 4 de outubro, reunindo famílias e crianças da comunidade.",
  },
  {
    nome: "São José",
    padroeiro: "São José",
    endereco: "R. São Luiz, 74",
    celebracao: "1º sábado · 19h30",
    area: "urbana",
    nota: "Devoção ao esposo de Maria e padroeiro dos trabalhadores, com festa em 19 de março.",
  },
  {
    nome: "N. Senhora Aparecida",
    padroeiro: "Nossa Senhora Aparecida",
    endereco: "R. Porto Alegre, 1748",
    celebracao: "2º sábado · 19h30",
    area: "urbana",
    nota: "Novena em outubro e coroação da imagem no dia 12, festa da Padroeira do Brasil.",
  },
  {
    nome: "N. Senhora das Graças",
    padroeiro: "Nossa Senhora das Graças",
    endereco: "Centro Comunitário — R. São Salvador, s/n",
    celebracao: "1ª quinta · 19h30",
    area: "urbana",
    nota: "Celebra no centro comunitário do bairro, com a novena das Graças em novembro.",
  },
  {
    nome: "Cristo Redentor",
    padroeiro: "Cristo Redentor",
    endereco: "R. Rio de Janeiro, s/n",
    celebracao: "2ª sexta · 19h30",
    area: "urbana",
    nota: "Comunidade que celebra o Cristo Redentor, com destaque para a festa de Cristo Rei.",
  },
  {
    nome: "N. Senhora Aparecida",
    padroeiro: "Nossa Senhora Aparecida",
    endereco: "Bairro Duas Barras — zona rural",
    celebracao: "4ª quinta · 19h30",
    area: "rural",
    nota: "A capela do Bairro Duas Barras reúne as famílias do campo em torno da Padroeira do Brasil.",
  },
  {
    nome: "N. Senhora de Fátima",
    padroeiro: "Nossa Senhora de Fátima",
    endereco: "Zona rural",
    celebracao: "2ª quinta · 19h30",
    area: "rural",
    nota: "Devoção mariana das famílias do interior, com a novena e a festa em 13 de maio.",
  },
  {
    nome: "São João Batista",
    padroeiro: "São João Batista",
    endereco: "Vila São João — zona rural",
    celebracao: "3ª sexta · 19h30",
    area: "rural",
    nota: "A Vila São João celebra o precursor com festa junina em junho, com missa e quadrilha.",
  },
];

/* --------------------------- MOVIMENTOS E PASTORAIS --------------------------- */

export type Grupo = {
  nome: string;
  sigla?: string;
  categoria: "Pastorais" | "Movimentos" | "Serviços e Grupos";
  texto: string;
  encontro: string;
  icon: string;
};

export const GRUPOS: Grupo[] = [
  {
    nome: "Pastoral da Comunicação",
    sigla: "PASCOM",
    categoria: "Pastorais",
    texto: "Administra o Instagram e o Facebook da paróquia, fotografa as celebrações, produz os avisos e leva a Boa Nova ao mundo digital.",
    encontro: "Planejamento semanal após as missas",
    icon: "radio",
  },
  {
    nome: "Catequese",
    categoria: "Pastorais",
    texto: "Iniciação à vida cristã: eucaristia, crisma e adultos. São anos de caminhada com crianças, jovens e famílias, terminando na grande festa da primeira comunhão.",
    encontro: "Sábados, durante o ano catequético",
    icon: "book",
  },
  {
    nome: "Pastoral Carcerária",
    categoria: "Pastorais",
    texto: "Visita às pessoas privadas de liberdade e apoio às suas famílias, com escuta, oração e ajuda material.",
    encontro: "Visitas conforme agenda com a secretaria",
    icon: "heartHandshake",
  },
  {
    nome: "Pastoral do Batismo",
    categoria: "Pastorais",
    texto: "Prepara os pais e padrinhos para o batismo, com encontro prévio e acolhida no dia da celebração.",
    encontro: "Encontro de pais e padrinhos mensal",
    icon: "baby",
  },
  {
    nome: "Pastoral da Criança",
    categoria: "Pastorais",
    texto: "Acompanha gestantes e crianças de 0 a 6 anos nos bairros e na zona rural, com pesagem, orientação de saúde e solidariedade.",
    encontro: "Visitas mensais às famílias",
    icon: "baby",
  },
  {
    nome: "Pastoral da Saúde",
    categoria: "Pastorais",
    texto: "Leva a comunhão e a oração aos doentes, idosos e acamados da cidade, nos lares e nas internações.",
    encontro: "Visitas semanais às casas e hospitais",
    icon: "stethoscope",
  },
  {
    nome: "Pastoral do Dízimo",
    categoria: "Pastorais",
    texto: "Testemunha a gratidão e a partilha: visita os dizimistas, explica o sentido do dízimo e cuida da sustentação da paróquia.",
    encontro: "Visitas e entrega dos carnês no mês",
    icon: "handHeart",
  },
  {
    nome: "Pastoral Litúrgica",
    categoria: "Pastorais",
    texto: "Prepara as celebrações do ano litúrgico: ornamentação, ministros, leitores, cantos e a boa acolhida da assembleia.",
    encontro: "Reunião mensal de preparação",
    icon: "church",
  },
  {
    nome: "Pastoral Familiar",
    categoria: "Pastorais",
    texto: "Cuida da Semana Nacional da Família, dos encontros de noivos e do acompanhamento dos casais da comunidade.",
    encontro: "Encontros mensais de casais",
    icon: "users",
  },
  {
    nome: "Pastoral da Juventude",
    sigla: "PJ",
    categoria: "Pastorais",
    texto: "Espaço de fé e amizade para os jovens da cidade e do campo, com retiros, vigílias e caminhadas.",
    encontro: "Encontros aos domingos, após a missa das 19h",
    icon: "sparkles",
  },
  {
    nome: "Renovação Carismática Católica",
    sigla: "RCC",
    categoria: "Movimentos",
    texto: "Grupos de oração com louvor, oração pelos irmãos e carismas a serviço da paróquia.",
    encontro: "Grupo de oração semanal",
    icon: "flame",
  },
  {
    nome: "Legião de Maria",
    categoria: "Movimentos",
    texto: "Obra de evangelização porta a porta: visitas às famílias, aos doentes e aos que se afastaram da Igreja.",
    encontro: "Reunião semanal da presidium",
    icon: "users",
  },
  {
    nome: "Apostolado da Oração",
    categoria: "Movimentos",
    texto: "Devoção ao Sagrado Coração de Jesus com a oferta do dia e a comunhão reparadora dos primeiros sextos.",
    encontro: "Encontro no 1º sábado do mês",
    icon: "heart",
  },
  {
    nome: "Sociedade São Vicente de Paulo",
    sigla: "SSVP",
    categoria: "Movimentos",
    texto: "Conferências vicentinas que visitam os pobres, montam cestas de alimentos e promovem mutirões de caridade na cidade.",
    encontro: "Reunião semanal das conferências",
    icon: "handHeart",
  },
  {
    nome: "Encontro de Casais com Cristo",
    sigla: "ECC",
    categoria: "Movimentos",
    texto: "Fins de semana de experiência para casais, com seguimento em círculos de estudo e convívio na paróquia.",
    encontro: "Encontros e círculos conforme calendário",
    icon: "users",
  },
  {
    nome: "Cursilho de Cristandade",
    sigla: "MCC",
    categoria: "Movimentos",
    texto: "Movimento de cursilhistas da Diocese de Santa Clara, com encontros de vivência e o ultreya paroquial.",
    encontro: "Ultreya mensal",
    icon: "sparkles",
  },
  {
    nome: "Apostolado Mãe Rainha",
    categoria: "Movimentos",
    texto: "Visita da imagem peregrina de Nossa Senhora às casas das famílias, com o terço em família e a entrega do Coração Dourado.",
    encontro: "Capelinhas visitadas a cada 15 dias",
    icon: "crown",
  },
  {
    nome: "Terço dos Homens",
    categoria: "Movimentos",
    texto: "Homens da cidade se reúnem para o terço, a partilha e o café, fortalecendo a fé nas famílias.",
    encontro: "Terço semanal, ao amanhecer",
    icon: "users",
  },
  {
    nome: "Ministério de Música",
    categoria: "Serviços e Grupos",
    texto: "As equipes de canto animam as missas de todos os horários, da missa das crianças às celebrações das capelas.",
    encontro: "Ensaios semanais por equipe",
    icon: "music",
  },
  {
    nome: "Ministério de Leitores",
    categoria: "Serviços e Grupos",
    texto: "Proclamam a Palavra nas celebrações e preparam as leituras do dia com antecedência.",
    encontro: "Escala mensal e encontro de formação",
    icon: "scroll",
  },
  {
    nome: "Coroinhas e Acólitos",
    categoria: "Serviços e Grupos",
    texto: "Crianças e adolescentes que servem no altar, com formação litúrgica e encontros próprios.",
    encontro: "Ensaio aos sábados",
    icon: "church",
  },
  {
    nome: "Ministros Extraordinários da Comunhão",
    categoria: "Serviços e Grupos",
    texto: "Levam a Eucaristia aos doentes e acolhem os fiéis, em missão enviada pelo pároco.",
    encontro: "Formação e escala mensal",
    icon: "flame",
  },
  {
    nome: "Campanha da Fraternidade",
    sigla: "CF",
    categoria: "Serviços e Grupos",
    texto: "A cada Quaresma, a paróquia se mobiliza pelo tema da CF, com coleta da solidariedade e ações na cidade.",
    encontro: "Mobilização quaresmal",
    icon: "handHeart",
  },
  {
    nome: "Grupo de Reflexão",
    sigla: "CEBs",
    categoria: "Serviços e Grupos",
    texto: "Pequenas comunidades que se reúnem nas casas dos bairros e vilas para ler a Palavra e partilhar a vida.",
    encontro: "Semanal nas casas das famílias",
    icon: "users",
  },
];

/* -------------------------------- SACRAMENTOS -------------------------------- */

export const SACRAMENTOS = [
  {
    nome: "Batismo",
    icon: "droplet",
    resumo: "A porta da vida cristã, celebrada na matriz e nas capelas filiais.",
    passos: [
      "Procurar a secretaria paroquial para agendar a data da celebração",
      "Participar do encontro de pais e padrinhos",
      "Apresentar a certidão de nascimento da criança",
      "Escolher padrinhos católicos, crismados e casados na Igreja",
    ],
    documento: "Certidão de nascimento e comprovante do encontro de batismo",
  },
  {
    nome: "Eucaristia",
    icon: "flame",
    resumo: "A primeira comunhão é preparada pela catequese durante o ano catequético.",
    passos: [
      "Inscrição na catequese na secretaria paroquial",
      "Participação nas missas dominicais e nos encontros",
      "Celebração da primeira eucaristia, geralmente em novembro",
      "Seguimento na catequese de crisma",
    ],
    documento: "Certidão de batismo atualizada",
  },
  {
    nome: "Crisma",
    icon: "dove",
    resumo: "O selo do Espírito Santo, com preparação de um a dois anos.",
    passos: [
      "Inscrição do jovem ou adulto na catequese crismal",
      "Participação nos encontros e no retiro preparatório",
      "Escolha de um padrinho ou madrinha crismado",
      "Celebração presidida pelo bispo ou pelo pároco",
    ],
    documento: "Certidão de batismo e de primeira comunhão",
  },
  {
    nome: "Matrimônio",
    icon: "rings",
    resumo: "A aliança do amor, celebrada na matriz ou nas capelas.",
    passos: [
      "Procurar a secretaria com no mínimo 6 meses de antecedência",
      "Participar do encontro de noivos da paróquia",
      "Apresentar a documentação e fazer o processo de habilitação",
      "Escolher as leituras e preparar a celebração com o padre",
    ],
    documento: "Certidões de batismo recentes, RG, comprovante de residência e estado civil",
  },
  {
    nome: "Confissão",
    icon: "shield",
    resumo: "A misericórdia de Deus na reconciliação.",
    passos: [
      "Exame de consciência em oração",
      "Procurar o padre na secretaria ou antes das missas",
      "Confissão e penitência",
      "Acolher a absolvição e recomeçar",
    ],
    documento: "Sem documentação — basta o coração aberto",
  },
  {
    nome: "Unção dos Enfermos",
    icon: "stethoscope",
    resumo: "O conforto de Deus para os doentes e idosos.",
    passos: [
      "Ligar para a secretaria em caso de doença grave",
      "Acompanhamento da pastoral da saúde ao lar",
      "Unção celebrada pelo padre na casa ou no hospital",
    ],
    documento: "Não é necessária documentação",
  },
];

/* ---------------------------------- EVENTOS ---------------------------------- */

export const EVENTOS = [
  {
    periodo: "Quaresma",
    titulo: "Campanha da Fraternidade",
    texto: "Via-Sacra nas sextas-feiras, grupos de reflexão nos bairros, e a coleta da solidariedade no Domingo de Ramos.",
    tag: "Arquidiocese do Brasil",
  },
  {
    periodo: "29 mai — 12 jun",
    titulo: "Trezena de Santo Antônio",
    texto: "Treze dias de missas e novenas na matriz, com pregadores convidados, bênção do pão e a participação das dez comunidades.",
    tag: "Trezena",
  },
  {
    periodo: "13 de junho",
    titulo: "Festa do Padroeiro",
    texto: "Aniversário da cidade e dia de Santo Antônio: missa solene na matriz e carreata com a imagem do santo pelas ruas do Centro.",
    tag: "Festa maior",
  },
  {
    periodo: "Junho",
    titulo: "Sagrado Coração de Jesus",
    texto: "Festa da comunidade da R. Liogi Iwaki, na sequência da Trezena, com missa e confraternização.",
    tag: "Capela",
  },
  {
    periodo: "Junho · julho",
    titulo: "Festas juninas",
    texto: "Quadrilhas, barracas e a festa de São João Batista na Vila São João, com missa na capela do interior.",
    tag: "Comunidade",
  },
  {
    periodo: "Ago — Set",
    titulo: "Semana Nacional da Família",
    texto: "Encontros, celebrações e a visita da imagem de Nossa Senhora às casas das famílias santaclarenses.",
    tag: "Família",
  },
  {
    periodo: "Outubro",
    titulo: "Novena de N. Sra. Aparecida",
    texto: "Nove dias de novena à Padroeira do Brasil, encerrados com a festa e a coroação da imagem em 12 de outubro.",
    tag: "Mariano",
  },
  {
    periodo: "Dezembro",
    titulo: "Natal e Epifania",
    texto: "Novena de Natal, missa do Galo, bênção do menino Jesus e a visita dos Reis Magos às famílias.",
    tag: "Natal",
  },
];

export const SEMANA_SANTA = [
  { dia: "Cinzas", texto: "Quarta-feira · missas às 7h e 19h30, com imposição das cinzas" },
  { dia: "Domingo de Ramos", texto: "Bênção dos ramos na matriz e procissão para a missa" },
  { dia: "Quinta-feira Santa", texto: "Missa da Ceia do Senhor e Lava-Pés, seguida da vigília ao Santíssimo" },
  { dia: "Sexta-feira Santa", texto: "Celebração da Paixão, Via-Sacra e adoração da cruz" },
  { dia: "Sábado de Aleluia", texto: "Vigília Pascal com a bênção do fogo e do círio" },
  { dia: "Domingo de Páscoa", texto: "Missas às 7h, 9h e 19h com a ressurreição" },
];

/* --------------------------------- ORAÇÕES --------------------------------- */

export const ORACAO_SANTO_ANTONIO = {
  titulo: "Oração a Santo Antônio",
  texto:
    "Santo Antônio, vosso ardente amor a Deus, as caridades que abrasaram o vosso peito e a vossa imensa compaixão pelos necessitados, fizeram de vós o taumaturgo, o santo dos milagres. Alegre e satisfeito, venho prostrar-me diante de vós e vos suplico com toda a força da minha alma que me alcanceis o favor que ardentemente desejo. Vós, que fostes tão amável para com os pobres e aflitos, não deixeis de me atender. Assim seja.",
  final: "Pai-Nosso, Ave-Maria e Glória ao Pai.",
};

export const ORACAO_PAO = {
  titulo: "Bênção do pão de Santo Antônio",
  texto:
    "Ó glorioso Santo Antônio, que tivestes a caridade de socorrer os pobres, alcançai-nos o pão de cada dia e a graça de partilhá-lo com os que têm menos. Pão nosso de cada dia nos dai hoje.",
};

/* ---------------------------------- AVISOS ---------------------------------- */

export const AVISOS = [
  {
    titulo: "Inscrições abertas na catequese",
    texto: "Matrículas para a catequese de primeira comunhão e crisma na secretaria paroquial, de quarta a sábado, das 9h às 11h.",
    tag: "Catequese",
    data: "Sempre atualizado",
  },
  {
    titulo: "Intenções de missa",
    texto: "As intenções para o mês seguinte podem ser reservadas na secretaria. Procure com antecedência para escolher a data.",
    tag: "Secretaria",
    data: "Todos os meses",
  },
  {
    titulo: "Dizimistas",
    texto: "A paróquia vive da partilha. Retire seu carnê na secretaria ou fale com a pastoral do dízimo após as missas.",
    tag: "Dízimo",
    data: "Mensal",
  },
  {
    titulo: "Visitas aos doentes",
    texto: "Famílias com doentes ou acamados podem solicitar a visita da pastoral da saúde e a comunhão em casa.",
    tag: "Caridade",
    data: "Semanal",
  },
  {
    titulo: "Encontro de noivos",
    texto: "Casais que vão se casar na Igreja devem procurar a secretaria com no mínimo seis meses de antecedência.",
    tag: "Matrimônio",
    data: "Conforme calendário",
  },
];

/* ------------------------------------ FAQ ------------------------------------ */

export const FAQ = [
  {
    pergunta: "Quais são os horários das missas na Igreja Matriz?",
    resposta:
      "Aos domingos: 7h, 9h, 9h30 (missa das crianças) e 19h. De terça a sexta: 7h. Quarta também às 19h30. Sábado às 19h30. Na 1ª sexta e na 4ª quinta do mês há missa às 19h30.",
  },
  {
    pergunta: "Quando o padre atende na secretaria?",
    resposta:
      "O atendimento do pároco é de quarta a sábado, das 9h às 11h, na secretaria paroquial (Rua das Palmeiras, 245 — Centro). Para assuntos urgentes, ligue para (17) 99999-0102.",
  },
  {
    pergunta: "Como faço para pedir uma intenção de missa?",
    resposta:
      "Basta ir à secretaria no horário de atendimento ou enviar mensagem pelo WhatsApp da paróquia. As intenções podem ser em sufrágio de um falecido, em ação de graças ou por uma necessidade particular.",
  },
  {
    pergunta: "O que é preciso para batizar uma criança?",
    resposta:
      "É necessário agendar na secretaria, participar do encontro de pais e padrinhos, apresentar a certidão de nascimento e escolher padrinhos católicos que tenham recebido o crisma e, se casados, sejam casados na Igreja.",
  },
  {
    pergunta: "Como agendar um casamento na Igreja?",
    resposta:
      "Procure a secretaria com pelo menos seis meses de antecedência. Há um encontro de noivos e um processo de habilitação com documentação (certidões de batismo recentes, documentos pessoais e estado civil).",
  },
  {
    pergunta: "Como saber a programação das capelas do interior?",
    resposta:
      "Cada capela tem sua celebração mensal fixa — por exemplo, N. Sra. de Fátima na 2ª quinta e a Vila São João na 3ª sexta, sempre às 19h30. Consulte a seção Capelas ou a agenda completa do site.",
  },
  {
    pergunta: "A paróquia tem redes sociais?",
    resposta:
      "Sim! A PASCOM administra o Instagram @paroquia.santoantonio.exemplo (1.284 seguidores) e a página no Facebook (3.412 seguidores), com fotos, avisos e a transmissão de celebrações.",
  },
  {
    pergunta: "Como participar das pastorais e movimentos?",
    resposta:
      "Fale com o pároco na secretaria ou procure o coordenador do grupo após a missa. Há pastorais para todas as idades e dons — da comunicação à visita aos doentes.",
  },
];

/* ---------------------------------- GALERIA ---------------------------------- */

export type Foto = {
  src: string;
  titulo: string;
  legenda: string;
  categoria: "Igreja" | "Fé" | "Comunidade" | "Tradições";
  fonte?: string;
};

export const GALERIA: Foto[] = [
  { src: "/images/hero.jpg", titulo: "A casa do Senhor", legenda: "Interior da Igreja Matriz Santo Antônio do Vale, na Rua das Palmeiras, 245.", categoria: "Igreja" },
  { src: "/images/matriz.jpg", titulo: "Matriz no entardecer", legenda: "A matriz no coração de Santa Clara do Vale, a “Cidade Verde”.", categoria: "Igreja" },
  { src: "/images/santo-antonio.jpg", titulo: "Santo Antônio do Vale", legenda: "A imagem do padroeiro, com o Menino Jesus e os lírios.", categoria: "Fé" },
  { src: "/images/velas.jpg", titulo: "Velas acesas", legenda: "As intenções dos fiéis acesas na matriz, todos os dias.", categoria: "Fé" },
  { src: "/images/cruz.jpg", titulo: "A cruz de 1948", legenda: "Erguida em 13 de junho de 1948, na fundação do povoado.", categoria: "Igreja" },
  { src: "/images/comunidade.jpg", titulo: "O terço em família", legenda: "A fé partilhada entre gerações santaclarenses.", categoria: "Comunidade" },
  { src: "/images/catequese.jpg", titulo: "Primeira comunhão", legenda: "A catequese prepara as crianças para a primeira eucaristia.", categoria: "Comunidade" },
  { src: "/images/carreata.jpg", titulo: "Carreata do padroeiro", legenda: "13 de junho: a imagem de Santo Antônio percorre as ruas da cidade.", categoria: "Tradições" },
  { src: "/images/viasacra.jpg", titulo: "Via-Sacra", legenda: "As estações da cruz na Quaresma, sexta a sexta, às 19h30.", categoria: "Fé" },
  { src: "/images/festa.jpg", titulo: "Confraternização", legenda: "As festas da paróquia reúnem a cidade e o campo à mesma mesa.", categoria: "Tradições" },
  {
    src: "https://images.pexels.com/photos/8718469/pexels-photo-8718469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    titulo: "Entre velas e terços",
    legenda: "A oração silenciosa dos que passam pela matriz durante o dia.",
    categoria: "Fé",
    fonte: "Mikhail Nilov · Pexels",
  },
  {
    src: "https://images.pexels.com/photos/28896493/pexels-photo-28896493.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    titulo: "A luz que atravessa",
    legenda: "Os vitrais colorindo o interior da casa de Deus.",
    categoria: "Igreja",
    fonte: "Berna · Pexels",
  },
  {
    src: "https://images.pexels.com/photos/5875445/pexels-photo-5875445.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    titulo: "O rosário do padre",
    legenda: "A oração diária que sustenta o ministério.",
    categoria: "Fé",
    fonte: "RDNE Stock project · Pexels",
  },
  {
    src: "https://images.pexels.com/photos/35761561/pexels-photo-35761561.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    titulo: "Vela, terço e livro",
    legenda: "Os símbolos da primeira comunhão nas mãos das crianças.",
    categoria: "Comunidade",
    fonte: "Jhon Macias · Pexels",
  },
];

/* --------------------------- REFLEXÕES (por tempo litúrgico) --------------------------- */

export const REFLEXOES: Record<string, { titulo: string; texto: string; pratica: string; evangelista: string }> = {
  "Tempo do Advento": {
    titulo: "Esperar com o coração desperto",
    texto:
      "O Advento não é a espera de quem não tem o que fazer: é a vigília de quem sabe que o Senhor vem. Em Santa Clara do Vale, onde tudo começou com uma cruz de madeira no meio do mato, aprender a esperar é parte da nossa história — os desbravadores esperaram pelas primeiras casas, pela primeira capela, pela primeira missa. Esperar em fé é construir.",
    pratica: "Reze o terço em família uma vez por semana e acenda uma vela na coroa do Advento.",
    evangelista: "O Evangelho que nos acompanha neste ano foi escrito por",
  },
  "Tempo do Natal": {
    titulo: "Deus escolheu nascer aqui dentro",
    texto:
      "O Filho de Deus não nasceu em palácio, mas numa gruta; não chegou com exércitos, mas com o silêncio de um recém-nascido. É a lógica de Deus: fazer-se pequeno para caber na nossa vida. Neste tempo, a paróquia se abre às famílias que retornam, aos que passam o ano distantes — a casa está aberta, como a manjedoura.",
    pratica: "Leve a imagem do Menino Jesus para a bênção e visite alguém que está só neste Natal.",
    evangelista: "A infância de Jesus que contemplamos neste ano nos é contada por",
  },
  Quaresma: {
    titulo: "Quarenta dias para voltar ao essencial",
    texto:
      "A Quaresma é a estrada da Páscoa. Não é um tempo triste, mas um tempo sério: orar mais, jejuar do que nos pesa, repartir com quem tem menos. A Campanha da Fraternidade nos lembra que a conversão pessoal precisa virar cuidado com o próximo — na nossa cidade e no nosso interior.",
    pratica: "Participe da Via-Sacra de sexta a sexta e procure o sacramento da reconciliação.",
    evangelista: "O caminho da cruz que percorremos neste ano é narrado por",
  },
  "Tempo Pascal": {
    titulo: "A pedra foi removida",
    texto:
      "As mulheres foram ao túmulo levar perfume e encontraram a vida. É assim que Deus surpreende: transforma o luto em anúncio, o medo em missão. Cinquenta dias para aprender a viver como ressuscitados — com gratidão, partilha e coragem de dizer que o amor é mais forte.",
    pratica: "Leia um trecho dos Atos dos Apóstolos por dia e partilhe com alguém.",
    evangelista: "As aparições do Ressuscitado que ouvimos neste ano vêm de",
  },
  "Tempo Comum": {
    titulo: "A santidade do dia a dia",
    texto:
      "O tempo comum é o mais longo — e o mais parecido com a nossa vida real. São as missas das 7h de terça a sexta, o trabalho na lavoura, a escola das crianças, a visita ao doente. É aqui, no ordinário, que a fé se torna concreta: um dízimo oferecido, um prato de comida partilhado, uma palavra de consolo.",
    pratica: "Escolha uma obra de misericórdia para viver esta semana e persevera nela.",
    evangelista: "Os evangelhos das domingos deste ano nos são proclamados por",
  },
  "Tríduo Pascal": {
    titulo: "Os três dias que salvam o mundo",
    texto:
      "Lava-pés, cruz e fogo novo: no Tríduo Pascal a paróquia inteira acompanha Jesus na última ceia, no calvário e na manhã da ressurreição. São os dias mais importantes do ano — vale deixar tudo para viver a Vigília Pascal com a comunidade.",
    pratica: "Participe das três celebrações do Tríduo e leve uma pessoa consigo.",
    evangelista: "A paixão que contemplamos neste ano foi escrita por",
  },
};

export const TRANSMISSAO = {
  titulo: "Assista às missas de casa",
  texto:
    "Quem não pode vir à matriz acompanha as celebrações pelas redes sociais da paróquia, com a transmissão cuidada pela PASCOM.",
  instagram: PARISH.instagramUrl,
  facebook: PARISH.facebookUrl,
};

/* ------------------------------- NÚMEROS DA CASA ------------------------------ */

export const STATS = [
  { valor: 1962, rotulo: "Criação da paróquia", sufixo: "" },
  { valor: 10, rotulo: "Capelas filiais", sufixo: "" },
  { valor: 3, rotulo: "Clérigos a serviço", sufixo: "" },
  { valor: 1284, rotulo: "Seguidores no Instagram", sufixo: "" },
];

export const CIDADE = {
  nome: "Santa Clara do Vale",
  fundacao: "13 de junho de 1948",
  emancipacao: "24 de dezembro de 1952",
  fundador: "João Batista Ferreira",
  apelido: "Cidade Verde",
  adjetivo: "santaclarense",
  regiao: "oeste paulista — oeste do estado de São Paulo",
  economia: "Exploração de madeira de lei e cafeicultura",
  significado: "Do grego “polis” (cidade): cidade do Ferreira",
};

/* ------------------------- CANAIS DE FALA COM OS GRUPOS ------------------------- */

export type Canal = "whatsapp" | "instagram" | "facebook" | "telefone" | "email";

export const CANAIS: Record<Canal, { rotulo: string; curto: string }> = {
  whatsapp: { rotulo: "WhatsApp da secretaria", curto: "WhatsApp" },
  instagram: { rotulo: "Instagram da paróquia", curto: "Instagram" },
  facebook: { rotulo: "Facebook da paróquia", curto: "Facebook" },
  telefone: { rotulo: "Telefone fixo", curto: "Telefone" },
  email: { rotulo: "E-mail paroquial", curto: "E-mail" },
};

/**
 * Os grupos não mantêm páginas próprias: quem responde por eles é a secretaria
 * e a PASCOM, que publica os avisos de cada pastoral nas redes oficiais.
 * Aqui está o caminho mais curto para falar com cada um.
 */
const CANAIS_POR_GRUPO: Record<string, Canal[]> = {
  "Pastoral da Comunicação": ["instagram", "facebook", "whatsapp"],
  Catequese: ["whatsapp", "telefone"],
  "Pastoral do Batismo": ["whatsapp", "telefone"],
  "Pastoral Familiar": ["whatsapp", "telefone"],
  "Pastoral do Dízimo": ["whatsapp", "email"],
  "Pastoral da Saúde": ["whatsapp", "telefone"],
  "Pastoral Carcerária": ["whatsapp"],
  "Pastoral da Criança": ["whatsapp", "telefone"],
  "Pastoral Litúrgica": ["whatsapp", "instagram"],
  "Pastoral da Juventude": ["instagram", "whatsapp"],
  "Renovação Carismática Católica": ["instagram", "whatsapp"],
  "Terço dos Homens": ["whatsapp", "telefone"],
  "Apostolado Mãe Rainha": ["whatsapp", "instagram"],
  "Sociedade São Vicente de Paulo": ["whatsapp", "email"],
  "Ministério de Música": ["whatsapp", "instagram"],
};

export function canaisDoGrupo(nome: string): Canal[] {
  return CANAIS_POR_GRUPO[nome] ?? ["whatsapp", "instagram"];
}

/** Mensagem pronta para cada canal, já identificando o grupo. */
export function linkCanal(canal: Canal, grupo: string): string {
  const assunto = grupo ? `o grupo ${grupo}` : "a paróquia";
  switch (canal) {
    case "whatsapp":
      return `${PARISH.whatsapp}?text=${encodeURIComponent(
        `Olá! Gostaria de falar com ${assunto} da Paróquia Santo Antônio de Santa Clara do Vale.`
      )}`;
    case "telefone":
      return `tel:+551735550102`;
    case "email":
      return `mailto:${PARISH.email}?subject=${encodeURIComponent(`Contato — ${grupo || "Paróquia"}`)}`;
    case "instagram":
      return PARISH.instagramUrl;
    case "facebook":
      return PARISH.facebookUrl;
  }
}
