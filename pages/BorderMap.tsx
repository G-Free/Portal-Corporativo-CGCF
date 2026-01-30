import React, { useState, useMemo } from "react";
import { BORDER_POSTS } from "../constants";
import {
  Search,
  MapPin,
  Anchor,
  Plane,
  Navigation,
  Globe,
  Filter,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { Link } from "react-router-dom";

const BorderMap: React.FC = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("Todas");
  const [selectedType, setSelectedType] = useState("Todos");

  const provinces = useMemo(() => {
    return [
      "Todas",
      ...Array.from(new Set(BORDER_POSTS.map((p) => p.province))).sort(),
    ];
  }, []);

  const types = [
    { id: "Todos", label: t("filter_all"), icon: Globe },
    { id: "LAND", label: t("filter_land"), icon: Navigation },
    { id: "MARITIME", label: t("filter_maritime"), icon: Anchor },
    { id: "AIR", label: t("filter_air"), icon: Plane },
  ];

  const filteredPosts = useMemo(() => {
    return BORDER_POSTS.filter((post) => {
      const matchesSearch =
        post.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.province.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesProvince =
        selectedProvince === "Todas" || post.province === selectedProvince;
      const matchesType =
        selectedType === "Todos" || post.type === selectedType;
      return matchesSearch && matchesProvince && matchesType;
    });
  }, [searchTerm, selectedProvince, selectedType, t]);

  return (
    <div className="min-h-screen bg-[#f1f5f9] animate-in fade-in duration-700">
      <section className="bg-[#003366] pt-16 pb-24 border-b-4 border-[#C5A059] over-flow-hidden relative">
        <img
          src="../conteudo/imagens/mapaAngola.jpg.jpeg"
          className="absolute inset-0 left-0 w-full h-full object-cover object-center opacity-20 pointer-events-none"
          alt="mapa background"
        />
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-10">
            <Link to="/" className="hover:text-white transition-colors">
              {t("nav_home")}
            </Link>
            <span>/</span>
            <span className="text-[#C5A059]">{t("nav_borders")}</span>
          </div>
          <h1 className="text-white text-5xl font-black uppercase italic tracking-tighter mb-4 leading-none">
            {t("border_title")}
          </h1>
          <p className="text-slate-300 text-lg font-medium max-w-2xl leading-relaxed">
            {t("border_desc")}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-12 gap-12">
          <aside className="lg:col-span-3 space-y-8">
            <div className="bg-white p-8 rounded-sm border border-slate-200 shadow-sm">
              <h3 className="text-[#003366] text-xs font-black uppercase tracking-widest mb-6 flex items-center gap-2">
                <Filter className="w-4 h-4" /> Filtros
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] font-black uppercase text-slate-400 mb-3 tracking-wider">
                    Província
                  </label>
                  <select
                    title="Select Province"
                    value={selectedProvince}
                    onChange={(e) => setSelectedProvince(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-sm text-xs font-bold text-slate-700 focus:outline-none focus:border-[#003366]"
                  >
                    {provinces.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase text-slate-400 mb-3 tracking-wider">
                    Tipo de Posto
                  </label>
                  <div className="space-y-2">
                    {types.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setSelectedType(type.id)}
                        className={`w-full text-left px-4 py-3 rounded-sm text-xs font-bold transition-all flex items-center gap-3 ${selectedType === type.id ? "bg-[#003366] text-white" : "hover:bg-slate-100 text-slate-600"}`}
                      >
                        <type.icon className="w-4 h-4" />
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#003366] p-8 rounded-sm text-white">
              <h4 className="text-[#C5A059] text-[10px] font-black uppercase tracking-widest mb-4">
                Apoio Técnico
              </h4>
              <p className="text-xs font-medium leading-relaxed opacity-80 mb-6">
                Dificuldades em localizar um posto? Contacte a nossa linha de
                apoio.
              </p>
              <Link
                to="/contacto"
                className="text-[10px] font-black uppercase border-b border-[#C5A059] pb-1 hover:text-[#C5A059] transition-colors"
              >
                Fale Connosco
              </Link>
            </div>
          </aside>

          <div className="lg:col-span-9 space-y-8">
            <div className="relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 w-5 h-5" />
              <input
                type="text"
                placeholder={t("search_placeholder")}
                className="w-full pl-16 pr-6 py-5 rounded-sm bg-white border border-slate-200 text-sm font-bold focus:ring-4 focus:ring-[#003366]/5 outline-none transition-all shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white border border-slate-200 rounded-sm overflow-hidden hover:border-[#C5A059] transition-all group flex flex-col"
                >
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-slate-50 border border-slate-100 rounded text-[#003366] group-hover:bg-[#003366] group-hover:text-white transition-all">
                        {post.type === "AIR" && <Plane className="w-6 h-6" />}
                        {post.type === "MARITIME" && (
                          <Anchor className="w-6 h-6" />
                        )}
                        {post.type === "LAND" && (
                          <Navigation className="w-6 h-6" />
                        )}
                      </div>
                      <div
                        className={`flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest ${post.status === "OPEN" ? "text-emerald-600" : "text-amber-600"}`}
                      >
                        {post.status === "OPEN" ? (
                          <CheckCircle2 className="w-3 h-3" />
                        ) : (
                          <AlertCircle className="w-3 h-3" />
                        )}
                        {post.status === "OPEN"
                          ? t("status_open")
                          : t("status_limited")}
                      </div>
                    </div>
                    <h3 className="text-[#003366] text-xl font-bold uppercase italic tracking-tight mb-2 group-hover:text-[#C5A059] transition-colors">
                      {post.name}
                    </h3>
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase text-slate-400">
                      <MapPin className="w-3.5 h-3.5" /> {post.province}
                    </div>
                  </div>
                  <div className="mt-auto bg-slate-50 p-6 flex flex-wrap gap-2 border-t border-slate-100">
                    {post.agencies.slice(0, 4).map((a) => (
                      <span
                        key={a}
                        className="bg-white border border-slate-200 text-[#003366] text-[8px] font-black px-2 py-1 rounded-sm"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BorderMap;
