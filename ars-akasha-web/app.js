const modules = [
  { id: "todos", label: "Visao geral", icon: "âœ¦" },
  { id: "mapa", label: "Mapa espiritual", icon: "â˜‰" },
  { id: "odus", label: "Ori e caminhos", icon: "â–¦" },
  { id: "goetia", label: "Luz e sombra", icon: "âœ§" },
  { id: "entidades", label: "Forcas sagradas", icon: "â™¢" },
  { id: "chakras", label: "Corpo sutil", icon: "â—Œ" },
  { id: "clientes", label: "Atendimento", icon: "â˜·" },
  { id: "ferramentas", label: "Estudos", icon: "âš™" },
];

const records = [
  {
    id: "sistema-leitura-natal",
    module: "mapa",
    title: "Mapa espiritual",
    summary: "O mapa espiritual mostra como a pessoa chegou ao mundo: seu ritmo, seus dons, suas escolhas mais naturais e os pontos que pedem consciencia. E a porta de entrada para entender a propria historia com mais clareza.",
    tags: ["astrologia", "metodo", "leitura"],
    correspondences: ["Quem voce veio expressar", "Como sente e reage", "Como entra nos caminhos", "Quais ciclos pedem amadurecimento"],
    nextActions: ["Abrir sua assinatura de nascimento", "Compreender fases importantes da vida", "Receber uma direcao espiritual aplicada ao momento"],
    path: "ARS AKASHA/03-mapa-natal-astrologia/05-mapa-natal-astrologia-espiritual/00-visao-geral/sistema-ars-akasha-leitura-natal.md",
  },
  {
    id: "perfil-mago",
    module: "mapa",
    title: "Metodo Ars Akasha",
    summary: "O Ars Akasha cruza varias camadas para transformar dados em leitura viva. A proposta nao e entregar uma tabela, mas revelar uma historia espiritual que faca sentido na vida real.",
    tags: ["perfil", "referencia", "natal"],
    correspondences: ["Historia de vida", "Padroes repetidos", "Talentos ocultos", "Pontos de correcao"],
    nextActions: ["Unir os sinais em uma narrativa unica", "Separar o essencial do excesso", "Indicar o proximo passo de autoconhecimento"],
    path: "ARS AKASHA/03-mapa-natal-astrologia/05-mapa-natal-astrologia-espiritual/00-visao-geral/perfil-mago-hns-re.md",
  },
  {
    id: "odus-meji",
    module: "odus",
    title: "Ori e caminho espiritual",
    summary: "Ori fala da cabeca espiritual, da direcao interior e dos aprendizados que acompanham a pessoa. Essa camada ajuda a perceber onde existe protecao, desafio e chamado de destino.",
    tags: ["ifa", "ori", "odus"],
    correspondences: ["Essencia espiritual", "Direcao de caminho", "Alertas importantes", "Cuidados de equilibrio"],
    nextActions: ["Abrir potenciais e desafios do Ori", "Ler sinais que se repetem", "Indicar cuidados espirituais e praticos"],
    path: "ARS AKASHA/02-odus-ifa/odus/01-odus-meji",
  },
  {
    id: "omo-odus",
    module: "odus",
    title: "Caminhos profundos do Ori",
    summary: "Depois da primeira chave do Ori, existem caminhos mais profundos que refinam a leitura. Eles mostram nuances, repeticoes e pontos que so aparecem quando a pessoa decide ir alem da curiosidade inicial.",
    tags: ["ifa", "combinacoes", "diagnostico"],
    correspondences: ["Nuances do destino", "Repeticoes familiares ou espirituais", "Cuidado com escolhas", "Caminhos de correcao"],
    nextActions: ["Revelar a combinacao nos estudos", "Traduzir alertas sem assustar", "Indicar praticas simples de equilibrio"],
    path: "ARS AKASHA/02-odus-ifa/odus/02-omo-odus",
  },
  {
    id: "goetia-72",
    module: "goetia",
    title: "Luz e sombra espiritual",
    summary: "Toda pessoa carrega luz, sombra e potenciais que precisam de maturidade. Esta camada ajuda a reconhecer forcas internas, magnetismos, bloqueios e talentos que podem virar poder consciente.",
    tags: ["sombra", "equilibrio", "protecao"],
    correspondences: ["Sombra que pede consciencia", "Magnetismo pessoal", "Poder que precisa de direcao", "Forcas de equilibrio"],
    nextActions: ["Abrir somente quando fizer sentido", "Transformar sombra em lucidez", "Indicar protecao, limite e responsabilidade"],
    path: "ARS AKASHA/05-72-daemons-goetia/01-daemons-goetia",
  },
  {
    id: "shem-anjos",
    module: "goetia",
    title: "Sagrado Anjo Guardiao",
    summary: "O Sagrado Anjo Guardiao revela uma virtude que acompanha a pessoa. Essa camada traz protecao, orientacao e um modo simples de se aproximar da propria luz no cotidiano.",
    tags: ["anjos", "shemhamphorash", "salmos"],
    correspondences: ["Virtude principal", "Salmo de conexao", "Cor de apoio", "Cristais, ervas e aromas"],
    nextActions: ["Aprofundar a virtude pessoal", "Indicar uma pratica de conexao", "Relacionar o anjo com a fase atual da vida"],
    path: "72-shemhamphorasch-angel-james-simpson-extraido.txt",
  },
  {
    id: "tradicoes",
    module: "entidades",
    title: "Forcas sagradas",
    summary: "As forcas sagradas aparecem como espelhos de coragem, cura, protecao e direcao. Elas nao substituem a vida da pessoa, mas ajudam a entender quais qualidades espirituais querem ser despertadas.",
    tags: ["divindades", "tradicoes", "panteoes"],
    correspondences: ["Protecao", "Coragem", "Cura", "Direcao espiritual"],
    nextActions: ["Revelar apenas o que fizer sentido", "Traduzir a forca para a vida pessoal", "Indicar caminhos de cuidado e postura"],
    path: "ARS AKASHA/10-divindades-entidades/01-tradicoes",
  },
  {
    id: "orixas",
    module: "entidades",
    title: "Orixa de coroa",
    summary: "A coroa espiritual mostra presencas de sustentacao, caminho e cuidado. No estudo, um dos Orixas que acompanham essa coroa pode aparecer como forca de orientacao e equilibrio.",
    tags: ["orixas", "umbanda", "yoruba"],
    correspondences: ["Coroa espiritual", "Sustentacao", "Elemento de equilibrio", "Cuidado no caminho"],
    nextActions: ["Revelar nos estudos", "Relacionar com Ori", "Indicar postura, respeito e bem-estar"],
    path: "ARS AKASHA/10-divindades-entidades/01-tradicoes/orixas",
  },
  {
    id: "chakras",
    module: "chakras",
    title: "Chakra principal",
    summary: "O chakra principal mostra um ponto de cuidado para o corpo sutil. Ele ajuda a transformar a leitura em pratica: cor, pedra, incenso, respiracao, presenca e pequenas atitudes de bem-estar.",
    tags: ["chakras", "energia", "corpo sutil"],
    correspondences: ["Cor de apoio", "Elemento", "Mantra", "Pratica de equilibrio"],
    nextActions: ["Aprofundar bloqueios e potenciais", "Indicar um cuidado diario", "Relacionar com pedra, cor e incenso"],
    path: "ARS AKASHA/11-chakras-corpo-sutil/01-7-chakras-principais",
  },
  {
    id: "clientes",
    module: "clientes",
    title: "Atendimento personalizado",
    summary: "A leitura gratuita abre a porta. O atendimento personalizado transforma os dados em um estudo mais completo, com cuidado, profundidade e orientacao para o momento que a pessoa esta vivendo.",
    tags: ["clientes", "relatorios", "dossies"],
    correspondences: ["Leitura inicial", "Pedido pelo WhatsApp", "Entrega personalizada", "Aprofundamento"],
    nextActions: ["Escolher a profundidade do estudo", "Confirmar pelo WhatsApp", "Receber orientacoes e entrega final"],
    path: "ARS AKASHA/01-clientes-relatorios",
  },
  {
    id: "scripts",
    module: "ferramentas",
    title: "Estudos protegidos",
    summary: "Por tras da leitura existem calculos, tabelas e cruzamentos reservados. O cliente nao precisa ver a engrenagem: recebe a mensagem traduzida em linguagem clara, humana e aplicavel.",
    tags: ["scripts", "calculo", "automacao"],
    correspondences: ["Data", "Hora", "Cidade", "Nome completo"],
    nextActions: ["Cruzar as camadas com cuidado", "Traduzir em linguagem clara", "Entregar uma direcao personalizada"],
    path: "ARS AKASHA/08-scripts-ferramentas",
  },
  {
    id: "fontes",
    module: "ferramentas",
    title: "Fundamento dos estudos",
    summary: "Cada leitura nasce de uma base viva: estudo, pratica, experiencia e cruzamento de sistemas. O fundamento fica preservado, enquanto o cliente recebe apenas o essencial para se reconhecer.",
    tags: ["fontes", "pesquisa", "validacao"],
    correspondences: ["Tradicao", "Simbolo", "Experiencia", "Aplicacao pratica"],
    nextActions: ["Preservar o metodo", "Evitar exposicao tecnica", "Mostrar ao cliente o que gera clareza e desejo de aprofundar"],
    path: "ARS AKASHA/10-divindades-entidades/02-registro-fontes",
  },
];

const plans = [
  {
    id: "numerologia-profunda",
    name: "Numerologia Profunda",
    price: "R$ 18,90",
    badge: "Numerologia",
    summary: "Seus numeros revelam padroes, talentos, desafios, ciclos de vida e potenciais que acompanham sua jornada desde o nascimento.",
    features: [
      "Caminho de Vida",
      "Forcas ocultas",
      "Tendencias emocionais",
      "Potenciais de prosperidade",
      "Aprendizados da alma",
      "Ciclos do momento atual",
    ],
  },
  {
    id: "resumo-roda-de-samsara",
    name: "Resumo da Roda de Samsara",
    price: "R$ 18,90",
    badge: "Karmico",
    summary: "Uma leitura breve e direta sobre o padrao que se repete, o ponto cego que mantem a roda girando e o primeiro passo para mudar.",
    features: [
      "A Roda Principal",
      "O Desejo da Alma",
      "Apego, aversao e ignorancia",
      "No karmico",
      "Medo e ganho oculto",
      "Caminho pratico de despertar",
    ],
  },
  {
    id: "dossie-roda-de-samsara",
    name: "Dossie da Roda de Samsara",
    price: "R$ 57,90",
    badge: "Karmico",
    summary: "Um estudo mais completo sobre o ciclo que se repete, o desejo da alma, o medo oculto, o ganho inconsciente e a virtude de libertacao.",
    features: [
      "A Roda Principal",
      "O Desejo da Alma",
      "O Motor da Roda",
      "Reino predominante",
      "Medo e ganho oculto",
      "Portal da proxima fase",
    ],
  },
  {
    id: "roda-de-samsara-profunda",
    name: "Roda de Samsara Profunda",
    price: "R$ 198,90",
    badge: "Premium Karmico",
    summary: "Uma leitura karmica aprofundada para compreender repeticoes, pontos cegos, nos emocionais e caminhos de despertar com orientacao mais detalhada.",
    features: [
      "Dossie completo da roda",
      "Analise profunda dos padroes",
      "Desejo da alma e no karmico",
      "Medo, ganho oculto e ponto cego",
      "Virtude de libertacao",
      "Plano pratico de despertar",
    ],
  },
  {
    id: "descubra-seu-anjo-da-guarda",
    name: "Descubra seu Anjo da Guarda",
    price: "R$ 27,90",
    badge: "Anjo",
    summary: "Descubra qual Anjo Cabalistico rege sua jornada, seus dons espirituais e as mensagens que ele traz para sua evolucao.",
    features: [
      "Anjo Cabalistico",
      "Dons espirituais",
      "Letras sagradas em hebraico",
      "Mantra personalizado",
      "Cristais, ervas e incensos",
      "Ritual de 21 Dias",
    ],
  },
  {
    id: "despertar-da-conexao-angelical",
    name: "O Despertar da Conexao Angelical",
    price: "R$ 27,90",
    badge: "E-book",
    summary: "E-book pratico sobre os Anjos pela visao do Hermetismo e da Alta Magia para protecao, equilibrio e crescimento interior.",
    features: [
      "Produto digital em e-book",
      "Energias angelicais",
      "Hermetismo e Alta Magia",
      "Praticas de conexao",
      "Protecao espiritual",
      "Equilibrio e crescimento interior",
    ],
  },
  {
    id: "caminhos-de-vidas-passadas",
    name: "Caminhos de Vidas Passadas",
    price: "R$ 120,90",
    badge: "Akashico",
    summary: "Um estudo sobre talentos antigos, padroes que se repetem e memorias espirituais que ainda influenciam sua vida atual.",
    features: [
      "Registros Akashicos",
      "Talentos de outras epocas",
      "Padroes repetidos",
      "Memorias da alma",
      "Aprendizados espirituais",
      "Caminhos de libertacao",
    ],
  },
  {
    id: "parceiro-ideal",
    name: "Parceiro Ideal",
    price: "R$ 120,90",
    badge: "Amor",
    summary: "Revela o perfil energetico do parceiro mais compativel com sua essencia, seus padroes afetivos e necessidades emocionais.",
    features: [
      "Perfil energetico afetivo",
      "Compatibilidade da alma",
      "Padroes inconscientes",
      "Necessidades emocionais",
      "Tendencias afetivas",
      "Astrologia e energia da alma",
    ],
  },
  {
    id: "perfil-mediunico",
    name: "Perfil Mediunico",
    price: "R$ 120,90",
    badge: "Mediunidade",
    summary: "Revela sua sensibilidade espiritual, formas de mediunidade, missao de alma e orientacoes para desenvolver seus dons com equilibrio.",
    features: [
      "Sensibilidade espiritual",
      "Formas de mediunidade",
      "Missao de alma",
      "Potenciais energeticos",
      "Equilibrio e protecao",
      "Bonus: rituais para 12 meses",
    ],
  },
  {
    id: "codigo-galactico-origem-estelar",
    name: "Codigo Galactico",
    price: "R$ 198,90",
    badge: "Estelar",
    summary: "Uma leitura sobre possiveis origens estelares da consciencia, dons espirituais, missao encarnatoria e legado da alma.",
    features: [
      "Origem estelar",
      "Missao terrena",
      "Dons espirituais",
      "Tecnologias energeticas naturais",
      "Desafios evolutivos",
      "Legado da alma",
    ],
  },
  {
    id: "feridas-da-alma",
    name: "Feridas da Alma",
    price: "R$ 198,90",
    badge: "Cura",
    summary: "Identifica marcas emocionais profundas, padroes inconscientes, herancas espirituais e ciclos que pedem transformacao.",
    features: [
      "Marcas emocionais",
      "Padroes inconscientes",
      "Herancas espirituais",
      "Ciclos repetidos",
      "Origem da dor",
      "Caminho de transformacao",
    ],
  },
  {
    id: "seis-odus-que-regem-sua-vida",
    name: "Os 6 Odus que Regem sua Vida",
    price: "R$ 150,90",
    badge: "Odus",
    summary: "Revela os 6 Odus que influenciam sua existencia, seus aprendizados, desafios, potenciais e caminhos espirituais.",
    features: [
      "6 Odus pessoais",
      "Aprendizados ancestrais",
      "Desafios e potenciais",
      "Decisoes e relacionamentos",
      "Prosperidade",
      "Evolucao espiritual",
    ],
  },
  {
    id: "dois-anjos-seis-daemons",
    name: "Os 2 Anjos e os 6 Daemons",
    price: "R$ 225,90",
    badge: "Luz e Sombra",
    summary: "Revela energias luminosas e sombrias que influenciam dons, desafios, potenciais ocultos e padroes repetitivos.",
    features: [
      "2 Anjos da jornada",
      "6 Daemons de influencia",
      "Dons e desafios",
      "Potenciais ocultos",
      "Padroes negativos",
      "Transformacao do poder pessoal",
    ],
  },
  {
    id: "verdade-sobre-seus-orixas",
    name: "A Verdade Sobre seus Orixas",
    price: "R$ 225,90",
    badge: "Orixas",
    summary: "Revela os Orixas mais presentes em sua jornada, seus dons espirituais, aprendizados karmicos e caminhos de alma.",
    features: [
      "Orixas da jornada",
      "Forcas ancestrais",
      "Dons espirituais",
      "Aprendizados karmicos",
      "Amor, prosperidade e protecao",
      "Missao da alma",
    ],
  },
  {
    id: "the-book-of-your-life",
    name: "The Book of your Life",
    price: "R$ 498,90",
    badge: "Em construcao",
    summary: "Um estudo maior do ARS AKASHA, em construcao, pensado para reunir camadas profundas da jornada espiritual.",
    features: [
      "Projeto em construcao",
      "Leitura ampliada",
      "Camadas da vida",
      "Jornada espiritual",
      "Entrega especial",
      "Acompanhamento pelo WhatsApp",
    ],
  },
  {
    id: "ebook-a-mulher-magnetica",
    name: "A Mulher Magnetica",
    price: "R$ 33,90",
    badge: "E-book",
    summary: "E-book de autoconhecimento, autoestima e despertar feminino para fortalecer confianca, curar feridas emocionais e desenvolver magnetismo natural.",
    features: [
      "Produto digital em e-book",
      "Autoconhecimento feminino",
      "Autoestima e confianca",
      "Arquetipos femininos",
      "Rituais energeticos",
      "Jornada de 21 dias",
    ],
  },
  {
    id: "ebook-os-6-caminhos-de-ori",
    name: "Os 6 Caminhos de Ori",
    price: "R$ 27,90",
    badge: "E-book",
    summary: "E-book sobre os 6 Caminhos de Ori, ensinamento ancestral Yoruba ligado a identidade, missao, prosperidade e evolucao.",
    features: [
      "Produto digital em e-book",
      "6 Caminhos de Ori",
      "Tradicao Yoruba",
      "Sabedoria de Ifa",
      "Identidade e missao",
      "Odus e evolucao",
    ],
  },
];

