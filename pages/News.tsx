import React, { useState, useMemo } from "react";
import { MOCK_NEWS } from "../constants";
import {
  Search,
  Calendar,
  ArrowRight,
  Clock,
  Filter,
  Play,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext";
import imagemvideo from "../conteudo/imagens/Imagem1_logo.png";

const News: React.FC = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");

  const categories = useMemo(() => {
    return ["Todos", ...Array.from(new Set(MOCK_NEWS.map((n) => n.category)))];
  }, []);

  const filteredNews = useMemo(() => {
    return MOCK_NEWS.filter((news) => {
      const matchesSearch =
        news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        news.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        activeCategory === "Todos" || news.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  const latestNews = useMemo(() => {
    const months: Record<string, number> = {
      Janeiro: 0,
      Fevereiro: 1,
      Março: 2,
      Abril: 3,
      Maio: 4,
      Junho: 5,
      Julho: 6,
      Agosto: 7,
      Setembro: 8,
      Outubro: 9,
      Novembro: 10,
      Dezembro: 11,
    };

    return [...MOCK_NEWS].sort((a, b) => {
      try {
        const partsA = a.date.split(" "); // ["02", "Fevereiro", "2026"]
        const partsB = b.date.split(" ");
        const dateA = new Date(
          parseInt(partsA[2]), // ano
          months[partsA[1]] || 0, // mês
          parseInt(partsA[0]), // dia
        );
        const dateB = new Date(
          parseInt(partsB[2]),
          months[partsB[1]] || 0,
          parseInt(partsB[0]),
        );
        return dateB.getTime() - dateA.getTime(); // ordem decrescente
      } catch (e) {
        return 0; // caso algum formato esteja errado
      }
    });
  }, []);

  return (
    <div className="bg-[#f1f5f9] min-h-screen animate-in fade-in duration-700">
      <section className="bg-[#003366] pt-16 pb-24 border-b-4 border-[#C5A059]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-10">
            <Link to="/" className="hover:text-white transition-colors">
              {t("nav_home")}
            </Link>
            <span>/</span>
            <span className="text-[#C5A059]">{t("news_room")}</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h1 className="text-white text-5xl font-black uppercase italic tracking-tighter leading-none mb-4">
                {t("news_room")}
              </h1>
              <p className="text-slate-300 font-medium text-lg leading-relaxed">
                {t("news_desc")}
              </p>
            </div>
            <div className="relative w-full md:w-96">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder={t("news_search")}
                className="w-full pl-14 pr-6 py-4 rounded-sm bg-white border border-slate-200 text-sm font-bold focus:ring-4 focus:ring-[#C5A059]/10 outline-none transition-all shadow-xl"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white border-b border-slate-200 sticky top-[75px] md:top-[110px] z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-8 overflow-x-auto no-scrollbar py-4 items-center">
            <Filter className="w-4 h-4 text-[#C5A059] shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all border-b-2 pb-1 ${activeCategory === cat ? "text-[#003366] border-[#003366]" : "text-slate-400 border-transparent hover:text-slate-600"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {latestNews.map((item) => (
            <Link
              key={item.id}
              to={`/noticias/${item.id}`}
              className="group flex flex-col h-full bg-white border border-slate-200 rounded-sm hover:shadow-2xl transition-all"
            >
              <div className="relative overflow-hidden h-56 bg-slate-100">
                {item.isVideo || item.image.endsWith(".mp4") ? (
  <div className="w-full h-full flex items-center justify-center relative cursor-pointer group overflow-hidden rounded-sm shadow-lg">
    {/* Preview do vídeo */}
    <img
      title={item.title}
      src={imagemvideo} // pode ser o poster ou a primeira frame
      alt={item.title}
      className="w-full h-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-105"
    />
    {/* Ícone de play sobreposto */}
    <div className="absolute inset-0 flex items-center justify-center">
      <Play className="w-12 h-12 text-[#003366] opacity-80 group-hover:scale-125 transition-transform duration-300" />
    </div>
  </div>
                  ) : (
                    <img
                      title={item.title}
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 rounded-sm shadow-lg"
                    />
                  )}
                <div className="absolute top-4 left-4 bg-[#C5A059] text-white text-[8px] font-black uppercase px-3 py-1 rounded-sm shadow-lg">
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
                  {t("read_more")}{" "}
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <section className="bg-[#003366] py-24 px-6 text-center border-t-8 border-[#C5A059]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter italic uppercase">
            {t("news_subscribe_title")}
          </h2>
          <p className="text-slate-300 font-medium mb-12 text-lg">
            Receba as actualizações estratégicas directamente no seu canal
            oficial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 bg-white/5 p-2 rounded-sm border border-white/10">
            <input
              type="email"
              placeholder="instituicao@gov.ao"
              className="flex-grow px-8 py-5 rounded-sm bg-transparent text-white outline-none font-bold text-sm"
            />
            <button className="px-12 py-5 bg-[#C5A059] text-white font-black rounded-sm hover:bg-[#b08b49] transition-all uppercase text-[10px] tracking-widest shadow-xl">
              {t("news_subscribe_btn")}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
