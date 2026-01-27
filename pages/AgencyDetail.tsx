
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { AGENCIES } from '../constants';
import { useLanguage } from '../LanguageContext';
import { Building2, Shield, Landmark, ArrowLeft, ExternalLink, FileText, Globe } from 'lucide-react';

const AgencyDetail: React.FC = () => {
  const { acronym } = useParams<{ acronym: string }>();
  const { t } = useLanguage();
  
  const agency = AGENCIES.find(a => a.acronym === acronym);

  if (!agency) {
    return <Navigate to="/sobre" />;
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] animate-in fade-in duration-700">
      {/* Header Institucional da Agência */}
      <section className="bg-white border-b border-slate-200 pt-10 md:pt-16 pb-12 md:pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <Link to="/sobre" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-[#003366] transition-colors mb-12">
             <ArrowLeft className="w-4 h-4" /> Voltar ao Directório
          </Link>
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
             <div className="max-w-3xl">
                <div className="flex items-center gap-4 mb-6">
                   <div className="bg-[#003366] text-white text-3xl font-black px-6 py-4 italic rounded-sm shadow-xl">
                      {agency.acronym}
                   </div>
                   <div className="h-12 w-px bg-slate-200"></div>
                   <div>
                      <h4 className="text-[10px] font-black uppercase text-[#C5A059] tracking-[0.3em]">{agency.ministry}</h4>
                      <h1 className="text-[#003366] text-2xl md:text-4xl font-black uppercase tracking-tighter leading-none mt-1">{agency.name}</h1>
                   </div>
                </div>
                <p className="text-slate-500 font-medium text-base md:text-lg leading-relaxed">
                   {agency.description}
                </p>
             </div>
             
             <div className="bg-slate-50 border border-slate-200 p-8 rounded-sm shrink-0 lg:w-80">
                <h5 className="text-[9px] font-black uppercase text-slate-400 tracking-widest mb-6 flex items-center gap-2">
                   <Shield className="w-3.5 h-3.5" /> Estatuto Oficial
                </h5>
                <ul className="space-y-4">
                   <li className="flex items-center justify-between text-[11px] font-bold text-[#003366] uppercase">
                      Integrada no CGCF <span className="text-emerald-600">SIM</span>
                   </li>
                   <li className="flex items-center justify-between text-[11px] font-bold text-[#003366] uppercase">
                      Operacionalidade <span className="text-emerald-600">TOTAL</span>
                   </li>
                </ul>
             </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
         <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-16">
               <div>
                  <h3 className="text-[#003366] text-xs font-black uppercase tracking-widest mb-8 flex items-center gap-3">
                     <div className="w-8 h-0.5 bg-[#C5A059]"></div> Competências Transfronteiriças
                  </h3>
                  <div className="bg-white p-10 border border-slate-100 shadow-sm rounded-sm leading-relaxed text-slate-600 font-medium">
                     <p className="mb-6">No âmbito do Despacho Presidencial 234/20, a {agency.acronym} actua em regime de coordenação com as demais entidades integradas para garantir:</p>
                     <ul className="space-y-4">
                        <li className="flex gap-4 items-start">
                           <div className="w-2 h-2 rounded-full bg-[#C5A059] mt-2 shrink-0"></div>
                           <span>Harmonização de procedimentos inspectivos e controlo de fluxo migratório/aduaneiro.</span>
                        </li>
                        <li className="flex gap-4 items-start">
                           <div className="w-2 h-2 rounded-full bg-[#C5A059] mt-2 shrink-0"></div>
                           <span>Interoperabilidade de dados para a gestão inteligente de riscos fronteiriços.</span>
                        </li>
                        <li className="flex gap-4 items-start">
                           <div className="w-2 h-2 rounded-full bg-[#C5A059] mt-2 shrink-0"></div>
                           <span>Celeridade no desembaraço de mercadorias e pessoas em pontos estratégicos.</span>
                        </li>
                     </ul>
                  </div>
               </div>

               <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-[#003366] text-white p-10 rounded-sm relative overflow-hidden group">
                     <Landmark className="absolute -bottom-6 -right-6 w-32 h-32 opacity-10 group-hover:scale-110 transition-transform" />
                     <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C5A059] mb-4">Tutela Ministerial</h4>
                     <p className="font-bold text-lg mb-6 leading-tight">{agency.ministry}</p>
                     <button className="text-[9px] font-black uppercase tracking-widest border-b border-[#C5A059] pb-1 hover:text-[#C5A059] transition-colors inline-flex items-center gap-2">
                        Ver Organigrama <ExternalLink className="w-3 h-3" />
                     </button>
                  </div>
                  
                  <div className="bg-white border border-slate-200 p-10 rounded-sm flex flex-col">
                     <FileText className="w-10 h-10 text-slate-200 mb-6" />
                     <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#003366] mb-4">Legislação Aplicada</h4>
                     <p className="text-slate-500 text-xs font-medium mb-8">Consulte os decretos específicos que regem as operações da {agency.acronym} nas fronteiras.</p>
                     <Link to="/legislacao" className="mt-auto text-[9px] font-black uppercase tracking-widest text-[#003366] hover:text-[#C5A059] transition-colors">
                        Biblioteca Legal →
                     </Link>
                  </div>
               </div>
            </div>

            <aside className="lg:col-span-4 space-y-10">
               <div className="bg-white border border-slate-200 p-10 rounded-sm">
                  <h4 className="text-[#003366] text-[10px] font-black uppercase tracking-widest mb-8">Canais Digitais</h4>
                  <div className="space-y-6">
                     <a href="#" className="flex items-center justify-between group">
                        <div className="flex items-center gap-4">
                           <Globe className="w-5 h-5 text-slate-300 group-hover:text-[#003366] transition-colors" />
                           <span className="text-xs font-bold text-slate-600 group-hover:text-[#003366]">Website Institucional</span>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-300" />
                     </a>
                     <a href="#" className="flex items-center justify-between group">
                        <div className="flex items-center gap-4">
                           <Globe className="w-5 h-5 text-slate-300 group-hover:text-[#003366] transition-colors" />
                           <span className="text-xs font-bold text-slate-600 group-hover:text-[#003366]">Portal de Serviços</span>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-300" />
                     </a>
                  </div>
               </div>

               <div className="p-10 border-2 border-dashed border-slate-200 rounded-sm text-center">
                  <Building2 className="w-12 h-12 text-slate-200 mx-auto mb-6" />
                  <h5 className="text-[10px] font-black uppercase text-slate-400 mb-2">Representação</h5>
                  <p className="text-xs font-bold text-[#003366]">A {agency.acronym} está presente em 100% dos postos prioritários de Angola.</p>
               </div>
            </aside>
         </div>
      </section>
    </div>
  );
};

export default AgencyDetail;