const whatsappConfig = {
  number: "5544997038883",
};

function getRandomFeaturedPlanId() {
  const eligiblePlans = plans.filter((plan) => plan.id !== "the-book-of-your-life");
  if (!eligiblePlans.length) return "";
  return eligiblePlans[Math.floor(Math.random() * eligiblePlans.length)].id;
}

function getPlanBadge(plan) {
  return plan.id === state.featuredPlanId ? "Mais vendido" : plan.badge;
}

function isEbookPlan(plan) {
  return plan?.badge === "E-book" || plan?.id?.startsWith("ebook-");
}

function getPlanActionLabel(plan) {
  return isEbookPlan(plan) ? "Quero este e-book" : "Quero este estudo";
}

function getPlanPriceValue(plan) {
  return Number(String(plan?.price || "")
    .replace(/[^\d,]/g, "")
    .replace(",", ".")) || 0;
}

function sortPlansForSale(items) {
  return [...items].sort((a, b) => getPlanPriceValue(a) - getPlanPriceValue(b));
}

function getPlanGroupTitle(isEbook) {
  return isEbook ? "E-books digitais" : "Estudos personalizados";
}

function getPlanGroupIntro(isEbook) {
  return isEbook
    ? "Produtos digitais prontos para leitura, estudo pessoal e pratica espiritual."
    : "Leituras preparadas a partir dos dados e caminhos espirituais do cliente.";
}

const oduDatabase = {
  1: { name: "Ejiogbe / Ogbe Meji", path: "ARS AKASHA/02-odus-ifa/odus/01-odus-meji/ejiogbe-ogbe-meji.md" },
  2: { name: "Oyekun Meji", path: "ARS AKASHA/02-odus-ifa/odus/01-odus-meji/oyekun-meji.md" },
  3: { name: "Iwori Meji", path: "ARS AKASHA/02-odus-ifa/odus/01-odus-meji/iwori-meji.md" },
  4: { name: "Idi Meji / Odi Meji", path: "ARS AKASHA/02-odus-ifa/odus/01-odus-meji/idi-meji-odi-meji.md" },
  5: { name: "Iroso Meji / Irosun Meji", path: "ARS AKASHA/02-odus-ifa/odus/01-odus-meji/iroso-meji-irosun-meji-roso-meji.md" },
  6: { name: "Owonrin Meji", path: "ARS AKASHA/02-odus-ifa/odus/01-odus-meji/owonrin-meji.md" },
  7: { name: "Obara Meji", path: "ARS AKASHA/02-odus-ifa/odus/01-odus-meji/obara-meji.md" },
  8: { name: "Okonron Meji / Okanran Meji", path: "ARS AKASHA/02-odus-ifa/odus/01-odus-meji/okonron-meji-okanran-meji-okana-meji.md" },
  9: { name: "Ogunda Meji", path: "ARS AKASHA/02-odus-ifa/odus/01-odus-meji/ogunda-meji.md" },
  10: { name: "Osa Meji", path: "ARS AKASHA/02-odus-ifa/odus/01-odus-meji/osa-meji.md" },
  11: { name: "Ika Meji", path: "ARS AKASHA/02-odus-ifa/odus/01-odus-meji/ika-meji.md" },
  12: { name: "Oturupon Meji / Ejioko", path: "ARS AKASHA/02-odus-ifa/odus/01-odus-meji/oturupon-meji-ejioko-oturukpon-meji.md" },
  13: { name: "Otura Meji / Alafia", path: "ARS AKASHA/02-odus-ifa/odus/01-odus-meji/otura-meji-alafia.md" },
  14: { name: "Irete Meji / Obeogunda", path: "ARS AKASHA/02-odus-ifa/odus/01-odus-meji/irete-meji-obeogunda.md" },
  15: { name: "Ose Meji", path: "ARS AKASHA/02-odus-ifa/odus/01-odus-meji/ose-meji.md" },
  16: { name: "Ofun Meji", path: "ARS AKASHA/02-odus-ifa/odus/01-odus-meji/ofun-meji.md" },
  17: { name: "Ogbe Oyeku / Ogbe Yeku", path: "ARS AKASHA/02-odus-ifa/odus/02-omo-odus/017-ogbe-oyeku-ogbe-yeku.md" },
  18: { name: "Oyeku Logbe / Oyekun Ogbe", path: "ARS AKASHA/02-odus-ifa/odus/02-omo-odus/018-oyeku-logbe-oyekun-ogbe.md" },
  19: { name: "Ogbe Iwori / Ogbe Wehin", path: "ARS AKASHA/02-odus-ifa/odus/02-omo-odus/019-ogbe-iwori-ogbe-wehin.md" },
  20: { name: "Iwori Ogbe / Iwori Bogbe", path: "ARS AKASHA/02-odus-ifa/odus/02-omo-odus/020-iwori-ogbe-iwori-bogbe.md" },
  21: { name: "Ogbe Di / Ogbe Odi", path: "ARS AKASHA/02-odus-ifa/odus/02-omo-odus/021-ogbe-di-ogbe-odi.md" },
  22: { name: "Idigbe / Odi Ogbe", path: "ARS AKASHA/02-odus-ifa/odus/02-omo-odus/022-idigbe-odi-ogbe.md" },
  23: { name: "Ogbe Rosu / Ogbe Irosun", path: "ARS AKASHA/02-odus-ifa/odus/02-omo-odus/023-ogbe-rosu-ogbe-irosun-ogbe-roso.md" },
  24: { name: "Iroso Umbo / Irosun Ogbe", path: "ARS AKASHA/02-odus-ifa/odus/02-omo-odus/024-iroso-umbo-irosun-ogbe.md" },
  25: { name: "Ogbe Owonrin / Ogbe Wonri", path: "ARS AKASHA/02-odus-ifa/odus/02-omo-odus/025-ogbe-owonrin-ogbe-wonri.md" },
  26: { name: "Owonrin Sogbe / Owonrin Ogbe", path: "ARS AKASHA/02-odus-ifa/odus/02-omo-odus/026-owonrin-sogbe-owonrin-ogbe.md" },
  27: { name: "Ogbe Bara / Ogbe Obara", path: "ARS AKASHA/02-odus-ifa/odus/02-omo-odus/027-ogbe-bara-ogbe-obara.md" },
  28: { name: "Obara Bogbe / Obara Ogbe", path: "ARS AKASHA/02-odus-ifa/odus/02-omo-odus/028-obara-bogbe-obara-ogbe.md" },
  29: { name: "Ogbe Okonron / Ogbe Okanran", path: "ARS AKASHA/02-odus-ifa/odus/02-omo-odus/029-ogbe-okonron-ogbe-okanran.md" },
  30: { name: "Okanran Sode / Okanran Ogbe", path: "ARS AKASHA/02-odus-ifa/odus/02-omo-odus/030-okanran-sode-okanran-ogbe.md" },
  31: { name: "Ogbe Ogunda / Ogbe Yono", path: "ARS AKASHA/02-odus-ifa/odus/02-omo-odus/031-ogbe-ogunda-ogbe-yono.md" },
};

const guardianAngelNames = [
  "Vehuiah",
  "Jeliel",
  "Sitael",
  "Elemiah",
  "Mahasiah",
  "Lelahel",
  "Achaiah",
  "Cahethel",
  "Haziel",
  "Aladiah",
  "Laoviah",
  "Hahaiah",
  "Yesalel",
  "Mebahel",
  "Hariel",
  "Hacamiah",
  "Lahuviah",
  "Caliel",
  "Leuviah",
  "Pahaliah",
  "Nelchael",
  "Yeiaiel",
  "Melahel",
  "Haheuiah",
  "Nithhaiah",
  "Haaiah",
  "Ierathel",
  "Seheiah",
  "Reyel",
  "Omael",
  "Lecabel",
  "Vassahiah",
  "Yehuiah",
  "Lehahiah",
  "Chavahiah",
  "Menadel",
  "Aniel",
  "Haamiah",
  "Rehael",
  "Yeiazel",
  "Hahael",
  "Micael",
  "Veuliah",
  "Yelaiah",
  "Sehaliah",
  "Ariel",
  "Assaliah",
  "Mihael",
  "Vehuel",
  "Daniel",
  "Hahassiah",
  "Ymamiah",
  "Nanael",
  "Nithael",
  "Mebahiah",
  "Poiel",
  "Nemamiah",
  "Yeialel",
  "Harahel",
  "Mitsrael",
  "Umabel",
  "Iah-Hel",
  "Anauel",
  "Mehiel",
  "Damabiah",
  "Mamaquel",
  "Ayael",
  "Habuiah",
  "Rochel",
  "Yabamiah",
  "Haiaiel",
  "Mumiah",
];

const angelChoirs = [
  { min: 1, max: 8, choir: "Coro 1 - Serafins", archangel: "Mettraton", theme: "vontade divina, luz primordial e impulso de realizacao" },
  { min: 9, max: 16, choir: "Coro 2 - Querubins", archangel: "Ratziel", theme: "sabedoria oculta, memoria espiritual e revelacao" },
  { min: 17, max: 24, choir: "Coro 3 - Tronos", archangel: "Tsaphkiel", theme: "profundidade, ordem interior e maturidade espiritual" },
  { min: 25, max: 32, choir: "Coro 4 - Dominacoes", archangel: "Tzadkiel", theme: "misericordia, expansao da consciencia e direcao superior" },
  { min: 33, max: 40, choir: "Coro 5 - Potencias", archangel: "Camael", theme: "forca, coragem espiritual e protecao diante das provas" },
  { min: 41, max: 48, choir: "Coro 6 - Virtudes", archangel: "Michael", theme: "equilibrio, protecao luminosa e sustentacao da verdade" },
  { min: 49, max: 56, choir: "Coro 7 - Principados", archangel: "Haniel", theme: "beleza, harmonia, vinculos e expressao da graca" },
  { min: 57, max: 64, choir: "Coro 8 - Arcanjos", archangel: "Rafael", theme: "cura, orientacao, estudo e recomposicao espiritual" },
  { min: 65, max: 72, choir: "Coro 9 - Anjos", archangel: "Gabriel", theme: "mensagem, sensibilidade, protecao cotidiana e caminhos da alma" },
];

const guardianAngelFiles = [
  "01-vehuiah.md",
  "02-jeliel.md",
  "03-sitael.md",
  "04-elemiah.md",
  "05-mahasiah.md",
  "06-lelahel.md",
  "07-achaiah.md",
  "08-cahethel.md",
  "09-haziel.md",
  "10-aladiah.md",
  "11-laoviah.md",
  "12-hahaiah.md",
  "13-yesalel.md",
  "14-mebahel.md",
  "15-hariel.md",
  "16-hacamiah.md",
  "17-lahuviah.md",
  "18-caliel.md",
  "19-leuviah.md",
  "20-pahaliah.md",
  "21-nelchael.md",
  "22-yeiaiel.md",
  "23-melahel.md",
  "24-haheuiah.md",
  "25-nithhaiah.md",
  "26-haaiah.md",
  "27-ierathel.md",
  "28-seheiah.md",
  "29-reyel.md",
  "30-omael.md",
  "31-lecabel.md",
  "32-vassahiah.md",
  "33-yehuiah.md",
  "34-lehahiah.md",
  "35-chavahiah.md",
  "36-menadel.md",
  "37-aniel.md",
  "38-haamiah.md",
  "39-rehael.md",
  "40-yeiazel.md",
  "41-hahael.md",
  "42-micael.md",
  "43-veuliah.md",
  "44-yelaiah.md",
  "45-sehaliah.md",
  "46-ariel.md",
  "47-assaliah.md",
  "48-mihael.md",
  "49-vehuel.md",
  "50-daniel.md",
  "51-hahassiah.md",
  "52-ymamiah.md",
  "53-nanael.md",
  "54-nithael.md",
  "55-mebahiah.md",
  "56-poiel.md",
  "57-nemamiah.md",
  "58-yeialel.md",
  "59-harahel.md",
  "60-mitsrael.md",
  "61-umabel.md",
  "62-iah-hel.md",
  "63-anauel.md",
  "64-mehiel.md",
  "65-damabiah.md",
  "66-mamaquel.md",
  "67-ayael.md",
  "68-habuiah.md",
  "69-rochel.md",
  "70-yabamiah.md",
  "71-haiaiel.md",
  "72-mumiah.md",
];

const guardianAngelPsalms = {
  1: { psalm: "3", verse: "5" },
  2: { psalm: "21", verse: "20" },
  3: { psalm: "90", verse: "2" },
  4: { psalm: "6", verse: "4" },
  5: { psalm: "33", verse: "4" },
  6: { psalm: "9", verse: "11" },
  7: { psalm: "102", verse: "8" },
  8: { psalm: "94", verse: "6" },
  9: { psalm: "24", verse: "6" },
  10: { psalm: "32", verse: "22" },
  11: { psalm: "17", verse: "50" },
  12: { psalm: "9", verse: "11" },
  13: { psalm: "97", verse: "6" },
  14: { psalm: "9", verse: "9" },
  15: { psalm: "93", verse: "22" },
  16: { psalm: "87", verse: "2" },
  17: { psalm: "8", verse: "1" },
  18: { psalm: "7", verse: "9" },
  19: { psalm: "39", verse: "2" },
  20: { psalm: "119", verse: "2" },
  21: { psalm: "30", verse: "18" },
  22: { psalm: "120", verse: "5" },
  23: { psalm: "120", verse: "8" },
  24: { psalm: "32", verse: "18" },
  25: { psalm: "9", verse: "1" },
  26: { psalm: "118", verse: "145" },
  27: { psalm: "139", verse: "1" },
  28: { psalm: "70", verse: "15" },
  29: { psalm: "53", verse: "4" },
  30: { psalm: "70", verse: "6" },
  31: { psalm: "70", verse: "16" },
  32: { psalm: "32", verse: "4" },
  33: { psalm: "33", verse: "11" },
  34: { psalm: "130", verse: "5" },
  35: { psalm: "114", verse: "1" },
  36: { psalm: "25", verse: "8" },
  37: { psalm: "79", verse: "9" },
  38: { psalm: "90", verse: "9" },
  39: { psalm: "29", verse: "13" },
  40: { psalm: "87", verse: "15" },
  41: { psalm: "119", verse: "2" },
  42: { psalm: "120", verse: "7" },
  43: { psalm: "87", verse: "14" },
  44: { psalm: "118", verse: "108" },
  45: { psalm: "93", verse: "18" },
  46: { psalm: "144", verse: "9" },
  47: { psalm: "103", verse: "25" },
  48: { psalm: "97", verse: "3" },
  49: { psalm: "144", verse: "33" },
  50: { psalm: "102", verse: "8" },
  51: { psalm: "103", verse: "32" },
  52: { psalm: "7", verse: "18" },
  53: { psalm: "118", verse: "75" },
  54: { psalm: "102", verse: "19" },
  55: { psalm: "101", verse: "13" },
  56: { psalm: "144", verse: "15" },
  57: { psalm: "113", verse: "18" },
  58: { psalm: "6", verse: "3" },
  59: { psalm: "112", verse: "3" },
  60: { psalm: "144", verse: "18" },
  61: { psalm: "112", verse: "2" },
  62: { psalm: "118", verse: "159" },
  63: { psalm: "2", verse: "11" },
  64: { psalm: "32", verse: "18" },
  65: { psalm: "89", verse: "15" },
  66: { psalm: "37", verse: "22" },
  67: { psalm: "36", verse: "4" },
  68: { psalm: "105", verse: "1" },
  69: { psalm: "15", verse: "5" },
  70: { psalm: "1", verse: "3" },
  71: { psalm: "108", verse: "29" },
  72: { psalm: "114", verse: "7" },
};

