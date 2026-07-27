export type PersonalizedStudy = {
  id: string;
  name: string;
  priceInCents: number;
  priceLabel: string;
  badge: string;
  summary: string;
  features: readonly string[];
};

export type FreeEbook = {
  id: string;
  name: string;
  badge: string;
  summary: string;
  pdfPath: string;
  coverPath: string;
};

export type PaidEbook = {
  id: string;
  name: string;
  subtitle: string;
  author: string;
  category: string;
  priceInCents: number;
  priceLabel: string;
  summary: string;
  features: readonly string[];
  coverPath: string;
};

export const personalizedStudies: readonly PersonalizedStudy[] = [
  {
    id: "numerologia-profunda",
    name: "Numerologia Profunda",
    priceInCents: 1890,
    priceLabel: "R$ 18,90",
    badge: "Numerologia",
    summary:
      "Seus números revelam padrões, talentos, desafios e ciclos que acompanham sua jornada desde o nascimento.",
    features: ["Caminho de vida", "Forças ocultas", "Potenciais de prosperidade", "Ciclos do momento atual"]
  },
  {
    id: "descubra-seu-anjo-da-guarda",
    name: "Descubra seu Anjo da Guarda",
    priceInCents: 2790,
    priceLabel: "R$ 27,90",
    badge: "Anjo",
    summary:
      "Conheça o Anjo Cabalístico ligado à sua jornada, seus dons espirituais e as mensagens que ele traz.",
    features: ["Anjo Cabalístico", "Dons espirituais", "Mantra personalizado", "Ritual de 21 dias"]
  },
  {
    id: "a-sua-roda-de-samsara",
    name: "A sua Roda de Samsara",
    priceInCents: 6990,
    priceLabel: "R$ 69,90",
    badge: "Kármico",
    summary:
      "Uma leitura sobre o ciclo que se repete, o desejo da alma, o medo oculto e a virtude de libertação.",
    features: ["Roda principal", "Desejo da alma", "Medo e ganho oculto", "Portal da próxima fase"]
  },
  {
    id: "caminhos-de-vidas-passadas",
    name: "Caminhos de Vidas Passadas",
    priceInCents: 15090,
    priceLabel: "R$ 150,90",
    badge: "Akáshico",
    summary:
      "Um estudo sobre talentos antigos, padrões que se repetem e memórias espirituais que ainda influenciam sua vida.",
    features: ["Memórias da alma", "Talentos de outras épocas", "Padrões repetidos", "Caminhos de libertação"]
  },
  {
    id: "parceiro-ideal",
    name: "Parceiro Ideal",
    priceInCents: 15090,
    priceLabel: "R$ 150,90",
    badge: "Relacionamentos",
    summary:
      "Revela o perfil energético mais compatível com sua essência, seus padrões afetivos e suas necessidades emocionais.",
    features: ["Perfil afetivo", "Compatibilidade da alma", "Padrões inconscientes", "Necessidades emocionais"]
  },
  {
    id: "perfil-mediunico",
    name: "Perfil Mediúnico",
    priceInCents: 15090,
    priceLabel: "R$ 150,90",
    badge: "Mediunidade",
    summary:
      "Revela sua sensibilidade espiritual e oferece orientações para compreender seus dons com equilíbrio.",
    features: ["Sensibilidade espiritual", "Formas de mediunidade", "Missão de alma", "Equilíbrio e proteção"]
  },
  {
    id: "codigo-galactico-origem-estelar",
    name: "Código Galáctico",
    priceInCents: 19890,
    priceLabel: "R$ 198,90",
    badge: "Estelar",
    summary:
      "Uma leitura sobre possíveis origens estelares da consciência, dons espirituais e missão encarnatória.",
    features: ["Origem estelar", "Missão terrena", "Dons espirituais", "Desafios evolutivos"]
  },
  {
    id: "16-chaves-do-destino",
    name: "Por Que a Vida Trava - As 16 Chaves do Destino",
    priceInCents: 19890,
    priceLabel: "R$ 198,90",
    badge: "Destino",
    summary:
      "Dezesseis pontos revelam onde a vida perde movimento e quais caminhos podem favorecer novas escolhas.",
    features: ["16 chaves pessoais", "Dinheiro e trabalho", "Amor e vínculos", "Heranças e caminhos de liberação"]
  },
  {
    id: "feridas-da-alma",
    name: "Feridas da Alma",
    priceInCents: 22590,
    priceLabel: "R$ 225,90",
    badge: "Cura emocional",
    summary:
      "Identifica marcas emocionais, padrões inconscientes e ciclos que pedem compreensão e transformação.",
    features: ["Marcas emocionais", "Padrões inconscientes", "Heranças espirituais", "Caminho de transformação"]
  },
  {
    id: "dois-anjos-seis-daemons",
    name: "Os 2 Anjos e os 6 Daemons",
    priceInCents: 22590,
    priceLabel: "R$ 225,90",
    badge: "Luz e sombra",
    summary:
      "Um estudo iniciático sobre forças em ressonância com seus dons, escolhas, vitalidade, trabalho e proteção.",
    features: ["2 Anjos da jornada", "6 Daemons de influência", "Dons e perigos", "Luz, sombra e correções"]
  },
  {
    id: "verdade-sobre-seus-orixas",
    name: "A Verdade Sobre seus Orixás",
    priceInCents: 22590,
    priceLabel: "R$ 225,90",
    badge: "Orixás",
    summary:
      "Revela forças dos Orixás presentes em sua jornada, seus dons, aprendizados e caminhos espirituais.",
    features: ["Orixás da jornada", "Forças ancestrais", "Dons espirituais", "Amor, prosperidade e proteção"]
  },
  {
    id: "seis-odus-que-regem-sua-vida",
    name: "Os 6 Odus que Regem sua Vida",
    priceInCents: 33090,
    priceLabel: "R$ 330,90",
    badge: "Odus",
    summary:
      "Revela seis Odus pessoais e suas relações com aprendizados, decisões, prosperidade e evolução espiritual.",
    features: ["6 Odus pessoais", "Aprendizados ancestrais", "Decisões e relacionamentos", "Prosperidade e evolução"]
  }
];

