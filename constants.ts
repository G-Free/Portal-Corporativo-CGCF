
import { BorderPost, Agency, Legislation, NewsItem } from './types';

export const COLORS = {
  primary: '#003366', // Azul MINFIN
  secondary: '#C5A059', // Dourado Institucional
  accent: '#E30613', // Vermelho Angola
  bg: '#FFFFFF',
  surface: '#F4F7F9',
  text: {
    main: '#1A1A1A',
    muted: '#64748B',
    white: '#FFFFFF'
  }
};

export const AGENCIES: Agency[] = [
  { acronym: 'AGT', ministry: 'Ministério das Finanças', name: 'Administração Geral Tributária', description: 'Autoridade aduaneira e tributária nacional, responsável pela arrecadação e controlo de mercadorias.' },
  { acronym: 'SME', ministry: 'Ministério do Interior', name: 'Serviço de Migração e Estrangeiros', description: 'Execução das políticas de migração, controlo de entrada, permanência e saída de pessoas.' },
  { acronym: 'ANTT', ministry: 'Ministério dos Transportes', name: 'Agência Nacional dos Transportes Terrestres', description: 'Regulação e fiscalização das actividades de transporte terrestre transfronteiriço.' },
  { acronym: 'DTSER', ministry: 'Ministério do Interior', name: 'Direcção de Trânsito e Segurança Rodoviária', description: 'Garante a segurança rodoviária e fiscalização de veículos nos postos fronteiriços.' },
  { acronym: 'PGF', ministry: 'Ministério do Interior', name: 'Polícia de Guarda Fronteiras', description: 'Força paramilitar responsável pela vigilância e protecção da integridade das fronteiras terrestres.' },
  { acronym: 'PFA', ministry: 'Ministério do Interior', name: 'Polícia Fiscal Aduaneira', description: 'Combate às infracções fiscais e aduaneiras em estreita colaboração com a AGT.' },
  { acronym: 'MINSA', ministry: 'Ministério da Saúde', name: 'Ministério da Saúde (Vigilância Sanitária)', description: 'Controlo sanitário e epidemiológico de pessoas, animais e bens na fronteira.' },
  { acronym: 'SGA', ministry: 'Ministério dos Transportes', name: 'Sociedade de Gestão de Aeroportos', description: 'Gestão das infraestruturas aeroportuárias para garantir a fluidez logística.' },
  { acronym: 'ENNA', ministry: 'Ministério dos Transportes', name: 'Empresa Nacional de Navegação Aérea', description: 'Controlo do tráfego aéreo e segurança da navegação no espaço aéreo nacional.' },
  { acronym: 'PGR', ministry: 'Órgãos de Justiça', name: 'Procuradoria Geral da República', description: 'Fiscalização da legalidade e instrução de processos criminais transfronteiriços.' },
  { acronym: 'SIC', ministry: 'Ministério do Interior', name: 'Serviço de Investigação Criminal', description: 'Investigação de crimes complexos como tráfico de seres humanos, drogas e armas.' },
  { acronym: 'SNFPA', ministry: 'Ministério das Pescas e Recursos Marinhos', name: 'Serviço Nacional de Fiscalização das Pescas', description: 'Fiscalização de recursos biológicos aquáticos em zonas fronteiriças marítimas e fluviais.' },
  { acronym: 'ANAC', ministry: 'Ministério dos Transportes', name: 'Autoridade Nacional da Aviação Civil', description: 'Autoridade reguladora e de supervisão da aviação civil na República de Angola.' }
];

export const BORDER_POSTS: BorderPost[] = [
  { id: '1', name: 'Aeroporto Internacional Agostinho Neto', province: 'Luanda', status: 'OPEN', type: 'AIR', agencies: ['AGT', 'SME', 'MINSA', 'ANAC', 'ENNA', 'SGA', 'SIC'] },
  { id: '2', name: 'Porto de Luanda', province: 'Luanda', status: 'OPEN', type: 'MARITIME', agencies: ['AGT', 'SME', 'PFA', 'MINSA', 'SIC', 'PGR', 'SNFPA'] },
  { id: '3', name: 'Posto Fronteiriço de Santa Clara', province: 'Cunene', status: 'OPEN', type: 'LAND', agencies: ['AGT', 'SME', 'PGF', 'ANTT', 'DTSER', 'SIC', 'MINSA'] },
  { id: '4', name: 'Posto Fronteiriço do Luvo', province: 'Zaire', status: 'LIMITED', type: 'LAND', agencies: ['AGT', 'SME', 'PGF', 'SIC', 'DTSER', 'MINSA'] },
  { id: '5', name: 'Posto Fronteiriço de Massabi', province: 'Cabinda', status: 'OPEN', type: 'LAND', agencies: ['AGT', 'SME', 'PGF', 'ANTT', 'SIC', 'MINSA'] },
  { id: '6', name: 'Aeroporto Internacional da Catumbela', province: 'Benguela', status: 'OPEN', type: 'AIR', agencies: ['AGT', 'SME', 'SGA', 'ANAC', 'MINSA'] }
];

export const MOCK_LEGISLATION: Legislation[] = [
  { 
    id: 'l1', 
    title: 'Despacho Presidencial nº 234/20', 
    description: 'Estabelece o regime de coordenação entre as agências que actuam nos postos de fronteira da República de Angola.', 
    date: '15 Setembro 2020', 
    type: 'DECREE', 
    url: '#',
    history: [{ date: '15 Set 2020', note: 'Publicação oficial em Diário da República.', version: 'v1.0' }]
  }
];

export const MOCK_NEWS: NewsItem[] = [
  {
    id: 'n1',
    title: 'Modernização do Sistema de Gestão Aduaneira em Santa Clara',
    excerpt: 'O novo centro de controlo integrado permitirá uma redução de 50% no tempo de despacho de mercadorias críticas.',
    date: '24 Maio 2024',
    category: 'Infraestrutura',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1200'
  },
  {
    id: 'n2',
    title: 'Cooperação Transfronteiriça com a República da Namíbia',
    excerpt: 'Delegação do CGCF reúne-se com homólogos namibianos para reforçar protocolos de segurança e trânsito.',
    date: '20 Maio 2024',
    category: 'Diplomacia',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200'
  }
];