const guardianAngelCorrespondences = {
  1: { color: "Vermelho vivo", crystals: "Rubi, Diamante, Granada", incense: "Olibano, Mirra", herbs: "Pimenteiro, Cravo, Alecrim", virtue: "Vontade divina, novos comecos, lideranca" },
  2: { color: "Vermelho e azul", crystals: "Granada, Rubi, Coral", incense: "Rosa, Jasmim", herbs: "Rosa vermelha, Manjerona", virtue: "Amor conjugal, fertilidade, fidelidade" },
  3: { color: "Verde esmeralda", crystals: "Esmeralda, Malaquita", incense: "Benjoim, Sandalo", herbs: "Cipreste, Eucalipto, Hortela", virtue: "Protecao, superacao, nobreza de carater" },
  4: { color: "Azul royal", crystals: "Quartzo azul, Agua-marinha", incense: "Nardo, Olibano", herbs: "Lavanda, Alecrim, Louro", virtue: "Viagens, poder criativo, clareza de destino" },
  5: { color: "Rosa claro", crystals: "Quartzo rosa, Opala", incense: "Rosa, Baunilha", herbs: "Rosa, Camomila, Lirio", virtue: "Paz, harmonia, beleza interior" },
  6: { color: "Dourado, Amarelo", crystals: "Topazio dourado, Ambar", incense: "Olibano, Benjoim", herbs: "Girassol, Camomila, Melissa", virtue: "Cura, luz, fortuna, talento artistico" },
  7: { color: "Lilas, Violeta", crystals: "Ametista, Alexandrita", incense: "Incenso branco, Nardo", herbs: "Violeta, Lavanda, Salvia", virtue: "Paciencia, descoberta de segredos, missao" },
  8: { color: "Laranja, Ambar", crystals: "Jaspe vermelho, Cornalina", incense: "Mirra, Cedro", herbs: "Canela, Cravo, Patchouli", virtue: "Bencaos divinas, fecundidade, gratidao" },
  9: { color: "Rosa e branco", crystals: "Quartzo rosa, Agata rosa", incense: "Rosa, Jasmim, Ylang", herbs: "Rosa branca, Flor de laranjeira", virtue: "Misericordia, perdao, amor universal" },
  10: { color: "Branco puro", crystals: "Selenita, Pedra da lua", incense: "Incenso branco, Olibano", herbs: "Lirio branco, Jasmim, Arruda", virtue: "Graca divina, cura oculta, redencao" },
  11: { color: "Azul celeste", crystals: "Safira, Lapis-lazuli", incense: "Olibano, Nardo", herbs: "Louro, Lavanda, Alecrim", virtue: "Vitoria, revelacao de misterios" },
  12: { color: "Roxo, Violeta", crystals: "Ametista, Fluorita roxa", incense: "Incenso, Mirra", herbs: "Salvia, Angelica, Lavanda", virtue: "Refugio espiritual, sabedoria oculta" },
  13: { color: "Amarelo dourado", crystals: "Citrino, Quartzo amarelo", incense: "Mel, Baunilha, Benjoim", herbs: "Verbena, Melissa, Hortela", virtue: "Fidelidade, memoria, amizade" },
  14: { color: "Branco e dourado", crystals: "Quartzo transparente, Diamante", incense: "Olibano, Cedro", herbs: "Eucalipto, Alecrim, Arruda", virtue: "Verdade, justica, liberdade" },
  15: { color: "Azul claro", crystals: "Aquamarina, Calcedonia azul", incense: "Incenso branco, Rosa", herbs: "Camomila, Tilia, Flor de laranjeira", virtue: "Purificacao, fe, elevacao espiritual" },
  16: { color: "Vermelho e ouro", crystals: "Rubi, Jaspe vermelho", incense: "Cedro, Olibano", herbs: "Carvalho, Alecrim, Cravo", virtue: "Lealdade, nobreza, lideranca" },
  17: { color: "Azul indigo", crystals: "Safira azul, Tanzanita", incense: "Sandalo, Olibano", herbs: "Louro, Salsa, Lavanda", virtue: "Revelacao, filosofia, musica, inspiracao" },
  18: { color: "Branco cristalino", crystals: "Quartzo transparente, Zircao", incense: "Olibano puro, Mirra", herbs: "Arruda, Alecrim, Espinheiro", virtue: "Justica divina, verdade, vitoria" },
  19: { color: "Verde suave", crystals: "Esmeralda, Malaquita", incense: "Rosa, Jasmim, Neroli", herbs: "Rosa, Hortela, Verbena", virtue: "Memoria, inteligencia, aceitacao, graca" },
  20: { color: "Roxo profundo", crystals: "Ametista, Sugilita", incense: "Mirra, Incenso sagrado", herbs: "Salvia, Angelica, Lavanda", virtue: "Redencao, vocacao espiritual, virtude" },
  21: { color: "Azul profundo", crystals: "Lapis-lazuli, Sodalita", incense: "Nardo, Olibano", herbs: "Louro, Junipero, Alecrim", virtue: "Sabedoria, astronomia, ciencias ocultas" },
  22: { color: "Azul e dourado", crystals: "Agua-marinha, Opala azul", incense: "Sandalo, Rosa", herbs: "Algas, Erva-doce, Camomila", virtue: "Fama, fortuna, viagens, diplomacia" },
  23: { color: "Verde hortela", crystals: "Quartzo verde, Crisocola", incense: "Eucalipto, Cedro verde", herbs: "Melisa, Hortela, Alecrim", virtue: "Cura pelas plantas, viagens seguras" },
  24: { color: "Branco e prata", crystals: "Onix branco, Howlita", incense: "Incenso branco, Nardo", herbs: "Lirio, Flor de laranjeira, Arruda", virtue: "Protecao divina, exilio positivo, graca" },
  25: { color: "Violeta profundo", crystals: "Ametista roxa, Charoita", incense: "Sandalo roxo, Mirra", herbs: "Lavanda, Salvia, Angelica", virtue: "Magia sagrada, sabedoria oculta, paz" },
  26: { color: "Azul escuro", crystals: "Safira, Lapis-lazuli escuro", incense: "Cedro, Olibano", herbs: "Louro, Cipreste, Alecrim", virtue: "Politica, diplomacia, missao oculta" },
  27: { color: "Dourado solar", crystals: "Citrino, Heliodoro", incense: "Olibano, Mel, Canela", herbs: "Girassol, Louro, Melissa", virtue: "Civilizacao, liberdade, propagacao da luz" },
  28: { color: "Laranja ambar", crystals: "Cornalina laranja, Ambar", incense: "Benjoim, Mirra, Cedro", herbs: "Canela, Cravo, Semente de cenoura", virtue: "Longevidade, protecao contra doencas" },
  29: { color: "Lilas e branco", crystals: "Ametista lilas, Lepidolita", incense: "Incenso, Rosa, Nardo", herbs: "Lavanda, Camomila, Verbena", virtue: "Libertacao, misticismo, inspiracao" },
  30: { color: "Verde profundo", crystals: "Jade verde, Esmeralda", incense: "Cedro, Patchouli, Sandalo", herbs: "Arruda, Alecrim, Erva-cidreira", virtue: "Paciencia, fecundidade, harmonia" },
  31: { color: "Verde oliva", crystals: "Peridoto, Quartzo verde", incense: "Sandalo, Cedro, Benjoim", herbs: "Oregano, Manjericao, Alecrim", virtue: "Agricultura, conhecimento, talento" },
  32: { color: "Azul ceu e branco", crystals: "Quartzo transparente, Celestita", incense: "Incenso branco, Olibano", herbs: "Verbena, Erva-doce, Camomila", virtue: "Clemencia, nobreza, justica, pureza" },
  33: { color: "Vermelho sangue", crystals: "Rubi, Espinelio vermelho", incense: "Mirra, Olibano, Cedro", herbs: "Alecrim, Cravo, Pimenta-do-reino", virtue: "Lealdade, ordem divina, protecao" },
  34: { color: "Laranja e ouro", crystals: "Cornalina, Jaspe amarelo", incense: "Mel, Benjoim, Incenso", herbs: "Manjerona, Erva-doce, Louro", virtue: "Obediencia, fe, calma, graca divina" },
  35: { color: "Rosa suave", crystals: "Quartzo rosa, Rodocrosita", incense: "Rosa, Jasmim, Baunilha", herbs: "Rosa, Geranio, Camomila", virtue: "Harmonia familiar, amor, reconciliacao" },
  36: { color: "Laranja terra", crystals: "Ambar, Citrino", incense: "Cedro, Patchouli", herbs: "Louro, Tomilho, Alecrim", virtue: "Trabalho, liberdade, preservacao" },
  37: { color: "Verde e rosa", crystals: "Opala, Turmalina multicolorida", incense: "Neroli, Rosa, Ylang-ylang", herbs: "Salvia, Verbena, Erva-cidreira", virtue: "Ciencia, arte, renovacao" },
  38: { color: "Dourado e branco", crystals: "Pedra do sol, Sunstone", incense: "Olibano, Sandalo solar", herbs: "Benjoim, Louro, Alecrim", virtue: "Rituais sagrados, verdade espiritual" },
  39: { color: "Verde esmeralda", crystals: "Esmeralda, Jade imperial", incense: "Sandalo verde, Eucalipto", herbs: "Camomila, Hortela, Erva-cidreira", virtue: "Cura, longevidade, amor filial" },
  40: { color: "Azul claro e lilas", crystals: "Topazio azul, Aquamarina", incense: "Neroli, Bergamota, Rosa", herbs: "Lavanda, Rosa, Verbena", virtue: "Libertacao, consolo, criatividade" },
  41: { color: "Roxo e dourado", crystals: "Ametista, Lepidolita", incense: "Olibano, Mirra sagrada", herbs: "Salvia, Angelica, Arruda", virtue: "Missao espiritual, sacerdocio, fe" },
  42: { color: "Azul royal", crystals: "Safira, Quartzo azul", incense: "Cedro, Junipero, Olibano", herbs: "Louro, Alecrim, Junipero", virtue: "Ordem politica, protecao, lealdade" },
  43: { color: "Dourado ambar", crystals: "Citrino dourado, Pirita", incense: "Canela, Patchouli, Cedro", herbs: "Canela, Cravo, Manjericao", virtue: "Prosperidade, libertacao de bloqueios" },
  44: { color: "Vermelho e ouro", crystals: "Jaspe vermelho, Rubi", incense: "Mirra, Cedro, Olibano", herbs: "Alecrim, Cravo, Louro", virtue: "Vitoria, coragem, karma positivo" },
  45: { color: "Verde e rosa", crystals: "Quartzo rosa, Esmeralda", incense: "Rosa, Camomila, Jasmim", herbs: "Rosa, Erva-doce, Camomila", virtue: "Vontade divina, vitalidade, humildade" },
  46: { color: "Branco e prata", crystals: "Selenita, Pedra da lua", incense: "Nardo, Rosa branca", herbs: "Jasmim, Flor de laranjeira, Lirio", virtue: "Revelacao, percepcao sutil, gratidao" },
  47: { color: "Roxo violeta", crystals: "Ametista, Sugilita roxa", incense: "Sandalo, Incenso sagrado", herbs: "Lavanda, Salvia, Angelica", virtue: "Contemplacao, justica divina, verdade" },
  48: { color: "Rosa e coral", crystals: "Quartzo rosa, Rodocrosita", incense: "Ylang-ylang, Rosa, Jasmim", herbs: "Rosa, Geranio, Jasmim", virtue: "Fertilidade, amor, paz conjugal, intuicao" },
  49: { color: "Azul violeta", crystals: "Safira roxa, Tanzanita", incense: "Olibano, Sandalo azul", herbs: "Lavanda, Louro, Angelica", virtue: "Elevacao espiritual, grandeza, sabedoria" },
  50: { color: "Branco e dourado", crystals: "Opala branca, Topazio branco", incense: "Rosa, Benjoim, Baunilha", herbs: "Camomila, Rosa branca, Verbena", virtue: "Eloquencia, decisao, clemencia, beleza" },
  51: { color: "Roxo intenso", crystals: "Charoita, Ametista escura", incense: "Mirra, Nardo, Olibano", herbs: "Salvia, Angelica, Funcho", virtue: "Medicina universal, ciencias ocultas" },
  52: { color: "Preto e branco", crystals: "Obsidiana, Turmalina negra", incense: "Cedro, Vetiver, Patchouli", herbs: "Arruda, Alecrim, Cipreste", virtue: "Expiacao, libertacao, forca no sofrimento" },
  53: { color: "Roxo e branco", crystals: "Fluorita roxa, Ametista", incense: "Incenso branco, Nardo", herbs: "Lavanda, Salvia, Erva-de-sao-joao", virtue: "Ciencias espirituais, comunicacao sagrada" },
  54: { color: "Verde e rosa", crystals: "Esmeralda, Quartzo verde", incense: "Rosa, Geranio, Jasmim", herbs: "Geranio, Rosa, Camomila", virtue: "Longevidade, escrita sagrada, misericordia" },
  55: { color: "Amarelo ouro", crystals: "Calcita dourada, Topazio", incense: "Mel, Baunilha, Benjoim", herbs: "Melissa, Verbena, Calendula", virtue: "Lucidez moral, devocao, bondade" },
  56: { color: "Verde e dourado", crystals: "Citrino, Pirita dourada", incense: "Canela, Patchouli, Mel", herbs: "Manjericao, Louro, Tomilho", virtue: "Fortuna, esperanca, realizacao de desejos" },
  57: { color: "Azul prateado", crystals: "Aquamarina, Calcedonia azul", incense: "Cedro, Eucalipto, Olibano", herbs: "Alecrim, Eucalipto, Junipero", virtue: "Discernimento, causas justas, prosperidade" },
  58: { color: "Azul cobalto", crystals: "Safira, Lapis-lazuli", incense: "Olibano, Mirra, Cedro", herbs: "Louro, Alecrim, Arruda", virtue: "Forca mental, cura dos olhos, coragem" },
  59: { color: "Amarelo e laranja", crystals: "Citrino, Fluorita amarela", incense: "Mel, Benjoim, Laranja", herbs: "Calendula, Melissa, Verbena", virtue: "Riqueza intelectual, fertilidade, arquivos" },
  60: { color: "Violeta e branco", crystals: "Ametista, Fluorita roxa", incense: "Lavanda, Nardo, Sandalo", herbs: "Lavanda, Salvia, Erva-cidreira", virtue: "Reparacao, virtude interior, cura mental" },
  61: { color: "Azul celeste", crystals: "Aquamarina, Calcita azul", incense: "Neroli, Bergamota, Jasmim", herbs: "Camomila, Erva-doce, Verbena", virtue: "Amizade, afinidade, sensibilidade" },
  62: { color: "Branco lunar", crystals: "Selenita, Howlita branca", incense: "Incenso branco, Rosa branca", herbs: "Camomila, Lirio, Jasmim branco", virtue: "Sabedoria, tranquilidade, filosofia" },
  63: { color: "Branco e ouro", crystals: "Quartzo transparente, Diamante", incense: "Olibano, Incenso puro", herbs: "Alecrim, Louro, Arruda", virtue: "Unidade, protecao, percepcao, saude" },
  64: { color: "Laranja e branco", crystals: "Cornalina, Jaspe laranja", incense: "Laranja, Bergamota, Cedro", herbs: "Calendula, Hortela, Verbena", virtue: "Protecao contra adversidades, inspiracao" },
  65: { color: "Azul oceano", crystals: "Opala azul, Aquamarina", incense: "Eucalipto, Algas, Sandalo", herbs: "Algas marinhas, Erva-doce, Camomila", virtue: "Sabedoria, viagens, boa fortuna" },
  66: { color: "Azul suave", crystals: "Selenita, Calcedonia azul", incense: "Sandalo, Rosa, Camomila", herbs: "Camomila, Lavanda, Melissa", virtue: "Apaziguamento, sonhos, cura da alma" },
  67: { color: "Roxo e prateado", crystals: "Charoita, Sugilita", incense: "Mirra, Nardo, Incenso", herbs: "Angelica, Lavanda, Erva-de-sao-joao", virtue: "Transmutacao, filosofia, longevidade" },
  68: { color: "Verde terra", crystals: "Jade, Peridoto, Turmalina verde", incense: "Cedro, Eucalipto, Hortela", herbs: "Hortela, Arruda, Alecrim verde", virtue: "Cura, agricultura, fecundidade, natureza" },
  69: { color: "Branco e dourado", crystals: "Quartzo transparente, Zircao", incense: "Olibano, Incenso branco", herbs: "Alecrim, Louro, Arruda", virtue: "Restituicao, leis, heranca, descoberta" },
  70: { color: "Dourado e preto", crystals: "Labradorita, Pedra da lua escura", incense: "Palo santo, Mirra, Cedro", herbs: "Arruda, Patchouli, Salvia preta", virtue: "Alquimia, regeneracao, luz interior" },
  71: { color: "Vermelho e ouro", crystals: "Rubi, Granada, Jaspe vermelho", incense: "Mirra, Cedro, Olibano", herbs: "Alecrim, Cravo, Arruda", virtue: "Protecao divina, verdade, vitoria sobre o mal" },
  72: { color: "Branco prateado", crystals: "Quartzo branco, Selenita", incense: "Olibano, Rosa branca, Nardo", herbs: "Lirio, Jasmim, Camomila branca", virtue: "Renascimento, fim de ciclos, saude, sucesso" },
};

const numerologyStoneTable = {
  1: { color: "Vermelho", crystal: "Granada ou jaspe vermelho" },
  2: { color: "Laranja dourado", crystal: "Quartzo rutilado ou calcita laranja" },
  3: { color: "Verde-azulado", crystal: "Amazonita ou quartzo azul" },
  4: { color: "Verde", crystal: "Quartzo verde, esmeralda ou jade verde" },
  5: { color: "Azul claro", crystal: "Agua-marinha" },
  6: { color: "Azul", crystal: "Quartzo azul ou turmalina azul" },
  7: { color: "Roxo", crystal: "Ametista" },
  8: { color: "Amarelo dourado", crystal: "Citrino ou pirita" },
  9: { color: "Rosa", crystal: "Quartzo rosa" },
};

const chakraTable = {
  1: {
    name: "Muladhara",
    label: "Chakra raiz",
    color: "Vermelho",
    element: "Terra",
    mantra: "LAM",
    theme: "seguranca, enraizamento, corpo e pertencimento",
  },
  2: {
    name: "Svadhisthana",
    label: "Chakra sacral",
    color: "Laranja",
    element: "Agua",
    mantra: "VAM",
    theme: "prazer, criatividade, desejo e movimento emocional",
  },
  3: {
    name: "Manipura",
    label: "Chakra do plexo solar",
    color: "Amarelo",
    element: "Fogo",
    mantra: "RAM",
    theme: "vontade, poder pessoal, acao e autoestima",
  },
  4: {
    name: "Anahata",
    label: "Chakra cardiaco",
    color: "Verde",
    element: "Ar",
    mantra: "YAM",
    theme: "amor, compaixao, vinculo e cura emocional",
  },
  5: {
    name: "Vishuddha",
    label: "Chakra laringeo",
    color: "Azul",
    element: "Eter",
    mantra: "HAM",
    theme: "voz, verdade, expressao e escuta",
  },
  6: {
    name: "Ajna",
    label: "Chakra frontal",
    color: "Indigo",
    element: "Luz",
    mantra: "OM",
    theme: "intuicao, visao interior e discernimento",
  },
  7: {
    name: "Sahasrara",
    label: "Chakra coronario",
    color: "Violeta ou branco",
    element: "Consciencia",
    mantra: "OM ou silencio",
    theme: "conexao espiritual, unidade e transcendencia",
  },
  8: {
    name: "Sahasrara",
    label: "Chakra coronario",
    color: "Violeta ou branco",
    element: "Consciencia",
    mantra: "OM ou silencio",
    theme: "proposito espiritual, direcao superior e expansao da consciencia",
  },
  9: {
    name: "Anahata",
    label: "Chakra cardiaco",
    color: "Verde",
    element: "Ar",
    mantra: "YAM",
    theme: "compaixao, cura emocional, fechamento de ciclos e servico amoroso",
  },
};

