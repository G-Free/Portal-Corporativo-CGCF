import { BorderPost, Agency, Legislation, NewsItem } from "./types";

export const COLORS = {
  primary: "#003366", // Azul MINFIN
  secondary: "#C5A059", // Dourado Institucional
  accent: "#E30613", // Vermelho Angola
  bg: "#FFFFFF",
  surface: "#F4F7F9",
  text: {
    main: "#1A1A1A",
    muted: "#64748B",
    white: "#FFFFFF",
  },
};

export const AGENCIES: Agency[] = [
  {
    acronym: "AGT",
    ministry: "Ministério das Finanças",
    name: "Administração Geral Tributária",
    description:
      "Autoridade aduaneira e tributária nacional, responsável pela arrecadação e controlo de mercadorias.",
  },
  {
    acronym: "SME",
    ministry: "Ministério do Interior",
    name: "Serviço de Migração e Estrangeiros",
    description:
      "Execução das políticas de migração, controlo de entrada, permanência e saída de pessoas.",
  },
  {
    acronym: "ANTT",
    ministry: "Ministério dos Transportes",
    name: "Agência Nacional dos Transportes Terrestres",
    description:
      "Regulação e fiscalização das actividades de transporte terrestre transfronteiriço.",
  },
  {
    acronym: "DTSER",
    ministry: "Ministério do Interior",
    name: "Direcção de Trânsito e Segurança Rodoviária",
    description:
      "Garante a segurança rodoviária e fiscalização de veículos nos postos fronteiriços.",
  },
  {
    acronym: "PGF",
    ministry: "Ministério do Interior",
    name: "Polícia de Guarda Fronteiras",
    description:
      "Força paramilitar responsável pela vigilância e protecção da integridade das fronteiras terrestres.",
  },
  {
    acronym: "PFA",
    ministry: "Ministério do Interior",
    name: "Polícia Fiscal Aduaneira",
    description:
      "Combate às infracções fiscais e aduaneiras em estreita colaboração com a AGT.",
  },
  {
    acronym: "MINSA",
    ministry: "Ministério da Saúde",
    name: "Ministério da Saúde (Vigilância Sanitária)",
    description:
      "Controlo sanitário e epidemiológico de pessoas, animais e bens na fronteira.",
  },
  {
    acronym: "SGA",
    ministry: "Ministério dos Transportes",
    name: "Sociedade de Gestão de Aeroportos",
    description:
      "Gestão das infraestruturas aeroportuárias para garantir a fluidez logística.",
  },
  {
    acronym: "ENNA",
    ministry: "Ministério dos Transportes",
    name: "Empresa Nacional de Navegação Aérea",
    description:
      "Controlo do tráfego aéreo e segurança da navegação no espaço aéreo nacional.",
  },
  {
    acronym: "PGR",
    ministry: "Órgãos de Justiça",
    name: "Procuradoria Geral da República",
    description:
      "Fiscalização da legalidade e instrução de processos criminais transfronteiriços.",
  },
  {
    acronym: "SIC",
    ministry: "Ministério do Interior",
    name: "Serviço de Investigação Criminal",
    description:
      "Investigação de crimes complexos como tráfico de seres humanos, drogas e armas.",
  },
  {
    acronym: "SNFPA",
    ministry: "Ministério das Pescas e Recursos Marinhos",
    name: "Serviço Nacional de Fiscalização das Pescas",
    description:
      "Fiscalização de recursos biológicos aquáticos em zonas fronteiriças marítimas e fluviais.",
  },
  {
    acronym: "ANAC",
    ministry: "Ministério dos Transportes",
    name: "Autoridade Nacional da Aviação Civil",
    description:
      "Autoridade reguladora e de supervisão da aviação civil na República de Angola.",
  },
];

