
import React, { useEffect, useState } from 'react';
import { MOCK_NEWS } from '../constants';
import { 
  ArrowRight, 
  ChevronRight, 
  Shield, 
  Activity, 
  MapPin, 
  ExternalLink,
  BookOpen,
  Navigation,
  FileText,
  Newspaper,
  Calendar,
  Mail,
  Network,
  Truck,
  Anchor,
  Zap,
  Award,
  // Fix: Added missing icons used in the Regional Integration axes section
  Building2,
  Globe
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
      const query = language === 'PT' ? "Prioridades estratégicas das fronteiras de Angola" : 
                    language === 'EN' ? "Strategic priorities for Angola borders" :
                    "Priorités stratégiques pour les frontières de l'Angola";
      
      const insight = await getLatestBorderInsights(query, language);
      setAiInsight(insight);
      setLoading(false);
    };
    fetchInsight();
  }, [language]);

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-[650px] bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img title="Hero Image" src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2000" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003366] via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-[#C5A059] text-white text-[10px] font-black px-4 py-2 rounded-sm uppercase tracking-widest shadow-lg">
                República de Angola
              </div>
              <div className="bg-white/10 backdrop-blur-md text-white text-[10px] font-black px-4 py-2 rounded-sm uppercase tracking-widest border border-white/20">
                Despacho Presidencial 234/20
              </div>
            </div>
            <h1 className="text-white text-4xl md:text-7xl font-black leading-[1.1] mb-8 tracking-tighter uppercase italic">
              Soberania e Eficiência <br/><span className="text-[#C5A059]">Logística Nacional.</span>
            </h1>
            <p className="text-slate-200 text-lg md:text-xl font-medium mb-12 border-l-4 border-[#C5A059] pl-6 leading-relaxed max-w-2xl">
              O Comité de Gestão Coordenada de Fronteiras (CGCF) integrado pelos órgãos públicos de defesa, finanças e saúde para modernizar o comércio em Angola.
            </p>
            <div className="flex flex-wrap gap-4">
               <Link to="/mapa" className="bg-[#C5A059] hover:bg-[#b08b4a] text-white px-10 py-5 font-black rounded-sm text-[11px] uppercase tracking-widest transition-all inline-flex items-center gap-4 shadow-xl">
                 Rede de Fronteiras <ArrowRight className="w-4 h-4" />
               </Link>
               <Link to="/corredores" className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-10 py-5 font-black rounded-sm text-[11px] uppercase tracking-widest transition-all inline-flex items-center gap-4 border border-white/20">
                 Corredores Estratégicos <Navigation className="w-4 h-4" />
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services Bar */}
      <section className="bg-white border-b border-slate-100 py-12 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {[
              { icon: Navigation, name: 'Rede Fronteiras', path: '/mapa', color: 'text-[#003366]' },
              { icon: Network, name: 'Rede Logística', path: '/corredores', color: 'text-[#C5A059]' },
              { icon: BookOpen, name: 'Repositório Legal', path: '/legislacao', color: 'text-slate-700' },
              { icon: Newspaper, name: 'Sala Imprensa', path: '/noticias', color: 'text-slate-700' },
              { icon: Mail, name: 'Apoio Técnico', path: '/contacto', color: 'text-slate-700' }
            ].map((item, i) => (
              <Link key={i} to={item.path} className="group flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-slate-50 rounded-sm flex items-center justify-center mb-4 group-hover:bg-[#003366] group-hover:text-white transition-all shadow-sm border border-slate-100">
                  <item.icon className={`w-6 h-6 ${item.color} group-hover:text-white transition-colors`} />
                </div>
                <span className="text-[9px] font-black uppercase text-slate-700 tracking-widest group-hover:text-[#003366] transition-colors">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Corridors Highlights - TODOS OS EIXOS */}
      <section className="py-24 bg-white px-6">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
               <div>
                  <div className="w-12 h-1 bg-[#C5A059] mb-6"></div>
                  <h2 className="text-[#003366] text-4xl font-black uppercase italic tracking-tighter leading-none">Eixos de Integração Regional</h2>
                  <p className="text-slate-500 mt-4 font-medium max-w-xl">Todos os corredores estão sob gestão coordenada conforme o <strong>Despacho Presidencial 234/20</strong>.</p>
               </div>
               <Link to="/corredores" className="text-[10px] font-black uppercase tracking-widest text-[#003366] border-b-2 border-[#C5A059] pb-1 hover:text-[#C5A059] transition-all">
                  Ver Rede Completa →
               </Link>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
               {[
                 { title: 'Corredor do Lobito', desc: 'Mineração & Ferrovia (CFB)', icon: Anchor },
                 { title: 'Corredor de Luanda', desc: 'Centro Industrial (CFL)', icon: Building2 },
                 { title: 'Corredor do Namibe', desc: 'Agro-pecuária (CFM)', icon: Truck },
                 { title: 'Trans-Cunene', desc: 'Integração Sul (Namíbia)', icon: Navigation },
                 { title: 'Corredor Cabinda', desc: 'Eixo Marítimo Norte', icon: Globe }
               ].map((c, i) => (
                 <Link to="/corredores" key={i} className="p-8 border border-slate-100 bg-slate-50 hover:border-[#C5A059] hover:bg-white transition-all group flex flex-col items-center text-center rounded-sm">
                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-6 group-hover:bg-[#003366] group-hover:text-white transition-all shadow-sm">
                       <c.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-[#003366] font-black uppercase text-xs mb-2 italic tracking-tight leading-tight">{c.title}</h3>
                    <p className="text-slate-400 text-[9px] font-bold uppercase tracking-widest mb-4">{c.desc}</p>
                 </Link>
               ))}
            </div>
         </div>
      </section>

      {/* AI Briefing Section */}
      <section className="py-24 bg-slate-900 border-b border-slate-800 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#C5A059]/5 skew-x-12 transform translate-x-32"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
             <div className="lg:col-span-4">
                <div className="inline-flex items-center gap-3 text-[#C5A059] mb-8">
                   <Award className="w-8 h-8" />
                   <h2 className="text-3xl font-black uppercase tracking-tighter italic">Breve Estratégico AI</h2>
                </div>
                <p className="text-slate-400 text-sm font-medium leading-relaxed mb-10">
                  Síntese em tempo real gerada por Inteligência Artificial sobre o estado das fronteiras e corredores nacionais.
                </p>
                <div className="flex flex-col gap-6">
                   <div className="bg-white/5 p-6 rounded border border-white/10">
                      <p className="text-[10px] font-black uppercase text-[#C5A059] mb-2">Foco Governamental</p>
                      <p className="text-xs font-medium text-slate-300">Priorização da facilitação comercial e redução de entraves burocráticos nos eixos SADC.</p>
                   </div>
                </div>
             </div>
             
             <div className="lg:col-span-8">
                <div className="bg-white p-12 rounded-sm border-l-8 border-[#C5A059] shadow-2xl relative overflow-hidden">
                  {loading ? (
                    <div className="space-y-6 animate-pulse">
                      <div className="h-4 bg-slate-100 rounded w-full"></div>
                      <div className="h-4 bg-slate-100 rounded w-5/6"></div>
                      <div className="h-4 bg-slate-100 rounded w-4/6"></div>
                    </div>
                  ) : (
                    <div className="animate-in fade-in duration-500">
                      <div className="flex items-center gap-3 mb-8 text-[9px] font-black uppercase tracking-[0.3em] text-[#003366]">
                        <Activity className="w-4 h-4" />
                        Relatório Digital de Inteligência (CGCF)
                      </div>
                      <p className="text-[#003366] text-xl font-medium italic leading-relaxed mb-12 border-l-4 border-slate-100 pl-8">
                        {aiInsight?.text}
                      </p>
                      <div className="flex flex-wrap gap-4 border-t border-slate-100 pt-8">
                        {aiInsight?.sources.map((src, i) => (
                          <a key={i} href={src.url} target="_blank" className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-400 hover:text-[#C5A059] transition-colors">
                             <ExternalLink className="w-3.5 h-3.5" /> {src.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
               <div className="w-12 h-1 bg-[#C5A059] mb-4"></div>
               <h2 className="text-[#003366] text-4xl font-black uppercase tracking-tighter italic">Sala de Imprensa CGCF</h2>
            </div>
            <Link to="/noticias" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-[#003366] transition-colors border-b-2 border-slate-100 pb-1">
               Ver Arquivo Completo
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {MOCK_NEWS.map((item) => (
              <Link key={item.id} to="/noticias" className="group flex flex-col h-full bg-white border border-slate-100 rounded-sm hover:shadow-2xl transition-all">
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
                    Continuar Leitura <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
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
