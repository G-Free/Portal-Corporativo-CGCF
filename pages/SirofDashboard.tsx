
import React, { useState } from 'react';
import { 
  BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, ResponsiveContainer, AreaChart, Area
} from 'recharts';
import { 
  LogOut, 
  User, 
  Filter, 
  Calendar, 
  Activity, 
  Users, 
  ArrowLeftRight,
  TrendingUp,
  FileText,
  Truck,
  Box,
  Coins,
  ShieldCheck,
  Biohazard,
  Scale,
  Zap,
  Lock,
  Globe
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Link } from 'react-router-dom';

// Cores Institucionais
const COLORS_EFFICIENCY = ['#003366', '#C5A059', '#36A2EB'];
const COLORS_STATUS = ['#10B981', '#F59E0B', '#EF4444'];

const SirofDashboard: React.FC = () => {
  const { t } = useLanguage();
  
  // Dados Mockados Focados em Performance para Investidores
  const tradeFlowData = [
    { name: 'Jan', entrada: 4200, saida: 2400 },
    { name: 'Fev', entrada: 4500, saida: 2800 },
    { name: 'Mar', entrada: 5100, saida: 3200 },
    { name: 'Abr', entrada: 4800, saida: 3100 },
    { name: 'Mai', entrada: 5600, saida: 3800 },
  ];

  const complianceData = [
    { name: 'Conforme', value: 92 },
    { name: 'Auditado', value: 5 },
    { name: 'Não-Conforme', value: 3 },
  ];

  const efficiencyByAgency = [
    { name: 'SME', value: 94 },
    { name: 'AGT', value: 88 },
    { name: 'MINSA', value: 91 },
    { name: 'SIC', value: 96 },
  ];

  const transportTypeData = [
    { name: 'Ferroviário', value: 45 },
    { name: 'Rodoviário', value: 35 },
    { name: 'Marítimo', value: 20 },
  ];

  const currencyCompliance = [
    { name: 'Declarado', value: 85 },
    { name: 'Isento', value: 12 },
    { name: 'Regularizado', value: 3 },
  ];

  const [activePeriod, setActivePeriod] = useState('Últimos 30 dias');

  const StatCard = ({ title, value, unit, icon: Icon, trend, colorClass }: any) => (
    <div className="bg-white border border-slate-200 rounded-sm p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-sm ${colorClass} bg-opacity-10`}>
          <Icon className={`w-6 h-6 ${colorClass.replace('bg-', 'text-')}`} />
        </div>
        {trend && (
          <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${trend > 0 ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
            {trend > 0 ? '+' : ''}{trend}%
          </span>
        )}
      </div>
      <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">{title}</p>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-black text-[#003366] italic tracking-tighter">{value}</span>
        {unit && <span className="text-[10px] font-bold text-slate-400 uppercase">{unit}</span>}
      </div>
    </div>
  );

  return (
    <div className="bg-[#F8FAFC] min-h-screen font-sans pb-20">

      {/* Título e Nota de Investidor */}
      <div className="max-w-7xl mx-auto px-8 pt-10">
         <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-black text-[#003366] uppercase italic tracking-tighter mb-4">
              {t('sirof_public_title')}
            </h1>
            <p className="text-slate-500 text-lg font-medium italic max-w-3xl">
              {t('sirof_investor_note')}
            </p>
         </div>

         {/* Resumo Executivo em Stats */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <StatCard 
              title={t('sirof_stability_index')} 
              value="98.2" 
              unit="Score" 
              icon={TrendingUp} 
              trend={1.4} 
              colorClass="bg-blue-600" 
            />
            <StatCard 
              title={t('sirof_efficiency_rate')} 
              value="8.4" 
              unit="Min/Despacho" 
              icon={Zap} 
              trend={-15} 
              colorClass="bg-amber-500" 
            />
            <StatCard 
              title={t('sirof_audited_ops')} 
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

         {/* Grid de Visualizações Estratégicas */}
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Fluxo Comercial - Gráfico de Área (Premium) */}
            <div className="lg:col-span-8 bg-white border border-slate-200 rounded-sm p-8 shadow-sm">
               <div className="flex justify-between items-center mb-10">
                  <h3 className="text-[#003366] text-xs font-black uppercase tracking-widest flex items-center gap-3">
                    <ArrowLeftRight className="w-4 h-4 text-[#C5A059]" /> {t('sirof_trade_flow')}
                  </h3>
                  <div className="flex gap-4">
                     <span className="flex items-center gap-2 text-[9px] font-black text-[#003366]"><div className="w-2 h-2 bg-[#003366] rounded-full"></div> Entrada</span>
                     <span className="flex items-center gap-2 text-[9px] font-black text-[#C5A059]"><div className="w-2 h-2 bg-[#C5A059] rounded-full"></div> Saída</span>
                  </div>
               </div>
               <div className="h-[350px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={tradeFlowData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorEntrada" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#003366" stopOpacity={0.1}/>
                          <stop offset="95%" stopColor="#003366" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="name" tick={{ fontSize: 10, fontWeight: 'bold' }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fontSize: 10 }} axisLine={false} />
                      <Tooltip 
                        contentStyle={{ borderRadius: '0', border: '1px solid #e2e8f0', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                      />
                      <Area type="monotone" dataKey="entrada" stroke="#003366" strokeWidth={3} fillOpacity={1} fill="url(#colorEntrada)" />
                      <Area type="monotone" dataKey="saida" stroke="#C5A059" strokeWidth={3} fillOpacity={0} />
                    </AreaChart>
                  </ResponsiveContainer>
               </div>
            </div>

            {/* Níveis de Conformidade - Gráfico de Donut */}
            <div className="lg:col-span-4 bg-white border border-slate-200 rounded-sm p-8 shadow-sm flex flex-col">
               <h3 className="text-[#003366] text-xs font-black uppercase tracking-widest mb-10 flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059]" /> {t('sirof_compliance_categories')}
               </h3>
               <div className="h-[250px] w-full flex-grow">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={complianceData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {complianceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS_STATUS[index % COLORS_STATUS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
               </div>
               <div className="space-y-4 mt-8">
                  {complianceData.map((item, i) => (
                    <div key={i} className="flex justify-between items-center text-[10px] font-bold uppercase">
                       <span className="flex items-center gap-2 text-slate-500">
                          <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-[#10B981]' : i === 1 ? 'bg-[#F59E0B]' : 'bg-[#EF4444]'}`}></div>
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
                  <Users className="w-4 h-4 text-[#C5A059]" /> {t('sirof_processes')}
               </h3>
               <div className="h-[250px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={efficiencyByAgency} layout="vertical" margin={{ left: -10 }}>
                      <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                      <XAxis type="number" hide />
                      <YAxis dataKey="name" type="category" tick={{ fontSize: 10, fontWeight: 'bold' }} axisLine={false} />
                      <Tooltip cursor={{ fill: '#f8fafc' }} />
                      <Bar dataKey="value" fill="#003366" radius={[0, 4, 4, 0]} barSize={20} />
                    </BarChart>
                  </ResponsiveContainer>
               </div>
            </div>

            {/* Integridade dos Ativos */}
            <div className="lg:col-span-8 bg-white border border-slate-200 rounded-sm p-8 shadow-sm">
               <div className="flex justify-between items-center mb-10">
                  <h3 className="text-[#003366] text-xs font-black uppercase tracking-widest flex items-center gap-3">
                    <Truck className="w-4 h-4 text-[#C5A059]" /> {t('sirof_asset_integrity')}
                  </h3>
                  <div className="text-[10px] font-black uppercase text-emerald-600 flex items-center gap-2">
                     <LucideCheck className="w-3.5 h-3.5" /> 100% Auditável
                  </div>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                     { label: 'Ferroviário (Lobito)', value: '45%', icon: Navigation, desc: 'Transporte de minérios e carga pesada.' },
                     { label: 'Rodoviário', value: '35%', icon: Truck, desc: 'Distribuição regional de bens de consumo.' },
                     { label: 'Marítimo', value: '20%', icon: Globe, desc: 'Exportação oceânica e cabotagem.' },
                  ].map((item, i) => (
                    <div key={i} className="bg-slate-50 p-6 border border-slate-100 rounded-sm">
                       <item.icon className="w-6 h-6 text-[#003366] mb-4" />
                       <p className="text-[10px] font-black text-[#003366] uppercase mb-1">{item.label}</p>
                       <p className="text-2xl font-black text-[#C5A059] italic mb-3">{item.value}</p>
                       <p className="text-[9px] font-medium text-slate-400 leading-relaxed italic">{item.desc}</p>
                    </div>
                  ))}
               </div>
            </div>

         </div>

         {/* Rodapé do Dashboard */}
         <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-slate-200 pt-8">
            <div className="flex items-center gap-4">
               <img src="https://logodownload.org/wp-content/uploads/2021/04/insignia-da-republica-de-angola-logo.png" alt="Angola" className="h-10 opacity-50 grayscale" />
               <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                 {t('sirof_data_source')}
               </p>
            </div>
            <div className="flex gap-4">
               <Link to="/contacto" className="bg-[#003366] text-white px-6 py-3 rounded-sm text-[9px] font-black uppercase tracking-widest shadow-xl hover:bg-[#C5A059] transition-all">
                  Solicitar Relatório Detalhado
               </Link>
               <Link to="/sirof" className="bg-white border border-slate-200 text-slate-500 px-6 py-3 rounded-sm text-[9px] font-black uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5" /> Actualizar Dados
               </Link>
            </div>
         </div>
      </div>
    </div>
  );
};

// Helper Icon
const LucideCheck = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const Navigation = ({ className }: { className?: string }) => (
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

export default SirofDashboard;