export const BORDER_POSTS: BorderPost[] = [
  {
    id: "1",
    name: "Aeroporto Internacional Agostinho Neto",
    province: "Luanda",
    status: "OPEN",
    type: "AIR",
    agencies: ["AGT", "SME", "MINSA", "ANAC", "ENNA", "SGA", "SIC"],
  },
  {
    id: "2",
    name: "Porto de Luanda",
    province: "Luanda",
    status: "OPEN",
    type: "MARITIME",
    agencies: ["AGT", "SME", "PFA", "MINSA", "SIC", "PGR", "SNFPA"],
  },
  {
    id: "3",
    name: "Posto Fronteiriço de Santa Clara",
    province: "Cunene",
    status: "OPEN",
    type: "LAND",
    agencies: ["AGT", "SME", "PGF", "ANTT", "DTSER", "SIC", "MINSA"],
  },
  {
    id: "4",
    name: "Posto Fronteiriço do Luvo",
    province: "Zaire",
    status: "LIMITED",
    type: "LAND",
    agencies: ["AGT", "SME", "PGF", "SIC", "DTSER", "MINSA"],
  },
  {
    id: "5",
    name: "Posto Fronteiriço de Massabi",
    province: "Cabinda",
    status: "OPEN",
    type: "LAND",
    agencies: ["AGT", "SME", "PGF", "ANTT", "SIC", "MINSA"],
  },
  {
    id: "6",
    name: "Aeroporto Internacional da Catumbela",
    province: "Benguela",
    status: "OPEN",
    type: "AIR",
    agencies: ["AGT", "SME", "SGA", "ANAC", "MINSA"],
  },
];

export const MOCK_LEGISLATION: Legislation[] = [
  {
    id: "l1",
    title: "Decreto Presidencial n.º 22/26",
    description:
      "Estabelece o regime de coordenação entre as agências que actuam nos postos de fronteira da República de Angola, revogando normas anteriores.",
    date: "26 Janeiro 2026",
    type: "DECREE",
    url: "#",
    history: [
      {
        date: "26 Jan 2026",
        note: "Publicação oficial em Diário da República.",
        version: "v2.0",
      },
    ],
  },
];

