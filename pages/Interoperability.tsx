import React, { useState } from "react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  CartesianGrid,
  AreaChart,
  Area,
} from "recharts";
import {
  Cpu,
  Workflow,
  Zap,
  ShieldCheck,
  Network,
  Database,
  Activity,
  Target,
  Lightbulb,
  Handshake,
  FileSearch,
  ArrowLeftRight,
  ShieldAlert,
  Biohazard,
  CheckCircle2 as LucideCheck,
  TrendingUp,
  TrendingDown,
  BarChart3,
  Monitor,
  Lock,
  Scale,
  Truck,
  Globe,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext";

// Cores Institucionais
const COLORS_STATUS = ["#10B981", "#F59E0B", "#EF4444"];

const Interoperability: React.FC = () => {
  const { t } = useLanguage();

  // Dados Mockados de Eficiência Logística (Público/Investidor)
  const efficiencyData = [
    { name: "2023 (Pré-InterOp)", value: 45, unit: "m" },
    { name: "2024 (Fase 1)", value: 28, unit: "m" },
    { name: "2026 (Target)", value: 8, unit: "m" },
  ];

  // Dados SirofDashboard
  const tradeFlowData = [
    { name: "Jan", entrada: 4200, saida: 2400 },
    { name: "Fev", entrada: 4500, saida: 2800 },
    { name: "Mar", entrada: 5100, saida: 3200 },
    { name: "Abr", entrada: 4800, saida: 3100 },
    { name: "Mai", entrada: 5600, saida: 3800 },
  ];

  const complianceData = [
    { name: "Conforme", value: 92 },
    { name: "Auditado", value: 5 },
    { name: "Não-Conforme", value: 3 },
  ];

  const efficiencyByAgency = [
    { name: "SME", value: 94 },
    { name: "AGT", value: 88 },
    { name: "MINSA", value: 91 },
    { name: "SIC", value: 96 },
  ];

  const pillars = [
    {
      icon: Target,
      title: t("interop_pillar_align"),
      desc: t("interop_pillar_align_desc"),
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: Workflow,
      title: t("interop_pillar_opt"),
      desc: t("interop_pillar_opt_desc"),
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
    {
      icon: Zap,
      title: t("interop_pillar_eff"),
      desc: t("interop_pillar_eff_desc"),
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      icon: Lightbulb,
      title: t("interop_pillar_innov"),
      desc: t("interop_pillar_innov_desc"),
      color: "text-[#C5A059]",
      bg: "bg-[#C5A059]/5",
    },
  ];

  const operationalModules = [
    {
      icon: FileSearch,
      title: t("interop_mod_occ"),
      desc: t("interop_mod_occ_desc"),
    },
    {
      icon: Activity,
      title: t("interop_mod_flow"),
      desc: t("interop_mod_flow_desc"),
    },
    {
      icon: Target,
      title: t("interop_mod_risk"),
      desc: t("interop_mod_risk_desc"),
    },
    {
      icon: Workflow,
      title: t("interop_mod_workflow"),
      desc: t("interop_mod_workflow_desc"),
    },
    {
      icon: Database,
      title: t("interop_mod_assets"),
      desc: t("interop_mod_assets_desc"),
    },
    {
      icon: Biohazard,
      title: t("interop_mod_health"),
      desc: t("interop_mod_health_desc"),
    },
  ];

  const StatCard = ({
    title,
    value,
    unit,
    icon: Icon,
    trend,
    colorClass,
  }: any) => (
    <div className="bg-white border border-slate-200 rounded-sm p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-sm ${colorClass} bg-opacity-10`}>
          <Icon className={`w-6 h-6 ${colorClass.replace("bg-", "text-")}`} />
        </div>
        {trend && (
          <span
            className={`text-[10px] font-black px-2 py-0.5 rounded-full ${trend > 0 ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"}`}
          >
            {trend > 0 ? "+" : ""}
            {trend}%
          </span>
        )}
      </div>
      <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">
        {title}
      </p>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-black text-[#003366] italic tracking-tighter">
          {value}
        </span>
        {unit && (
          <span className="text-[10px] font-bold text-slate-400 uppercase">
            {unit}
          </span>
        )}
      </div>
    </div>
  );

  return (
    <div className="animate-in fade-in duration-700 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#003366] pt-16 pb-24 border-b-4 border-[#C5A059] relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-10">
          <Network className="absolute -right-20 -top-20 w-96 h-96" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-10">
            <Link to="/" className="hover:text-white transition-colors">
              {t("nav_home")}
            </Link>
            <span>/</span>
            <span className="text-[#C5A059]">{t("nav_interop")}</span>
          </div>

          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none mb-8">
              {t("interop_title").split(" ")[0]}{" "}
              <span className="text-[#C5A059]">
                {t("interop_title").split(" ").slice(1).join(" ")}
              </span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed border-l-4 border-[#C5A059] pl-6">
              {t("interop_subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* RELATÓRIO DE TRANSPARÊNCIA E EFICIÊNCIA OPERACIONAL (RTD Público) */}
      <section
        id="transparency-report"
        className="py-24 bg-slate-50 border-b border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C5A059]/10 text-[#C5A059] rounded-full mb-6 border border-[#C5A059]/20">
                <LucideCheck className="w-3.5 h-3.5" />
                <span className="text-[9px] font-black uppercase tracking-widest">
                  {t("interop_investor_tag")}
                </span>
              </div>
              <h3 className="text-[#003366] text-4xl font-black uppercase italic tracking-tighter leading-none mb-4">
                {t("interop_summary_title")}
              </h3>
              <p className="text-slate-500 text-lg font-medium italic leading-relaxed">
                {t("interop_summary_desc")}
              </p>
            </div>
            <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-sm flex items-center gap-4">
              <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[9px] font-black uppercase text-emerald-600 tracking-widest leading-none mb-1">
                  {t("interop_status_global")}
                </p>
                <p className="text-emerald-800 text-xs font-bold uppercase">
                  {t("interop_operational_audited")}
                </p>
              </div>
            </div>
          </div>

          {/* Resumo Executivo em Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <StatCard
              title={t("sirof_stability_index")}
              value="98.2"
              unit="Score"
              icon={TrendingUp}
              trend={1.4}
              colorClass="bg-blue-600"
            />
            <StatCard
              title={t("sirof_efficiency_rate")}
              value="8.4"
              unit="Min/Despacho"
              icon={Zap}
              trend={-15}
              colorClass="bg-amber-500"
            />
            <StatCard
              title={t("sirof_audited_ops")}
              value="12.4K"
              unit="Trimestral"
              icon={Scale}
              trend={12}
              colorClass="bg-emerald-600"
            />
            <StatCard
              title="Disponibilidade Sistema"
              value="99.9"
              unit="%"
              icon={Activity}
              colorClass="bg-indigo-600"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
            {/* Fluxo Comercial - Gráfico de Área */}
            <div className="lg:col-span-8 bg-white border border-slate-200 rounded-sm p-8 shadow-sm">
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-[#003366] text-xs font-black uppercase tracking-widest flex items-center gap-3">
                  <ArrowLeftRight className="w-4 h-4 text-[#C5A059]" />{" "}
                  {t("sirof_trade_flow")}
                </h3>
                <div className="flex gap-4">
                  <span className="flex items-center gap-2 text-[9px] font-black text-[#003366]">
                    <div className="w-2 h-2 bg-[#003366] rounded-full"></div>{" "}
                    Entrada
                  </span>
                  <span className="flex items-center gap-2 text-[9px] font-black text-[#C5A059]">
                    <div className="w-2 h-2 bg-[#C5A059] rounded-full"></div>{" "}
                    Saída
                  </span>
                </div>
              </div>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={tradeFlowData}
                    margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient
                        id="colorEntrada"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#003366"
                          stopOpacity={0.1}
                        />
                        <stop
                          offset="95%"
                          stopColor="#003366"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#f1f5f9"
                    />
                    <XAxis
                      dataKey="name"
                      tick={{ fontSize: 10, fontWeight: "bold" }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis tick={{ fontSize: 10 }} axisLine={false} />
                    <Tooltip
                      contentStyle={{
                        borderRadius: "0",
                        border: "1px solid #e2e8f0",
                        boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="entrada"
                      stroke="#003366"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#colorEntrada)"
                    />
                    <Area
                      type="monotone"
                      dataKey="saida"
                      stroke="#C5A059"
                      strokeWidth={3}
                      fillOpacity={0}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Níveis de Conformidade - Gráfico de Donut */}
            <div className="lg:col-span-4 bg-white border border-slate-200 rounded-sm p-8 shadow-sm flex flex-col">
              <h3 className="text-[#003366] text-xs font-black uppercase tracking-widest mb-10 flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-[#C5A059]" />{" "}
                {t("sirof_compliance_categories")}
              </h3>
              <div className="h-[200px] w-full flex-grow">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={complianceData}
                      cx="50%"
                      cy="50%"
                      innerRadius={55}
                      outerRadius={75}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {complianceData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS_STATUS[index % COLORS_STATUS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-4 mt-6">
                {complianceData.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center text-[10px] font-bold uppercase"
                  >
                    <span className="flex items-center gap-2 text-slate-500">
                      <div
                        className={`w-2 h-2 rounded-full ${i === 0 ? "bg-[#10B981]" : i === 1 ? "bg-[#F59E0B]" : "bg-[#EF4444]"}`}
                      ></div>
                      {item.name}
                    </span>
                    <span className="text-[#003366]">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Eficiência por Órgão */}
            <div className="lg:col-span-4 bg-white border border-slate-200 rounded-sm p-8 shadow-sm">
              <h3 className="text-[#003366] text-xs font-black uppercase tracking-widest mb-10 flex items-center gap-3">
                <Users className="w-4 h-4 text-[#C5A059]" />{" "}
                {t("sirof_processes")}
              </h3>
              <div className="h-[220px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={efficiencyByAgency}
                    layout="vertical"
                    margin={{ left: -10 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      horizontal={false}
                      stroke="#f1f5f9"
                    />
                    <XAxis type="number" hide />
                    <YAxis
                      dataKey="name"
                      type="category"
                      tick={{ fontSize: 10, fontWeight: "bold" }}
                      axisLine={false}
                    />
                    <Tooltip cursor={{ fill: "#f8fafc" }} />
                    <Bar
                      dataKey="value"
                      fill="#003366"
                      radius={[0, 4, 4, 0]}
                      barSize={20}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Integridade dos Ativos */}
            <div className="lg:col-span-8 bg-white border border-slate-200 rounded-sm p-8 shadow-sm">
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-[#003366] text-xs font-black uppercase tracking-widest flex items-center gap-3">
                  <Truck className="w-4 h-4 text-[#C5A059]" />{" "}
                  {t("sirof_asset_integrity")}
                </h3>
                <div className="text-[10px] font-black uppercase text-emerald-600 flex items-center gap-2">
                  <LucideCheck className="w-3.5 h-3.5" /> 100% Auditável
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    label: "Ferroviário (Lobito)",
                    value: "45%",
                    icon: NavigationIcon,
                    desc: "Transporte de minérios e carga pesada.",
                  },
                  {
                    label: "Rodoviário",
                    value: "35%",
                    icon: Truck,
                    desc: "Distribuição regional de bens de consumo.",
                  },
                  {
                    label: "Marítimo",
                    value: "20%",
                    icon: Globe,
                    desc: "Exportação oceânica e cabotagem.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-slate-50 p-6 border border-slate-100 rounded-sm"
                  >
                    <item.icon className="w-6 h-6 text-[#003366] mb-4" />
                    <p className="text-[10px] font-black text-[#003366] uppercase mb-1">
                      {item.label}
                    </p>
                    <p className="text-2xl font-black text-[#C5A059] italic mb-3">
                      {item.value}
                    </p>
                    <p className="text-[9px] font-medium text-slate-400 leading-relaxed italic">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Gráfico de Tempo Médio de Despacho (Performance Histórica) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 bg-white p-10 rounded-sm shadow-2xl border border-slate-100 flex flex-col">
              <div className="flex justify-between items-center mb-10">
                <div>
                  <h4 className="text-[#003366] text-sm font-black uppercase tracking-widest mb-1">
                    {t("interop_stat_celerity")}
                  </h4>
                  <p className="text-slate-400 text-[10px] font-medium italic">
                    {t("interop_stat_time_label")}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-emerald-600">
                  <TrendingDown className="w-5 h-5" />
                  <span className="text-lg font-black italic">-82%</span>
                </div>
              </div>

              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={efficiencyData}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#f1f5f9"
                    />
                    <XAxis
                      dataKey="name"
                      tick={{ fontSize: 10, fontWeight: "bold" }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis hide />
                    <Tooltip
                      cursor={{ fill: "rgba(0,51,102,0.02)" }}
                      contentStyle={{
                        borderRadius: "0",
                        border: "1px solid #e2e8f0",
                        boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
                      }}
                    />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={60}>
                      {efficiencyData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={index === 2 ? "#C5A059" : "#003366"}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-8 p-6 bg-slate-50 rounded-sm flex items-center justify-between border border-slate-100">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  {t("interop_benchmark_future")}
                </p>
                <p className="text-[#003366] text-xs font-black uppercase italic">
                  {t("interop_demat_target")}
                </p>
              </div>
            </div>

            {/* Indicadores Rápidos para Investidores */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-6">
              <div className="bg-[#003366] p-8 text-white rounded-sm shadow-xl flex flex-col justify-center relative overflow-hidden group">
                <Activity className="absolute -right-4 -bottom-4 w-32 h-32 opacity-10 group-hover:scale-110 transition-transform" />
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C5A059] mb-4">
                  {t("interop_stat_trade_index")}
                </p>
                <div className="flex items-end gap-3 mb-6">
                  <span className="text-5xl font-black italic tracking-tighter">
                    8.5
                  </span>
                  <span className="text-slate-400 text-[11px] font-bold uppercase mb-2">
                    / 10.0
                  </span>
                </div>
                <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#C5A059] h-full w-[85%]"></div>
                </div>
                <p className="text-[9px] font-bold text-slate-400 mt-4 uppercase tracking-widest">
                  {t("interop_predictability")}
                </p>
              </div>

              <div className="bg-white p-8 border border-slate-200 rounded-sm shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-sm flex items-center justify-center text-[#003366]">
                    <BarChart3 className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest mb-1">
                      {t("interop_stat_ops_label")}
                    </p>
                    <p className="text-[#003366] text-2xl font-black italic tracking-tighter">
                      148.920+
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[9px] font-black bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full border border-emerald-100">
                    {t("interop_audited")}
                  </span>
                </div>
              </div>

              <div className="bg-white p-8 border border-slate-200 rounded-sm shadow-sm flex items-center gap-6">
                <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-sm flex items-center justify-center text-[#C5A059]">
                  <Scale className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest mb-1">
                    {t("interop_stat_compliance")}
                  </p>
                  <p className="text-[#003366] text-lg font-black uppercase italic leading-none">
                    {t("interop_stat_stable")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecossistema Digital: SIROF e SGO */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[10px] font-black uppercase text-[#C5A059] tracking-[0.4em] mb-4 block">
              {t("interop_systems_title")}
            </span>
            <h2 className="text-[#003366] text-4xl md:text-5xl font-black uppercase italic tracking-tighter leading-none">
              Gestão Centralizada de Informação
            </h2>
            <p className="text-slate-500 text-lg font-medium max-w-3xl mx-auto mt-6 italic">
              {t("interop_systems_desc")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* SIROF Card */}
            <div className="bg-slate-50 p-12 rounded-sm border border-slate-100 hover:shadow-2xl hover:border-[#003366] transition-all group">
              <div className="flex justify-between items-start mb-10">
                <div className="w-16 h-16 bg-white border border-slate-100 rounded-sm flex items-center justify-center text-[#003366] shadow-sm group-hover:bg-[#003366] group-hover:text-white transition-all">
                  <Activity className="w-8 h-8" />
                </div>
                <span className="text-[9px] font-black bg-white px-4 py-1 rounded-full border border-slate-200 text-slate-400">
                  Pilar I
                </span>
              </div>
              <h3 className="text-2xl font-black text-[#003366] uppercase italic mb-4 tracking-tighter leading-none">
                SIROF
              </h3>
              <p className="text-[#C5A059] text-[10px] font-black uppercase tracking-widest mb-6">
                {t("sirof_full_name")}
              </p>
              <p className="text-slate-500 text-sm font-medium leading-relaxed italic mb-10">
                {t("sirof_desc")}
              </p>
              <div className="flex items-center gap-3 text-[9px] font-black uppercase text-slate-400 border-t border-slate-200 pt-8 group-hover:text-[#003366] transition-colors">
                <Lock className="w-3.5 h-3.5" /> Canal Seguro e Auditado
              </div>
            </div>

            {/* SGO Card */}
            <div className="bg-slate-50 p-12 rounded-sm border border-slate-100 hover:shadow-2xl hover:border-[#003366] transition-all group">
              <div className="flex justify-between items-start mb-10">
                <div className="w-16 h-16 bg-white border border-slate-100 rounded-sm flex items-center justify-center text-[#003366] shadow-sm group-hover:bg-[#003366] group-hover:text-white transition-all">
                  <Monitor className="w-8 h-8" />
                </div>
                <span className="text-[9px] font-black bg-white px-4 py-1 rounded-full border border-slate-200 text-slate-400">
                  Pilar II
                </span>
              </div>
              <h3 className="text-2xl font-black text-[#003366] uppercase italic mb-4 tracking-tighter leading-none">
                SGO
              </h3>
              <p className="text-[#C5A059] text-[10px] font-black uppercase tracking-widest mb-6">
                {t("sgo_full_name")}
              </p>
              <p className="text-slate-500 text-sm font-medium leading-relaxed italic mb-10">
                {t("sgo_desc")}
              </p>
              <div className="flex items-center gap-3 text-[9px] font-black uppercase text-slate-400 border-t border-slate-200 pt-8 group-hover:text-[#003366] transition-colors">
                <Zap className="w-3.5 h-3.5" /> Optimização de Recursos em Tempo
                Real
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Sistema de analise e gestão de riscos Card */}
            <div className="bg-slate-50 p-12 rounded-sm border border-slate-100 hover:shadow-2xl hover:border-[#003366] transition-all group">
              <div className="flex justify-between items-start mb-10">
                <div className="w-16 h-16 bg-white border border-slate-100 rounded-sm flex items-center justify-center text-[#003366] shadow-sm group-hover:bg-[#003366] group-hover:text-white transition-all">
                  <Activity className="w-8 h-8" />
                </div>
                <span className="text-[9px] font-black bg-white px-4 py-1 rounded-full border border-slate-200 text-slate-400">
                  Pilar I
                </span>
              </div>
              <h3 className="text-2xl font-black text-[#003366] uppercase italic mb-4 tracking-tighter leading-none">
                SAGRO
              </h3>
              <p className="text-[#C5A059] text-[10px] font-black uppercase tracking-widest mb-6">
                {t("SAGRO_full_name")}
              </p>
              <p className="text-slate-500 text-sm font-medium leading-relaxed italic mb-10">
                {t("SAGR_desc")}
              </p>
              <div className="flex items-center gap-3 text-[9px] font-black uppercase text-slate-400 border-t border-slate-200 pt-8 group-hover:text-[#003366] transition-colors">
                <Lock className="w-3.5 h-3.5" /> Canal Seguro e Auditado
              </div>
            </div>

            {/* SGO Card */}
            <div className="bg-slate-50 p-12 rounded-sm border border-slate-100 hover:shadow-2xl hover:border-[#003366] transition-all group">
              <div className="flex justify-between items-start mb-10">
                <div className="w-16 h-16 bg-white border border-slate-100 rounded-sm flex items-center justify-center text-[#003366] shadow-sm group-hover:bg-[#003366] group-hover:text-white transition-all">
                  <Monitor className="w-8 h-8" />
                </div>
                <span className="text-[9px] font-black bg-white px-4 py-1 rounded-full border border-slate-200 text-slate-400">
                  Pilar II
                </span>
              </div>
              <h3 className="text-2xl font-black text-[#003366] uppercase italic mb-4 tracking-tighter leading-none">
                SGO
              </h3>
              <p className="text-[#C5A059] text-[10px] font-black uppercase tracking-widest mb-6">
                {t("sgo_full_name")}
              </p>
              <p className="text-slate-500 text-sm font-medium leading-relaxed italic mb-10">
                {t("sgo_desc")}
              </p>
              <div className="flex items-center gap-3 text-[9px] font-black uppercase text-slate-400 border-t border-slate-200 pt-8 group-hover:text-[#003366] transition-colors">
                <Zap className="w-3.5 h-3.5" /> Optimização de Recursos em Tempo
                Real
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Módulos Operacionais */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="w-12 h-1 bg-[#C5A059] mx-auto mb-6"></div>
            <h2 className="text-[#003366] text-4xl font-black uppercase italic tracking-tighter leading-none">
              {t("interop_module_title")}
            </h2>
            <p className="text-slate-500 text-lg font-medium max-w-3xl mx-auto mt-6 italic leading-relaxed">
              {t("interop_module_desc")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {operationalModules.map((mod, i) => (
              <div
                key={i}
                className="bg-slate-50 border border-slate-100 p-10 rounded-sm hover:border-[#003366] hover:shadow-2xl transition-all group flex flex-col h-full"
              >
                <div className="w-14 h-14 bg-white border border-slate-100 rounded-sm flex items-center justify-center text-[#003366] mb-8 group-hover:bg-[#003366] group-hover:text-white transition-all shadow-sm">
                  <mod.icon className="w-7 h-7" />
                </div>
                <h4 className="text-[#003366] text-sm font-black uppercase tracking-widest mb-4 leading-tight group-hover:text-[#C5A059] transition-colors">
                  {mod.title}
                </h4>
                <p className="text-slate-500 text-xs font-medium leading-relaxed italic flex-grow">
                  {mod.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Protocolo de Partilha de Dados */}
      <section className="py-24 bg-slate-50 px-6 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white border border-slate-200 shadow-2xl rounded-sm p-10 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/5 rounded-bl-full pointer-events-none"></div>

            <div className="grid lg:grid-cols-12 gap-16 items-start relative z-10">
              <div className="lg:col-span-8 space-y-8">
                <div className="inline-flex items-center gap-3 text-[#003366]">
                  <Handshake className="w-8 h-8 text-[#C5A059]" />
                  <span className="text-[11px] font-black uppercase tracking-[0.4em]">
                    {t("interop_protocol_title")}
                  </span>
                </div>
                <h2 className="text-[#003366] text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-tight">
                  Sinergia{" "}
                  <span className="text-[#C5A059]">Interinstitucional</span>
                </h2>
                <div className="bg-slate-50 p-8 border-l-4 border-[#003366] mb-10">
                  <p className="text-[#003366] text-xl font-medium leading-relaxed italic">
                    "{t("interop_protocol_desc")}"
                  </p>
                </div>
                <p className="text-slate-500 text-lg font-medium leading-relaxed">
                  {t("interop_protocol_impact")}
                </p>
                <div className="pt-8 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-6">
                  {["AGT", "SME", "ANTT", "DTSER"].map((org) => (
                    <div
                      key={org}
                      className="bg-slate-50 border border-slate-200 p-4 text-center rounded-sm"
                    >
                      <span className="text-[10px] font-black text-[#003366] uppercase tracking-widest">
                        {org}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-4 bg-[#003366] p-10 rounded-sm text-white shadow-xl">
                <h3 className="text-[#C5A059] text-[10px] font-black uppercase tracking-widest mb-6">
                  {t("interop_objectives_title")}
                </h3>
                <ul className="space-y-6">
                  {[
                    "Eficácia nas acções de controlo",
                    "Inteligência conjunta",
                    "Gestão de risco automatizada",
                    "Combate a ilícitos transfronteiriços",
                  ].map((obj, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <LucideCheck className="w-5 h-5 text-[#C5A059] shrink-0" />
                      <span className="text-xs font-bold uppercase tracking-tight leading-tight">
                        {obj}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pilares da Estratégia Digital */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[10px] font-black uppercase text-[#C5A059] tracking-[0.4em] mb-4 block">
              Arquitetura SIROF
            </span>
            <h2 className="text-[#003366] text-4xl md:text-5xl font-black uppercase italic tracking-tighter leading-none">
              Pilares do Ecossistema Digital
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 p-10 rounded-sm hover:shadow-2xl hover:border-[#003366] transition-all group flex flex-col h-full"
              >
                <div
                  className={`w-14 h-14 ${pillar.bg} ${pillar.color} rounded flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}
                >
                  <pillar.icon className="w-7 h-7" />
                </div>
                <h4 className="text-[#003366] text-sm font-black uppercase tracking-widest mb-4 leading-tight">
                  {pillar.title}
                </h4>
                <p className="text-slate-500 text-xs font-medium leading-relaxed italic flex-grow">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper Icon - Navigation
const NavigationIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="3 11 22 2 13 21 11 13 3 11" />
  </svg>
);

export default Interoperability;