const tarotArcana = {
  1: { name: "O Mago", theme: "iniciativa, poder de realizacao e abertura de caminhos" },
  2: { name: "A Sacerdotisa", theme: "intuicao, silencio interior e sabedoria oculta" },
  3: { name: "A Imperatriz", theme: "criatividade, fertilidade, beleza e expressao afetiva" },
  4: { name: "O Imperador", theme: "estrutura, autoridade, disciplina e construcao" },
  5: { name: "O Hierofante", theme: "fe, tradicao, ensinamento e orientacao espiritual" },
  6: { name: "Os Enamorados", theme: "escolhas, vinculos, desejo e alinhamento do coracao" },
  7: { name: "O Carro", theme: "direcao, movimento, conquista e dominio da propria rota" },
  8: { name: "A Justica", theme: "equilibrio, verdade, consequencias e alinhamento das escolhas" },
  9: { name: "O Eremita", theme: "sabedoria, recolhimento, estudo e maturidade espiritual" },
  10: { name: "A Roda da Fortuna", theme: "ciclos, mudancas, destino e viradas de caminho" },
  11: { name: "A Forca", theme: "coragem, dominio interior, magnetismo e energia vital" },
  12: { name: "O Enforcado", theme: "pausa, nova visao, entrega e mudanca de perspectiva" },
  13: { name: "A Morte", theme: "encerramento, renascimento e libertacao do que nao sustenta mais" },
  14: { name: "A Temperanca", theme: "cura, equilibrio, paciencia e harmonizacao dos opostos" },
  15: { name: "O Diabo", theme: "desejo, apego, sombra, poder material e libertacao de prisoes internas" },
  16: { name: "A Torre", theme: "quebra de estruturas, revelacao, limpeza e reconstrucao" },
  17: { name: "A Estrela", theme: "esperanca, protecao, sensibilidade e guia espiritual" },
  18: { name: "A Lua", theme: "sonhos, intuicao, memorias, medos e mundo inconsciente" },
  19: { name: "O Sol", theme: "vitalidade, clareza, alegria e expressao da propria luz" },
  20: { name: "O Julgamento", theme: "chamado da alma, despertar, revisao e renascimento consciente" },
  21: { name: "O Mundo", theme: "integracao, realizacao, fechamento de ciclo e expansao" },
  22: { name: "O Louco", theme: "liberdade, comeco inesperado, fe no caminho e coragem de viver" },
};

const lenormandCards = {
  1: { name: "O Cavaleiro", theme: "movimento, noticias, chegada de oportunidades e impulso para agir" },
  2: { name: "O Trevo", theme: "sorte rapida, alivio, oportunidade simples e abertura inesperada" },
  3: { name: "O Navio", theme: "viagens, distancia, mudancas, busca e expansao de horizontes" },
  4: { name: "A Casa", theme: "familia, base, seguranca, intimidade e estrutura emocional" },
  5: { name: "A Arvore", theme: "saude, raizes, crescimento lento, ancestralidade e vitalidade" },
  6: { name: "As Nuvens", theme: "duvidas, confusao, instabilidade mental e necessidade de clareza" },
  7: { name: "A Cobra", theme: "desejo, estrategia, cautela, seducao e situacoes que pedem atencao" },
  8: { name: "O Caixao", theme: "fim de ciclo, encerramento, pausa e transformacao necessaria" },
  9: { name: "O Buque", theme: "alegria, gentileza, presentes, beleza e reconhecimento afetivo" },
  10: { name: "A Foice", theme: "cortes, decisoes rapidas, separacao e necessidade de agir com firmeza" },
  11: { name: "O Chicote", theme: "tensao, repeticao, conflito interno, disciplina e energia acumulada" },
  12: { name: "Os Passaros", theme: "conversas, ansiedade, comunicacao, encontros e movimento social" },
  13: { name: "A Crianca", theme: "inicio, leveza, inocencia, espontaneidade e algo novo nascendo" },
  14: { name: "A Raposa", theme: "inteligencia, estrategia, trabalho, prudencia e necessidade de observar melhor" },
  15: { name: "O Urso", theme: "forca, protecao, poder, recursos e cuidado com dominio excessivo" },
  16: { name: "A Estrela", theme: "esperanca, inspiracao, guia espiritual, brilho e direcao superior" },
  17: { name: "A Cegonha", theme: "mudanca, renovacao, transicao e chegada de uma nova fase" },
  18: { name: "O Cao", theme: "amizade, lealdade, apoio, confianca e presencas protetoras" },
  19: { name: "A Torre", theme: "estrutura, isolamento, autoridade, limites e posicao social" },
  20: { name: "O Jardim", theme: "vida social, publico, comunidade, encontros e exposicao" },
  21: { name: "A Montanha", theme: "obstaculos, demora, resistencia, persistencia e provas de paciencia" },
  22: { name: "Os Caminhos", theme: "escolhas, alternativas, bifurcacoes e decisao de rota" },
  23: { name: "Os Ratos", theme: "desgaste, perda de energia, preocupacao e necessidade de preservar recursos" },
  24: { name: "O Coracao", theme: "amor, afeto, desejo, abertura emocional e verdade dos sentimentos" },
  25: { name: "O Anel", theme: "compromisso, acordo, ciclo, alianca e responsabilidade assumida" },
  26: { name: "O Livro", theme: "segredos, estudo, conhecimento oculto e algo que ainda sera revelado" },
  27: { name: "A Carta", theme: "mensagem, documento, comunicacao objetiva e informacao importante" },
  28: { name: "O Homem", theme: "energia masculina, acao, presenca, escolha ativa e posicionamento" },
  29: { name: "A Mulher", theme: "energia feminina, intuicao, receptividade, presenca e sensibilidade" },
  30: { name: "Os Lirios", theme: "paz, maturidade, pureza, sabedoria e equilibrio nos desejos" },
  31: { name: "O Sol", theme: "clareza, sucesso, vitalidade, alegria e expressao da propria luz" },
  32: { name: "A Lua", theme: "emocao, reconhecimento, sonhos, intuicao e memoria afetiva" },
  33: { name: "A Chave", theme: "solucao, abertura, resposta, desbloqueio e descoberta importante" },
  34: { name: "Os Peixes", theme: "dinheiro, fluxo, abundancia, trocas e movimento material" },
  35: { name: "A Ancora", theme: "estabilidade, firmeza, seguranca, trabalho e permanencia" },
  36: { name: "A Cruz", theme: "prova, destino, responsabilidade espiritual e aprendizado profundo" },
};

const elderFutharkRunes = {
  1: { name: "Fehu", theme: "prosperidade, recursos, valor pessoal e energia que precisa circular" },
  2: { name: "Uruz", theme: "forca vital, coragem, saude, resistencia e poder de superacao" },
  3: { name: "Thurisaz", theme: "defesa, limites, ruptura de obstaculos e cuidado com impulsos" },
  4: { name: "Ansuz", theme: "mensagem, palavra, sabedoria, comunicacao e escuta espiritual" },
  5: { name: "Raidho", theme: "caminho, jornada, movimento correto e alinhamento da rota" },
  6: { name: "Kenaz", theme: "clareza, fogo interior, revelacao, criatividade e conhecimento" },
  7: { name: "Gebo", theme: "troca, parceria, presente, equilibrio entre dar e receber" },
  8: { name: "Wunjo", theme: "alegria, harmonia, pertencimento e realizacao do que traz contentamento" },
  9: { name: "Hagalaz", theme: "quebra de padroes, limpeza, forcas inevitaveis e transformacao" },
  10: { name: "Nauthiz", theme: "necessidade, limite, paciencia, disciplina e aprendizado pela restricao" },
  11: { name: "Isa", theme: "pausa, gelo, silencio, preservacao e tempo de observar antes de agir" },
  12: { name: "Jera", theme: "colheita, ciclos, paciencia, maturacao e retorno do que foi plantado" },
  13: { name: "Eihwaz", theme: "resistencia espiritual, passagem, protecao e transformacao profunda" },
  14: { name: "Perthro", theme: "destino, misterio, sorte oculta, revelacao e jogos da vida" },
  15: { name: "Algiz", theme: "protecao, amparo espiritual, defesa energetica e conexao com guias" },
  16: { name: "Sowilo", theme: "sol, vitalidade, sucesso, clareza e vitoria da luz interior" },
  17: { name: "Tiwaz", theme: "justica, honra, coragem, direcao e compromisso com a verdade" },
  18: { name: "Berkano", theme: "nascimento, cuidado, fertilidade, cura e crescimento protegido" },
  19: { name: "Ehwaz", theme: "confianÃ§a, parceria, movimento conjunto e avancos por cooperacao" },
  20: { name: "Mannaz", theme: "identidade, humanidade, consciencia, relacoes e reconhecimento de si" },
  21: { name: "Laguz", theme: "intuicao, agua, sonhos, sensibilidade e fluxo emocional" },
  22: { name: "Ingwaz", theme: "potencial interno, gestacao, conclusao silenciosa e energia de fertilidade" },
  23: { name: "Dagaz", theme: "despertar, virada, clareza repentina e passagem para um novo estado" },
  24: { name: "Othala", theme: "ancestralidade, heranca, casa espiritual, legado e pertencimento" },
};

const samsaraCycles = [
  {
    title: "seguranca e pertencimento",
    text: "A roda aponta para repeticoes ligadas a seguranca, pertencimento e medo de perder a propria base. Quando esse ciclo e visto com carinho, a vida comeca a pedir escolhas mais firmes e menos guiadas pela necessidade de se proteger o tempo todo.",
  },
  {
    title: "vinculos e desejo",
    text: "A roda aponta para repeticoes nos vinculos, nos desejos e na forma como voce se aproxima ou se afasta das pessoas. Este ciclo pede mais consciencia sobre o que e amor, o que e carencia e o que ja nao precisa ser repetido.",
  },
  {
    title: "voz e afirmacao pessoal",
    text: "A roda aponta para repeticoes ligadas a expressao, coragem e afirmacao pessoal. Ha momentos em que a alma repete silenciamentos antigos ate encontrar uma forma mais verdadeira de se posicionar.",
  },
  {
    title: "amor, perdÃ£o e limites",
    text: "A roda aponta para repeticoes emocionais ligadas a amor, perdÃ£o e limites. O aprendizado nao e carregar tudo, mas reconhecer onde a compaixao precisa caminhar junto com maturidade.",
  },
  {
    title: "mudanca e liberdade",
    text: "A roda aponta para repeticoes ligadas a mudanca, liberdade e inquietacao. A alma pode alternar entre querer romper tudo e temer o desconhecido; o caminho e transformar movimento em direcao.",
  },
  {
    title: "responsabilidade e cuidado",
    text: "A roda aponta para repeticoes ligadas a responsabilidade, familia e cuidado. O ciclo pede observar onde voce assume mais do que deve, ou onde espera reconhecimento por aquilo que entrega em silencio.",
  },
  {
    title: "espiritualidade e isolamento",
    text: "A roda aponta para repeticoes ligadas a introspeccao, espiritualidade e isolamento. O convite e transformar recolhimento em sabedoria, sem deixar que a busca interior vire distancia da vida.",
  },
  {
    title: "poder, dinheiro e realizacao",
    text: "A roda aponta para repeticoes ligadas a poder, dinheiro e realizacao. O aprendizado e usar ambicao com consciencia, sem confundir valor pessoal com controle, pressa ou resultado externo.",
  },
  {
    title: "encerramentos e desapego",
    text: "A roda aponta para repeticoes ligadas a encerramentos, perdas simbolicas e desapego. A alma pode repetir finais ate aprender a fechar ciclos sem culpa e abrir espaco para uma nova estacao.",
  },
];

const personalYearCrystals = {
  1: {
    theme: "O Novo Inicio / Acao",
    crystal: numerologyStoneTable[1].crystal,
    color: numerologyStoneTable[1].color,
    description: "Ajuda a mudar padroes antigos, superar insegurancas e ter clareza para arriscar, inovar e iniciar um novo ciclo com foco e independencia.",
  },
  2: {
    theme: "Parceria / Cooperacao",
    crystal: numerologyStoneTable[2].crystal,
    color: numerologyStoneTable[2].color,
    description: "Promove sabedoria, paciencia e humildade para lidar com relacionamentos, cooperacao, intuicao e equilibrio emocional.",
  },
  3: {
    theme: "Comunicacao / Criatividade",
    crystal: numerologyStoneTable[3].crystal,
    color: numerologyStoneTable[3].color,
    description: "Favorece a expressao clara e criativa, alivia tensoes e traz coragem para se comunicar, circular e brilhar socialmente.",
  },
  4: {
    theme: "Organizacao / Estrutura",
    crystal: numerologyStoneTable[4].crystal,
    color: numerologyStoneTable[4].color,
    description: "Traz equilibrio, saude e forca para trabalho, planejamento, foco e construcao de uma base mais firme para o futuro.",
  },
  5: {
    theme: "Liberdade / Mudanca",
    crystal: numerologyStoneTable[5].crystal,
    color: numerologyStoneTable[5].color,
    description: "Apoia mudancas, protecao e liberacao de velhos habitos, ajudando a atravessar novos caminhos com mais coragem e movimento.",
  },
  6: {
    theme: "Amor / Familia",
    crystal: numerologyStoneTable[6].crystal,
    color: numerologyStoneTable[6].color,
    description: "Conecta amor, perdao, cura emocional, harmonia familiar e amor-proprio, suavizando cobrancas e fortalecendo vinculos.",
  },
  7: {
    theme: "Conhecimento / Introspeccao",
    crystal: numerologyStoneTable[7].crystal,
    color: numerologyStoneTable[7].color,
    description: "Fortalece intuicao, estudo, concentracao e busca espiritual, ajudando a mente a se afastar do superficial.",
  },
  8: {
    theme: "Poder / Abundancia",
    crystal: numerologyStoneTable[8].crystal,
    color: numerologyStoneTable[8].color,
    description: "Cristal de prosperidade e realizacao, favorecendo ambicao focada, persistencia, senso administrativo e manifestacao material.",
  },
  9: {
    theme: "Finalizacao / Humanitarismo",
    crystal: numerologyStoneTable[9].crystal,
    color: numerologyStoneTable[9].color,
    description: "Ajuda na liberacao de energias densas, encerramento de ciclos, desapego e abertura para um futuro mais consciente.",
  },
};

