
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { MOCK_NEWS } from '../constants';
import { useLanguage } from '../LanguageContext';
import { 
  Calendar, 
  ArrowLeft, 
  Share2, 
  Clock, 
  Tag, 
  ShieldCheck, 
  Building2,
  ChevronRight
} from 'lucide-react';

const NewsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  
  const newsItem = MOCK_NEWS.find(n => n.id === id);

  if (!newsItem) {
    return <Navigate to="/noticias" />;
  }

  // Related news logic
  const relatedNews = MOCK_NEWS.filter(n => n.id !== id).slice(0, 2);

  return (
    <div className="bg-white min-h-screen animate-in fade-in duration-700">
      {/* Navigation Header */}
      <div className="bg-[#f8fafc] border-b border-slate-200 py-6">
        <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
          <Link 
            to="/noticias" 
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-[#003366] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> {t('news_back')}
          </Link>
          <div className="flex items-center gap-4">
            <button title={t('news_share')} className="p-2 text-slate-400 hover:text-[#003366] transition-colors">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 py-16">
        {/* Metadados Superiores */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="bg-[#003366] text-white text-[8px] font-black uppercase px-3 py-1 rounded-sm shadow-md">
              {newsItem.category}
            </span>
            <div className="flex items-center gap-2 text-[9px] font-bold text-slate-400 uppercase tracking-widest">
              <Calendar className="w-3.5 h-3.5" /> {newsItem.date}
            </div>
            <div className="flex items-center gap-2 text-[9px] font-bold text-slate-400 uppercase tracking-widest">
              <Clock className="w-3.5 h-3.5" /> 4 min read
            </div>
          </div>
          
          <h1 className="text-[#003366] text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-tight mb-8">
            {newsItem.title}
          </h1>
          
          <p className="text-slate-500 text-xl font-medium italic leading-relaxed border-l-4 border-[#C5A059] pl-6 mb-12">
            {newsItem.excerpt}
          </p>
        </div>

        {/* Imagem de Capa */}
        <div className="w-full aspect-[21/9] bg-slate-100 rounded-sm overflow-hidden mb-16 shadow-2xl">
          <img 
            src={newsItem.image} 
            className="w-full h-full object-cover" 
            alt={newsItem.title} 
          />
        </div>

        {/* Corpo da Notícia (Conteúdo Mock) */}
        <div className="prose prose-slate max-w-none mb-20">
          <p className="text-slate-700 text-lg leading-relaxed mb-8 font-medium">
            {newsItem.Descric}          
          </p>
          
          <h3 className="text-[#003366] text-xl font-black uppercase italic tracking-tight mb-6 mt-12">Integração Interinstitucional</h3>
          <p className="text-slate-700 text-lg leading-relaxed mb-8 font-medium">
            {newsItem.Corp}
          </p>

          <div className="bg-slate-50 border border-slate-200 p-8 rounded-sm my-12 flex flex-col md:flex-row gap-8 items-center">
            <div className="bg-[#003366] p-4 rounded-full text-white">
              <ShieldCheck className="w-10 h-10" />
            </div>
            <div>
              <h4 className="text-[#003366] text-sm font-black uppercase tracking-widest mb-2">{t('news_authority')}</h4>
              <p className="text-slate-600 text-xs font-bold leading-relaxed uppercase tracking-tight">
                Secretariado Central do Comité de Gestão Coordenada de Fronteiras de Angola
              </p>
            </div>
          </div>

          <p className="text-slate-700 text-lg leading-relaxed mb-8 font-medium">
           {newsItem.Concl} 
          </p>
        </div>

        {/* Rodapé do Artigo */}
        <footer className="pt-12 border-t border-slate-100">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <Tag className="w-4 h-4 text-slate-300" />
              <div className="flex gap-2">
                <span className="text-[9px] font-black uppercase text-slate-400 bg-slate-50 px-3 py-1 border border-slate-100">Soberania</span>
                <span className="text-[9px] font-black uppercase text-slate-400 bg-slate-50 px-3 py-1 border border-slate-100">Logística</span>
              </div>
            </div>
            <button className="inline-flex items-center gap-3 bg-[#003366] text-white px-8 py-4 rounded-sm text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:bg-[#C5A059] transition-all">
              <Building2 className="w-4 h-4" /> {t('news_share')}
            </button>
          </div>
        </footer>

        {/* Notícias Relacionadas */}
        <section className="mt-32">
          <h4 className="text-[#003366] text-xs font-black uppercase tracking-[0.3em] mb-12 flex items-center gap-3">
            <div className="w-12 h-0.5 bg-[#C5A059]"></div> {t('news_related')}
          </h4>
          <div className="grid md:grid-cols-2 gap-10">
            {relatedNews.map((item) => (
              <Link 
                key={item.id} 
                to={`/noticias/${item.id}`} 
                className="group flex flex-col h-full border border-slate-100 hover:border-[#C5A059] transition-all"
              >
                <div className="h-40 overflow-hidden bg-slate-200">
                  <img title={item.title} src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <span className="text-[8px] font-black uppercase text-[#C5A059] mb-2 block">{item.category}</span>
                  <h5 className="text-[#003366] text-sm font-black uppercase italic leading-tight group-hover:text-[#C5A059] transition-colors">{item.title}</h5>
                  <div className="mt-4 flex items-center gap-2 text-[9px] font-bold text-slate-300 uppercase">
                    {t('read_more')} <ChevronRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
};

export default NewsDetail;
