
import React from 'react';
import { 
  Network, Truck, Anchor, Zap, ShieldCheck, 
  ChevronRight, Landmark, Building2, Globe, ArrowRight,
  TrendingUp, BarChart3, Clock, MapPin, FileText,
  Shield, Scale, HeartPulse, ClipboardCheck, Award,
  CheckCircle2, Info, Layers, Workflow,
  // Fix: Added missing icons for the Corridor data structure
  Navigation,
  Waves
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Link } from 'react-router-dom';

const Corridors: React.FC = () => {
  const { t } = useLanguage();

  const corridorData = [
    { 
      name: 'Corredor do Lobito', 
      type: 'Eixo Central (Porto + CFB)', 
      desc: 'Conecta o Porto do Lobito às regiões mineiras da RDC e Zâmbia. Pilar fundamental para o escoamento de minerais e logística regional da SADC.',
      status: 'Alta Eficiência',
      icon: Anchor,
      color: '#C5A059'
    },
    { 
      name: 'Corredor de Luanda', 
      type: 'Eixo Norte (Porto + CFL)', 
      desc: 'Principal via de abastecimento do maior centro de consumo nacional. Integra o Porto de Luanda ao Malanje e futuramente às províncias vizinhas.',
      status: 'Operacional',
      icon: Building2,
      color: '#003366'
    },
    { 
      name: 'Corredor do Namibe', 
      type: 'Eixo Sul (Porto + CFM)', 
      desc: 'Vocação agro-mineral. Conecta o Porto do Namibe à Huíla e ao Cuando Cubango, impulsionando a produção agro-pecuária do sul.',
      status: 'Em Modernização',
      icon: Truck,
      color: '#3b82f6'
    },
    { 
      name: 'Corredor Trans-Cunene', 
      type: 'Integração Sul (Rodoviário)', 
      desc: 'Fundamental para o comércio com a Namíbia e África do Sul. Foco em facilitação comercial terrestre via Santa Clara.',
      status: 'Estratégico',
      icon: Navigation,
      color: '#10b981'
    },
    { 
      name: 'Corredor de Cabinda', 
      type: 'Plataforma Marítima/Logística', 
      desc: 'Garante a continuidade territorial e logística com o enclave, com foco em hidrocarbonetos e abastecimento de bens essenciais.',
      status: 'Prioridade Nacional',
      icon: Waves,
      color: '#f59e0b'
    }
  ];

  return (
    <div className="animate-in fade-in duration-700">
      {/* Header Institucional */}
      <section className="bg-[#003366] pt-16 pb-24 border-b-4 border-[#C5A059] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <Network className="absolute -right-20 -top-20 w-96 h-96" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-10">
             <Link to="/" className="hover:text-white transition-colors">Início</Link>
             <span>/</span>
             <span className="text-[#C5A059]">{t('nav_corridors')}</span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-10">
            <div>
              <h1 className="text-white text-5xl font-black uppercase italic tracking-tighter leading-none max-w-4xl mb-4">
                Rede Nacional de Corredores Logísticos
              </h1>
              <p className="text-slate-300 text-lg font-medium max-w-3xl leading-relaxed">
                Infraestrutura, logística e processos integrados para acelerar a economia nacional e consolidar Angola como hub regional.
              </p>
            </div>
            
            {/* Selo de Autoridade Reforçado */}
            <div className="bg-white/10 backdrop-blur-md border-2 border-[#C5A059] p-6 rounded-sm flex items-center gap-5 shrink-0 shadow-2xl group hover:bg-white/20 transition-all cursor-default">
               <div className="bg-[#C5A059] p-3 rounded-full">
                  <ShieldCheck className="text-white w-8 h-8" />
               </div>
               <div>
                  <p className="text-[9px] font-black text-[#C5A059] uppercase tracking-widest leading-tight">Garantia de Soberania</p>
                  <p className="text-white text-[11px] font-black uppercase">Despacho Presidencial 234/20</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eixos Logísticos Grid Completo */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
             <h2 className="text-[#003366] text-3xl font-black uppercase tracking-tighter italic border-l-4 border-[#C5A059] pl-6 mb-4">
               Eixos Estratégicos de Desenvolvimento
             </h2>
             <p className="text-slate-500 text-sm font-medium mb-6">
               Todos os corredores e rotas estão alinhados com o <strong>Despacho Presidencial nº 234/20</strong>, garantindo coordenação entre órgãos do Estado.
             </p>
             <div className="h-px bg-slate-100 w-full mb-12"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {corridorData.map((corr, i) => (
                <div key={i} className="bg-slate-50 p-10 rounded-sm border border-slate-100 hover:border-[#C5A059] hover:shadow-2xl transition-all group relative overflow-hidden">
                   <div className="w-14 h-14 bg-white border border-slate-100 rounded flex items-center justify-center text-[#003366] mb-8 group-hover:bg-[#003366] group-hover:text-white transition-all shadow-sm">
                      <corr.icon className="w-7 h-7" />
                   </div>
                   <h3 className="text-xl font-black text-[#003366] uppercase italic mb-2 tracking-tight leading-none">{corr.name}</h3>
                   <div className="text-[10px] font-black uppercase text-[#C5A059] tracking-widest mb-6">{corr.type}</div>
                   <p className="text-slate-500 text-xs font-medium leading-relaxed mb-10 h-16 line-clamp-3">{corr.desc}</p>
                   <div className="mt-auto flex justify-between items-center text-[9px] font-black uppercase tracking-widest border-t border-slate-200 pt-6">
                      <span className="text-slate-400">Prioridade Estatal</span>
                      <span className="text-[#003366] flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500" /> {corr.status}
                      </span>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* NOVO INFOGRÁFICO: Marco Institucional & Facilitação */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden border-y-8 border-[#C5A059]">
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
               <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-4">Facilitação do Comércio & Marco Institucional</h2>
               <p className="text-slate-400 max-w-3xl mx-auto font-medium">
                  A modernização logística de Angola é regida por uma estrutura legal que promove a convergência entre agências.
               </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12 mb-24">
               {/* Etapa 1 */}
               <div className="bg-white/5 p-10 rounded border border-white/10 text-center relative">
                  <div className="w-16 h-16 bg-[#C5A059] rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                     <FileText className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-black uppercase italic mb-4">1. Marco Legal</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-medium">
                     O <strong>Despacho Presidencial nº 234/20</strong> cria o CGCF, estabelecendo a base para a gestão coordenada.
                  </p>
                  <div className="hidden lg:block absolute top-1/2 -right-6 -translate-y-1/2 z-20">
                     <ArrowRight className="text-[#C5A059] w-12 h-12" />
                  </div>
               </div>
               {/* Etapa 2 */}
               <div className="bg-white/5 p-10 rounded border border-white/10 text-center relative">
                  <div className="w-16 h-16 bg-[#003366] border-2 border-[#C5A059] rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                     <Workflow className="w-8 h-8 text-[#C5A059]" />
                  </div>
                  <h4 className="text-lg font-black uppercase italic mb-4">2. Coordenação</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-medium">
                     Integração entre Aduanas, Migração, Transportes, Saúde, Segurança e Agricultura via CGCF.
                  </p>
                  <div className="hidden lg:block absolute top-1/2 -right-6 -translate-y-1/2 z-20">
                     <ArrowRight className="text-[#C5A059] w-12 h-12" />
                  </div>
               </div>
               {/* Etapa 3 */}
               <div className="bg-white/5 p-10 rounded border border-white/10 text-center">
                  <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                     <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-black uppercase italic mb-4">3. Eficiência</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-medium">
                     Redução de tempos de espera, custos operacionais e aumento da previsibilidade comercial.
                  </p>
               </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-20 items-start">
               <div className="space-y-12">
                  <div className="border-l-4 border-[#C5A059] pl-8">
                     <h3 className="text-2xl font-black uppercase italic mb-6">Benefícios da Facilitação</h3>
                     <div className="grid gap-8">
                        {[
                           { title: 'Despacho Aduaneiro Digital', icon: Zap, text: 'Sistemas eletrónicos aceleram a liberação de mercadorias críticas em tempo recorde.' },
                           { title: 'Documentação Padronizada', icon: Layers, text: 'Harmonização de certificados e guias entre todos os órgãos do CGCF, eliminando redundâncias.' },
                           { title: 'Segurança e Monitorização', icon: ShieldCheck, text: 'Corredores seguros com proteção de carga estratégica e vigilância constante.' }
                        ].map((f, i) => (
                           <div key={i} className="flex gap-6 group">
                              <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-[#C5A059] transition-all">
                                 <f.icon className="w-6 h-6 text-[#C5A059] group-hover:text-white" />
                              </div>
                              <div>
                                 <h4 className="font-black text-sm uppercase tracking-tight mb-2">{f.title}</h4>
                                 <p className="text-slate-400 text-xs font-medium">{f.text}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
               
               <div className="bg-white/5 border border-white/10 p-12 rounded-sm backdrop-blur-sm shadow-2xl">
                  <h3 className="text-white text-[10px] font-black uppercase tracking-[0.3em] text-[#C5A059] mb-10">Métricas de Performance Logística</h3>
                  <div className="space-y-10">
                     {[
                        { label: 'Tempo de Despacho', value: '-24%', sub: 'Redução média em fronteiras estratégicas', trend: 'down' },
                        { label: 'Fluxo Transfronteiriço', value: '+18%', sub: 'Aumento de volume via corredores ferroviários', trend: 'up' },
                        { label: 'Interoperabilidade Digital', value: '74%', sub: 'Agências integradas via portal único (CGCF)', trend: 'up' }
                     ].map((stat, i) => (
                        <div key={i} className="flex justify-between items-end border-b border-white/5 pb-4">
                           <div>
                              <p className="text-[10px] font-black uppercase text-slate-500 mb-1">{stat.label}</p>
                              <p className="text-[9px] text-slate-600 uppercase font-bold max-w-[180px]">{stat.sub}</p>
                           </div>
                           <div className="text-right">
                              <span className="text-3xl font-black text-white italic block leading-none">{stat.value}</span>
                              <span className={`text-[8px] font-black uppercase ${stat.trend === 'up' ? 'text-emerald-500' : 'text-emerald-500'}`}>Melhoria Realizada</span>
                           </div>
                        </div>
                     ))}
                  </div>
                  <div className="mt-12 flex items-center gap-4 p-4 bg-emerald-500/5 border border-emerald-500/20 rounded">
                     <Info className="w-5 h-5 text-emerald-500 shrink-0" />
                     <p className="text-[10px] font-bold text-slate-400">Dados baseados em relatórios da AGT e Ministério dos Transportes (Q1 2024).</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Áreas de Melhoria & Oportunidades */}
      <section className="py-24 bg-white px-6">
         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="p-12 bg-slate-50 border border-slate-100 rounded">
               <h4 className="text-[#003366] font-black uppercase tracking-widest text-sm mb-8 flex items-center gap-3">
                  <BarChart3 className="text-[#C5A059] w-5 h-5" /> Áreas de Melhoria Contínua
               </h4>
               <ul className="space-y-5">
                  {[
                     'Manutenção constante das vias férreas e eixos rodoviários nacionais.',
                     'Redução contínua de custos logísticos face à média regional SADC.',
                     'Expansão de centros de distribuição modernos e Zonas Francas.',
                     'Digitalização total dos postos de fronteira remotos e sub-regionais.'
                  ].map((item, i) => (
                     <li key={i} className="flex gap-4 items-start text-xs font-medium text-slate-500">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-1.5"></div>
                        {item}
                     </li>
                  ))}
               </ul>
            </div>
            
            <div className="p-12 bg-[#003366] text-white rounded shadow-xl relative overflow-hidden group">
               <div className="relative z-10">
                  <h4 className="text-[#C5A059] font-black uppercase tracking-widest text-sm mb-8">Oportunidades Estratégicas</h4>
                  <div className="grid grid-cols-1 gap-6">
                     {[
                        { num: '1', text: 'Investimento em **Zonas Logísticas Especiais** (ZLE) no Lobito e Luanda.' },
                        { num: '2', text: 'Parcerias Público-Privadas para gestão de infraestruturas portuárias de águas profundas.' },
                        { num: '3', text: 'Integração regional reforçada com a SADC e ZCLCA (Zona de Comércio Livre Africana).' },
                        { num: '4', text: 'Apoio institucional via **CGCF**, assegurando priorização regulatória e investimentos.' }
                     ].map((op, oidx) => (
                        <div key={oidx} className="flex gap-4">
                           <div className="bg-white/10 w-8 h-8 rounded flex items-center justify-center shrink-0 text-xs font-black group-hover:bg-[#C5A059] transition-all">{op.num}</div>
                           <p className="text-xs font-medium leading-relaxed">{op.text.split('**').map((t, i) => i % 2 === 1 ? <strong key={i} className="text-[#C5A059]">{t}</strong> : t)}</p>
                        </div>
                     ))}
                  </div>
                  
                  <div className="mt-12 pt-8 border-t border-white/10">
                     <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4">
                           <Award className="text-[#C5A059] w-8 h-8" />
                           <p className="text-[10px] font-bold text-slate-300 italic leading-relaxed">
                              "Trabalhamos com base no Despacho Presidencial nº 234/20, garantindo processos simplificados, segurança e oportunidades alinhadas às políticas do Governo."
                           </p>
                        </div>
                        <Link to="/contacto" className="inline-flex items-center gap-4 bg-[#C5A059] text-white px-8 py-4 rounded-sm text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-[#003366] transition-all shadow-xl">
                           Interessado em Parcerias? <ArrowRight className="w-4 h-4" />
                        </Link>
                     </div>
                  </div>
               </div>
               <Shield className="absolute -bottom-10 -right-10 w-48 h-48 opacity-[0.03]" />
            </div>
         </div>
      </section>
    </div>
  );
};

export default Corridors;