const psalmPrayerMessages = {
  "1:3": "Que minha vida crie raizes firmes, floresca no tempo certo e receba prosperidade com equilibrio.",
  "2:11": "Que minha fe seja reverente, minha vontade seja limpa e meu caminho seja guiado com sabedoria.",
  "3:5": "Que eu descanse sob protecao, acorde fortalecido e atravesse o dia com coragem no coracao.",
  "6:3": "Que minha alma encontre alivio, cura e silencio interior para atravessar o que pesa.",
  "6:4": "Que a misericordia me alcance, restaurando minha forca e afastando o medo do meu peito.",
  "7:9": "Que toda injustica perca forca e que minha verdade seja protegida diante do invisivel.",
  "7:18": "Que minha gratidao se eleve e reconheca a justica divina atuando em minha vida.",
  "8:1": "Que eu reconheca a grandeza espiritual acima de mim e caminhe com humildade diante da vida.",
  "9:1": "Que eu agradeca de todo o coracao e reconheca as maravilhas que ja se movem ao meu favor.",
  "9:9": "Que eu encontre abrigo nos momentos dificeis e protecao quando a vida pedir firmeza.",
  "9:11": "Que minha voz celebre a presenca divina e anuncie caminhos de luz por onde eu passar.",
  "15:5": "Que minha conduta seja justa, minha palavra seja limpa e minha prosperidade venha sem peso na alma.",
  "17:50": "Que as vitorias recebidas sejam honradas com gratidao, fidelidade e consciencia espiritual.",
  "21:20": "Que a forca divina se levante em mim e transforme desejo, coragem e direcao em realizacao.",
  "24:6": "Que eu busque a face sagrada com sinceridade e encontre portas abertas para minha jornada.",
  "25:8": "Que eu seja conduzido pelo caminho correto, com aprendizado, paciencia e discernimento.",
  "29:13": "Que minha alma transforme dor em honra e que a gratidao volte a cantar dentro de mim.",
  "30:18": "Que a bondade espiritual me envolva e proteja minha caminhada diante dos olhos da vida.",
  "32:4": "Que a luz dissolva o peso interno e devolva frescor, verdade e respiracao ao meu espirito.",
  "32:18": "Que meus olhos se voltem para a esperanca e que a protecao acompanhe minha espera.",
  "32:22": "Que a misericordia esteja comigo na mesma medida em que eu sustento minha fe.",
  "33:4": "Que minha palavra seja verdadeira e minhas obras nascam de lealdade, firmeza e clareza.",
  "33:11": "Que os bons propositos permanecam vivos e que minha missao atravesse o tempo com forca.",
  "36:4": "Que minha palavra fale com sabedoria e meu coracao aprenda a escolher o que e justo.",
  "37:22": "Que as bencaos se abram no caminho e que tudo que nao me serve perca dominio sobre mim.",
  "39:2": "Que meu silencio seja sabio, minha escuta seja profunda e minha palavra venha no tempo certo.",
  "53:4": "Que eu desperte para a consciencia, enxergando onde devo agir, reparar e me fortalecer.",
  "70:6": "Que a alegria espiritual me encontre e que eu reconheca a grandeza que sustenta meus passos.",
  "70:15": "Que minha boca anuncie justica, livramento e sinais de amparo mesmo antes de ver tudo pronto.",
  "70:16": "Que minha forca venha do alto e que eu caminhe amparado por uma presenca maior.",
  "79:9": "Que eu receba auxilio, purificacao e protecao, sendo guiado para fora dos pesos antigos.",
  "87:2": "Que as portas certas se abram e que minha alma reconheca o lugar onde pertence.",
  "87:14": "Que eu floresca como quem foi plantado na casa certa, com raiz, memoria e destino.",
  "87:15": "Que minha vida conserve vigor, lucidez e frutos bons mesmo quando o tempo amadurece.",
  "89:15": "Que eu saiba caminhar na luz da presenca divina e reconhecer a felicidade simples da protecao.",
  "90:2": "Que eu me lembre da eternidade que me sustenta antes, durante e depois de cada ciclo.",
  "90:9": "Que meus dias sejam vividos com consciencia, transformando finitude em sabedoria.",
  "93:18": "Que a misericordia me sustente quando meus passos vacilarem.",
  "93:22": "Que eu tenha refugio firme, protecao espiritual e apoio quando precisar me recompor.",
  "94:6": "Que todo abandono seja visto, toda dor seja cuidada e toda vulnerabilidade receba amparo.",
  "97:3": "Que a luz va a minha frente, purificando obstaculos e abrindo passagem para o bem.",
  "97:6": "Que a justica seja revelada e que minha vida reconheca a ordem maior que me guia.",
  "101:13": "Que o tempo de compaixao chegue e restaure aquilo que precisa voltar a viver.",
  "102:8": "Que minha alma seja protegida contra palavras pesadas e olhares que tentam diminuir minha luz.",
  "102:19": "Que o olhar divino alcance minha historia e envie resposta do lugar mais alto.",
  "103:25": "Que eu atravesse as aguas grandes da vida com respeito, coragem e protecao.",
  "103:32": "Que minha presenca seja firme e que a vida reconheca a forca silenciosa que me sustenta.",
  "105:1": "Que eu invoque a presenca sagrada com gratidao e carregue boas noticias em minha jornada.",
  "108:29": "Que toda acusacao perca forca e que a verdade me cubra como manto de protecao.",
  "112:2": "Que minha descendencia, minhas obras e meus caminhos sejam fortalecidos por uma bencao justa.",
  "112:3": "Que prosperidade e retidao caminhem juntas, sem afastar minha alma daquilo que e correto.",
  "113:18": "Que minha vida seja um louvor vivo, hoje e sempre, com gratidao simples e verdadeira.",
  "114:1": "Que eu atravesse mudancas importantes com memoria espiritual, coragem e libertacao.",
  "114:7": "Que a terra ao meu redor se mova em respeito ao sagrado e abra passagem para minha transformacao.",
  "118:75": "Que eu compreenda as provas com maturidade e veja nelas uma correcao amorosa do caminho.",
  "118:108": "Que minha oferta seja aceita e que eu aprenda os caminhos certos com humildade.",
  "118:145": "Que meu chamado seja ouvido e que eu receba direcao para guardar meu caminho.",
  "118:159": "Que minha vida seja renovada pela misericordia e pelo amor ao que e sagrado.",
  "119:2": "Que eu busque de todo o coracao e encontre felicidade nos sinais que orientam minha vida.",
  "120:5": "Que eu reconheca os lugares de exilio interior e seja conduzido de volta ao meu centro.",
  "120:7": "Que minha fala escolha a paz, mesmo quando ao redor houver conflito.",
  "120:8": "Que eu viva sob amparo, entrando e saindo dos ciclos com protecao.",
  "130:5": "Que eu espere com confianca, sustentado por uma palavra de luz que amadurece em silencio.",
  "139:1": "Que eu aceite ser visto por inteiro e receba clareza sobre quem sou diante do sagrado.",
  "144:9": "Que um canto novo nasca em mim e celebre as vitorias que ainda estao se formando.",
  "144:15": "Que minha felicidade venha de pertencer ao sagrado e reconhecer minha protecao.",
  "144:18": "Que a presenca divina esteja perto quando eu chamar com sinceridade.",
  "144:33": "Que minha boca abencoe a vida e minha jornada se mantenha aberta a gratidao.",
};

const cityCoordinates = {
  "rio de janeiro": { lat: -22.90680, lon: -43.17290 },
  "rio de janeiro rj": { lat: -22.90680, lon: -43.17290 },
  "brasilia": { lat: -15.79390, lon: -47.88280 },
  "brasilia df": { lat: -15.79390, lon: -47.88280 },
  "belo horizonte": { lat: -19.91670, lon: -43.93450 },
  "belo horizonte mg": { lat: -19.91670, lon: -43.93450 },
  "salvador": { lat: -12.97770, lon: -38.50160 },
  "salvador ba": { lat: -12.97770, lon: -38.50160 },
  "recife": { lat: -8.04760, lon: -34.87700 },
  "recife pe": { lat: -8.04760, lon: -34.87700 },
  "fortaleza": { lat: -3.73190, lon: -38.52670 },
  "fortaleza ce": { lat: -3.73190, lon: -38.52670 },
  "manaus": { lat: -3.11900, lon: -60.02170 },
  "manaus am": { lat: -3.11900, lon: -60.02170 },
  "belem": { lat: -1.45580, lon: -48.50390 },
  "belem pa": { lat: -1.45580, lon: -48.50390 },
  "goiania": { lat: -16.68690, lon: -49.26480 },
  "goiania go": { lat: -16.68690, lon: -49.26480 },
  "tupa": { lat: -21.93472, lon: -50.51361 },
  "tupa sp": { lat: -21.93472, lon: -50.51361 },
  "cruzeiro do oeste": { lat: -23.78500, lon: -53.07330 },
  "cruzeiro do oeste pr": { lat: -23.78500, lon: -53.07330 },
  "ipora": { lat: -24.00310, lon: -53.70600 },
  "ipora pr": { lat: -24.00310, lon: -53.70600 },
  "perola": { lat: -23.80390, lon: -53.68340 },
  "perola pr": { lat: -23.80390, lon: -53.68340 },
  "perobal": { lat: -23.89490, lon: -53.40980 },
  "perobal pr": { lat: -23.89490, lon: -53.40980 },
  "moreira sales": { lat: -24.06220, lon: -53.00690 },
  "moreira sales pr": { lat: -24.06220, lon: -53.00690 },
  "goioere": { lat: -24.18310, lon: -53.02460 },
  "goioere pr": { lat: -24.18310, lon: -53.02460 },
  // PR - 30 maiores cidades por populacao na base GeoNames
  "curitiba": { lat: -25.42778, lon: -49.27306 },
  "curitiba pr": { lat: -25.42778, lon: -49.27306 },
  "londrina": { lat: -23.31028, lon: -51.16278 },
  "londrina pr": { lat: -23.31028, lon: -51.16278 },
  "sao jose dos pinhais": { lat: -25.53020, lon: -49.20836 },
  "sao jose dos pinhais pr": { lat: -25.53020, lon: -49.20836 },
  "maringa": { lat: -23.42528, lon: -51.93861 },
  "maringa pr": { lat: -23.42528, lon: -51.93861 },
  "ponta grossa": { lat: -25.09500, lon: -50.16194 },
  "ponta grossa pr": { lat: -25.09500, lon: -50.16194 },
  "foz do iguacu": { lat: -25.54778, lon: -54.58806 },
  "foz do iguacu pr": { lat: -25.54778, lon: -54.58806 },
  "cascavel": { lat: -24.95583, lon: -53.45528 },
  "cascavel pr": { lat: -24.95583, lon: -53.45528 },
  "colombo": { lat: -25.29167, lon: -49.22417 },
  "colombo pr": { lat: -25.29167, lon: -49.22417 },
  "guarapuava": { lat: -25.39048, lon: -51.46541 },
  "guarapuava pr": { lat: -25.39048, lon: -51.46541 },
  "araucaria": { lat: -25.59306, lon: -49.41028 },
  "araucaria pr": { lat: -25.59306, lon: -49.41028 },
  "fazenda rio grande": { lat: -25.65750, lon: -49.30806 },
  "fazenda rio grande pr": { lat: -25.65750, lon: -49.30806 },
  "paranagua": { lat: -25.51626, lon: -48.52537 },
  "paranagua pr": { lat: -25.51626, lon: -48.52537 },
  "campo largo": { lat: -25.45955, lon: -49.53014 },
  "campo largo pr": { lat: -25.45955, lon: -49.53014 },
  "apucarana": { lat: -23.55083, lon: -51.46083 },
  "apucarana pr": { lat: -23.55083, lon: -51.46083 },
  "almirante tamandare": { lat: -25.32472, lon: -49.31000 },
  "almirante tamandare pr": { lat: -25.32472, lon: -49.31000 },
  "toledo": { lat: -24.71361, lon: -53.74306 },
  "toledo pr": { lat: -24.71361, lon: -53.74306 },
  "arapongas": { lat: -23.41944, lon: -51.42444 },
  "arapongas pr": { lat: -23.41944, lon: -51.42444 },
  "piraquara": { lat: -25.44227, lon: -49.06795 },
  "piraquara pr": { lat: -25.44227, lon: -49.06795 },
  "sarandi": { lat: -23.44361, lon: -51.87389 },
  "sarandi pr": { lat: -23.44361, lon: -51.87389 },
  "umuarama": { lat: -23.76639, lon: -53.32500 },
  "umuarama pr": { lat: -23.76639, lon: -53.32500 },
  "pinhais": { lat: -25.44472, lon: -49.19250 },
  "pinhais pr": { lat: -25.44472, lon: -49.19250 },
  "cambe": { lat: -23.27583, lon: -51.27833 },
  "cambe pr": { lat: -23.27583, lon: -51.27833 },
  "campo mourao": { lat: -24.04309, lon: -52.37929 },
  "campo mourao pr": { lat: -24.04309, lon: -52.37929 },
  "francisco beltrao": { lat: -26.08111, lon: -53.05500 },
  "francisco beltrao pr": { lat: -26.08111, lon: -53.05500 },
  "paranavai": { lat: -23.07306, lon: -52.46528 },
  "paranavai pr": { lat: -23.07306, lon: -52.46528 },
  "pato branco": { lat: -26.22861, lon: -52.67056 },
  "pato branco pr": { lat: -26.22861, lon: -52.67056 },
  "cianorte": { lat: -23.66333, lon: -52.60500 },
  "cianorte pr": { lat: -23.66333, lon: -52.60500 },
  "telemaco borba": { lat: -24.32389, lon: -50.61556 },
  "telemaco borba pr": { lat: -24.32389, lon: -50.61556 },
  "castro": { lat: -24.78927, lon: -50.01225 },
  "castro pr": { lat: -24.78927, lon: -50.01225 },
  "rolandia": { lat: -23.30972, lon: -51.36917 },
  "rolandia pr": { lat: -23.30972, lon: -51.36917 },
  // SP - 30 maiores cidades por populacao na base GeoNames
  "sao paulo": { lat: -23.54750, lon: -46.63611 },
  "sao paulo sp": { lat: -23.54750, lon: -46.63611 },
  "guarulhos": { lat: -23.46278, lon: -46.53333 },
  "guarulhos sp": { lat: -23.46278, lon: -46.53333 },
  "campinas": { lat: -22.90556, lon: -47.06083 },
  "campinas sp": { lat: -22.90556, lon: -47.06083 },
  "sao bernardo do campo": { lat: -23.69389, lon: -46.56500 },
  "sao bernardo do campo sp": { lat: -23.69389, lon: -46.56500 },
  "sao jose dos campos": { lat: -23.17944, lon: -45.88694 },
  "sao jose dos campos sp": { lat: -23.17944, lon: -45.88694 },
  "osasco": { lat: -23.53250, lon: -46.79167 },
  "osasco sp": { lat: -23.53250, lon: -46.79167 },
  "ribeirao preto": { lat: -21.17750, lon: -47.81028 },
  "ribeirao preto sp": { lat: -21.17750, lon: -47.81028 },
  "sorocaba": { lat: -23.50167, lon: -47.45806 },
  "sorocaba sp": { lat: -23.50167, lon: -47.45806 },
  "santo andre": { lat: -23.66389, lon: -46.53833 },
  "santo andre sp": { lat: -23.66389, lon: -46.53833 },
  "sao jose do rio preto": { lat: -20.81972, lon: -49.37944 },
  "sao jose do rio preto sp": { lat: -20.81972, lon: -49.37944 },
  "maua": { lat: -23.66778, lon: -46.46139 },
  "maua sp": { lat: -23.66778, lon: -46.46139 },
  "jundiai": { lat: -23.18639, lon: -46.88417 },
  "jundiai sp": { lat: -23.18639, lon: -46.88417 },
  "santos": { lat: -23.96083, lon: -46.33361 },
  "santos sp": { lat: -23.96083, lon: -46.33361 },
  "piracicaba": { lat: -22.72528, lon: -47.64917 },
  "piracicaba sp": { lat: -22.72528, lon: -47.64917 },
  "diadema": { lat: -23.68611, lon: -46.62278 },
  "diadema sp": { lat: -23.68611, lon: -46.62278 },
  "carapicuiba": { lat: -23.52272, lon: -46.83500 },
  "carapicuiba sp": { lat: -23.52272, lon: -46.83500 },
  "bauru": { lat: -22.31472, lon: -49.06056 },
  "bauru sp": { lat: -22.31472, lon: -49.06056 },
  "itaquaquecetuba": { lat: -23.48611, lon: -46.34833 },
  "itaquaquecetuba sp": { lat: -23.48611, lon: -46.34833 },
  "franca": { lat: -20.53861, lon: -47.40083 },
  "franca sp": { lat: -20.53861, lon: -47.40083 },
  "praia grande": { lat: -24.00583, lon: -46.40278 },
  "praia grande sp": { lat: -24.00583, lon: -46.40278 },
  "sao vicente": { lat: -23.96306, lon: -46.39194 },
  "sao vicente sp": { lat: -23.96306, lon: -46.39194 },
  "mogi das cruzes": { lat: -23.52278, lon: -46.18833 },
  "mogi das cruzes sp": { lat: -23.52278, lon: -46.18833 },
  "guaruja": { lat: -23.99306, lon: -46.25639 },
  "guaruja sp": { lat: -23.99306, lon: -46.25639 },
  "taubate": { lat: -23.02639, lon: -45.55528 },
  "taubate sp": { lat: -23.02639, lon: -45.55528 },
  "barueri": { lat: -23.51056, lon: -46.87611 },
  "barueri sp": { lat: -23.51056, lon: -46.87611 },
  "suzano": { lat: -23.54250, lon: -46.31083 },
  "suzano sp": { lat: -23.54250, lon: -46.31083 },
  "limeira": { lat: -22.56472, lon: -47.40167 },
  "limeira sp": { lat: -22.56472, lon: -47.40167 },
  "sumare": { lat: -22.82194, lon: -47.26694 },
  "sumare sp": { lat: -22.82194, lon: -47.26694 },
  "taboao da serra": { lat: -23.62611, lon: -46.79167 },
  "taboao da serra sp": { lat: -23.62611, lon: -46.79167 },
  "indaiatuba": { lat: -23.08842, lon: -47.21190 },
  "indaiatuba sp": { lat: -23.08842, lon: -47.21190 },
  // SC - 30 maiores cidades por populacao na base GeoNames
  "florianopolis": { lat: -27.59667, lon: -48.54917 },
  "florianopolis sc": { lat: -27.59667, lon: -48.54917 },
  "joinville": { lat: -26.30444, lon: -48.84556 },
  "joinville sc": { lat: -26.30444, lon: -48.84556 },
  "blumenau": { lat: -26.91944, lon: -49.06611 },
  "blumenau sc": { lat: -26.91944, lon: -49.06611 },
  "sao jose": { lat: -27.61528, lon: -48.62750 },
  "sao jose sc": { lat: -27.61528, lon: -48.62750 },
  "jaragua do sul": { lat: -26.48611, lon: -49.06667 },
  "jaragua do sul sc": { lat: -26.48611, lon: -49.06667 },
  "palhoca": { lat: -27.64528, lon: -48.66778 },
  "palhoca sc": { lat: -27.64528, lon: -48.66778 },
  "lages": { lat: -27.81611, lon: -50.32611 },
  "lages sc": { lat: -27.81611, lon: -50.32611 },
  "criciuma": { lat: -28.67750, lon: -49.36972 },
  "criciuma sc": { lat: -28.67750, lon: -49.36972 },
  "chapeco": { lat: -27.09639, lon: -52.61833 },
  "chapeco sc": { lat: -27.09639, lon: -52.61833 },
  "itajai": { lat: -26.90778, lon: -48.66194 },
  "itajai sc": { lat: -26.90778, lon: -48.66194 },
  "brusque": { lat: -27.09795, lon: -48.91281 },
  "brusque sc": { lat: -27.09795, lon: -48.91281 },
  "balneario camboriu": { lat: -26.99056, lon: -48.63472 },
  "balneario camboriu sc": { lat: -26.99056, lon: -48.63472 },
  "tubarao": { lat: -28.46667, lon: -49.00694 },
  "tubarao sc": { lat: -28.46667, lon: -49.00694 },
  "navegantes": { lat: -26.89889, lon: -48.65417 },
  "navegantes sc": { lat: -26.89889, lon: -48.65417 },
  "camboriu": { lat: -27.02528, lon: -48.65444 },
  "camboriu sc": { lat: -27.02528, lon: -48.65444 },
  "sao bento do sul": { lat: -26.25028, lon: -49.37861 },
  "sao bento do sul sc": { lat: -26.25028, lon: -49.37861 },
  "concordia": { lat: -27.23417, lon: -52.02778 },
  "concordia sc": { lat: -27.23417, lon: -52.02778 },
  "biguacu": { lat: -27.49417, lon: -48.65556 },
  "biguacu sc": { lat: -27.49417, lon: -48.65556 },
  "itapema": { lat: -27.09028, lon: -48.61139 },
  "itapema sc": { lat: -27.09028, lon: -48.61139 },
  "cacador": { lat: -26.77528, lon: -51.01500 },
  "cacador sc": { lat: -26.77528, lon: -51.01500 },
  "rio do sul": { lat: -27.21417, lon: -49.64306 },
  "rio do sul sc": { lat: -27.21417, lon: -49.64306 },
  "gaspar": { lat: -26.93139, lon: -48.95889 },
  "gaspar sc": { lat: -26.93139, lon: -48.95889 },
  "ararangua": { lat: -28.93575, lon: -49.49538 },
  "ararangua sc": { lat: -28.93575, lon: -49.49538 },
  "indaial": { lat: -26.89778, lon: -49.23167 },
  "indaial sc": { lat: -26.89778, lon: -49.23167 },
  "icara": { lat: -28.71333, lon: -49.30000 },
  "icara sc": { lat: -28.71333, lon: -49.30000 },
  "videira": { lat: -27.00833, lon: -51.15167 },
  "videira sc": { lat: -27.00833, lon: -51.15167 },
  "mafra": { lat: -26.11139, lon: -49.80528 },
  "mafra sc": { lat: -26.11139, lon: -49.80528 },
  "canoinhas": { lat: -26.17722, lon: -50.39000 },
  "canoinhas sc": { lat: -26.17722, lon: -50.39000 },
  "sao francisco do sul": { lat: -26.24333, lon: -48.63806 },
  "sao francisco do sul sc": { lat: -26.24333, lon: -48.63806 },
  "imbituba": { lat: -28.24000, lon: -48.67028 },
  "imbituba sc": { lat: -28.24000, lon: -48.67028 },
  // MS - 30 maiores cidades por populacao na base GeoNames
  "campo grande": { lat: -20.44278, lon: -54.64639 },
  "campo grande ms": { lat: -20.44278, lon: -54.64639 },
  "dourados": { lat: -22.22111, lon: -54.80556 },
  "dourados ms": { lat: -22.22111, lon: -54.80556 },
  "corumba": { lat: -19.00917, lon: -57.65333 },
  "corumba ms": { lat: -19.00917, lon: -57.65333 },
  "ponta pora": { lat: -22.53611, lon: -55.72556 },
  "ponta pora ms": { lat: -22.53611, lon: -55.72556 },
  "tres lagoas": { lat: -20.78765, lon: -51.70338 },
  "tres lagoas ms": { lat: -20.78765, lon: -51.70338 },
  "navirai": { lat: -23.06500, lon: -54.19056 },
  "navirai ms": { lat: -23.06500, lon: -54.19056 },
  "nova andradina": { lat: -22.23333, lon: -53.34306 },
  "nova andradina ms": { lat: -22.23333, lon: -53.34306 },
  "aquidauana": { lat: -20.47111, lon: -55.78722 },
  "aquidauana ms": { lat: -20.47111, lon: -55.78722 },
  "sidrolandia": { lat: -20.93194, lon: -54.96139 },
  "sidrolandia ms": { lat: -20.93194, lon: -54.96139 },
  "maracaju": { lat: -21.61444, lon: -55.16833 },
  "maracaju ms": { lat: -21.61444, lon: -55.16833 },
  "paranaiba": { lat: -19.67722, lon: -51.19083 },
  "paranaiba ms": { lat: -19.67722, lon: -51.19083 },
  "amambai": { lat: -23.10417, lon: -55.22583 },
  "amambai ms": { lat: -23.10417, lon: -55.22583 },
  "rio brilhante": { lat: -21.80194, lon: -54.54639 },
  "rio brilhante ms": { lat: -21.80194, lon: -54.54639 },
  "coxim": { lat: -18.50667, lon: -54.76000 },
  "coxim ms": { lat: -18.50667, lon: -54.76000 },
  "chapadao do sul": { lat: -18.79417, lon: -52.62278 },
  "chapadao do sul ms": { lat: -18.79417, lon: -52.62278 },
  "caarapo": { lat: -22.63417, lon: -54.82222 },
  "caarapo ms": { lat: -22.63417, lon: -54.82222 },
  "sao gabriel do oeste": { lat: -19.39528, lon: -54.56639 },
  "sao gabriel do oeste ms": { lat: -19.39528, lon: -54.56639 },
  "aparecida do taboado": { lat: -20.08667, lon: -51.09361 },
  "aparecida do taboado ms": { lat: -20.08667, lon: -51.09361 },
  "costa rica": { lat: -18.54389, lon: -53.12917 },
  "costa rica ms": { lat: -18.54389, lon: -53.12917 },
  "miranda": { lat: -20.24056, lon: -56.37833 },
  "miranda ms": { lat: -20.24056, lon: -56.37833 },
  "itapora": { lat: -22.07889, lon: -54.78944 },
  "itapora ms": { lat: -22.07889, lon: -54.78944 },
  "anastacio": { lat: -20.48361, lon: -55.80694 },
  "anastacio ms": { lat: -20.48361, lon: -55.80694 },
  "jardim": { lat: -21.48028, lon: -56.13806 },
  "jardim ms": { lat: -21.48028, lon: -56.13806 },
  "bonito": { lat: -21.12111, lon: -56.48194 },
  "bonito ms": { lat: -21.12111, lon: -56.48194 },
  "ribas do rio pardo": { lat: -20.44306, lon: -53.75917 },
  "ribas do rio pardo ms": { lat: -20.44306, lon: -53.75917 },
  "bataguassu": { lat: -21.71417, lon: -52.42222 },
  "bataguassu ms": { lat: -21.71417, lon: -52.42222 },
  "campo verde": { lat: -20.41667, lon: -54.06667 },
  "campo verde ms": { lat: -20.41667, lon: -54.06667 },
  "nova alvorada do sul": { lat: -21.46583, lon: -54.38389 },
  "nova alvorada do sul ms": { lat: -21.46583, lon: -54.38389 },
  "bela vista": { lat: -22.10809, lon: -56.53253 },
  "bela vista ms": { lat: -22.10809, lon: -56.53253 },
  "ladario": { lat: -19.00472, lon: -57.60167 },
  "ladario ms": { lat: -19.00472, lon: -57.60167 },
  // RS - 30 maiores cidades por populacao na base GeoNames
  "porto alegre": { lat: -30.03283, lon: -51.23019 },
  "porto alegre rs": { lat: -30.03283, lon: -51.23019 },
  "caxias do sul": { lat: -29.16806, lon: -51.17944 },
  "caxias do sul rs": { lat: -29.16806, lon: -51.17944 },
  "canoas": { lat: -29.91778, lon: -51.18361 },
  "canoas rs": { lat: -29.91778, lon: -51.18361 },
  "pelotas": { lat: -31.76997, lon: -52.34101 },
  "pelotas rs": { lat: -31.76997, lon: -52.34101 },
  "viamao": { lat: -30.08111, lon: -51.02333 },
  "viamao rs": { lat: -30.08111, lon: -51.02333 },
  "santa maria": { lat: -29.68417, lon: -53.80694 },
  "santa maria rs": { lat: -29.68417, lon: -53.80694 },
  "gravatai": { lat: -29.94218, lon: -50.99278 },
  "gravatai rs": { lat: -29.94218, lon: -50.99278 },
  "novo hamburgo": { lat: -29.67833, lon: -51.13056 },
  "novo hamburgo rs": { lat: -29.67833, lon: -51.13056 },
  "sao leopoldo": { lat: -29.76028, lon: -51.14722 },
  "sao leopoldo rs": { lat: -29.76028, lon: -51.14722 },
  "rio grande": { lat: -32.03500, lon: -52.09861 },
  "rio grande rs": { lat: -32.03500, lon: -52.09861 },
  "alvorada": { lat: -30.00018, lon: -51.07632 },
  "alvorada rs": { lat: -30.00018, lon: -51.07632 },
  "passo fundo": { lat: -28.26278, lon: -52.40667 },
  "passo fundo rs": { lat: -28.26278, lon: -52.40667 },
  "cachoeirinha": { lat: -29.95111, lon: -51.09389 },
  "cachoeirinha rs": { lat: -29.95111, lon: -51.09389 },
  "santa cruz do sul": { lat: -29.71750, lon: -52.42583 },
  "santa cruz do sul rs": { lat: -29.71750, lon: -52.42583 },
  "sapucaia do sul": { lat: -29.81782, lon: -51.14551 },
  "sapucaia do sul rs": { lat: -29.81782, lon: -51.14551 },
  "uruguaiana": { lat: -29.75472, lon: -57.08833 },
  "uruguaiana rs": { lat: -29.75472, lon: -57.08833 },
  "bento goncalves": { lat: -29.17139, lon: -51.51917 },
  "bento goncalves rs": { lat: -29.17139, lon: -51.51917 },
  "bage": { lat: -31.33139, lon: -54.10694 },
  "bage rs": { lat: -31.33139, lon: -54.10694 },
  "erechim": { lat: -27.63461, lon: -52.27540 },
  "erechim rs": { lat: -27.63461, lon: -52.27540 },
  "lajeado": { lat: -29.46694, lon: -51.96139 },
  "lajeado rs": { lat: -29.46694, lon: -51.96139 },
  "guaiba": { lat: -30.11389, lon: -51.32500 },
  "guaiba rs": { lat: -30.11389, lon: -51.32500 },
  "ijui": { lat: -28.38778, lon: -53.91472 },
  "ijui rs": { lat: -28.38778, lon: -53.91472 },
  "sant ana do livramento": { lat: -30.89083, lon: -55.53278 },
  "sant ana do livramento rs": { lat: -30.89083, lon: -55.53278 },
  "cachoeira do sul": { lat: -30.03917, lon: -52.89389 },
  "cachoeira do sul rs": { lat: -30.03917, lon: -52.89389 },
  "santa rosa": { lat: -27.87083, lon: -54.48139 },
  "santa rosa rs": { lat: -27.87083, lon: -54.48139 },
  "santo angelo": { lat: -28.29917, lon: -54.26306 },
  "santo angelo rs": { lat: -28.29917, lon: -54.26306 },
  "esteio": { lat: -29.86139, lon: -51.17917 },
  "esteio rs": { lat: -29.86139, lon: -51.17917 },
  "sapiranga": { lat: -29.63806, lon: -51.00694 },
  "sapiranga rs": { lat: -29.63806, lon: -51.00694 },
  "alegrete": { lat: -29.78306, lon: -55.79194 },
  "alegrete rs": { lat: -29.78306, lon: -55.79194 },
  "farroupilha": { lat: -29.22500, lon: -51.34778 },
  "farroupilha rs": { lat: -29.22500, lon: -51.34778 },
};