export const MOCK_NEWS: NewsItem[] = [
  {
    id: "n1",
    title: "CGCF Inicia Operacionalização do Decreto 22/26",
    excerpt:
      "Nova fase de gestão coordenada foca-se na interoperabilidade digital total entre SME, AGT e MINSA.",
    date: "02 Fevereiro 2026",
    category: "Institucional",
    Descric:" Luanda — No âmbito da implementação estratégica das diretrizes estabelecidas pelo novo Decreto Presidencial n.º 22/26, o Comité de Gestão Coordenada de Fronteiras (CGCF) informa a operacionalização de novas etapas de modernização.",
    Corp:"As ações conjuntas entre a Administração Geral Tributária (AGT), o Serviço de Migração e Estrangeiros (SME) e os demais órgãos competentes visam a eliminação de redundâncias burocráticas e a aceleração do fluxo de mercadorias e pessoas nos principais corredores logísticos nacionais.",
    Concl:"Este avanço consolida o compromisso do Executivo angolano com a transparência e a eficiência na gestão das fronteiras, potencializando o ambiente de negócios e a arrecadação de receitas para o Estado.",
    image: new URL("./conteudo/imagens/noticias/decreto_operacionalizacao.jpeg", import.meta.url).href,
  },
  {
    id: "n2",
    title: "Monitorização do Corredor do Lobito Reforçada",
    excerpt:
      "Equipas conjuntas de inspecção passam a utilizar o novo protocolo de segurança regional.",
    date: "28 Janeiro 2026",
    category: "Logística",
    Descric:" No âmbito da modernização da gestão fronteiriça, o Comité de Gestão Coordenada de Fronteiras reforça a monitorização do Corredor do Lobito, através da implementação de novos protocolos de segurança e de atuação conjunta entre os principais órgãos do Estado.",
    Corp:"Luanda — No quadro da implementação estratégica das diretrizes estabelecidas pelo Decreto Presidencial n.º 22/26, o Comité de Gestão Coordenada de Fronteiras (CGCF) deu início a novas etapas de modernização dos mecanismos de monitorização e controlo do Corredor do Lobito, um dos principais eixos logísticos do país. As ações em curso envolvem equipas conjuntas de inspeção integradas pela Administração Geral Tributária (AGT), pelo Serviço de Migração e Estrangeiros (SME) e por outros órgãos competentes, que passam a operar com base num novo protocolo regional de segurança. Esta abordagem integrada tem como objetivo reforçar o controlo, aumentar a previsibilidade dos processos e garantir maior fluidez no trânsito de mercadorias e pessoas. A implementação destas medidas visa igualmente a eliminação de redundâncias burocráticas, a melhoria da articulação interinstitucional e a aceleração dos procedimentos operacionais ao longo do corredor logístico, alinhando-se às boas práticas internacionais de facilitação do comércio e segurança fronteiriça. O Corredor do Lobito assume um papel estratégico no escoamento de mercadorias, na integração regional e no fortalecimento da cadeia logística nacional, sendo considerado um vetor-chave para o desenvolvimento económico e a competitividade do país.",
    Concl:"Com o reforço da monitorização e a adoção de protocolos de segurança mais eficazes, o Executivo angolano consolida o seu compromisso com a transparência, a eficiência e a modernização da gestão das fronteiras. Estas ações contribuem diretamente para a melhoria do ambiente de negócios, o aumento da arrecadação de receitas e o fortalecimento da confiança dos operadores económicos nos corredores logísticos nacionais",
    image: new URL("/conteudo/imagens/noticias/monitorizacao_corredor_lobito.jpeg", import.meta.url).href,
  },
   {
    id: "n3",
    title: "Visita Preparatória para a Inauguração do Posto Fronteiriço do Luvo",
    excerpt:
      "Deslocação técnica para alinhamento institucional, distribuição de compartimentos e alocação de recursos, no âmbito da inauguração do Posto Fronteiriço do Luvo, reforçando a gestão coordenada de fronteiras e a eficiência operacional no terreno.",
    date: "19 Fevereiro 2026",
    category: "Institucional",
    Descric:
      " Uma delegação central realizou uma visita técnica ao Posto Fronteiriço do Luvo com vista à preparação da sua inauguração, assegurando o alinhamento institucional, operacional e logístico entre os órgãos intervenientes no processo de gestão coordenada de fronteiras.",
    Corp:
      "No âmbito da inauguração do Posto Fronteiriço do Luvo, agendada para o próximo dia 19 de fevereiro, uma delegação central deslocou-se à província do Zaire com o objetivo de acompanhar e alinhar os trabalhos preparatórios para a entrada em funcionamento desta importante infraestrutura fronteiriça. A visita teve como foco principal a articulação entre os diferentes órgãos que integram o Comité de Gestão Coordenada de Fronteiras, garantindo uma distribuição adequada dos compartimentos, bem como a correta alocação dos recursos humanos,materiais, meios e equipamentos necessários para o pleno funcionamento do posto. O Posto Fronteiriço do Luvo foi concebido como uma infraestrutura integrada, dispondo de espaços técnicos e operacionais, além de áreas de apoio como dormitórios, refeitório e outras facilidades destinadas a assegurar melhores condições de trabalho e acomodação aos funcionários destacados na jurisdição.Esta iniciativa visa reforçar a coordenação interinstitucional no terreno, melhorar a qualidade da prestação de serviços aos utentes e consolidar o modelo de gestão coordenada de fronteiras, alinhado com as melhores práticas de controlo, segurança e facilitação do tráfego transfronteiriço em Angola.A ação decorreu em estreita colaboração com os órgãos da província do Zaire e representa um passo estratégico para o sucesso do ato inaugural e para a operacionalização eficiente do Posto Fronteiriço do Luvo.",
    Concl:
      "om esta visita técnica, ficam asseguradas as condições necessárias para uma inauguração organizada e funcional do Posto Fronteiriço do Luvo, reforçando o compromisso das instituições envolvidas com a eficiência operacional, a cooperação interinstitucional e a modernização da gestão de fronteiras. A entrada em funcionamento desta infraestrutura representa um avanço significativo na melhoria do controlo fronteiriço, na facilitação dos fluxos transfronteiriços e na prestação de serviços públicos de qualidade, em alinhamento com os objetivos estratégicos do Estado angolano.",
    image: new URL("/conteudo/imagens/noticias/visita ao luvo.jpeg", import.meta.url).href,
  },
];
