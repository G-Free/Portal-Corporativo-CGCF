
import React from 'react';
import { 
  Landmark, 
  ShieldCheck, 
  Target, 
  Eye, 
  Building2, 
  ChevronRight, 
  Users, 
  Truck, 
  Car, 
  Shield, 
  Scale, 
  HeartPulse, 
  Plane, 
  Radio, 
  Gavel, 
  Zap, 
  Waves, 
  Wind,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { AGENCIES } from '../constants';
import { useLanguage } from '../LanguageContext';

const AgencyIcon = ({ acronym }: { acronym: string }) => {
  const iconProps = { className: "w-6 h-6" };
  switch (acronym) {
    case 'AGT': return <Landmark {...iconProps} />;
    case 'SME': return <Users {...iconProps} />;
    case 'ANTT': return <Truck {...iconProps} />;
    case 'DTSER': return <Car {...iconProps} />;
    case 'PGF': return <Shield {...iconProps} />;
    case 'PFA': return <Scale {...iconProps} />;
    case 'MINSA': return <HeartPulse {...iconProps} />;
    case 'SGA': return <Plane {...iconProps} />;
    case 'ENNA': return <Radio {...iconProps} />;
    case 'PGR': return <Gavel {...iconProps} />;
    case 'SIC': return <Zap {...iconProps} />;
    case 'SNFPA': return <Waves {...iconProps} />;
    case 'ANAC': return <Wind {...iconProps} />;
    default: return <Building2 {...iconProps} />;
  }
};

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="animate-in fade-in duration-700 overflow-x-hidden">
      {/* Header Institucional Padrão */}
      <section className="bg-[#003366] pt-16 pb-24 border-b-4 border-[#C5A059]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-10">
             <Link to="/" className="hover:text-white transition-colors">Início</Link>
             <span>/</span>
             <span className="text-[#C5A059]">O Comité</span>
          </div>
          <h1 className="text-white text-5xl font-black uppercase italic tracking-tighter mb-4 leading-none">
            {t('about_title')}
          </h1>
          <p className="text-slate-300 text-lg font-medium max-w-3xl leading-relaxed">
            {t('about_intro')}
          </p>
        </div>
      </section>

      {/* Missão e Mandato */}
      <section className="py-16 md:py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20">
          <div className="space-y-12 md:space-y-16">
            <div className="flex gap-6 md:gap-8">
               <div className="w-14 h-14 md:w-16 md:h-16 bg-[#f0f4f8] rounded-lg flex items-center justify-center shrink-0 border border-slate-100 shadow-sm">
                  <ShieldCheck className="w-7 h-7 md:w-8 md:h-8 text-[#003366]" />
               </div>
               <div>
                  <h3 className="text-[#003366] text-lg md:text-xl font-bold uppercase tracking-tight mb-3 md:mb-4">{t('about_mandate_title')}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">{t('about_mandate_text')}</p>
               </div>
            </div>
            <div className="flex gap-6 md:gap-8">
               <div className="w-14 h-14 md:w-16 md:h-16 bg-[#f0f4f8] rounded-lg flex items-center justify-center shrink-0 border border-slate-100 shadow-sm">
                  <Target className="w-7 h-7 md:w-8 md:h-8 text-[#003366]" />
               </div>
               <div>
                  <h3 className="text-[#003366] text-lg md:text-xl font-bold uppercase tracking-tight mb-3 md:mb-4">{t('about_mission_title')}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">{t('about_mission_text')}</p>
               </div>
            </div>
          </div>
          <div className="bg-[#003366] p-10 md:p-16 rounded-sm text-white relative overflow-hidden shadow-2xl">
             <div className="relative z-10">
               <Eye className="w-10 h-10 md:w-12 md:h-12 text-[#C5A059] mb-6 md:mb-8" />
               <h3 className="text-xl md:text-2xl font-bold uppercase italic mb-6">{t('about_vision_title')}</h3>
               <p className="text-slate-200 text-sm md:text-base leading-relaxed font-medium opacity-90">{t('about_vision_text')}</p>
             </div>
             <div className="absolute -bottom-10 -right-10 opacity-5">
                <Globe className="w-48 h-48 md:w-64 md:h-64" />
             </div>
          </div>
        </div>
      </section>

      {/* Diretório de Agências */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-20">
             <div className="w-12 h-1 bg-[#C5A059] mb-4"></div>
             <h2 className="text-[#003366] text-3xl md:text-4xl font-black uppercase italic tracking-tighter leading-none">{t('about_agencies_title')}</h2>
             <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mt-3">Intervenientes directos na gestão transfronteiriça</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AGENCIES.map((agency) => (
              <Link 
                to={`/agencia/${agency.acronym}`} 
                key={agency.acronym} 
                className="bg-white p-8 md:p-10 border border-slate-200 rounded-sm hover:border-[#C5A059] hover:shadow-2xl transition-all group flex flex-col"
              >
                <div className="flex items-center justify-between mb-8">
                   <div className="w-12 h-12 bg-slate-50 border border-slate-100 flex items-center justify-center rounded group-hover:bg-[#003366] group-hover:text-white transition-all text-[#003366]">
                      <AgencyIcon acronym={agency.acronym} />
                   </div>
                   <span className="text-xl font-black text-[#003366] italic opacity-20 group-hover:opacity-100 transition-opacity">
                      {agency.acronym}
                   </span>
                </div>
                <h4 className="text-[#003366] font-bold text-lg leading-tight mb-4 group-hover:text-[#C5A059] transition-colors">
                  {agency.name}
                </h4>
                <div className="text-[9px] font-black uppercase text-slate-400 tracking-widest mb-6 border-b border-slate-50 pb-4">
                   {agency.ministry}
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-medium line-clamp-3 mb-8">
                  {agency.description}
                </p>
                <div className="mt-auto text-[9px] font-black uppercase tracking-widest text-[#003366] group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                   Ver Ficha Técnica <ChevronRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