const state = {
  module: "todos",
  query: "",
  selectedId: records[0].id,
  notes: JSON.parse(localStorage.getItem("akasha-notes") || "[]"),
  leads: JSON.parse(localStorage.getItem("akasha-leads") || "[]"),
  selectedPlan: plans[0]?.id || "",
  featuredPlanId: getRandomFeaturedPlanId(),
  currentLead: null,
};

const els = {
  moduleNav: document.querySelector("#moduleNav"),
  quickFilters: document.querySelector("#quickFilters"),
  recordList: document.querySelector("#recordList"),
  detailPanel: document.querySelector("#detailPanel"),
  searchInput: document.querySelector("#searchInput"),
  listTitle: document.querySelector("#listTitle"),
  resultCount: document.querySelector("#resultCount"),
  vaultCount: document.querySelector("#vaultCount"),
  metricModules: document.querySelector("#metricModules"),
  metricEntities: document.querySelector("#metricEntities"),
  metricTools: document.querySelector("#metricTools"),
  metricNotes: document.querySelector("#metricNotes"),
  metricLeads: document.querySelector("#metricLeads"),
  themeToggle: document.querySelector("#themeToggle"),
  newNoteButton: document.querySelector("#newNoteButton"),
  noteDialog: document.querySelector("#noteDialog"),
  noteTitle: document.querySelector("#noteTitle"),
  noteBody: document.querySelector("#noteBody"),
  saveNoteButton: document.querySelector("#saveNoteButton"),
  intakeForm: document.querySelector("#intakeForm"),
  readingPanel: document.querySelector("#readingPanel"),
  clearReadingButton: document.querySelector("#clearReadingButton"),
  clientName: document.querySelector("#clientName"),
  clientEmail: document.querySelector("#clientEmail"),
  clientWhatsApp: document.querySelector("#clientWhatsApp"),
  marketingConsent: document.querySelector("#marketingConsent"),
  birthDate: document.querySelector("#birthDate"),
  birthTime: document.querySelector("#birthTime"),
  birthCity: document.querySelector("#birthCity"),
  plansGrid: document.querySelector("#plansGrid"),
  plansSection: document.querySelector("#plansSection"),
  checkoutPanel: document.querySelector("#checkoutPanel"),
};

