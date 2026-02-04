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
  Camera,
  Cpu,
  Cloud,
  Database,
  Server,
  PlusCircle,
  Search,
  ScanLine,
  Globe,
  Landmark,
  Activity,
  Palmtree,
  Plane,
  Ticket,
  Heart,
  Compass,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext";
import truckimage from "../conteudo/imagens/Truck being scanned.jpg";
import corredorimage from "../conteudo/imagens/logistica.jpeg";

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
    <div className="animate-in fade-in duration-700 bg-white">
      {/* Header Institucional de Alto Impacto */}
      <section className="bg-[#003366] pt-16 pb-24 border-b-4 border-[#C5A059] relative overflow-hidden">
        <img
          src={corredorimage}
          className="w-full h-full object-cover absolute center inset-0 opacity-10"
          alt="truck image"
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

      {/* Espinha Dorsal do Desenvolvimento: Introdução Estratégica */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="w-16 h-1.5 bg-[#C5A059]"></div>
              <h2 className="text-[#003366] text-4xl font-black uppercase italic tracking-tighter leading-tight">
                {t("corr_intro_title")}
              </h2>
              <p className="text-slate-600 text-lg font-medium leading-relaxed italic border-l-4 border-slate-100 pl-8">
                {t("corr_intro_desc")}
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 bg-slate-50 border border-slate-100 rounded flex gap-4">
                  <Waves className="w-6 h-6 text-[#C5A059] shrink-0" />
                  <p className="text-[10px] font-black text-[#003366] uppercase tracking-widest">
                    Conectividade Atlântico-Interior
                  </p>
                </div>
                <div className="p-6 bg-slate-50 border border-slate-100 rounded flex gap-4">
                  <Globe className="w-6 h-6 text-[#C5A059] shrink-0" />
                  <p className="text-[10px] font-black text-[#003366] uppercase tracking-widest">
                    Integração Regional SADC
                  </p>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 border-2 border-slate-100 group-hover:border-[#C5A059]/20 transition-all duration-700"></div>
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200"
                className="relative z-10 w-full aspect-video object-cover rounded-sm shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-1000"
                alt="Logística Portuária Angola"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#003366] p-8 text-white z-20 shadow-2xl border-b-4 border-[#C5A059] hidden md:block">
                <Anchor className="w-10 h-10 text-[#C5A059] mb-4" />
                <p className="text-[10px] font-black uppercase tracking-widest leading-none mb-1">
                  Porto do Lobito
                </p>
                <p className="text-[8px] font-bold uppercase text-slate-400">
                  Hub Regional de Exportação
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sinergia: Turismo e Comércio Transfronteiriço (INTEGRAÇÃO) */}
      <section className="py-24 bg-slate-50 border-y border-slate-100 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-square bg-white border-[10px] border-white shadow-2xl rounded-sm overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1200"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[3000ms]"
                  alt="Turismo de Natureza Angola"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-[#C5A059] p-10 text-white shadow-2xl border-b-4 border-[#003366] hidden md:block animate-in slide-in-from-left duration-700">
                <Heart className="w-10 h-10 mb-4" />
                <p className="text-[10px] font-black uppercase tracking-widest leading-none mb-1">
                  Eco-Turismo Regional
                </p>
                <p className="text-[8px] font-bold uppercase text-white/70">
                  Acessibilidade Facilitada
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div className="inline-flex items-center gap-3 text-[#003366] mb-4 bg-white px-4 py-2 rounded-full border border-[#003366]/10 shadow-sm">
                <Palmtree className="w-5 h-5 text-[#C5A059]" />
                <span className="text-[10px] font-black uppercase tracking-widest">
                  {t("tourism_title")}
                </span>
              </div>
              <h2 className="text-[#003366] text-4xl font-black uppercase italic tracking-tighter leading-none">
                Fronteiras Modernas: <br />
                <span className="text-[#C5A059]">O Portal para o Mundo</span>
              </h2>
              <p className="text-slate-600 text-lg font-medium leading-relaxed italic border-l-4 border-[#C5A059] pl-8">
                {t("tourism_desc")}
              </p>
              <div className="grid sm:grid-cols-2 gap-6 pt-6">
                <div className="p-6 bg-white border border-slate-100 rounded shadow-sm hover:shadow-md transition-shadow">
                  <Ticket className="w-8 h-8 text-[#C5A059] mb-4" />
                  <h4 className="text-[10px] font-black text-[#003366] uppercase tracking-widest mb-1">
                    {t("tourism_visa_title")}
                  </h4>
                  <p className="text-[9px] text-slate-400 font-bold uppercase leading-tight">
                    {t("tourism_visa_desc")}
                  </p>
                </div>
                <div className="p-6 bg-white border border-slate-100 rounded shadow-sm hover:shadow-md transition-shadow">
                  <ShieldCheck className="w-8 h-8 text-[#C5A059] mb-4" />
                  <h4 className="text-[10px] font-black text-[#003366] uppercase tracking-widest mb-1">
                    Segurança e Apoio
                  </h4>
                  <p className="text-[9px] text-slate-400 font-bold uppercase leading-tight">
                    Canais de atendimento 24/7 para turistas e investidores.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Tecnológico */}
      <section className="py-24 bg-[#020617] text-white overflow-hidden relative border-y-8 border-[#C5A059]">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <Activity className="absolute -left-20 top-20 w-[600px] h-[600px] text-[#C5A059]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-[10px] font-black uppercase text-[#C5A059] tracking-[0.4em] mb-4 block animate-pulse">
              Inteligência Operacional
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-6">
              {t("corr_tech_title")}
            </h2>
            <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-3xl mx-auto">
              {t("corr_tech_desc")}
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-8 relative">
              <div className="bg-slate-900 border-4 border-slate-800 rounded-sm overflow-hidden shadow-[0_0_50px_rgba(197,160,89,0.1)] group aspect-video">
                <img
                  src={truckimage}
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[4000ms]"
                  alt="Truck being scanned by AI"
                />
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-[30%] left-0 w-full h-[3px] bg-emerald-500/40 blur-sm animate-[scan_3s_linear_infinite]"></div>
                  <div className="absolute top-[30%] left-0 w-full h-[1px] bg-emerald-400/60 animate-[scan_3s_linear_infinite]"></div>
                </div>
                <div className="absolute bottom-[10%] left-[10%] group/spot">
                  <div className="w-4 h-4 bg-emerald-500 rounded-full border-2 border-white animate-ping absolute inset-0"></div>
                  <div className="w-4 h-4 bg-emerald-500 rounded-full border-2 border-white relative z-10"></div>
                  <div className="absolute bottom-156 left-6 w-56 bg-white/95 backdrop-blur-md p-14 rounded-sm border-l-4 border-[#C5A059] shadow-2xl opacity-0 group-hover/spot:opacity-100 translate-y-4 group-hover/spot:translate-y-0 transition-all">
                    <Camera className="w-4 h-4 text-[#003366] mb-2" />
                    <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">
                      Módulo I: Visão IA
                    </p>
                    <p className="text-[10px] font-black text-[#003366] uppercase italic leading-tight">
                      {t("corr_tech_lpr")}
                    </p>
                  </div>
                </div>
                <div className="absolute top-[40%] right-[30%] group/spot">
                  <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white animate-ping absolute inset-0"></div>
                  <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white relative z-10"></div>
                  <div className="absolute top-6 left-6 w-56 bg-slate-900/95 backdrop-blur-md p-4 rounded-sm border-l-4 border-blue-500 shadow-2xl opacity-0 group-hover/spot:opacity-100 transition-all">
                    <Server className="w-4 h-4 text-blue-500 mb-2" />
                    <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1">
                      Módulo II: Edge Server
                    </p>
                    <p className="text-[10px] font-black text-white uppercase italic leading-tight">
                      {t("corr_tech_server")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex items-center gap-6 justify-center">
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-sm">
                  <Cloud className="w-5 h-5 text-[#C5A059]" />
                  <span className="text-[9px] font-black uppercase tracking-[0.2em]">
                    {t("corr_tech_cloud")}
                  </span>
                </div>
                <ArrowRight className="text-slate-700 w-6 h-6" />
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-sm">
                  <Activity className="w-5 h-5 text-emerald-500" />
                  <span className="text-[9px] font-black uppercase tracking-[0.2em]">
                    Auditoria Global CGCF
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-8">
              <div className="bg-slate-900 border border-slate-800 p-8 rounded-sm">
                <h3 className="text-[#C5A059] text-xs font-black uppercase tracking-widest mb-6 flex items-center gap-2">
                  <Cpu className="w-5 h-5" /> Arquitetura de Borda
                </h3>
                <div className="space-y-6">
                  <div className="pb-6 border-b border-slate-800">
                    <h4 className="text-[10px] font-black text-white uppercase mb-2">
                      Processamento Não Intrusivo
                    </h4>
                    <p className="text-xs text-slate-500 font-medium italic leading-relaxed">
                      Sensores de alta precisão que analisam o veículo sem
                      necessidade de paragens obrigatórias.
                    </p>
                  </div>
                  <div className="pb-6 border-b border-slate-800">
                    <h4 className="text-[10px] font-black text-white uppercase mb-2">
                      Visão Computacional Avançada
                    </h4>
                    <p className="text-xs text-slate-500 font-medium italic leading-relaxed">
                      Deep Learning para detecção de anomalias na carga e
                      pesagem dinâmica (WIM).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eixos Logísticos */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-[#003366] text-4xl md:text-5xl font-black uppercase tracking-tighter italic border-l-4 border-[#C5A059] pl-10 mb-6">
              {t("corr_axes_title")}
            </h2>
            <p className="text-slate-500 text-lg font-medium max-w-3xl ml-10">
              {t("corr_axes_desc")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {corridorData.map((corr, i) => (
              <div
                key={i}
                className="bg-slate-50 p-12 rounded-sm border border-slate-100 hover:border-[#C5A059] hover:shadow-2xl transition-all group flex flex-col h-full relative overflow-hidden"
              >
                <div className="w-16 h-16 bg-white border border-slate-200 rounded flex items-center justify-center text-[#003366] mb-10 group-hover:bg-[#003366] group-hover:text-white transition-all shadow-sm">
                  <corr.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-[#003366] uppercase italic mb-3 tracking-tighter leading-none">
                  {corr.name}
                </h3>
                <div className="text-[10px] font-black uppercase text-[#C5A059] tracking-widest mb-8">
                  {corr.type}
                </div>
                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-12 flex-grow italic">
                  {corr.desc}
                </p>
                <div className="mt-auto flex justify-between items-center text-[10px] font-black uppercase tracking-widest border-t border-slate-200 pt-8">
                  <span className="text-slate-400">{t("corr_priority")}</span>
                  <span className="text-[#003366] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />{" "}
                    {corr.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hub Logístico Final */}
      <section className="py-24 bg-[#f8fafc] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#003366] p-12 md:p-24 rounded-sm text-white relative overflow-hidden shadow-2xl">
            <div className="absolute -bottom-20 -right-20 opacity-[0.05] pointer-events-none">
              <Network className="w-[600px] h-[600px]" />
            </div>

            <div className="max-w-4xl relative z-10">
              <div className="w-12 h-1.5 bg-[#C5A059] mb-10"></div>
              <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-10 text-white leading-none">
                {t("corr_hub_title")}
              </h2>
              <p className="text-slate-300 text-xl font-medium leading-relaxed italic mb-16 opacity-90 text-balance">
                {t("corr_hub_desc")}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                {[
                  { icon: Anchor, label: "Portos Modernos" },
                  { icon: Truck, label: "Rodovias Integradas" },
                  { icon: Layers, label: "Plataformas Logísticas" },
                  { icon: Database, label: "Interoperabilidade" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center group"
                  >
                    <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#C5A059] transition-all shadow-xl">
                      <item.icon className="w-8 h-8 text-[#C5A059] group-hover:text-white" />
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-white transition-colors leading-tight">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(-500px); opacity: 0; }
          20% { opacity: 0.6; }
          80% { opacity: 0.6; }
          100% { transform: translateY(600px); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Corridors;