export const paidEbooks: readonly PaidEbook[] = [
  {
    id: "despertar-conexao-angelical",
    name: "O Despertar da Conexão Angelical",
    subtitle: "Seu guia de luz na jornada terrena.",
    author: "Wanessa Lingner",
    category: "Ebooks Premium",
    priceInCents: 2790,
    priceLabel: "R$ 27,90",
    summary:
      "Um e-book prático sobre os Anjos pela visão do Hermetismo e da Alta Magia para proteção, equilíbrio e crescimento interior.",
    features: [
      "Energias angelicais",
      "Hermetismo e Alta Magia",
      "Práticas de conexão",
      "Proteção espiritual",
      "Equilíbrio e crescimento interior",
      "Entrega digital em PDF"
    ],
    coverPath: "/ebooks-pagos/capas/despertar-conexao-angelical.jpg"
  },
  {
    id: "mulher-magnetica",
    name: "A Mulher Magnética",
    subtitle: "Amor-próprio, energia feminina e magnetismo natural.",
    author: "Wanessa Lingner",
    category: "Ebooks Premium",
    priceInCents: 3390,
    priceLabel: "R$ 33,90",
    summary:
      "Um e-book de autoconhecimento, autoestima e despertar feminino para fortalecer a confiança, cuidar de feridas emocionais e desenvolver o magnetismo natural.",
    features: [
      "Autoconhecimento feminino",
      "Autoestima e confiança",
      "Arquétipos femininos",
      "Rituais energéticos",
      "Jornada de 21 dias",
      "Entrega digital em PDF"
    ],
    coverPath: "/ebooks-pagos/capas/mulher-magnetica.jpg"
  },
  {
    id: "exu-pinga-fogo",
    name: "Exu Pinga Fogo — Guardião do Cruzeiro e da Calunga Pequena",
    subtitle: "Conhecimento de casa, fundamento e doutrina viva.",
    author: "Mago Hns Re",
    category: "Ebooks Premium",
    priceInCents: 6990,
    priceLabel: "R$ 69,90",
    summary:
      "Conhecimento de casa sobre a hierarquia, o Brasão de Obaluaê, os fundamentos rituais e o ponto exclusivo do Chefe da Quimbanda do Centro Umbandista Caboclo Aymoré.",
    features: [
      "Hierarquia dos Sete Chefes de Legião",
      "Brasão recebido de Obaluaê",
      "Fundamentos rituais",
      "Elementos, oferendas, dia e hora de trabalho",
      "Ponto cantado exclusivo",
      "Entrega digital em PDF"
    ],
    coverPath: "/ebooks-pagos/capas/exu-pinga-fogo.jpg"
  },
  {
    id: "sete-chefes-exu",
    name: "Os Sete Chefes Cabeça de Exu e os Sete Reinos de Exu",
    subtitle: "Hierarquia, reinos e fundamentos rituais da esquerda.",
    author: "Mago Hns Re",
    category: "Ebooks Premium",
    priceInCents: 6990,
    priceLabel: "R$ 69,90",
    summary:
      "Doutrina da esquerda sobre hierarquia, reinos, fundamentos rituais e os Sete Chefes de Legião de Exu segundo o ensinamento do Centro Umbandista Caboclo Aymoré.",
    features: [
      "Os Sete Chefes Cabeça de Exu",
      "Os Sete Reinos de Exu",
      "Estrutura e hierarquia",
      "Fundamentos rituais da esquerda",
      "Doutrina viva da casa",
      "Entrega digital em PDF"
    ],
    coverPath: "/ebooks-pagos/capas/sete-chefes-exu.jpg"
  },
  {
    id: "os-6-caminhos-de-ori",
    name: "Os 6 Caminhos de Ori",
    subtitle: "Identidade, missão, prosperidade e evolução.",
    author: "Mago Hns Re",
    category: "Ebooks Premium",
    priceInCents: 2790,
    priceLabel: "R$ 27,90",
    summary:
      "Um e-book sobre os 6 Caminhos de Ori, ensinamento ancestral Yorùbá ligado à identidade, à missão, à prosperidade e à evolução.",
    features: [
      "Os 6 Caminhos de Ori",
      "Tradição Yorùbá",
      "Sabedoria de Ifá",
      "Identidade e missão",
      "Odus e evolução",
      "Entrega digital em PDF"
    ],
    coverPath: "/ebooks-pagos/capas/os-6-caminhos-de-ori.jpg"
  },
  {
    id: "o-codigo-hermetico",
    name: "O Código Hermético",
    subtitle:
      "A verdadeira origem da Magia Hermética, da Teurgia e das Forças Planetárias.",
    author: "Mago Hns Re",
    category: "Ebooks Premium",
    priceInCents: 22590,
    priceLabel: "R$ 225,90",
    summary:
      "Uma obra histórica, filosófica e autoral sobre Hermetismo, Magia Hermética, Teurgia e Forças Planetárias, apresentada com contexto, discernimento e experiência.",
    features: [
      "História do Hermetismo",
      "Magia Hermética",
      "Teurgia",
      "Forças Planetárias",
      "Leitura histórica, filosófica e autoral",
      "Entrega digital em PDF"
    ],
    coverPath: "/ebooks-pagos/capas/o-codigo-hermetico.jpg"
  },
  {
    id: "shefa-pantaculo-do-fluxo-divino",
    name: "SHEFA — O Pantáculo do Fluxo Divino",
    subtitle: "Receber. Transformar. Conservar. Ampliar.",
    author: "Mago Hns Re",
    category: "Ebooks Premium",
    priceInCents: 16890,
    priceLabel: "R$ 168,90",
    summary:
      "Um estudo profundo sobre Shefa, Koach e Kli, apresentando o Pantáculo do Fluxo Divino, seus fundamentos bíblicos, simbólicos e autorais, além de práticas para desenvolver capacidade, responsabilidade e prosperidade consciente.",
    features: [
      "Shefa, Koach e Kli",
      "Pantáculo do Fluxo Divino",
      "Fundamentos bíblicos, simbólicos e autorais",
      "Práticas de capacidade e responsabilidade",
      "Prosperidade consciente",
      "Entrega digital em PDF"
    ],
    coverPath: "/ebooks-pagos/capas/shefa-pantaculo-do-fluxo-divino.jpg"
  }
];