function normalize(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function moduleLabel(id) {
  return modules.find((module) => module.id === id)?.label || id;
}

function getFilteredRecords() {
  const query = normalize(state.query.trim());
  return records.filter((record) => {
    const matchesModule = state.module === "todos" || record.module === state.module;
    const haystack = normalize([
      record.title,
      record.summary,
      record.module,
      record.tags.join(" "),
      record.correspondences.join(" "),
    ].join(" "));
    return matchesModule && (!query || haystack.includes(query));
  });
}

function renderNav() {
  els.moduleNav.innerHTML = modules.map((module) => `
    <button class="module-button ${state.module === module.id ? "active" : ""}" type="button" data-module="${module.id}">
      <span>${module.label}</span>
      <span aria-hidden="true">${module.icon}</span>
    </button>
  `).join("");

  els.quickFilters.innerHTML = modules.slice(1, 7).map((module) => `
    <button class="chip ${state.module === module.id ? "active" : ""}" type="button" data-module="${module.id}">
      ${module.label}
    </button>
  `).join("");
}

function renderMetrics() {
  els.vaultCount.textContent = "Metodo protegido";
  els.metricModules.textContent = modules.length - 1;
  els.metricEntities.textContent = records.filter((record) => ["goetia", "entidades", "odus"].includes(record.module)).length;
  els.metricTools.textContent = records.filter((record) => record.module === "ferramentas").length;
  els.metricNotes.textContent = state.notes.length;
  els.metricLeads.textContent = state.leads.length;
}

function renderPlans() {
  if (!plans.length) {
    els.plansGrid.innerHTML = `<div class="empty-state">Novos estudos em preparacao.</div>`;
    renderCheckout();
    return;
  }

  const studies = sortPlansForSale(plans.filter((plan) => !isEbookPlan(plan)));
  const ebooks = sortPlansForSale(plans.filter(isEbookPlan));
  const renderPlanCards = (items) => items.map((plan) => `
    <button class="plan-card ${plan.id === state.featuredPlanId ? "featured" : ""} ${state.selectedPlan === plan.id ? "active" : ""}" type="button" data-plan="${plan.id}">
      <span class="plan-badge">${getPlanBadge(plan)}</span>
      <div>
        <h3>${plan.name}</h3>
        <div class="plan-price">${plan.price}</div>
      </div>
      <p>${plan.summary}</p>
      <ul>${plan.features.map((feature) => `<li>${feature}</li>`).join("")}</ul>
    </button>
  `).join("");

  els.plansGrid.innerHTML = `
    <div class="plan-group">
      <div class="plan-group-header">
        <h3>${getPlanGroupTitle(false)}</h3>
        <p>${getPlanGroupIntro(false)}</p>
      </div>
      <div class="plan-group-grid">${renderPlanCards(studies)}</div>
    </div>
    <div class="plan-group ebook-group">
      <div class="plan-group-header">
        <h3>${getPlanGroupTitle(true)}</h3>
        <p>${getPlanGroupIntro(true)}</p>
      </div>
      <div class="plan-group-grid">${renderPlanCards(ebooks)}</div>
    </div>
  `;
  renderCheckout();
}

function renderCheckout() {
  const plan = plans.find((item) => item.id === state.selectedPlan) || plans[1];
  const lead = state.currentLead;
  const leadText = isEbookPlan(plan)
    ? (lead ? `${lead.name}, solicite este e-book pelo WhatsApp.` : "Gere sua leitura gratuita e escolha um e-book ou estudo para continuar.")
    : (lead ? `${lead.name}, continue este estudo pelo WhatsApp.` : "Gere sua leitura gratuita e escolha como deseja aprofundar.");

  if (!plan) {
    els.checkoutPanel.innerHTML = `
      <div>
        <strong>Estudos em preparacao</strong>
        <span>${lead ? `${lead.name}, fale pelo WhatsApp para receber a proxima orientacao.` : "Gere sua leitura gratuita e continue pelo WhatsApp."}</span>
      </div>
      <div class="checkout-actions">
        <a class="primary-button link-button" id="whatsappOrderButton" href="${getWhatsAppUrl()}" target="_blank" rel="noreferrer">Falar pelo WhatsApp</a>
      </div>
    `;
    return;
  }

  els.checkoutPanel.innerHTML = `
    <div>
      <strong>${plan.name} Â· ${plan.price}</strong>
      <span>${leadText}</span>
    </div>
    <div class="checkout-actions">
      <a class="primary-button link-button" id="whatsappOrderButton" href="${getWhatsAppUrl()}" target="_blank" rel="noreferrer">Comprar pelo WhatsApp</a>
    </div>
  `;
}

function renderList() {
  const filtered = getFilteredRecords();
  els.listTitle.textContent = state.module === "todos" ? "Camadas do estudo" : moduleLabel(state.module);
  els.resultCount.textContent = `${filtered.length} camada${filtered.length === 1 ? "" : "s"}`;

  if (!filtered.some((record) => record.id === state.selectedId)) {
    state.selectedId = filtered[0]?.id || records[0].id;
  }

  els.recordList.innerHTML = filtered.length ? filtered.map((record) => `
    <button class="record-card ${record.id === state.selectedId ? "active" : ""}" type="button" data-record="${record.id}">
      <div class="record-meta">${moduleLabel(record.module)}</div>
      <h3>${record.title}</h3>
      <p>${record.summary}</p>
      <div class="tag-row">
        ${record.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
      </div>
    </button>
  `).join("") : `<div class="empty-state">Nenhuma camada encontrada para essa busca.</div>`;
}

function renderDetail() {
  const record = records.find((item) => item.id === state.selectedId) || records[0];
  els.detailPanel.innerHTML = `
    <div class="detail-kicker">${moduleLabel(record.module)}</div>
    <h2>${record.title}</h2>
    <p class="detail-summary">${record.summary}</p>
    <div class="tag-row">
      ${record.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
    </div>
    <div class="detail-grid">
      <section class="detail-box">
        <strong>O que esta camada pode revelar</strong>
        <ul>${record.correspondences.map((item) => `<li>${item}</li>`).join("")}</ul>
      </section>
      <section class="detail-box">
        <strong>Como isso aprofunda no estudo</strong>
        <ul>${record.nextActions.map((item) => `<li>${item}</li>`).join("")}</ul>
      </section>
    </div>
    <div class="offer-strip">
      <strong>Comece pela leitura gratuita</strong>
      <span>Preencha seus dados para abrir uma primeira amostra e descobrir qual camada pede mais atencao agora.</span>
      <button class="primary-button inline-offer" type="button" data-scroll-intake>Gerar minha leitura</button>
    </div>
  `;
}

function renderNotesPreview(record) {
  const notes = state.notes.filter((note) => note.recordId === record.id).slice(-3).reverse();
  if (!notes.length) {
    return "<p>Nenhuma nota vinculada ainda.</p>";
  }
  return notes.map((note) => `
    <p><strong>${note.title}</strong><br>${note.body}</p>
  `).join("");
}

function render() {
  renderNav();
  renderMetrics();
  renderPlans();
  renderList();
  renderDetail();
}

const zodiacSigns = ["Aries", "Touro", "Gemeos", "Cancer", "Leao", "Virgem", "Libra", "Escorpiao", "Sagitario", "Capricornio", "Aquario", "Peixes"];

function normalizeDegrees(value) {
  return ((value % 360) + 360) % 360;
}

function toJulianDay(date) {
  return date.getTime() / 86400000 + 2440587.5;
}

function solarLongitude(date) {
  const days = toJulianDay(date) - 2451545.0;
  const meanLongitude = normalizeDegrees(280.46646 + 0.98564736 * days);
  const anomaly = normalizeDegrees(357.52911 + 0.98560028 * days) * Math.PI / 180;
  const equation = 1.914602 * Math.sin(anomaly) + 0.019993 * Math.sin(2 * anomaly) + 0.000289 * Math.sin(3 * anomaly);
  return normalizeDegrees(meanLongitude + equation);
}

function getZodiacSign(date) {
  return zodiacSigns[Math.floor(solarLongitude(date) / 30)];
}

function findSignIngress(date, sign) {
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  let upper = new Date(date);
  let lower = new Date(upper.getTime() - millisecondsPerDay);

  for (let step = 0; step < 45; step += 1) {
    if (getZodiacSign(lower) !== sign) break;
    upper = lower;
    lower = new Date(lower.getTime() - millisecondsPerDay);
  }

  for (let step = 0; step < 32; step += 1) {
    const middle = new Date((lower.getTime() + upper.getTime()) / 2);
    if (getZodiacSign(middle) === sign) {
      upper = middle;
    } else {
      lower = middle;
    }
  }

  return upper;
}

function startOfLocalDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function getAstrologicalDay(date, sign) {
  const ingress = findSignIngress(date, sign);
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const birthDay = startOfLocalDay(date);
  const ingressDay = startOfLocalDay(ingress);
  return {
    day: Math.floor((birthDay - ingressDay) / millisecondsPerDay) + 1,
    ingress,
  };
}

function getOduOri(date, sign) {
  const astrological = getAstrologicalDay(date, sign);
  const astrologicalDay = astrological.day;
  const number = Math.max(1, Math.min(astrologicalDay, 31));
  const record = oduDatabase[number];
  return {
    number,
    astrologicalDay,
    ingress: astrological.ingress,
    name: record?.name || `Odu ${number}`,
    path: record?.path || "ARS AKASHA/02-odus-ifa",
  };
}

function fixedDateCode(month, day) {
  return month * 100 + day;
}

function fixedDayOfYear(month, day) {
  if (month === 2 && day === 29) return fixedDayOfYear(2, 28);
  const reference = new Date(2001, month - 1, day);
  const start = new Date(2001, 0, 1);
  return Math.floor((reference - start) / (24 * 60 * 60 * 1000)) + 1;
}

function getGuardianAngel(month, day) {
  const geniiDates = new Set(["01-05", "03-19", "05-31", "08-12", "10-24"]);
  const key = `${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  const basePath = "ARS AKASHA/04-72-anjos-cabala/02-72-anjos-sagrados";

  if (geniiDates.has(key)) {
    return {
      number: null,
      name: "Genios da Humanidade",
      file: "genios-da-humanidade.md",
      path: `${basePath}/genios-da-humanidade.md`,
      special: true,
    };
  }

  const cycles = [
    { code: 106, ordinal: fixedDayOfYear(1, 6) },
    { code: 320, ordinal: fixedDayOfYear(3, 20) },
    { code: 601, ordinal: fixedDayOfYear(6, 1) },
    { code: 813, ordinal: fixedDayOfYear(8, 13) },
    { code: 1025, ordinal: fixedDayOfYear(10, 25) },
  ];
  const code = fixedDateCode(month, day);
  const dayOrdinal = fixedDayOfYear(month, day);
  const cycle = [...cycles].reverse().find((item) => code >= item.code) || cycles[cycles.length - 1];
  const adjustedDay = cycle.code === 1025 && code < 106 ? dayOrdinal + 365 : dayOrdinal;
  const adjustedStart = cycle.code === 1025 && code < 106 ? cycle.ordinal : cycle.ordinal;
  const number = ((adjustedDay - adjustedStart) % 72) + 1;
  const file = guardianAngelFiles[number - 1];

  return {
    number,
    name: guardianAngelNames[number - 1],
    file,
    psalm: guardianAngelPsalms[number],
    path: `${basePath}/${file}`,
    special: false,
  };
}

function getAngelCorrespondences(guardianAngel) {
  if (!guardianAngel || guardianAngel.special) {
    return {
      color: "Revelada nos estudos",
      crystals: "Revelados nos estudos",
      herbs: "Reveladas nos estudos",
      incense: "Revelado nos estudos",
      virtue: "Revelada nos estudos",
    };
  }

  const correspondences = guardianAngelCorrespondences[guardianAngel.number] || {};
  return {
    color: correspondences.color || "Selecionada na loja",
    crystals: correspondences.crystals || "Selecionados na loja",
    herbs: correspondences.herbs || "Selecionadas na loja",
    incense: correspondences.incense || "Selecionado na loja",
    virtue: correspondences.virtue || "Revelada nos estudos",
  };
}

function getAngelChoir(guardianAngel) {
  if (!guardianAngel || guardianAngel.special) {
    return {
      choir: "Genios da Humanidade",
      archangel: "Revelado nos estudos",
      theme: "servico espiritual, humanidade e direcao propria",
    };
  }

  return angelChoirs.find((item) => guardianAngel.number >= item.min && guardianAngel.number <= item.max) || {
    choir: "Revelado nos estudos",
    archangel: "Revelado nos estudos",
    theme: "protecao espiritual",
  };
}

function getDailyStoreCorrespondences(dayEnergy) {
  const stone = numerologyStoneTable[dayEnergy] || {};
  return {
    crystal: stone.crystal || "Selecionado na loja",
    incense: "Selecionado na loja",
  };
}

function getPersonalYearCrystal(yearEnergy) {
  return personalYearCrystals[yearEnergy] || {
    theme: "Revelado na leitura",
    crystal: "Selecionado na loja",
    color: "Selecionada na loja",
    description: "A pedra do ano pessoal sera indicada conforme a energia numerologica que estiver ativa para este ciclo.",
  };
}

function getMainChakra(chakraEnergy) {
  return chakraTable[chakraEnergy] || chakraTable[1];
}

function reduceDigits(value) {
  let number = Math.abs(Number(value)) || 0;
  while (number > 9 && ![11, 22, 33].includes(number)) {
    number = String(number).split("").reduce((total, digit) => total + Number(digit), 0);
  }
  return number || 1;
}

function getNameNumber(text) {
  const sum = normalize(text).replace(/[^a-z]/g, "").split("").reduce((total, char) => total + char.charCodeAt(0) - 96, 0);
  return reduceDigits(sum);
}

function getLifePath(dateText) {
  const sum = dateText.replace(/\D/g, "").split("").reduce((total, digit) => total + Number(digit), 0);
  return reduceDigits(sum);
}

function getSoulArcana(dateText) {
  const sum = dateText.replace(/\D/g, "").split("").reduce((total, digit) => total + Number(digit), 0);
  const number = sum <= 22 ? sum : reduceDigits(sum);
  return {
    number,
    ...tarotArcana[number],
  };
}

function getPathCard(dateText) {
  const sum = dateText.replace(/\D/g, "").split("").reduce((total, digit) => total + Number(digit), 0);
  const number = sum <= 36 ? sum : reduceDigits(sum);
  return {
    number,
    ...lenormandCards[number],
  };
}

function getJourneyRune(dateText) {
  const sum = dateText.replace(/\D/g, "").split("").reduce((total, digit) => total + Number(digit), 0);
  const number = sum <= 24 ? sum : reduceDigits(sum);
  return {
    number,
    ...elderFutharkRunes[number],
  };
}

function getDailyDraw(data, seed) {
  const today = new Date();
  const dailySeed = seed + today.getDate() + today.getMonth() + today.getFullYear();
  const tarotNumber = (Math.abs(dailySeed) % 22) + 1;
  const lenormandNumber = (Math.abs(dailySeed + seed + 7) % 36) + 1;
  const tarot = tarotArcana[tarotNumber];
  const lenormand = lenormandCards[lenormandNumber];

  return {
    tarot: {
      number: tarotNumber,
      name: tarot.name,
      theme: tarot.theme,
    },
    lenormand: {
      number: lenormandNumber,
      name: lenormand.name,
      theme: lenormand.theme,
    },
  };
}

function formatDrawForWhatsApp(planId) {
  return "";
}

function getDayEnergy(day) {
  return reduceDigits(day);
}

function getYearEnergy(day, month, year = new Date().getFullYear()) {
  return reduceDigits(day + month + reduceDigits(year));
}

function getLuckyNumber(lifePath, nameNumber, dayEnergy) {
  return reduceDigits(lifePath + nameNumber + dayEnergy);
}

function getHourWindow(timeText) {
  const hour = Number((timeText || "12:00").split(":")[0]);
  if (hour >= 5 && hour < 11) return "manha: inicio, corpo vital e abertura de caminhos";
  if (hour >= 11 && hour < 17) return "tarde: expressao, realizacao e visibilidade";
  if (hour >= 17 && hour < 22) return "noite: vinculos, escuta e magnetismo";
  return "madrugada: ancestralidade, sonhos e camadas ocultas";
}

function getElementBySign(sign) {
  const elements = {
    Fogo: ["Aries", "Leao", "Sagitario"],
    Terra: ["Touro", "Virgem", "Capricornio"],
    Ar: ["Gemeos", "Libra", "Aquario"],
    Agua: ["Cancer", "Escorpiao", "Peixes"],
  };
  return Object.entries(elements).find(([, signs]) => signs.includes(sign))?.[0] || "Terra";
}

function getModalityBySign(sign) {
  const modalities = {
    Cardinal: ["Aries", "Cancer", "Libra", "Capricornio"],
    Fixa: ["Touro", "Leao", "Escorpiao", "Aquario"],
    Mutavel: ["Gemeos", "Virgem", "Sagitario", "Peixes"],
  };
  return Object.entries(modalities).find(([, signs]) => signs.includes(sign))?.[0] || "Cardinal";
}

function getCityCoordinates(city) {
  const simplified = normalize(city)
    .replace(/[^a-z\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return cityCoordinates[simplified] || cityCoordinates[simplified.replace(/\s+(brasil|brazil)$/i, "")] || null;
}

function getAscendant(date, city) {
  const coords = getCityCoordinates(city);
  if (!coords) {
    return {
      sign: "Revelado nos estudos",
      degree: null,
      knownCity: false,
    };
  }

  const jd = toJulianDay(date);
  const centuries = (jd - 2451545.0) / 36525;
  const gmst = normalizeDegrees(
    280.46061837 +
    360.98564736629 * (jd - 2451545.0) +
    0.000387933 * centuries * centuries -
    (centuries * centuries * centuries) / 38710000
  );
  const theta = normalizeDegrees(gmst + coords.lon) * Math.PI / 180;
  const latitude = coords.lat * Math.PI / 180;
  const obliquity = 23.439291 * Math.PI / 180;
  const asc = normalizeDegrees(
    Math.atan2(
      Math.cos(theta),
      -Math.sin(obliquity) * Math.tan(latitude) - Math.cos(obliquity) * Math.sin(theta)
    ) * 180 / Math.PI
  );

  return {
    sign: zodiacSigns[Math.floor(asc / 30)],
    degree: asc % 30,
    knownCity: true,
  };
}

function pickBySeed(items, seed) {
  return items[Math.abs(seed) % items.length];
}

function getSamsaraCycle(seed) {
  return pickBySeed(samsaraCycles, seed);
}

function generateReading(data) {
  const date = new Date(`${data.birthDate}T${data.birthTime || "12:00"}`);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const sign = getZodiacSign(date);
  const element = getElementBySign(sign);
  const modality = getModalityBySign(sign);
  const nameNumber = getNameNumber(data.name);
  const lifePath = getLifePath(data.birthDate);
  const soulArcana = getSoulArcana(data.birthDate);
  const pathCard = getPathCard(data.birthDate);
  const journeyRune = getJourneyRune(data.birthDate);
  const dayEnergy = getDayEnergy(day);
  const yearEnergy = getYearEnergy(day, month);
  const luckyNumber = getLuckyNumber(lifePath, nameNumber, dayEnergy);
  const dailyStore = getDailyStoreCorrespondences(dayEnergy);
  const yearCrystal = getPersonalYearCrystal(yearEnergy);
  const mainChakra = getMainChakra(lifePath);
  const hourWindow = getHourWindow(data.birthTime);
  const oduOri = getOduOri(date, sign);
  const guardianAngel = getGuardianAngel(month, day);
  const angelChoir = getAngelChoir(guardianAngel);
  const angelCorrespondences = getAngelCorrespondences(guardianAngel);
  const ascendant = getAscendant(date, data.city);
  const psalmKey = guardianAngel.psalm ? `${guardianAngel.psalm.psalm}:${guardianAngel.psalm.verse}` : "";
  const psalmPrayer = psalmPrayerMessages[psalmKey] || "Que minha oracao encontre silencio, protecao e direcao para atravessar este ciclo com mais fe.";
  const seed = day + month + year + nameNumber + lifePath + data.city.length;
  const dailyDraw = getDailyDraw(data, seed);
  const samsaraCycle = getSamsaraCycle(seed + dayEnergy + yearEnergy);
  const path = pickBySeed(["protecao espiritual", "abertura de caminhos", "cura ancestral", "voz e expressao", "prosperidade consciente", "missao publica"], seed + 3);
  const guide = pickBySeed(["Sagrado Anjo Guardiao", "Orixas", "Chakras", "Luz e sombra", "Ciclos da alma", "Mapa espiritual"], seed + 7);
  const firstName = data.name.trim().split(/\s+/)[0];

  return {
    title: `${firstName}, sua leitura inicial abre um caminho de autoconhecimento`,
    facts: [
      ["Signo solar", sign],
      ["Elemento", element],
      ["Modalidade", modality],
      ["Caminho de vida", lifePath],
      ["Numero do nome", nameNumber],
      ["Arcano da alma", `${soulArcana.number} - ${soulArcana.name}`],
      ["Carta do caminho", `${pathCard.number} - ${pathCard.name}`],
      ["Runa da jornada", `${journeyRune.number} - ${journeyRune.name}`],
      ["Energia do dia", dayEnergy],
      ["Energia do ano", yearEnergy],
      ["Pedra do ano", yearCrystal.crystal],
      ["Cor do ano", yearCrystal.color],
      ["Chakra principal", mainChakra.label],
      ["Numero de sorte", luckyNumber],
      ["Ascendente", ascendant.sign],
      ["Odu Ori", `${oduOri.number} - ${oduOri.name}`],
      ["Orixa de coroa", "Revelado nos estudos"],
      ["Anjo natal", guardianAngel.special ? guardianAngel.name : `${guardianAngel.number} - ${guardianAngel.name}`],
      ["Arcanjo regente", angelChoir.archangel],
    ],
    signature: `A sua data abre uma primeira assinatura espiritual ligada a ${sign}. Essa camada fala do seu jeito de perceber a vida, escolher caminhos e ocupar o mundo. No estudo completo, essa informacao e cruzada com outras partes da sua historia.`,
    tarotMessage: `Mensagem de hoje para voce do Tarot: ${dailyDraw.tarot.number}, ${dailyDraw.tarot.name}. Este arcano fala de ${dailyDraw.tarot.theme}. Observe onde esse chamado aparece no seu dia, nas suas escolhas e na forma como sua alma pede mais consciencia.`,
    lenormandMessage: `Mensagem de hoje para voce do Baralho Cigano: ${dailyDraw.lenormand.number}, ${dailyDraw.lenormand.name}. Esta carta aponta ${dailyDraw.lenormand.theme}. Observe os sinais simples do cotidiano, as conversas, movimentos e caminhos que se abrem ao seu redor.`,
    numerology: `A sua numerologia aponta o caminho de vida ${lifePath}, o numero do nome ${nameNumber}, a energia do dia ${dayEnergy} e a energia do ano ${yearEnergy}. Aqui aparece uma primeira pista sobre direcao, identidade, ciclos e escolhas que podem se abrir com mais profundidade no estudo completo.`,
    tarot: `Seu Arcano da Alma e ${soulArcana.number}, ${soulArcana.name}. Ele aparece como um chamado ligado a ${soulArcana.theme}. Esta carta nao fecha seu destino: ela mostra uma porta de consciencia para observar escolhas, repeticoes e potenciais.`,
    lenormand: `Sua Carta do Caminho no Baralho Cigano e ${pathCard.number}, ${pathCard.name}. Ela fala de ${pathCard.theme}. Essa carta mostra uma pista simples do cotidiano: onde observar sinais, conversas, movimentos e escolhas.`,
    rune: `Sua Runa da Jornada e ${journeyRune.number}, ${journeyRune.name}. Ela revela uma forca ancestral ligada a ${journeyRune.theme}. Use essa runa como uma chave de observacao, protecao e direcao para os proximos passos.`,
    yearCrystal: `Sua pedra do ano pessoal e ${yearCrystal.crystal}, com apoio da cor ${yearCrystal.color}. Essa escolha acompanha a energia ${yearEnergy}, ligada a ${yearCrystal.theme}, e pode ser usada como um lembrete simples de presenca e bem-estar.`,
    chakra: `Seu chakra principal nesta leitura e o ${mainChakra.label} (${mainChakra.name}). Ele toca ${mainChakra.theme}. A cor de apoio e ${mainChakra.color}, o elemento e ${mainChakra.element} e o mantra de foco e ${mainChakra.mantra}.`,
    samsara: `Toda alma carrega ciclos. Alguns curam, outros se repetem ate serem vistos. Na sua leitura inicial, a Roda de Samsara toca o tema ${samsaraCycle.title}. ${samsaraCycle.text} No estudo completo, essa camada e aberta com mais profundidade, mostrando sinais, escolhas e caminhos de libertacao.`,
    luck: `Seu numero de sorte nesta leitura e ${luckyNumber}. Use esse numero como uma pequena chave de foco para escolhas, sinais e momentos em que voce quer se alinhar com a propria sorte.`,
    ascendant: ascendant.knownCity
      ? `Seu ascendente aparece em ${ascendant.sign}. Ele mostra sua porta de entrada no mundo: a primeira impressao que voce transmite, seu jeito de reagir a vida e a forma como sua alma veste a personalidade. No relatorio completo, essa camada e aberta com mais profundidade.`
      : `O ascendente mostra sua porta de entrada no mundo: a primeira impressao que voce transmite, seu jeito de reagir a vida e a forma como sua alma veste a personalidade. Essa camada fica revelada nos estudos completos.`,
    hour: `A hora informada abre a janela da ${hourWindow}. Esse horario revela o tom silencioso do seu nascimento: como sua energia desperta, se protege e responde aos ciclos da vida. No relatorio completo, essa camada ganha uma leitura mais profunda e pessoal.`,
    odu: `Odu ${oduOri.number}, ${oduOri.name}, aparece como chave inicial do seu Ori. Essa camada fala da cabeca espiritual, dos caminhos que pedem atencao e de aprendizados que podem se repetir ate serem compreendidos com mais profundidade.`,
    orixa: "Um dos Orixas que fazem parte de sua coroa sera revelado nos estudos. Essa camada mostra uma forca espiritual de sustentacao, cuidado e direcao para a sua caminhada.",
    angel: guardianAngel.special
      ? `Sua data toca os ${guardianAngel.name}, uma marca especial dentro da camada angelica do ARS AKASHA. Isso sugere uma jornada menos comum, ligada a humanidade, servico e direcao espiritual propria.`
      : `Seu Sagrado Anjo Guardiao natal e o anjo ${guardianAngel.number}, ${guardianAngel.name}. Esta presenca aponta uma virtude de protecao, orientacao e desenvolvimento espiritual.`,
    archangel: guardianAngel.special
      ? `Nesta data especial, o arcanjo regente fica revelado nos estudos. A leitura completa pode abrir essa camada com mais cuidado, sem reduzir a data a uma regra comum.`
      : `Pelo coro do seu anjo, sua leitura tambem aponta ${angelChoir.archangel} como arcanjo regente. Essa camada toca ${angelChoir.theme}.`,
    angelCorrespondences: {
      intro: "Estas indicacoes mostram uma forma simples de aproximar a energia do seu anjo no cotidiano.",
      items: [
        ["Cor", angelCorrespondences.color],
        ["Cristais", angelCorrespondences.crystals],
        ["Ervas", angelCorrespondences.herbs],
        ["Incenso", angelCorrespondences.incense],
        ["Virtude", angelCorrespondences.virtue],
      ],
    },
    storeGuidance: {
      intro: "Estas indicacoes podem apoiar seu bem-estar e transformar a leitura inicial em uma pratica simples de cuidado, presenca e alinhamento no dia a dia.",
      items: [
        ["Cristal do anjo", angelCorrespondences.crystals],
        ["Incenso do anjo", angelCorrespondences.incense],
        [`Cristal do ano ${yearEnergy}`, yearCrystal.crystal],
        [`Cor do ano ${yearEnergy}`, yearCrystal.color],
        ["Chakra principal", mainChakra.label],
        ["Cor do chakra", mainChakra.color],
        [`Cristal do dia ${dayEnergy}`, dailyStore.crystal],
        [`Incenso do dia ${dayEnergy}`, dailyStore.incense],
      ],
    },
    psalm: guardianAngel.special
      ? `A mensagem do seu anjo fala de gratidao, protecao e servico espiritual. Este e um chamado para ouvir a propria fe com mais silencio e presenca.`
      : `A mensagem do seu anjo convida sua alma a buscar protecao, clareza e direcao. Para orar: ${psalmPrayer}`,
    guide: `A camada recomendada para aprofundamento e ${guide}. Ela pode abrir uma leitura mais pessoal, com direcao, cuidado e orientacoes para o momento que voce esta vivendo.`,
    offer: "Relatorio completo sugerido: astrologia espiritual, leitura de Ori, anjo guardiao, camadas de luz e sombra, corpo sutil e PDF final enviado por e-mail.",
  };
}

function renderReadingPlanOffers() {
  if (!plans.length) {
    return `
      <div class="reading-plan-offer">
        <span>Em breve</span>
        <strong>Novos estudos em preparacao</strong>
        <small>Os aprofundamentos do ARS AKASHA estao sendo reorganizados. Continue pelo WhatsApp para receber orientacao sobre o melhor caminho.</small>
        <a class="primary-button link-button plan-whatsapp-link" href="${getWhatsAppUrl()}" target="_blank" rel="noreferrer">Falar pelo WhatsApp</a>
      </div>
    `;
  }

  const studies = sortPlansForSale(plans.filter((plan) => !isEbookPlan(plan)));
  const ebooks = sortPlansForSale(plans.filter(isEbookPlan));
  const renderOffers = (items) => items.map((plan) => `
    <div class="reading-plan-offer ${plan.id === state.featuredPlanId ? "featured" : ""} ${state.selectedPlan === plan.id ? "active" : ""}">
      <span>${getPlanBadge(plan)}</span>
      <strong>${plan.name}</strong>
      <em>${plan.price}</em>
      <small>${plan.summary}</small>
      <a class="ghost-button select-reading-plan link-button" href="${getWhatsAppUrl(plan.id)}" target="_blank" rel="noreferrer">${getPlanActionLabel(plan)}</a>
      <a class="primary-button link-button plan-whatsapp-link" href="${getWhatsAppUrl(plan.id)}" target="_blank" rel="noreferrer">Comprar pelo WhatsApp</a>
    </div>
  `).join("");

  return `
    <div class="reading-plan-group">
      <div class="reading-plan-heading">
        <strong>${getPlanGroupTitle(false)}</strong>
        <small>${getPlanGroupIntro(false)}</small>
      </div>
      ${renderOffers(studies)}
    </div>
    <div class="reading-plan-group ebook-group">
      <div class="reading-plan-heading">
        <strong>${getPlanGroupTitle(true)}</strong>
        <small>${getPlanGroupIntro(true)}</small>
      </div>
      ${renderOffers(ebooks)}
    </div>
  `;
}

function renderReading(reading, data) {
  els.readingPanel.innerHTML = `
    <div class="reading-card">
      <p class="eyebrow">Leitura inicial</p>
      <h3>${reading.title}</h3>
      <div class="reading-result-layout">
        <div class="reading-content">
      <div class="reading-facts">
        ${reading.facts.map(([label, value]) => `
          <span><strong>${label}</strong>${value}</span>
        `).join("")}
      </div>
      <div class="reading-section">
        <strong>Sua assinatura espiritual</strong>
        <p>${reading.signature}</p>
      </div>
      <div class="reading-section daily-draw-section">
        <strong>Mensagem de hoje para voce do Baralho Cigano</strong>
        <p>${reading.lenormandMessage}</p>
      </div>
      <div class="reading-section daily-draw-section">
        <strong>Mensagem de hoje para voce do Tarot</strong>
        <p>${reading.tarotMessage}</p>
      </div>
      <div class="reading-section">
        <strong>A sua numerologia</strong>
        <p>${reading.numerology}</p>
      </div>
      <div class="reading-section">
        <strong>Arcano da Alma</strong>
        <p>${reading.tarot}</p>
      </div>
      <div class="reading-section">
        <strong>Carta do Caminho</strong>
        <p>${reading.lenormand}</p>
      </div>
      <div class="reading-section">
        <strong>Runa da Jornada</strong>
        <p>${reading.rune}</p>
      </div>
      <div class="reading-section">
        <strong>Pedra do ano pessoal</strong>
        <p>${reading.yearCrystal}</p>
      </div>
      <div class="reading-section">
        <strong>Chakra principal</strong>
        <p>${reading.chakra}</p>
      </div>
      <div class="reading-section">
        <strong>Ciclo que se repete</strong>
        <p>${reading.samsara}</p>
      </div>
      <div class="reading-section">
        <strong>Numero de sorte</strong>
        <p>${reading.luck}</p>
      </div>
      <div class="reading-section">
        <strong>Ascendente</strong>
        <p>${reading.ascendant}</p>
      </div>
      <div class="reading-section">
        <strong>Janela de nascimento</strong>
        <p>${reading.hour}</p>
      </div>
      <div class="reading-section">
        <strong>Odu Ori</strong>
        <p>${reading.odu}</p>
      </div>
      <div class="reading-section">
        <strong>Orixa de coroa</strong>
        <p>${reading.orixa}</p>
      </div>
      <div class="reading-section">
        <strong>Sagrado Anjo Guardiao</strong>
        <p>${reading.angel}</p>
      </div>
      <div class="reading-section">
        <strong>Arcanjo regente</strong>
        <p>${reading.archangel}</p>
      </div>
      <div class="reading-section">
        <strong>Presentes do anjo</strong>
        <p>${reading.angelCorrespondences.intro}</p>
        <div class="correspondence-grid">
          ${reading.angelCorrespondences.items.map(([label, value]) => `
            <span><strong>${label}</strong>${value}</span>
          `).join("")}
        </div>
      </div>
      <div class="reading-section store-guidance">
        <strong>Pratica de bem-estar</strong>
        <p>${reading.storeGuidance.intro}</p>
        <div class="correspondence-grid">
          ${reading.storeGuidance.items.map(([label, value]) => `
            <span><strong>${label}</strong>${value}</span>
          `).join("")}
        </div>
      </div>
      <div class="reading-section">
        <strong>Mensagem do seu anjo</strong>
        <p>${reading.psalm}</p>
      </div>
      <div class="reading-section">
        <strong>Proximo caminho</strong>
        <p>${reading.guide}</p>
      </div>
      <div class="offer-strip">
        <strong>Continuidade para ${data.email}</strong>
        <span>Os novos estudos do ARS AKASHA estao sendo reorganizados. Continue pelo WhatsApp para receber a melhor indicacao para o seu momento.</span>
        <a class="primary-button inline-offer link-button" href="${getWhatsAppUrl()}" target="_blank" rel="noreferrer">Falar pelo WhatsApp</a>
      </div>
        </div>
        <aside class="reading-sales" aria-label="Estudos recomendados">
          <p class="eyebrow">Aprofundar</p>
          <h4>Estudos e e-books</h4>
          <p>Escolha um estudo personalizado ou um e-book digital para continuar pelo WhatsApp.</p>
          <div class="reading-plan-list">
            ${renderReadingPlanOffers()}
          </div>
        </aside>
      </div>
    </div>
  `;
}

function getOfferText(planId = state.selectedPlan) {
  const plan = plans.find((item) => item.id === planId) || plans[1];
  const lead = state.currentLead;
  const name = lead?.name || "consulente";
  const contact = lead?.whatsapp ? ` WhatsApp informado: ${lead.whatsapp}.` : "";

  if (!plan) {
    return `Ola, ${name}. Fiz minha leitura inicial no ARS AKASHA e quero continuar pelo WhatsApp para saber qual estudo combina melhor com meu momento.${contact}`;
  }

  const generatedDraw = formatDrawForWhatsApp(planId);
  if (isEbookPlan(plan)) {
    return `Ola, ${name}. Quero comprar o e-book ${plan.name} (${plan.price}) do ARS AKASHA. Conteudo: ${plan.features.join("; ")}.${contact}`;
  }

  return `Ola, ${name}. Seu relatorio ARS AKASHA no plano ${plan.name} (${plan.price}) inclui: ${plan.features.join("; ")}.${generatedDraw}${contact}`;
}

function getWhatsAppUrl(planId = state.selectedPlan) {
  const text = encodeURIComponent(getOfferText(planId));
  return whatsappConfig.number ? `https://wa.me/${whatsappConfig.number}?text=${text}` : `https://wa.me/?text=${text}`;
}

function setModule(moduleId) {
  state.module = moduleId;
  render();
}

document.addEventListener("click", (event) => {
  const moduleButton = event.target.closest("[data-module]");
  if (moduleButton) {
    setModule(moduleButton.dataset.module);
    return;
  }

  const planButton = event.target.closest("[data-plan]");
  if (planButton) {
    state.selectedPlan = planButton.dataset.plan;
    renderPlans();
    return;
  }

  if (event.target.closest("[data-scroll-plans]")) {
    els.readingPanel.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  if (event.target.closest("[data-scroll-intake]")) {
    els.intakeForm.scrollIntoView({ behavior: "smooth", block: "start" });
    els.clientName.focus({ preventScroll: true });
    return;
  }

  const selectPlanButton = event.target.closest("[data-select-plan]");
  if (selectPlanButton) {
    state.selectedPlan = selectPlanButton.dataset.selectPlan;
    renderPlans();
    els.readingPanel.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  const recordButton = event.target.closest("[data-record]");
  if (recordButton) {
    state.selectedId = recordButton.dataset.record;
    render();
  }
});

els.searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderList();
  renderDetail();
});

els.themeToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("light");
  localStorage.setItem("akasha-theme", document.documentElement.classList.contains("light") ? "light" : "dark");
});

