import React from "react";
import {
  Network,
  Truck,
  Anchor,
  Zap,
  ShieldCheck,
  ArrowRight,
  Building2,
  Navigation,
  Waves,
  CheckCircle2,
  Info,
  Layers,
  Workflow,
  Award,
  BarChart3,
  FileText,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext";

const Corridors: React.FC = () => {
  const { t } = useLanguage();

  const corridorData = [
    {
      name: t("corr_lobito_name"),
      type: t("corr_lobito_type"),
      desc: t("corr_lobito_desc"),
      status: "Operacional",
      icon: Anchor,
      color: "#C5A059",
    },
    {
      name: t("corr_luanda_name"),
      type: t("corr_luanda_type"),
      desc: t("corr_luanda_desc"),
      status: "Operacional",
      icon: Building2,
      color: "#003366",
    },
    {
      name: t("corr_namibe_name"),
      type: t("corr_namibe_type"),
      desc: t("corr_namibe_desc"),
      status: "Operacional",
      icon: Truck,
      color: "#3b82f6",
    },
  ];

  return (
    <div className="animate-in fade-in duration-700">
      {/* Header Institucional Internacionalizado */}
      <section className="bg-[#003366] pt-16 pb-24 border-b-4 border-[#C5A059] relative overflow-hidden">
        <img
          src="../conteudo/imagens/logistica.jpeg"
          className="w-full h-full object-cover absolute center inset-0 opacity-10"
          alt="Dr. José Leiria"
        />
        <div className="absolute inset-0 opacity-10">
          <Network className="absolute -right-20 -top-20 w-96 h-96" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-10">
            <Link to="/" className="hover:text-white transition-colors">
              {t("nav_home")}
            </Link>
            <span>/</span>
            <span className="text-[#C5A059]">{t("nav_corridors")}</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-10">
            <div>
              <h1 className="text-white text-5xl font-black uppercase italic tracking-tighter leading-none max-w-4xl mb-4">
                {t("corr_title")}
              </h1>
              <p className="text-slate-300 text-lg font-medium max-w-3xl leading-relaxed">
                {t("corr_subtitle")}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border-2 border-[#C5A059] p-6 rounded-sm flex items-center gap-5 shrink-0 shadow-2xl">
              <div className="bg-[#C5A059] p-3 rounded-full">
                <ShieldCheck className="text-white w-8 h-8" />
              </div>
              <div>
                <p className="text-[9px] font-black text-[#C5A059] uppercase tracking-widest leading-tight">
                  {t("corr_guarantee")}
                </p>
                <p className="text-white text-[11px] font-black uppercase">
                  {t("corr_dispatch")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eixos Logísticos Internacionalizados */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-[#003366] text-3xl font-black uppercase tracking-tighter italic border-l-4 border-[#C5A059] pl-6 mb-4">
              {t("corr_axes_title")}
            </h2>
            <p className="text-slate-500 text-sm font-medium mb-6">
              {t("corr_axes_desc")}
            </p>
            <div className="h-px bg-slate-100 w-full mb-12"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {corridorData.map((corr, i) => (
              <div
                key={i}
                className="bg-slate-50 p-10 rounded-sm border border-slate-100 hover:border-[#C5A059] hover:shadow-2xl transition-all group relative overflow-hidden flex flex-col"
              >
                <div className="w-14 h-14 bg-white border border-slate-100 rounded flex items-center justify-center text-[#003366] mb-8 group-hover:bg-[#003366] group-hover:text-white transition-all shadow-sm">
                  <corr.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-black text-[#003366] uppercase italic mb-2 tracking-tight leading-none">
                  {corr.name}
                </h3>
                <div className="text-[10px] font-black uppercase text-[#C5A059] tracking-widest mb-6">
                  {corr.type}
                </div>
                <p className="text-slate-500 text-xs font-medium leading-relaxed mb-10 h-16 line-clamp-3">
                  {corr.desc}
                </p>
                <div className="mt-auto flex justify-between items-center text-[9px] font-black uppercase tracking-widest border-t border-slate-200 pt-6">
                  <span className="text-slate-400">{t("corr_priority")}</span>
                  <span className="text-[#003366] flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />{" "}
                    {corr.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infográfico Internacionalizado */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden border-y-8 border-[#C5A059]">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-4">
              {t("corr_facil_title")}
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto font-medium">
              {t("corr_facil_desc")}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 mb-24">
            <div className="bg-white/5 p-10 rounded border border-white/10 text-center relative">
              <div className="w-16 h-16 bg-[#C5A059] rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-black uppercase italic mb-4">
                {t("corr_step1_title")}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed font-medium">
                {t("corr_step1_desc")}
              </p>
              <div className="hidden lg:block absolute top-1/2 -right-6 -translate-y-1/2 z-20">
                <ArrowRight className="text-[#C5A059] w-12 h-12" />
              </div>
            </div>
            <div className="bg-white/5 p-10 rounded border border-white/10 text-center relative">
              <div className="w-16 h-16 bg-[#003366] border-2 border-[#C5A059] rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                <Workflow className="w-8 h-8 text-[#C5A059]" />
              </div>
              <h4 className="text-lg font-black uppercase italic mb-4">
                {t("corr_step2_title")}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed font-medium">
                {t("corr_step2_desc")}
              </p>
              <div className="hidden lg:block absolute top-1/2 -right-6 -translate-y-1/2 z-20">
                <ArrowRight className="text-[#C5A059] w-12 h-12" />
              </div>
            </div>
            <div className="bg-white/5 p-10 rounded border border-white/10 text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-black uppercase italic mb-4">
                {t("corr_step3_title")}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed font-medium">
                {t("corr_step3_desc")}
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-12">
              <div className="border-l-4 border-[#C5A059] pl-8">
                <h3 className="text-2xl font-black uppercase italic mb-6">
                  Benefícios da Facilitação
                </h3>
                <div className="grid gap-8">
                  {[
                    {
                      title: "Digitalização Aduaneira",
                      icon: Zap,
                      text: "Sistemas eletrónicos aceleram a liberação de mercadorias críticas.",
                    },
                    {
                      title: "Padronização",
                      icon: Layers,
                      text: "Harmonização de certificados entre todos os órgãos do CGCF.",
                    },
                    {
                      title: "Segurança",
                      icon: ShieldCheck,
                      text: "Corredores seguros com vigilância constante de carga estratégica.",
                    },
                  ].map((f, i) => (
                    <div key={i} className="flex gap-6 group">
                      <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-[#C5A059] transition-all">
                        <f.icon className="w-6 h-6 text-[#C5A059] group-hover:text-white" />
                      </div>
                      <div>
                        <h4 className="font-black text-sm uppercase tracking-tight mb-2">
                          {f.title}
                        </h4>
                        <p className="text-slate-400 text-xs font-medium">
                          {f.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-12 rounded-sm backdrop-blur-sm shadow-2xl">
              <h3 className="text-white text-[10px] font-black uppercase tracking-[0.3em] text-[#C5A059] mb-10">
                {t("corr_metrics_title")}
              </h3>
              <div className="space-y-10">
                {[
                  {
                    label: t("corr_metric_time"),
                    value: "-24%",
                    sub: "Redução média em fronteiras estratégicas",
                    trend: "down",
                  },
                  {
                    label: t("corr_metric_flow"),
                    value: "+18%",
                    sub: "Aumento de volume via corredores ferroviários",
                    trend: "up",
                  },
                  {
                    label: t("corr_metric_digital"),
                    value: "74%",
                    sub: "Agências integradas via portal único (CGCF)",
                    trend: "up",
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-end border-b border-white/5 pb-4"
                  >
                    <div>
                      <p className="text-[10px] font-black uppercase text-slate-500 mb-1">
                        {stat.label}
                      </p>
                      <p className="text-[9px] text-slate-600 uppercase font-bold max-w-[180px]">
                        {stat.sub}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-3xl font-black text-white italic block leading-none">
                        {stat.value}
                      </span>
                      <span className="text-[8px] font-black uppercase text-emerald-500">
                        {t("corr_metric_improvement")}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 flex items-center gap-4 p-4 bg-emerald-500/5 border border-emerald-500/20 rounded">
                <Info className="w-5 h-5 text-emerald-500 shrink-0" />
                <p className="text-[10px] font-bold text-slate-400">
                  Powered by AGT & MINTRANS Data (Q1 2024).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Melhoria Internacionalizado */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="p-12 bg-slate-50 border border-slate-100 rounded">
            <h4 className="text-[#003366] font-black uppercase tracking-widest text-sm mb-8 flex items-center gap-3">
              <BarChart3 className="text-[#C5A059] w-5 h-5" />{" "}
              {t("corr_axes_title")}
            </h4>
            <ul className="space-y-5">
              {[1, 2, 3, 4].map((item, i) => (
                <li
                  key={i}
                  className="flex gap-4 items-start text-xs font-medium text-slate-500"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-1.5"></div>
                  Item de Planeamento Estratégico {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-12 bg-[#003366] text-white rounded shadow-xl relative overflow-hidden group">
            <div className="relative z-10">
              <h4 className="text-[#C5A059] font-black uppercase tracking-widest text-sm mb-8">
                {t("corr_opp_title")}
              </h4>
              <div className="grid grid-cols-1 gap-6">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="flex gap-4">
                    <div className="bg-white/10 w-8 h-8 rounded flex items-center justify-center shrink-0 text-xs font-black group-hover:bg-[#C5A059] transition-all">
                      {num}
                    </div>
                    <p className="text-xs font-medium leading-relaxed">
                      Definição estratégica prioritária conforme Regulamento
                      Interno.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Corridors;
