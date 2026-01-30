
import React from 'react';
import { 
  Target, 
  Eye, 
  ShieldCheck, 
  Award, 
  ChevronRight, 
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="animate-in fade-in duration-700 bg-white min-h-screen">
      {/* Header Institucional (Hero) */}
      <section className="bg-[#003366] pt-12 pb-20 border-b-[6px] border-[#C5A059]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-12">
            <Link to="/" className="hover:text-white transition-colors uppercase">{t('back_to_start')}</Link>
            <span className="text-slate-500">/</span>
            <span className="text-[#C5A059] uppercase">{t('nav_about')}</span>
          </div>
          
          <h1 className="text-white text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-tight mb-8">
            {t('about_title')}
          </h1>
          
          <p className="text-slate-200 text-lg md:text-xl font-medium leading-relaxed max-w-4xl opacity-90">
            {t('about_intro')}
          </p>
        </div>
      </section>

      {/* Seção de Conteúdo */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Coluna Esquerda: Missão, Visão e Valores */}
            <div className="space-y-16">
              <div className="flex gap-8 items-start group">
                <div className="w-16 h-16 bg-[#f1f5f9] rounded-lg flex items-center justify-center shrink-0 shadow-sm border border-slate-100 group-hover:bg-[#003366] group-hover:text-white transition-all duration-300">
                  <Target className="w-8 h-8 text-[#003366] group-hover:text-white" />
                </div>
                <div>
                  <h3 className="text-[#003366] text-xl font-black uppercase tracking-tight mb-4">
                    {t('about_mission_title')}
                  </h3>
                  <p className="text-slate-500 text-base font-medium leading-relaxed">
                    {t('about_mission_desc')}
                  </p>
                </div>
              </div>

              <div className="flex gap-8 items-start group">
                <div className="w-16 h-16 bg-[#f1f5f9] rounded-lg flex items-center justify-center shrink-0 shadow-sm border border-slate-100 group-hover:bg-[#003366] group-hover:text-white transition-all duration-300">
                  <Eye className="w-8 h-8 text-[#003366] group-hover:text-white" />
                </div>
                <div>
                  <h3 className="text-[#003366] text-xl font-black uppercase tracking-tight mb-4">
                    {t('about_vision_title')}
                  </h3>
                  <p className="text-slate-500 text-base font-medium leading-relaxed">
                    {t('about_vision_desc')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-8 items-start group">
                <div className="w-16 h-16 bg-[#f1f5f9] rounded-lg flex items-center justify-center shrink-0 shadow-sm border border-slate-100 group-hover:bg-[#003366] group-hover:text-white transition-all duration-300">
                  <ShieldCheck className="w-8 h-8 text-[#003366] group-hover:text-white" />
                </div>
                <div>
                  <h3 className="text-[#003366] text-xl font-black uppercase tracking-tight mb-4">
                    {t('about_values_title')}
                  </h3>
                  <p className="text-slate-500 text-base font-medium leading-relaxed italic">
                    {t('about_values_desc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Coluna Direita: Card de Destaque */}
            <div className="relative group">
              <div className="bg-[#003366] rounded-xl p-12 md:p-16 shadow-2xl overflow-hidden relative min-h-[450px] flex flex-col justify-center">
                <div className="absolute -bottom-10 -right-10 opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                  <Globe className="w-80 h-80 text-white" />
                </div>
                
                <div className="relative z-10 text-center lg:text-left">
                  <div className="mb-10 flex justify-center lg:justify-start">
                    <div className="p-4 bg-white/5 border border-white/10 rounded-full inline-block">
                       <Award className="w-10 h-10 text-[#C5A059]" />
                    </div>
                  </div>
                  
                  <h2 className="text-white text-3xl md:text-4xl font-black uppercase italic tracking-tighter mb-8 leading-tight">
                    {t('about_legal_card_title').split(' ').slice(0,-1).join(' ')} <br/><span className="text-[#C5A059]">{t('about_legal_card_title').split(' ').slice(-1)}</span>
                  </h2>
                  
                  <div className="w-12 h-1 bg-[#C5A059] mb-10 hidden lg:block"></div>
                  
                  <p className="text-slate-300 text-base md:text-lg font-medium leading-relaxed mb-10 opacity-90">
                    {t('about_legal_card_desc')}
                  </p>
                  
                  <Link to="/legislacao" className="inline-flex items-center gap-4 bg-[#C5A059] text-white px-8 py-4 rounded font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-[#003366] transition-all shadow-xl">
                    {t('nav_legis')} <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
