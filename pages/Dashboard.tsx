
import React, { useState, useMemo, useRef } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, AreaChart, Area, LineChart, Line
} from 'recharts';
import { 
  LayoutDashboard, Users, FilePlus, AlertTriangle, Settings, TrendingUp, 
  MapPin, Newspaper, Book, Trash2, Shield, Activity, RefreshCw, CheckCircle, 
  Clock, Edit3, Eye, FileText, ChevronRight, Download, Search, Globe, Plus, X, LogOut, Image as ImageIcon, Building2, ExternalLink, Info, FileUp, 
  Navigation, Truck, Anchor, Zap, ShieldCheck, BarChart3, Network
} from 'lucide-react';
import { BORDER_POSTS, AGENCIES, MOCK_NEWS, MOCK_LEGISLATION } from '../constants';
import { BorderPost, NewsItem, Legislation, Agency } from '../types';
import { useLanguage } from '../LanguageContext';
import { Link } from 'react-router-dom';

type AdminTab = 'overview' | 'corridors' | 'posts' | 'news' | 'legislation' | 'agencies' | 'users';

const Dashboard: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<AdminTab>('overview');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  
  // Estados de Dados
  const [posts, setPosts] = useState<BorderPost[]>(BORDER_POSTS);
  const [news, setNews] = useState<NewsItem[]>(MOCK_NEWS);
  const [legislation, setLegislation] = useState<Legislation[]>(MOCK_LEGISLATION);
  const [agencies, setAgencies] = useState<Agency[]>(AGENCIES);
  const [isSyncing, setIsSyncing] = useState(false);

  // Dados Estratégicos de Corredores (User Input Data)
  const corridorData = useMemo(() => [
    { name: 'Corredor do Lobito', status: 'Operacional', efficiency: 88, flow: 1200, type: 'Ferroviário/Portuário', color: '#C5A059' },
    { name: 'Corredor do Namibe', status: 'Em Modernização', efficiency: 64, flow: 450, type: 'Agro-Logístico', color: '#3b82f6' },
    { name: 'Corredor Norte (Zaire)', status: 'Alerta de Fluxo', efficiency: 42, flow: 980, type: 'Comércio Regional', color: '#ef4444' },
  ], []);

  const stats = useMemo(() => ({
    total: posts.length,
    open: posts.filter(p => p.status === 'OPEN').length,
    agencies: agencies.length,
    newsCount: news.length,
    legisCount: legislation.length,
    efficiency: 96,
    tradeFacilitation: 74 // % de digitalização aduaneira
  }), [posts, news, legislation, agencies]);

  // Handlers
  const handleOpenDetail = (item: any) => {
    setSelectedItem(item);
    setIsDetailOpen(true);
  };

  const handleSync = () => {
    setIsSyncing(true);
    setTimeout(() => setIsSyncing(false), 1200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#020617] flex flex-col lg:flex-row animate-in fade-in duration-500 overflow-hidden text-slate-200 font-['Public_Sans']">
      
      {/* SIDEBAR TÉCNICA ESTRATÉGICA */}
      <aside className="w-full lg:w-72 bg-slate-950 text-white p-6 lg:p-10 flex flex-col border-r border-white/10 max-h-screen shrink-0">
        <div className="flex items-center gap-4 mb-12">
          <Shield className="w-10 h-10 text-[#C5A059]" />
          <div>
            <span className="block font-black text-base tracking-tighter uppercase italic leading-none">CGCF Consola</span>
            <span className="block text-[7px] text-slate-500 font-black uppercase tracking-[0.3em] mt-1">Soberania Digital</span>
          </div>
        </div>
        
        <nav className="flex-grow space-y-1.5 overflow-y-auto pr-2 scrollbar-hide">
          {[
            { id: 'overview', label: 'Monitor Estratégico', icon: Activity },
            { id: 'corridors', label: 'Corredores & Logística', icon: Network },
            { id: 'posts', label: 'Postos Fronteiriços', icon: MapPin },
            { id: 'news', label: 'Conteúdo e Mídia', icon: Newspaper },
            { id: 'legislation', label: 'Diplomas Legais', icon: FileText },
            { id: 'agencies', label: 'Agências Integradas', icon: Building2 },
            { id: 'users', label: 'Acessos e Segurança', icon: Users },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as AdminTab)}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-sm text-[9px] font-black transition-all uppercase tracking-widest border border-transparent ${
                activeTab === tab.id ? 'bg-[#C5A059] text-white shadow-xl translate-x-1 border-[#C5A059]/20' : 'text-slate-500 hover:bg-white/5 hover:text-white'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
          
          <div className="pt-8 mt-8 border-t border-white/5">
            <Link to="/" className="w-full flex items-center gap-4 px-6 py-4 rounded-sm text-[9px] font-black text-red-500/80 hover:bg-red-500/10 transition-all uppercase tracking-widest border border-red-500/10">
              <LogOut className="w-4 h-4" /> Terminar Sessão
            </Link>
          </div>
        </nav>
      </aside>

      {/* ÁREA DE TRABALHO */}
      <main className="flex-grow p-6 lg:p-16 overflow-y-auto max-h-screen scrollbar-hide relative">
        
        {/* Banner de Status Governamental */}
        <div className="mb-12 flex flex-col md:flex-row items-center justify-between p-6 bg-[#C5A059]/10 border border-[#C5A059]/30 rounded-sm">
           <div className="flex items-center gap-4 mb-4 md:mb-0">
              <ShieldCheck className="text-[#C5A059] w-6 h-6 animate-pulse" />
              <div>
                 <p className="text-[10px] font-black uppercase text-[#C5A059] tracking-widest">Estado de Prontidão Nacional</p>
                 <p className="text-white text-xs font-bold">Corredores Logísticos em Alinhamento com o Plano Nacional de Facilitação do Comércio.</p>
              </div>
           </div>
           <div className="flex gap-6">
              <div className="text-center">
                 <p className="text-[8px] font-black text-slate-500 uppercase">Eficiência Média</p>
                 <p className="text-white font-black">74.2%</p>
              </div>
              <div className="text-center">
                 <p className="text-[8px] font-black text-slate-500 uppercase">Tempo de Despacho</p>
                 <p className="text-emerald-500 font-black">-18%</p>
              </div>
           </div>
        </div>

        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
           <div>
              <h1 className="text-white text-4xl font-black tracking-tighter uppercase italic leading-none">
                {activeTab === 'overview' ? 'Monitor de Soberania' : 
                 activeTab === 'corridors' ? 'Corredores Logísticos' : 
                 activeTab === 'posts' ? 'Controlo de Fronteiras' : 
                 activeTab === 'news' ? 'Sala de Comunicação' :
                 activeTab === 'agencies' ? 'Unidades Integradas' :
                 activeTab === 'legislation' ? 'Repositório Legal' : 'Configurações'}
              </h1>
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mt-4 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                Sistema Central Activo • Dados em Tempo Real (RTD)
              </p>
           </div>
           
           <div className="flex gap-4 w-full md:w-auto">
             <button onClick={handleSync} className="flex-1 md:flex-none flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white px-8 py-5 rounded-sm text-[9px] font-black uppercase tracking-widest transition-all border border-white/5">
                <RefreshCw className={`w-4 h-4 ${isSyncing ? 'animate-spin' : ''}`} /> Sincronizar
             </button>
             {activeTab !== 'overview' && activeTab !== 'users' && activeTab !== 'corridors' && (
               <button onClick={() => setIsModalOpen(true)} className="flex-1 md:flex-none flex items-center justify-center gap-3 bg-[#C5A059] hover:bg-[#b08b49] text-white px-8 py-5 rounded-sm text-[9px] font-black uppercase tracking-widest transition-all shadow-2xl">
                  <Plus className="w-4 h-4" /> Adicionar Registro
               </button>
             )}
           </div>
        </header>

        {/* VIEW: OVERVIEW (MODIFICADA PARA CHAMAR ATENÇÃO DO SUPERIOR) */}
        {activeTab === 'overview' && (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: 'Corredores Activos', value: '03', icon: Network, color: 'text-emerald-500', sub: 'Lobito, Namibe, Norte' },
                  { label: 'Fluxo Multimodal', value: '2.4M', icon: Truck, color: 'text-[#C5A059]', sub: 'Toneladas / Ano' },
                  { label: 'Agências em Rede', value: stats.agencies, icon: Building2, color: 'text-blue-500', sub: 'Integração Total' },
                  { label: 'Despacho Digital', value: '74%', icon: Zap, color: 'text-purple-500', sub: 'Facilitação do Comércio' },
                ].map((stat, i) => (
                  <div key={i} className="bg-slate-900 border border-white/5 p-8 rounded shadow-2xl group hover:border-[#C5A059]/30 transition-all flex flex-col">
                     <div className="flex justify-between items-start mb-6">
                        <stat.icon className={`w-10 h-10 ${stat.color} group-hover:scale-110 transition-transform`} />
                        <div className="bg-white/5 px-2 py-1 rounded text-[7px] font-black text-slate-500 uppercase tracking-widest">Auditado</div>
                     </div>
                     <h3 className="text-white text-4xl font-black mb-1">{stat.value}</h3>
                     <p className="text-slate-400 text-[9px] font-black uppercase tracking-widest mb-4 italic">{stat.label}</p>
                     <p className="mt-auto text-slate-600 text-[8px] font-bold uppercase tracking-tight">{stat.sub}</p>
                  </div>
                ))}
             </div>
             
             <div className="grid lg:grid-cols-12 gap-10">
                <div className="lg:col-span-8 bg-slate-900 border border-white/5 p-10 rounded shadow-2xl">
                   <div className="flex justify-between items-center mb-10">
                      <h3 className="text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-3">
                        <BarChart3 className="w-5 h-5 text-[#C5A059]" /> Performance de Despacho Transfronteiriço
                      </h3>
                      <span className="text-[8px] font-black text-emerald-500 bg-emerald-500/5 px-2 py-1 rounded">ALVO: 85%</span>
                   </div>
                   <div className="h-72">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={[
                          { t: 'JAN', f: 40 }, { t: 'FEV', f: 45 }, { t: 'MAR', f: 58 }, { t: 'ABR', f: 65 }, { t: 'MAI', f: 74 }
                        ]}>
                           <defs>
                              <linearGradient id="colorFlow" x1="0" y1="0" x2="0" y2="1">
                                 <stop offset="5%" stopColor="#C5A059" stopOpacity={0.3}/>
                                 <stop offset="95%" stopColor="#C5A059" stopOpacity={0}/>
                              </linearGradient>
                           </defs>
                           <Area type="monotone" dataKey="f" stroke="#C5A059" fillOpacity={1} fill="url(#colorFlow)" strokeWidth={4} />
                           <XAxis dataKey="t" axisLine={false} tickLine={false} tick={{fill: '#475569', fontSize: 10}} />
                           <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '4px' }} />
                        </AreaChart>
                      </ResponsiveContainer>
                   </div>
                </div>
                <div className="lg:col-span-4 bg-slate-900 border border-white/5 p-10 rounded shadow-2xl flex flex-col">
                   <h3 className="text-white text-[10px] font-black uppercase tracking-widest mb-8">Facilitação Regional</h3>
                   <div className="flex-grow flex flex-col justify-center space-y-6">
                      {corridorData.map((c, i) => (
                         <div key={i}>
                            <div className="flex justify-between text-[9px] font-black uppercase mb-2">
                               <span className="text-slate-400">{c.name}</span>
                               <span className="text-white">{c.efficiency}%</span>
                            </div>
                            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                               <div className="h-full transition-all duration-1000" style={{ width: `${c.efficiency}%`, backgroundColor: c.color }}></div>
                            </div>
                         </div>
                      ))}
                   </div>
                   <button className="mt-8 w-full py-4 bg-white/5 text-white text-[9px] font-black uppercase tracking-[0.2em] border border-white/10 hover:bg-[#C5A059] transition-all">Relatório Detalhado</button>
                </div>
             </div>
          </div>
        )}

        {/* VIEW: CORRIDORS (DETALHE DOS CORREDORES) */}
        {activeTab === 'corridors' && (
           <div className="space-y-10 animate-in slide-in-from-right-8 duration-700">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {corridorData.map((c, i) => (
                    <div key={i} className="bg-slate-900 border border-white/5 p-10 rounded-sm shadow-2xl hover:border-[#C5A059]/40 transition-all flex flex-col group">
                       <div className="flex justify-between items-start mb-8">
                          <div className={`p-4 rounded-sm bg-white/5 text-white group-hover:bg-[#C5A059] transition-all`}>
                             {c.name.includes('Lobito') ? <Anchor className="w-6 h-6" /> : c.name.includes('Namibe') ? <Truck className="w-6 h-6" /> : <Navigation className="w-6 h-6" />}
                          </div>
                          <span className={`text-[8px] font-black uppercase px-2 py-1 rounded-sm ${c.status === 'Operacional' ? 'text-emerald-500 bg-emerald-500/10' : 'text-amber-500 bg-amber-500/10'}`}>
                             {c.status}
                          </span>
                       </div>
                       <h3 className="text-white text-2xl font-black uppercase italic mb-2 leading-none">{c.name}</h3>
                       <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-8">{c.type}</p>
                       
                       <div className="space-y-4 mb-10">
                          <div className="flex justify-between text-[10px] font-bold">
                             <span className="text-slate-500 uppercase">Capacidade</span>
                             <span className="text-white">94%</span>
                          </div>
                          <div className="flex justify-between text-[10px] font-bold">
                             <span className="text-slate-500 uppercase">Eficiência</span>
                             <span className="text-white">{c.efficiency}%</span>
                          </div>
                          <div className="flex justify-between text-[10px] font-bold">
                             <span className="text-slate-500 uppercase">Fluxo Mensal</span>
                             <span className="text-white">{c.flow} TEUs</span>
                          </div>
                       </div>
                       
                       <button className="mt-auto w-full py-4 border border-white/10 text-[9px] font-black uppercase tracking-widest hover:bg-white hover:text-slate-950 transition-all">Ver Infraestrutura</button>
                    </div>
                 ))}
              </div>

              {/* Seção Informativa de Facilitação do Comércio */}
              <div className="bg-slate-900 border border-white/5 p-12 rounded-sm">
                 <h2 className="text-white text-xl font-black uppercase italic mb-8 border-l-4 border-[#C5A059] pl-6">Facilitação do Comércio: Eixos Prioritários</h2>
                 <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                       {[
                          { title: 'Despacho Aduaneiro Eficiente', desc: 'Modernização das alfândegas e uso de sistemas eletrônicos para reduzir tempo de liberação.' },
                          { title: 'Documentação Padronizada', desc: 'Certificados e licenças padronizados para evitar confusão entre órgãos e agilizar o trânsito.' },
                          { title: 'Logística Multimodal', desc: 'Integração de rodovias, ferrovias e portos para redução drástica de custos operacionais.' }
                       ].map((item, i) => (
                          <div key={i} className="flex gap-4">
                             <div className="bg-[#C5A059] text-white w-8 h-8 rounded-full flex items-center justify-center font-black text-xs shrink-0">{i+1}</div>
                             <div>
                                <h4 className="text-white text-sm font-black uppercase mb-1">{item.title}</h4>
                                <p className="text-slate-500 text-xs font-medium leading-relaxed">{item.desc}</p>
                             </div>
                          </div>
                       ))}
                    </div>
                    <div className="bg-slate-950 p-8 rounded-sm border border-white/5 flex flex-col justify-center text-center">
                       <ShieldCheck className="w-12 h-12 text-[#C5A059] mx-auto mb-6" />
                       <h4 className="text-white text-lg font-black uppercase italic mb-2 tracking-tighter">Corredores Seguros</h4>
                       <p className="text-slate-500 text-xs font-medium leading-relaxed mb-6 italic">Policiamento e monitoramento constante para redução de roubos e perdas de carga estratégica.</p>
                       <div className="flex justify-center gap-4">
                          <span className="text-[10px] font-black text-emerald-500 uppercase">Auditado: SADC-V2</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        )}

        {/* REUTILIZAÇÃO DOS OUTROS MÓDULOS (POSTS, NEWS, ETC.) */}
        {activeTab === 'posts' && (
          <div className="bg-slate-900 border border-white/5 rounded-sm overflow-hidden shadow-2xl animate-in slide-in-from-right-8 duration-700">
             <table className="w-full text-left">
                <thead className="bg-slate-950/50">
                   <tr>
                      <th className="p-8 text-[10px] font-black uppercase text-slate-500 tracking-widest">Posto / Localização</th>
                      <th className="p-8 text-[10px] font-black uppercase text-slate-500 tracking-widest hidden md:table-cell">Região Logística</th>
                      <th className="p-8 text-[10px] font-black uppercase text-slate-500 tracking-widest text-right">Status Operacional</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                   {posts.map((post, idx) => (
                      <tr key={idx} className="hover:bg-white/5 transition-colors group">
                         <td className="p-8">
                            <div className="flex items-center gap-5">
                               <MapPin className="w-6 h-6 text-[#C5A059]" />
                               <div>
                                  <p className="text-white text-sm font-black uppercase italic leading-tight">{post.name}</p>
                                  <p className="text-slate-500 text-[8px] font-black uppercase mt-1 tracking-widest">{post.type}</p>
                               </div>
                            </div>
                         </td>
                         <td className="p-8 hidden md:table-cell">
                            <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{post.province}</span>
                         </td>
                         <td className="p-8 text-right">
                            <div className="flex justify-end items-center gap-4">
                               <span className={`text-[8px] font-black uppercase px-3 py-1 rounded-sm border ${post.status === 'OPEN' ? 'text-emerald-500 border-emerald-500/20' : 'text-amber-500 border-amber-500/20'}`}>
                                  {post.status === 'OPEN' ? 'Activo' : 'Restrito'}
                               </span>
                               <button onClick={() => handleOpenDetail(post)} className="p-2 text-slate-500 hover:text-white transition-all"><Eye className="w-5 h-5" /></button>
                            </div>
                         </td>
                      </tr>
                   ))}
                </tbody>
             </table>
          </div>
        )}

        {/* MÓDULO: NEWS */}
        {activeTab === 'news' && (
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 animate-in slide-in-from-right-8 duration-700">
             {news.map(item => (
               <div key={item.id} className="bg-slate-900 border border-white/5 rounded-sm overflow-hidden group hover:border-[#C5A059]/40 transition-all shadow-2xl flex flex-col">
                  <div className="h-48 bg-slate-800 relative">
                     <img src={item.image} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-all" />
                     <div className="absolute top-6 left-6 bg-[#C5A059] text-white text-[9px] font-black uppercase px-3 py-1.5 shadow-2xl">{item.category}</div>
                  </div>
                  <div className="p-8 flex-grow flex flex-col">
                     <h4 className="text-white text-lg font-black uppercase tracking-tight mb-4 italic leading-tight group-hover:text-[#C5A059] transition-colors">{item.title}</h4>
                     <p className="text-slate-500 text-xs font-medium line-clamp-3 mb-10 leading-relaxed">{item.excerpt}</p>
                     
                     <div className="mt-auto flex justify-between items-center border-t border-white/5 pt-6">
                        <button 
                           onClick={() => handleOpenDetail(item)}
                           className="flex items-center gap-2 text-[9px] font-black uppercase text-[#C5A059] hover:text-white transition-colors"
                        >
                           <Eye className="w-4 h-4" /> Visualizar Internamente
                        </button>
                        <div className="flex gap-1">
                           <button className="p-2 text-slate-600 hover:text-white transition-all"><Edit3 className="w-4 h-4" /></button>
                           <button className="p-2 text-red-500/50 hover:text-red-500 transition-all"><Trash2 className="w-4 h-4" /></button>
                        </div>
                     </div>
                  </div>
               </div>
             ))}
           </div>
        )}

        {/* MODAL DE DETALHES (BACKOFFICE VIEW) */}
        {isDetailOpen && selectedItem && (
           <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 md:p-10 animate-in fade-in zoom-in-95 duration-300">
              <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-md" onClick={() => setIsDetailOpen(false)}></div>
              <div className="relative bg-slate-900 border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded shadow-2xl p-8 md:p-16 scrollbar-hide">
                 <button onClick={() => setIsDetailOpen(false)} className="absolute top-8 right-8 text-slate-500 hover:text-white"><X className="w-8 h-8" /></button>
                 <div className="flex items-center gap-4 mb-10">
                    <Shield className="w-8 h-8 text-[#C5A059]" />
                    <h2 className="text-white text-3xl font-black uppercase italic tracking-tighter">Detalhes do Registro</h2>
                 </div>
                 <div className="grid md:grid-cols-2 gap-10">
                    <div>
                       <h3 className="text-[#C5A059] text-[10px] font-black uppercase tracking-widest mb-4">Informação Geral</h3>
                       <div className="p-8 bg-slate-950 rounded border border-white/5 space-y-6">
                          <div>
                             <p className="text-slate-500 text-[8px] font-black uppercase">Designação</p>
                             <p className="text-white text-xl font-black uppercase italic">{selectedItem.name || selectedItem.title}</p>
                          </div>
                          <div>
                             <p className="text-slate-500 text-[8px] font-black uppercase">Localização / Contexto</p>
                             <p className="text-white font-bold">{selectedItem.province || selectedItem.category || 'Nacional'}</p>
                          </div>
                          <div>
                             <p className="text-slate-500 text-[8px] font-black uppercase">Estado de Auditoria</p>
                             <span className="text-emerald-500 text-[10px] font-black uppercase tracking-widest">Sincronizado</span>
                          </div>
                       </div>
                    </div>
                    <div>
                       <h3 className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-4">Acções Recomendadas</h3>
                       <div className="space-y-4">
                          <button className="w-full py-5 bg-[#C5A059] text-white font-black uppercase text-[10px] tracking-widest shadow-xl">Actualizar Dados</button>
                          <button className="w-full py-5 bg-white/5 text-white font-black uppercase text-[10px] tracking-widest border border-white/10 hover:bg-white/10">Emitir Relatório PDF</button>
                          <button className="w-full py-5 bg-red-500/10 text-red-500 font-black uppercase text-[10px] tracking-widest border border-red-500/20">Remover do Índice</button>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        )}

      </main>
    </div>
  );
};

export default Dashboard;