const freeEbookData = [
  ["o-que-esta-por-vir", "O Que Está Por Vir", "Profecia", "Uma leitura sobre os ciclos que se aproximam e como se preparar espiritualmente."],
  ["duas-almas-um-caminho", "Duas Almas, Um Caminho", "Amor", "Encontros de alma, vínculos kármicos e aquilo que une duas pessoas além do acaso."],
  ["os-pontos-invisiveis", "Os Pontos Invisíveis do Seu Destino", "Destino", "Os nós ocultos da jornada e aquilo que molda sua vida antes mesmo de você perceber."],
  ["a-energia-que-ninguem-te-apresentou", "A Energia Que Ninguém Te Apresentou", "Energia", "Uma força espiritual presente em você e que poucas pessoas conseguem nomear."],
  ["a-verdade-sobre-os-orixas", "A Verdade Sobre os Orixás", "Orixás", "Conheça sete áreas da vida relacionadas às forças dos Orixás."],
  ["magia-planetaria", "Magia Planetária", "Magia", "Os sete planetas, seus regentes, suas horas e formas de trabalhar essas forças no cotidiano."],
  ["os-16-odus", "Os 16 Odus Principais", "Odus", "Os Odus-raiz de Ifá: essência, luz, sombra e seus ensinamentos para a jornada."],
  ["orixas", "Orixás", "Orixás", "Quem são os Orixás, seus domínios, qualidades e manifestações na vida."],
  ["guias-de-luz", "Guias de Luz", "Guias", "Caboclos, pretos-velhos, marinheiros e outros guias: hierarquia e missão."],
  ["exu-e-pombo-gira", "Exu e Pomba-Gira", "Esquerda", "A força da encruzilhada, seus reinos e sua função espiritual."],
  ["kiumbas-eguns-obsessores", "Kiumbas, Eguns e Obsessores", "Proteção", "O que são, como agem e cuidados diante de influências espirituais negativas."],
  ["os-7-reinos-de-exu", "Os 7 Reinos de Exu", "Reinos", "A estrutura dos sete reinos, seus chefes de legião e a hierarquia da esquerda."],
  ["roda-de-samsara", "Roda de Samsara", "Kármico", "Como os ciclos se repetem, o que nos prende e quais movimentos favorecem a libertação."],
  ["anjos-e-daemons", "Anjos e Daemons", "Anjos", "Hierarquias e forças de luz e sombra que influenciam a jornada da alma."],
  ["estrelas-fixas", "Estrelas Fixas", "Estrelas", "Grandes estrelas do céu e sua relação com dons, desafios e vida espiritual."],
  ["os-7-espiritos-olimpicos", "Os 7 Espíritos Olímpicos", "Olímpicos", "Os sete regentes planetários da magia hermética e seus ensinamentos."],
  ["vidas-passadas", "Vidas Passadas", "Akáshico", "Memórias da alma, padrões repetidos e talentos antigos que ainda influenciam o presente."],
  ["mediunidade", "Mediunidade", "Mediunidade", "O que é mediunidade, como pode se manifestar e cuidados para desenvolver seus dons."],
  ["exu-orixa", "Exu Orixá", "Exu", "A origem yorùbá de Exu, sua diferença dos Exus de Umbanda e seu papel cósmico."]
] as const;

export const freeEbooks: readonly FreeEbook[] = freeEbookData.map(
  ([id, name, badge, summary]) => ({
    id,
    name,
    badge,
    summary,
    pdfPath: `/ebooks-gratuitos/${id}.pdf`,
    coverPath: `/ebooks-gratuitos/capas/${id}.jpg`
  })
);

export function getPersonalizedStudyById(id: string | null | undefined) {
  return personalizedStudies.find((study) => study.id === id);
}

export function getPaidEbookById(id: string | null | undefined) {
  return paidEbooks.find((ebook) => ebook.id === id);
}
