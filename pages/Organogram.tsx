
import React from 'react';
import { ArrowLeft, GitBranch, Shield, Users, Award, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

const Organogram: React.FC = () => {
  const { t } = useLanguage();

  const Node = ({ title, color, isSecondary = false, width = "w-64" }: { title: string, color: string, isSecondary?: boolean, width?: string }) => (
    <div className={`relative ${width} p-4 rounded-xl border-2 shadow-lg ${color} flex flex-col items-center justify-center transition-all hover:scale-105 group`}>
      <span className={`font-black text-center leading-tight uppercase tracking-widest italic ${isSecondary ? 'text-slate-800 text-[9px]' : 'text-[#003366] text-[11px]'}`}>
        {title}
      </span>
      {/* Decorative pulse on hover */}
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity rounded-xl"></div>
    </div>
  );

  const ConnectorLine = ({ vertical = false, height = "h-8", width = "w-px", className = "" }: { vertical?: boolean, height?: string, width?: string, className?: string }) => (
    <div className={`${vertical ? `${height} ${width}` : `${width} h-px`} bg-slate-300 ${className} mx-auto`}></div>
  );

  return (
    <div className="animate-in fade-in duration-700 bg-slate-50 min-h-screen font-sans pb-32">
      {/* Header Institucional */}
      <section className="bg-[#003366] pt-12 pb-20 border-b-[6px] border-[#C5A059] relative overflow-hidden mb-20">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center md:text-left">
          <div className="flex justify-center md:justify-start items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-10">
            <Link to="/sobre" className="hover:text-white transition-colors">{t('nav_about')}</Link>
            <span>/</span>
            <span className="text-[#C5A059]">{t('nav_about_organogram')}</span>
          </div>
          <h1 className="text-white text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-tight mb-6">
            {t('organogram_title')}
          </h1>
          <p className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed max-w-2xl opacity-80 mx-auto md:mx-0">
            {t('organogram_subtitle')}
          </p>
        </div>
      </section>

      {/* Visual Representation Area */}
      <div className="max-w-7xl mx-auto px-6 overflow-x-auto">
        <div className="min-w-[900px] flex flex-col items-center py-10">
          
          {/* Level 1: Coordenação Geral (TOP) */}
          <Node title={t('node_coord_general')} color="bg-[#C5A059] border-[#b08b4a] text-white" width="w-80" />
          
          {/* Connection L1 -> L2 */}
          <ConnectorLine vertical height="h-10" />

          {/* Level 2: Unid Técnica Central */}
          <Node title={t('node_unid_tec_central')} color="bg-[#FDBA74] border-[#fb923c]" isSecondary width="w-72" />

          {/* Connection L2 -> Mid Hub */}
          <ConnectorLine vertical height="h-12" />

          {/* Horizontal Split Line for Secretariado & UTL */}
          <div className="relative w-[500px]">
             <ConnectorLine width="w-full" className="absolute top-0" />
             <div className="flex justify-between w-full">
                {/* Branch to Secretariado */}
                <div className="flex flex-col items-center">
                   <ConnectorLine vertical height="h-8" />
                   <Node title={t('node_secretariado')} color="bg-[#14B8A6] border-[#0d9488]" width="w-56" />
                </div>
                
                {/* Branch to Unid Técnicas Locais */}
                <div className="flex flex-col items-center">
                   <ConnectorLine vertical height="h-8" />
                   <Node title={t('node_unid_tec_locais')} color="bg-[#C5A059] border-[#b08b4a]" width="w-56" />
                   
                   {/* Sub-branches for UTL */}
                   <ConnectorLine vertical height="h-10" />
                   
                   <div className="relative w-[600px] -ml-64 md:ml-0 md:translate-x-[-50%]">
                      <div className="absolute top-0 left-[50%] translate-x-[-50%] w-[500px]">
                         <ConnectorLine width="w-full" className="absolute top-0" />
                         <div className="flex justify-between w-full">
                            {/* Sec UTL */}
                            <div className="flex flex-col items-center">
                               <ConnectorLine vertical height="h-8" />
                               <Node title={t('node_sec_unid_tec_locais')} color="bg-[#FDBA74] border-[#fb923c]" isSecondary width="w-48" />
                            </div>
                            {/* Sub-Unidades */}
                            <div className="flex flex-col items-center">
                               <ConnectorLine vertical height="h-8" />
                               <Node title={t('node_sub_unid_tec')} color="bg-[#FDBA74] border-[#fb923c]" isSecondary width="w-48" />
                            </div>
                            {/* Grupo Móvel */}
                            <div className="flex flex-col items-center">
                               <ConnectorLine vertical height="h-8" />
                               <Node title={t('node_grupo_movel_apoio')} color="bg-[#FDBA74] border-[#fb923c]" isSecondary width="w-48" />
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Regimental Info Section */}
      <section className="max-w-4xl mx-auto px-6 mt-64">
         <div className="bg-white border border-slate-200 p-12 rounded-xl shadow-sm flex flex-col md:flex-row items-center gap-10 border-l-[8px] border-[#003366]">
            <div className="bg-slate-50 p-6 rounded-full text-[#C5A059] shadow-inner shrink-0">
               <Shield className="w-10 h-10" />
            </div>
            <div>
               <h4 className="text-[#003366] text-xs font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                 <Award className="w-4 h-4" /> Conformidade Institucional Artigo 24.º
               </h4>
               <p className="text-slate-500 text-sm font-medium leading-relaxed italic">
                 A presente estrutura orgânica reflecte o fluxo de comando e interoperabilidade técnica estabelecida no diploma ministerial. 
                 A Coordenação Geral exerce a supervisão estratégica, enquanto o Secretariado e as Unidades Técnicas Locais operacionalizam as directrizes de fiscalização e modernização fronteiriça em todo o território nacional.
               </p>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Organogram;
