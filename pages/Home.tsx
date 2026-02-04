import React, { useEffect, useState } from "react";
import { MOCK_NEWS } from "../constants";
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
} from "lucide-react";
import { getLatestBorderInsights } from "../services/geminiService";
import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext";

const Home: React.FC = () => {
  const [aiInsight, setAiInsight] = useState<{
    text: string;
    sources: any[];
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const { t, language } = useLanguage();

  useEffect(() => {
    const fetchInsight = async () => {
      setLoading(true);
      const query =
        language === "PT"
          ? "Prioridades estratégicas das fronteiras de Angola 2026"
          : language === "EN"
            ? "Strategic priorities for Angola borders 2026"
            : "Priorités stratégiques pour les frontières de l'Angola 2026";

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
      desc: t("partner_wb_desc"),
      url: "https://www.worldbank.org",
    },
    {
      name: "WCO",
      icon: Globe,
      desc: t("partner_wco_desc"),
      url: "http://www.wcoomd.org",
    },
    {
      name: "Embaixada do Japão",
      icon: Building2,
      desc: t("partner_japan_desc"),
      url: "https://www.angola.emb-japan.go.jp",
    },
    {
      name: "UNODC",
      icon: Shield,
      desc: t("partner_unodc_desc"),
      url: "https://www.unodc.org",
    },
    {
      name: "IMA",
      icon: Waves,
      desc: t("partner_ima_desc"),
      url: "https://www.imo.org",
    },
    {
      name: "GAFI",
      icon: Banknote,
      desc: t("partner_gafi_desc"),
      url: "https://www.fatf-gafi.org",
    },
  ];

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-[670px] bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            title="Business Handshake"
            src="https://media.istockphoto.com/photos/multicultural-businessmen-handshake-picture-id860096770?k=20&m=860096770&s=612x612&w=0&h=kOTzdPWjrxZU8ORU3BLI4P-CshhbUnfZpL2uEKYEBrg="
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003366] via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl md:text-7xl font-black leading-[1.1] mb-8 tracking-tighter uppercase italic">
              {t("hero_title").split(" ")[0]} <br />
              <span className="text-[#C5A059]">
                {t("hero_title").split(" ").slice(1).join(" ")}
              </span>
            </h1>
            <p className="text-slate-200 text-lg md:text-xl font-medium mb-12 border-l-4 border-[#C5A059] pl-6 leading-relaxed max-w-2xl">
              {t("hero_desc")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/mapa"
                className="bg-[#C5A059] hover:bg-[#b08b4a] text-white px-10 py-5 font-black rounded-sm text-[11px] uppercase tracking-widest transition-all inline-flex items-center gap-4 shadow-xl"
              >
                {t("btn_borders")} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/corredores"
                className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-10 py-5 font-black rounded-sm text-[11px] uppercase tracking-widest transition-all inline-flex items-center gap-4 border border-white/20"
              >
                {t("btn_corridors")} <Navigation className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Parceiros Externos Section */}
      <section className="bg-white border-b border-slate-100 py-24 relative z-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 text-[#003366]/40 uppercase text-[9px] font-black tracking-[0.4em]">
              <Handshake className="w-4 h-4 text-[#C5A059]" />
              Cooperação Multilateral
            </div>
            <h2 className="text-[#003366] text-3xl font-black uppercase italic tracking-tighter">
              Apoio Estratégico
            </h2>
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

      {/* AI Briefing Section */}
      <section className="py-24 bg-slate-900 border-b border-slate-800 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#C5A059]/5 skew-x-12 transform translate-x-32"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
              <div className="inline-flex items-center gap-3 text-[#C5A059] mb-8">
                <Award className="w-8 h-8" />
                <h2 className="text-3xl font-black uppercase tracking-tighter italic">
                  {t("ai_brief_title")}
                </h2>
              </div>
              <p className="text-slate-400 text-sm font-medium leading-relaxed mb-10">
                {t("ai_brief_desc")}
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="bg-white p-12 rounded-sm border-l-8 border-[#C5A059] shadow-2xl relative overflow-hidden text-slate-900">
                {loading ? (
                  <div className="space-y-6 animate-pulse">
                    <div className="h-4 bg-slate-100 rounded w-full"></div>
                    <div className="h-4 bg-slate-100 rounded w-5/6"></div>
                  </div>
                ) : (
                  <div className="animate-in fade-in duration-500">
                    <div className="flex items-center gap-3 mb-8 text-[9px] font-black uppercase tracking-[0.3em] text-[#003366]">
                      <Activity className="w-4 h-4" />
                      {t("ai_brief_report_label")}
                    </div>
                    <p className="text-[#003366] text-xl font-medium italic leading-relaxed mb-12 border-l-4 border-slate-100 pl-8">
                      {aiInsight?.text}
                    </p>
                    <div className="flex flex-wrap gap-4 border-t border-slate-100 pt-8">
                      {aiInsight?.sources.map((src, i) => (
                        <a
                          key={i}
                          href={src.url}
                          target="_blank"
                          className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-400 hover:text-[#C5A059] transition-colors"
                        >
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
              <h2 className="text-[#003366] text-4xl font-black uppercase tracking-tighter italic">
                {t("news_room_title")}
              </h2>
            </div>
            <Link
              to="/noticias"
              className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-[#003366] transition-colors border-b-2 border-slate-100 pb-1"
            >
              {t("news_archive_link")}
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {MOCK_NEWS.map((item) => (
              <Link
                key={item.id}
                to={`/noticias/${item.id}`}
                className="group flex flex-col h-full bg-white border border-slate-100 rounded-sm hover:shadow-2xl transition-all"
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    title={item.title}
                    src={item.image}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
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
                    {t("read_more")}{" "}
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
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
