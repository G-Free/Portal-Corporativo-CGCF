
import React from 'react';
import { 
  Cpu, 
  Workflow, 
  Zap, 
  ShieldCheck, 
  BarChart3, 
  Network, 
  Database, 
  Layers, 
  Activity, 
  ArrowRight,
  Target,
  Share2,
  Lightbulb,
  FileText,
  Lock,
  Search,
  Handshake,
  // Added missing Monitor icon
  Monitor
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

const Interoperability: React.FC = () => {
  const { t } = useLanguage();

  const pillars = [
    { 
      icon: Target, 
      title: t('interop_pillar_align'), 
      desc: t('interop_pillar_align_desc'),
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    { 
      icon: Workflow, 
      title: t('interop_pillar_opt'), 
      desc: t('interop_pillar_opt_desc'),
      color: 'text-amber-600',
      bg: 'bg-amber-50'
    },
    { 
      icon: Zap, 
      title: t('interop_pillar_eff'), 
      desc: t('interop_pillar_eff_desc'),
      color: 'text-emerald-600',
      bg: 'bg-emerald-50'
    },
    { 
      icon: Lightbulb, 
      title: t('interop_pillar_innov'), 
      desc: t('interop_pillar_innov_desc'),
      color: 'text-[#C5A059]',
      bg: 'bg-[#C5A059]/5'
    }
  ];

  return (
    <div className="animate-in fade-in duration-700 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#003366] pt-16 pb-24 border-b-4 border-[#C5A059] relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-10">
           <Network className="absolute -right-20 -top-20 w-96 h-96" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-10">
             <Link to="/" className="hover:text-white transition-colors">{t('nav_home')}</Link>
             <span>/</span>
             <span className="text-[#C5A059]">{t('nav_interop')}</span>
          </div>
          
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none mb-8">
              {t('interop_title').split(' ')[0]} <span className="text-[#C5A059]">{t('interop_title').split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed border-l-4 border-[#C5A059] pl-6">
              {t('interop_subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Secção Destaque: Protocolo de Partilha de Dados (Card Branco de Luxo) */}
      <section className="py-24 bg-slate-50 px-6 relative z-20">
         <div className="max-w-7xl mx-auto">
            <div className="bg-white border border-slate-200 shadow-2xl rounded-sm p-10 md:p-20 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/5 rounded-bl-full pointer-events-none"></div>
               
               <div className="grid lg:grid-cols-12 gap-16 items-start relative z-10">
                  <div className="lg:col-span-8 space-y-8">
                     <div className="inline-flex items-center gap-3 text-[#003366]">
                        <Handshake className="w-8 h-8 text-[#C5A059]" />
                        <span className="text-[11px] font-black uppercase tracking-[0.4em]">{t('interop_protocol_title')}</span>
                     </div>
                     <h2 className="text-[#003366] text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-tight">
                        Compromisso de <span className="text-[#C5A059]">Integração Soberana</span>
                     </h2>
                     <div className="bg-slate-50 p-8 border-l-4 border-[#003366] mb-10">
                        <p className="text-[#003366] text-xl font-medium leading-relaxed italic">
                           "{t('interop_protocol_desc')}"
                        </p>
                     </div>
                     <p className="text-slate-500 text-lg font-medium leading-relaxed">
                        {t('interop_protocol_impact')}
                     </p>
                     <div className="pt-8 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-6">
                        {['AGT', 'SME', 'ANTT', 'DTSER'].map(org => (
                           <div key={org} className="bg-slate-50 border border-slate-200 p-4 text-center rounded-sm">
                              <span className="text-[10px] font-black text-[#003366] uppercase tracking-widest">{org}</span>
                           </div>
                        ))}
                     </div>
                  </div>
                  <div className="lg:col-span-4 bg-[#003366] p-10 rounded-sm text-white shadow-xl">
                     <h3 className="text-[#C5A059] text-[10px] font-black uppercase tracking-widest mb-6">Objectivos Técnicos</h3>
                     <ul className="space-y-6">
                        {[
                           'Eficácia nas acções de controlo',
                           'Inteligência conjunta',
                           'Gestão de risco automatizada',
                           'Combate a ilícitos transfronteiriços'
                        ].map((obj, i) => (
                           <li key={i} className="flex gap-4 items-start">
                              <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0" />
                              <span className="text-xs font-bold uppercase tracking-tight leading-tight">{obj}</span>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Ecossistema Digital: SIROF e SGO */}
      <section className="py-24 bg-white px-6">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
               <span className="text-[10px] font-black uppercase text-[#C5A059] tracking-[0.4em] mb-4 block">{t('interop_systems_title')}</span>
               <h2 className="text-[#003366] text-4xl md:text-5xl font-black uppercase italic tracking-tighter leading-none">
                  Gestão Centralizada de Informação
               </h2>
               <p className="text-slate-500 text-lg font-medium max-w-3xl mx-auto mt-6 italic">
                  {t('interop_systems_desc')}
               </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
               {/* SIROF Card */}
               <div className="bg-slate-50 p-12 rounded-sm border border-slate-100 hover:shadow-2xl hover:border-[#003366] transition-all group">
                  <div className="flex justify-between items-start mb-10">
                     <div className="w-16 h-16 bg-white border border-slate-100 rounded-sm flex items-center justify-center text-[#003366] shadow-sm group-hover:bg-[#003366] group-hover:text-white transition-all">
                        <Activity className="w-8 h-8" />
                     </div>
                     <span className="text-[9px] font-black bg-white px-4 py-1 rounded-full border border-slate-200 text-slate-400">Pilar I</span>
                  </div>
                  <h3 className="text-2xl font-black text-[#003366] uppercase italic mb-4 tracking-tighter leading-none">SIROF</h3>
                  <p className="text-[#C5A059] text-[10px] font-black uppercase tracking-widest mb-6">{t('sirof_full_name')}</p>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed italic mb-10">
                     {t('sirof_desc')}
                  </p>
                  <div className="flex items-center gap-3 text-[9px] font-black uppercase text-slate-400 border-t border-slate-200 pt-8 group-hover:text-[#003366] transition-colors">
                     <Lock className="w-3.5 h-3.5" /> Canal Seguro e Auditado
                  </div>
               </div>

               {/* SGO Card */}
               <div className="bg-slate-50 p-12 rounded-sm border border-slate-100 hover:shadow-2xl hover:border-[#003366] transition-all group">
                  <div className="flex justify-between items-start mb-10">
                     <div className="w-16 h-16 bg-white border border-slate-100 rounded-sm flex items-center justify-center text-[#003366] shadow-sm group-hover:bg-[#003366] group-hover:text-white transition-all">
                        {/* Fix: Added missing Monitor icon to imports */}
                        <Monitor className="w-8 h-8" />
                     </div>
                     <span className="text-[9px] font-black bg-white px-4 py-1 rounded-full border border-slate-200 text-slate-400">Pilar II</span>
                  </div>
                  <h3 className="text-2xl font-black text-[#003366] uppercase italic mb-4 tracking-tighter leading-none">SGO</h3>
                  <p className="text-[#C5A059] text-[10px] font-black uppercase tracking-widest mb-6">{t('sgo_full_name')}</p>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed italic mb-10">
                     {t('sgo_desc')}
                  </p>
                  <div className="flex items-center gap-3 text-[9px] font-black uppercase text-slate-400 border-t border-slate-200 pt-8 group-hover:text-[#003366] transition-colors">
                     <Zap className="w-3.5 h-3.5" /> Optimização de Recursos em Tempo Real
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
             <span className="text-[10px] font-black uppercase text-[#C5A059] tracking-[0.4em] mb-4 block">Eixos de Modernização</span>
             <h2 className="text-[#003366] text-4xl md:text-5xl font-black uppercase italic tracking-tighter leading-none">
               Pilares da Estratégia Digital
             </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             {pillars.map((pillar, i) => (
                <div key={i} className="bg-white border border-slate-200 p-10 rounded-sm hover:shadow-2xl hover:border-[#003366] transition-all group flex flex-col h-full">
                   <div className={`w-14 h-14 ${pillar.bg} ${pillar.color} rounded flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                      <pillar.icon className="w-7 h-7" />
                   </div>
                   <h4 className="text-[#003366] text-sm font-black uppercase tracking-widest mb-4 leading-tight">{pillar.title}</h4>
                   <p className="text-slate-500 text-xs font-medium leading-relaxed italic flex-grow">
                      {pillar.desc}
                   </p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Architecture Framework Section */}
      <section className="py-24 bg-[#020617] text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
           <Layers className="w-[800px] h-[800px] absolute -left-40 -bottom-40 text-[#C5A059]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
               <div className="w-12 h-1.5 bg-[#C5A059] mb-10"></div>
               <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none mb-8">
                 {t('interop_framework_title')}
               </h2>
               <p className="text-slate-400 text-xl font-medium leading-relaxed italic mb-12">
                 {t('interop_framework_desc')}
               </p>
               
               <div className="grid grid-cols-2 gap-8">
                  <div className="flex items-start gap-4">
                     <div className="w-10 h-10 bg-white/5 border border-white/10 rounded flex items-center justify-center text-[#C5A059]">
                        <Database className="w-5 h-5" />
                     </div>
                     <div>
                        <h5 className="text-[10px] font-black uppercase tracking-widest text-white mb-1">Repositório Único</h5>
                        <p className="text-slate-500 text-[10px] font-medium italic">Base de dados centralizada e segura.</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-4">
                     <div className="w-10 h-10 bg-white/5 border border-white/10 rounded flex items-center justify-center text-[#C5A059]">
                        <Share2 className="w-5 h-5" />
                     </div>
                     <div>
                        <h5 className="text-[10px] font-black uppercase tracking-widest text-white mb-1">Intercâmbio Seguro</h5>
                        <p className="text-slate-500 text-[10px] font-medium italic">Encriptação de ponta a ponta.</p>
                     </div>
                  </div>
               </div>
            </div>
            
            <div className="lg:col-span-5">
               <div className="bg-[#003366] p-12 rounded-sm border-2 border-white/5 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-[0.02] -skew-x-12"></div>
                  <h3 className="text-[#C5A059] text-xs font-black uppercase tracking-[0.3em] mb-8">Conformidade Legal</h3>
                  <p className="text-slate-300 text-sm font-medium leading-relaxed mb-10 italic">
                    "A interoperabilidade tecnológica é uma obrigação institucional definida no Artigo 12.º do Regulamento do CGCF, garantindo a transparência e auditabilidade de todos os processos."
                  </p>
                  <div className="flex items-center gap-4 text-[9px] font-black uppercase tracking-widest text-slate-400">
                     <ShieldCheck className="w-4 h-4 text-emerald-500" /> Protocolo Assinado 22/26
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper component for lists
const CheckCircle2 = ({ className }: { className: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export default Interoperability;