els.newNoteButton.addEventListener("click", () => {
  const record = records.find((item) => item.id === state.selectedId);
  els.noteTitle.value = record ? `Nota sobre ${record.title}` : "";
  els.noteBody.value = "";
  els.noteDialog.showModal();
});

els.saveNoteButton.addEventListener("click", () => {
  const title = els.noteTitle.value.trim();
  const body = els.noteBody.value.trim();
  if (!title || !body) return;

  state.notes.push({
    id: crypto.randomUUID(),
    recordId: state.selectedId,
    title,
    body,
    createdAt: new Date().toISOString(),
  });
  localStorage.setItem("akasha-notes", JSON.stringify(state.notes));
  els.noteDialog.close();
  render();
});

els.intakeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = {
    id: crypto.randomUUID(),
    name: els.clientName.value.trim(),
    email: els.clientEmail.value.trim(),
    whatsapp: els.clientWhatsApp.value.trim(),
    marketingConsent: els.marketingConsent.checked,
    birthDate: els.birthDate.value,
    birthTime: els.birthTime.value,
    city: els.birthCity.value.trim(),
    createdAt: new Date().toISOString(),
  };

  const reading = generateReading(data);
  state.featuredPlanId = getRandomFeaturedPlanId();
  state.currentLead = { ...data, readingTitle: reading.title };
  state.leads.push(state.currentLead);
  localStorage.setItem("akasha-leads", JSON.stringify(state.leads));
  renderReading(reading, data);
  renderMetrics();
  renderCheckout();
});

els.clearReadingButton.addEventListener("click", () => {
  els.intakeForm.reset();
  els.readingPanel.innerHTML = `
    <p class="eyebrow">Resultado</p>
    <h2>Primeira leitura pronta para nascer</h2>
    <p class="detail-summary">Preencha seus dados para receber uma primeira leitura espiritual com sinais do seu caminho, numero de sorte, anjo guardiao, oraculos e praticas de bem-estar.</p>
    <div class="offer-strip">
      <strong>Depois da leitura gratuita</strong>
      <span>Voce podera escolher um estudo mais profundo pelo WhatsApp.</span>
    </div>
  `;
});

if (localStorage.getItem("akasha-theme") === "light") {
  document.documentElement.classList.add("light");
}

render();

