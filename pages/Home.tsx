
import React, { useEffect, useState } from 'react';
import { MOCK_NEWS } from '../constants';
import { 
  ArrowRight, 
  Shield, 
  Activity, 
  ExternalLink,
  Navigation,
  Calendar,
  Network,
  Award,
  Globe,
  Handshake,
  Landmark,
  Building2,
  Waves,
  Banknote,
  Search,
  Cpu,
  Database,
  Monitor,
  Layout,
  Quote,
  Zap,
  Lock,
  Target,
  Share2,
  Workflow
} from 'lucide-react';
import { getLatestBorderInsights } from '../services/geminiService';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

const Home: React.FC = () => {
  const [aiInsight, setAiInsight] = useState<{text: string, sources: any[]} | null>(null);
  const [loading, setLoading] = useState(true);
  const { t, language } = useLanguage();

  useEffect(() => {
    const fetchInsight = async () => {
      setLoading(true);
      const query = language === 'PT' ? "Sinergia e interoperabilidade tecnológica das fronteiras de Angola 2026" : 
                    language === 'EN' ? "Technological synergy and interoperability of Angola borders 2026" :
                    "Synergie technologique et interopérabilité das fronteiras de l'Angola 2026";
      
      const insight = await getLatestBorderInsights(query, language);
      setAiInsight(insight);
      setLoading(false);
    };
    fetchInsight();
  }, [language]);

  const partners = [
    { 
      name: "Banco Mundial", 
      icon: Landmark, 
      desc: t('partner_wb_desc'),
      url: "https://www.worldbank.org"
    },
    { 
      name: "WCO", 
      icon: Globe, 
      desc: t('partner_wco_desc'),
      url: "http://www.wcoomd.org"
    },
    { 
      name: "Embaixada do Japão", 
      icon: Building2, 
      desc: t('partner_japan_desc'),
      url: "https://www.angola.emb-japan.go.jp"
    },
    { 
      name: "UNODC", 
      icon: Shield, 
      desc: t('partner_unodc_desc'),
      url: "https://www.unodc.org"
    },
    { 
      name: "IMA", 
      icon: Waves, 
      desc: t('partner_ima_desc'),
      url: "https://www.imo.org"
    },
    { 
      name: "GAFI", 
      icon: Banknote, 
      desc: t('partner_gafi_desc'),
      url: "https://www.fatf-gafi.org"
    }
  ];

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-[650px] bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img title="Angola's Border Infrastructure" src="https://depositphotos.com/br/photos/aperto-de-m%C3%A3o-interracial.html" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003366] via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl md:text-7xl font-black leading-[1.1] mb-8 tracking-tighter uppercase italic">
              {t('hero_title').split(' ')[0]} <br/><span className="text-[#C5A059]">{t('hero_title').split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-slate-200 text-lg md:text-xl font-medium mb-12 border-l-4 border-[#C5A059] pl-6 leading-relaxed max-w-2xl">
              {t('hero_desc')}
            </p>
            <div className="flex flex-wrap gap-4">
               <Link to="/mapa" className="bg-[#C5A059] hover:bg-[#b08b4a] text-white px-10 py-5 font-black rounded-sm text-[11px] uppercase tracking-widest transition-all inline-flex items-center gap-4 shadow-xl">
                 {t('btn_borders')} <ArrowRight className="w-4 h-4" />
               </Link>
               <Link to="/corredores" className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-10 py-5 font-black rounded-sm text-[11px] uppercase tracking-widest transition-all inline-flex items-center gap-4 border border-white/20">
                 {t('btn_corridors')} <Navigation className="w-4 h-4" />
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Visão Presidencial - Lobito Corridor Focus (Card Branco) */}
      <section className="bg-slate-50 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="bg-white border border-slate-200 rounded-sm shadow-2xl p-8 md:p-16 relative overflow-hidden group">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/5 rounded-bl-full group-hover:scale-110 transition-transform"></div>
            
            <div className="grid lg:grid-cols-12 gap-16 items-center relative z-10">
               <div className="lg:col-span-7 space-y-8">
                  <div className="inline-flex items-center gap-3 text-[#003366] mb-4">
                     <Target className="w-6 h-6 text-[#C5A059]" />
                     <span className="text-[10px] font-black uppercase tracking-[0.3em]">{t('corr_presidential_vision')}</span>
                  </div>
                  <h2 className="text-[#003366] text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-tight">
                     Afirmar a Prioridade <span className="text-[#C5A059]">Estratégica Nacional</span>
                  </h2>
                  <div className="relative">
                     <Quote className="absolute -left-10 -top-10 w-24 h-24 text-slate-100 -z-10" />
                     <p className="text-slate-600 text-xl md:text-2xl font-medium leading-relaxed italic border-l-4 border-[#C5A059] pl-10">
                        "{t('corr_lourenco_quote')}"
                     </p>
                     <div className="mt-8 ml-10 flex items-center gap-4">
                        <div className="w-12 h-0.5 bg-slate-200"></div>
                        <p className="text-[#003366] font-black uppercase text-[11px] tracking-widest">
                           — João Lourenço, Presidente da República
                        </p>
                     </div>
                  </div>
               </div>
               
               <div className="lg:col-span-5 bg-[#003366] p-10 md:p-14 rounded-sm shadow-xl text-white">
                  <div className="flex items-center gap-5 mb-10">
                     <div className="w-16 h-16 bg-[#C5A059] rounded-sm flex items-center justify-center text-white shadow-lg">
                        <Network className="w-8 h-8" />
                     </div>
                     <div>
                        <h4 className="text-white text-xs font-black uppercase tracking-widest leading-tight">{t('corr_agency_lobito')}</h4>
                        <p className="text-slate-400 text-[9px] font-bold uppercase mt-1 tracking-wider">Mecanismo de Coordenação Trilateral</p>
                     </div>
                  </div>
                  <p className="text-slate-300 text-sm font-medium leading-relaxed mb-10 italic">
                     "Assegurar a harmonização regulamentar e de processos, com metas, responsabilidades e acompanhamento regular entre os três países."
                  </p>
                  <Link to="/corredores" className="group flex items-center justify-between w-full bg-white text-[#003366] px-8 py-5 text-[10px] font-black uppercase tracking-widest hover:bg-[#C5A059] hover:text-white transition-all shadow-lg">
                     Aceder à Rede de Corredores <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secção de Interoperabilidade Estratégica (Home Page) */}
      <section className="py-24 bg-slate-900 border-b border-slate-800 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#C5A059]/5 skew-x-12 transform translate-x-32"></div>
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-5">
                 <div className="w-12 h-1 bg-[#C5A059] mb-8"></div>
                 <h2 className="text-4xl font-black uppercase italic tracking-tighter leading-tight mb-8 text-white">
                    Sinergia <span className="text-[#C5A059]">Tecnológica</span>
                 </h2>
                 <p className="text-slate-600 text-lg font-medium leading-relaxed mb-10 italic text-white">
                   A interoperabilidade de sistemas é o pilar central para alinhar as soluções tecnológicas aos objectivos estratégicos do CGCF, garantindo a eficiência operacional e promovendo a inovação na gestão fronteiriça.
                 </p>
                 <div className="space-y-4 mb-12 text-white">
                    {[
                       { icon: Cpu, text: t('interop_pillar_opt') },
                       { icon: Workflow, text: t('interop_pillar_eff') },
                       { icon: Zap, text: t('interop_pillar_innov') }
                    ].map((item, i) => (
                       <div key={i} className="flex items-center gap-4 text-white font-black text-[10px] uppercase tracking-widest">
                          <div className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center">
                             <item.icon className="w-4 h-4 text-[#C5A059]" />
                          </div>
                          {item.text}
                       </div>
                    ))}
                 </div>
                 <Link to="/interoperabilidade" className="inline-flex items-center gap-3 text-white font-black text-[10px] uppercase tracking-[0.2em] border-b-2 border-[#C5A059] pb-1 hover:text-[#C5A059] transition-colors">
                    Explorar Arquitetura <ArrowRight className="w-3.5 h-3.5" />
                 </Link>
              </div>
              <div className="lg:col-span-7">
                 <div className="grid grid-cols-2 gap-6">
                    <div className="bg-slate-50 p-8 rounded-sm border border-slate-100 hover:shadow-xl transition-all group">
                       <Database className="w-10 h-10 text-[#003366] mb-6 group-hover:scale-110 transition-transform" />
                       <h4 className="text-[#003366] text-xs font-black uppercase tracking-widest mb-4">Repositório Único</h4>
                       <p className="text-slate-500 text-[10px] font-medium leading-relaxed italic">Base de dados integrada para suporte à decisão estratégica imediata.</p>
                    </div>
                    <div className="bg-[#003366] p-8 rounded-sm text-white shadow-2xl relative overflow-hidden">
                       <Share2 className="absolute -bottom-4 -right-4 w-24 h-24 opacity-10" />
                       <Activity className="w-10 h-10 text-[#C5A059] mb-6" />
                       <h4 className="text-white text-xs font-black uppercase tracking-widest mb-4">Fluxo Contínuo</h4>
                       <p className="text-slate-300 text-[10px] font-medium leading-relaxed italic">Redução drástica de redundâncias burocráticas entre órgãos consubstanciados.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Parceiros Externos Section */}
      <section className="bg-white border-b border-slate-100 py-24 relative z-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 text-[#003366]/40 uppercase text-[9px] font-black tracking-[0.4em]">
              <Handshake className="w-14 h-14 text-[#C5A059]" />              
            <h2 className="text-[#003366] text-3xl font-black uppercase italic tracking-tighter">              
              Cooperação Multilateral
            </h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, i) => (
              <a 
                key={i} 
                href={partner.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col h-full bg-slate-50 border border-slate-100 p-8 rounded-sm hover:bg-white hover:shadow-2xl hover:border-[#C5A059] transition-all duration-500"
              >
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-14 h-14 bg-white border border-slate-100 rounded-sm flex items-center justify-center group-hover:bg-[#003366] transition-all duration-500 shadow-sm">
                    <partner.icon className="w-7 h-7 text-[#003366] group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-slate-900 font-black text-[11px] tracking-widest uppercase leading-tight group-hover:text-[#003366] transition-colors">
                    {partner.name}
                  </span>
                </div>
                <p className="text-slate-500 text-xs font-medium leading-relaxed italic mb-8 flex-grow">
                  {partner.desc}
                </p>
                <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover:text-[#C5A059] transition-colors">
                  Visitar Website <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
               <div className="w-12 h-1 bg-[#C5A059] mb-4"></div>
               <h2 className="text-[#003366] text-4xl font-black uppercase tracking-tighter italic">{t('news_room_title')}</h2>
            </div>
            <Link to="/noticias" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-[#003366] transition-colors border-b-2 border-slate-100 pb-1">
               {t('news_archive_link')}
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {MOCK_NEWS.map((item) => (
              <Link key={item.id} to={`/noticias/${item.id}`} className="group flex flex-col h-full bg-white border border-slate-200 rounded-sm hover:shadow-2xl transition-all">
                <div className="relative overflow-hidden h-56">
                  <img title={item.title} src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-[#003366] text-white text-[8px] font-black uppercase px-3 py-1 rounded-sm">
                    {item.category}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-slate-400 text-[9px] font-bold mb-4 uppercase">
                    <Calendar className="w-3.5 h-3.5" /> {item.date}
                  </div>
                  <h3 className="text-slate-900 text-lg font-bold leading-tight mb-4 group-hover:text-[#003366] transition-colors uppercase italic tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-6 line-clamp-3 font-medium">
                    {item.excerpt}
                  </p>
                  <div className="mt-auto flex items-center gap-3 text-[9px] font-black uppercase tracking-widest text-[#003366]">
                    {t('read_more')} <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
