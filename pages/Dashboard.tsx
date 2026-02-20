
import React, { useState, useRef } from 'react';
import { 
  Shield, Activity, MapPin, Newspaper, FileText, Users, LogOut, 
  RefreshCw, Plus, Eye, X, ShieldCheck, Lock, Key, 
  Terminal, Camera, FileSearch, HardDrive, Download, Search,
  CheckCircle, AlertTriangle, Info, Server, ExternalLink, Image as ImageIcon,
  Loader2, Scan, ChevronRight, Folder, Hash, LockKeyhole, LayoutPanelLeft
} from 'lucide-react';
import { ASSETS_FOLDER } from '../assets/images';
import { AuditLog, DigitalAsset } from '../types';
import { useLanguage } from '../LanguageContext';
import { Link, useNavigate } from 'react-router-dom';

type AdminTab = 'overview' | 'assets' | 'logs';

const Dashboard: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Segurança e MFA
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authStep, setAuthStep] = useState<'login' | 'mfa'>('login');
  const [mfaCode, setMfaCode] = useState('');
  
  // Navegação e Gestão de Activos
  const [activeTab, setActiveTab] = useState<AdminTab>('overview');
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [activeAsset, setActiveAsset] = useState<DigitalAsset | null>(null);
  const [assets, setAssets] = useState<DigitalAsset[]>(ASSETS_FOLDER);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<string>('');
  
  // Auditoria e Logs
  const [logs, setLogs] = useState<AuditLog[]>([]);

  const addAuditLog = (action: AuditLog['action'], details: string, severity: AuditLog['severity'] = 'INFO') => {
    const newLog: AuditLog = {
      id: `LOG-${Math.random().toString(36).substr(2, 5).toUpperCase()}`,
      timestamp: new Date().toISOString(),
      user: 'admin.tecnico@cgcf.gov.ao',
      action,
      details,
      ip: '10.244.33.' + Math.floor(Math.random() * 255),
      severity
    };
    setLogs(prev => [newLog, ...prev]);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthStep('mfa');
  };

  const handleMfaVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (mfaCode === '123456') {
      setIsAuthenticated(true);
      addAuditLog('LOGIN', 'Acesso autorizado via MFA.', 'INFO');
    } else {
      addAuditLog('LOGIN', 'Tentativa de acesso com código 2FA inválido.', 'CRITICAL');
      alert('Código Inválido.');
    }
  };

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const isJpg = file.type === 'image/jpeg' || file.type === 'image/jpg';
    if (!isJpg) {
      addAuditLog('CREATE', `Ficheiro recusado (não é JPG): ${file.name}`, 'WARNING');
      alert("ERRO: Para conformidade com o repositório, utilize apenas ficheiros .JPG");
      return;
    }

    setIsUploading(true);
    setUploadStatus('A mover para /assets/images/...');
    addAuditLog('CREATE', `Upload iniciado: ${file.name}`, 'INFO');

    await new Promise(resolve => setTimeout(resolve, 1500));

    const reader = new FileReader();
    reader.onloadend = () => {
      const newAsset: DigitalAsset = {
        id: `IMG-${Math.random().toString(36).substr(2, 4).toUpperCase()}`,
        title: file.name.replace(/\.[^/.]+$/, ""),
        category: 'GOV',
        url: reader.result as string,
        resolution: 'Processado (JPG/RAW)',
        uploadDate: new Date().toISOString().split('T')[0],
        fileType: 'JPG'
      };

      setAssets(prev => [newAsset, ...prev]);
      setIsUploading(false);
      setUploadStatus('');
      addAuditLog('CREATE', `Ficheiro movido para a pasta de imagens: ${file.name}`, 'INFO');
    };
    reader.readAsDataURL(file);
  };

  const triggerFileInput = () => fileInputRef.current?.click();

  const viewAsset = (assetId: string) => {
    const asset = assets.find(a => a.id === assetId);
    if (asset) {
      setActiveAsset(asset);
      setIsViewerOpen(true);
      addAuditLog('EXPORT', `Acesso ao ficheiro: ${asset.title} (JPG)`, 'INFO');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#020617] flex items-center justify-center p-6 font-['Public_Sans']">
        <div className="w-full max-w-md">
          <div className="text-center mb-10">
            <Shield className="w-16 h-16 text-[#C5A059] mx-auto mb-6" />
            <h1 className="text-white text-3xl font-black uppercase italic tracking-tighter mb-2">Soberania Digital</h1>
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">Consola Administrativa CGCF</p>
          </div>
          <div className="bg-slate-900 border border-white/5 p-10 rounded shadow-2xl">
            {authStep === 'login' ? (
              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label className="block text-[10px] font-black uppercase text-slate-500 mb-3 tracking-widest">Utilizador</label>
                  <input required type="email" placeholder="E-mail @gov.ao" className="w-full bg-slate-950 border border-white/10 rounded-sm p-4 text-white text-sm outline-none focus:border-[#C5A059]" />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase text-slate-500 mb-3 tracking-widest">Palavra-passe</label>
                  <input required type="password" placeholder="••••••••" className="w-full bg-slate-950 border border-white/10 rounded-sm p-4 text-white text-sm outline-none focus:border-[#C5A059]" />
                </div>
                <button type="submit" className="w-full bg-[#C5A059] text-white py-4 font-black uppercase text-[10px] tracking-widest shadow-xl flex items-center justify-center gap-3">
                  <Lock className="w-4 h-4" /> Entrar
                </button>
              </form>
            ) : (
              <form onSubmit={handleMfaVerify} className="space-y-6">
                <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-sm flex gap-4 items-center mb-6">
                   <Key className="text-emerald-500 w-5 h-5" />
                   <p className="text-[10px] text-emerald-500 font-bold uppercase italic leading-tight">2FA Requerido. Código: 123456</p>
                </div>
                <input required type="text" maxLength={6} placeholder="000000" className="w-full bg-slate-950 border border-white/10 rounded-sm p-6 text-white text-4xl font-black text-center tracking-[0.4em] outline-none focus:border-[#C5A059]" value={mfaCode} onChange={(e) => setMfaCode(e.target.value)} />
                <button type="submit" className="w-full bg-[#C5A059] text-white py-4 font-black uppercase text-[10px] tracking-widest">Validar</button>
              </form>
            )}
          </div>
          <Link to="/" className="block text-center mt-10 text-slate-600 text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors italic">← Voltar ao Portal</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020617] flex flex-col lg:flex-row text-slate-200 font-['Public_Sans']">
      
      {/* SIDEBAR */}
      <aside className="w-full lg:w-72 bg-slate-950 p-10 flex flex-col border-r border-white/10 shrink-0">
        <div className="flex items-center gap-4 mb-16">
          <ShieldCheck className="w-10 h-10 text-[#C5A059]" />
          <div>
            <span className="block font-black text-xl tracking-tighter uppercase italic leading-none">Admin</span>
            <span className="block text-[8px] text-slate-500 font-black uppercase tracking-widest mt-1">CGCF Control</span>
          </div>
        </div>
        
        <nav className="flex-grow space-y-2">
          {[
            { id: 'overview', label: 'Monitor', icon: Activity },
            { id: 'assets', label: 'Pasta de Imagens', icon: Folder },
            { id: 'logs', label: 'Auditoria', icon: Terminal },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as AdminTab)}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-sm text-[9px] font-black transition-all uppercase tracking-widest ${
                activeTab === tab.id ? 'bg-[#C5A059] text-white shadow-xl' : 'text-slate-500 hover:bg-white/5 hover:text-white'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
          
          <div className="pt-10 mt-10 border-t border-white/5">
             <Link to="/sirof" className="w-full flex items-center gap-4 px-6 py-4 rounded-sm text-[9px] font-black transition-all uppercase tracking-widest text-slate-500 hover:bg-white/5 hover:text-[#C5A059]">
                <LayoutPanelLeft className="w-4 h-4" /> Operacional SIROF
             </Link>
          </div>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-grow p-8 lg:p-16 overflow-y-auto max-h-screen">
        
        {/* Breadcrumbs e Header */}
        <div className="mb-16">
           <div className="flex items-center gap-3 text-[10px] font-black uppercase text-slate-500 tracking-widest mb-4">
              <span>Admin</span>
              <ChevronRight className="w-3 h-3" />
              <span className={activeTab === 'assets' ? 'text-[#C5A059]' : ''}>
                {activeTab === 'overview' ? 'Geral' : activeTab === 'assets' ? 'Pasta de Imagens (Local)' : 'Logs'}
              </span>
           </div>
           <h1 className="text-white text-4xl font-black uppercase italic tracking-tighter leading-none">
             {activeTab === 'assets' ? 'Explorador de Activos JPG' : 'Consola de Gestão'}
           </h1>
        </div>

        {/* VIEW: OVERVIEW */}
        {activeTab === 'overview' && (
           <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in duration-700">
                {[
                  { label: 'Integridade da Pasta', value: '100%', icon: HardDrive, color: 'text-blue-500' },
                  { label: 'Ficheiros JPG', value: assets.filter(a => a.fileType === 'JPG').length.toString(), icon: ImageIcon, color: 'text-[#C5A059]' },
                  { label: 'Acessos Auditados', value: logs.length.toString(), icon: LockKeyhole, color: 'text-emerald-500' },
                ].map((stat, i) => (
                  <div key={i} className="bg-slate-900 border border-white/5 p-10 rounded flex flex-col items-center text-center group hover:border-[#C5A059]/20 transition-all">
                     <stat.icon className={`w-10 h-10 ${stat.color} mb-6 transform group-hover:scale-110 transition-transform`} />
                     <p className="text-white text-4xl font-black italic mb-2 tracking-tighter">{stat.value}</p>
                     <p className="text-slate-600 text-[10px] font-black uppercase tracking-widest">{stat.label}</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-[#C5A059]/10 border border-[#C5A059]/20 p-10 rounded flex flex-col md:flex-row items-center justify-between gap-8">
                 <div>
                    <h3 className="text-[#C5A059] text-xl font-black uppercase italic mb-2 tracking-tight">Painel Operacional SIROF</h3>
                    <p className="text-slate-400 text-xs font-medium italic">Aceda à monitorização em tempo real de ocorrências e fluxos fronteiriços.</p>
                 </div>
                 <Link to="/sirof" className="bg-[#C5A059] text-white px-8 py-4 rounded-sm text-[10px] font-black uppercase tracking-widest shadow-xl flex items-center gap-3 hover:scale-105 transition-transform">
                    Abrir Painel <ChevronRight className="w-4 h-4" />
                 </Link>
              </div>
           </div>
        )}

        {/* VIEW: ASSETS */}
        {activeTab === 'assets' && (
           <div className="space-y-10 animate-in fade-in duration-500">
              <div className="bg-slate-900 border border-white/5 p-6 rounded-sm flex items-center justify-between">
                 <div className="flex items-center gap-6">
                    <div className="p-3 bg-white/5 rounded">
                       <HardDrive className="text-slate-500 w-5 h-5" />
                    </div>
                    <div>
                       <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Localização do Volume</p>
                       <p className="text-white font-mono text-xs italic">/home/admin/portal/src/assets/images/</p>
                    </div>
                 </div>
                 <button onClick={triggerFileInput} className="bg-[#C5A059] text-white px-6 py-3 rounded-sm text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-3">
                    <Plus className="w-4 h-4" /> Adicionar JPG
                 </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <input type="file" ref={fileInputRef} onChange={handleFileSelect} className="hidden" accept="image/jpeg,image/jpg" />

                {assets.map(asset => (
                   <div key={asset.id} className="bg-slate-900 border border-white/5 rounded-sm overflow-hidden group hover:border-[#C5A059]/50 transition-all shadow-2xl flex flex-col">
                      <div className="aspect-video relative overflow-hidden bg-slate-950">
                         <img src={asset.url} className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all duration-[2000ms]" />
                         <div className="absolute top-4 right-4 z-20">
                            <span className="text-[7px] font-black bg-[#C5A059] text-white px-2 py-0.5 rounded-sm">
                               {asset.fileType || 'JPG'}
                            </span>
                         </div>
                         <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <button onClick={() => viewAsset(asset.id)} className="bg-white text-slate-950 p-4 rounded-full hover:bg-[#C5A059] hover:text-white transition-all">
                               <Eye className="w-5 h-5" />
                            </button>
                         </div>
                      </div>
                      <div className="p-6">
                         <h4 className="text-white text-xs font-black uppercase italic mb-2 tracking-tight line-clamp-1">{asset.title}</h4>
                         <p className="text-[8px] font-mono text-slate-500 truncate mb-4">path: .../images/{asset.title.toLowerCase().replace(/ /g, '_')}.jpg</p>
                         <div className="flex justify-between items-center text-[8px] font-black uppercase text-slate-500 border-t border-white/5 pt-4">
                            <span>ID: {asset.id}</span>
                            <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-emerald-500" /> Assinado</span>
                         </div>
                      </div>
                   </div>
                ))}
                
                {isUploading && (
                  <div className="border-2 border-dashed border-[#C5A059]/30 bg-[#C5A059]/5 rounded-sm flex flex-col items-center justify-center p-10 animate-pulse">
                     <Loader2 className="w-10 h-10 text-[#C5A059] animate-spin mb-4" />
                     <p className="text-[9px] font-black uppercase text-[#C5A059] tracking-widest">{uploadStatus}</p>
                  </div>
                )}
              </div>
           </div>
        )}

        {/* VIEW: LOGS */}
        {activeTab === 'logs' && (
           <div className="bg-slate-900 border border-white/5 rounded-sm overflow-hidden shadow-2xl animate-in fade-in">
              <div className="p-8 border-b border-white/5 bg-slate-950/50 flex items-center gap-3">
                 <Terminal className="w-5 h-5 text-[#C5A059]" />
                 <h3 className="text-white text-[10px] font-black uppercase tracking-widest">Rastreio de Volume /assets/images/</h3>
              </div>
              <div className="overflow-x-auto">
                 <table className="w-full text-left">
                    <thead className="bg-slate-950/40">
                       <tr>
                          <th className="p-6 text-[8px] font-black uppercase text-slate-500">Timestamp</th>
                          <th className="p-6 text-[8px] font-black uppercase text-slate-500">Evento</th>
                          <th className="p-6 text-[8px] font-black uppercase text-slate-500">Objecto Digital</th>
                          <th className="p-6 text-[8px] font-black uppercase text-slate-500">Hash SHA256</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                       {logs.map(log => (
                          <tr key={log.id} className="hover:bg-white/5 transition-colors">
                             <td className="p-6 text-[9px] font-mono text-slate-500">{log.timestamp.replace('T', ' ').slice(0, 19)}</td>
                             <td className="p-6">
                                <span className={`text-[7px] font-black px-2 py-1 rounded border ${log.severity === 'CRITICAL' ? 'bg-red-500/10 text-red-500 border-red-500/20' : 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20'}`}>
                                   {log.action}
                                </span>
                             </td>
                             <td className="p-6 text-[10px] font-medium text-slate-400 italic truncate max-w-[200px]">{log.details}</td>
                             <td className="p-6 text-[8px] font-mono text-slate-600">8f2c...9a0e</td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
        )}

        {/* MODAL DE VISUALIZAÇÃO */}
        {isViewerOpen && activeAsset && (
           <div className="fixed inset-0 z-[500] flex items-center justify-center p-6 lg:p-12 animate-in fade-in zoom-in-95 duration-300">
              <div className="absolute inset-0 bg-slate-950/98 backdrop-blur-xl" onClick={() => setIsViewerOpen(false)}></div>
              <div className="relative bg-slate-900 border border-white/10 w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-sm shadow-2xl flex flex-col md:flex-row">
                 <button onClick={() => setIsViewerOpen(false)} className="absolute top-6 right-6 text-white hover:text-[#C5A059] z-50 bg-slate-950/50 p-3 rounded-full"><X className="w-8 h-8" /></button>
                 <div className="flex-grow bg-black flex items-center justify-center p-4">
                    <img src={activeAsset.url} className="max-w-full max-h-full object-contain" alt={activeAsset.title} />
                 </div>
                 <div className="w-full md:w-96 bg-slate-900 p-10 border-l border-white/5 flex flex-col">
                    <div className="mb-10">
                       <span className="text-[9px] font-black uppercase text-[#C5A059] tracking-widest block mb-2">JPG Image Metadata</span>
                       <h2 className="text-white text-3xl font-black uppercase italic tracking-tighter leading-none mb-4">{activeAsset.title}</h2>
                       <p className="text-slate-500 text-[10px] font-mono italic">src/assets/images/{activeAsset.title.toLowerCase().replace(/ /g, '_')}.jpg</p>
                    </div>
                    <div className="space-y-6 flex-grow">
                       <div className="p-4 bg-white/5 rounded-sm border border-white/5">
                          <p className="text-slate-500 text-[8px] font-black uppercase tracking-widest mb-1">Assinatura de Volume</p>
                          <p className="text-white font-mono text-[9px] flex items-center gap-2 truncate">
                            <Hash className="w-3 h-3 text-[#C5A059]" /> f82a7b1...c09e
                          </p>
                       </div>
                    </div>
                    <div className="mt-10 space-y-4">
                       <a href={activeAsset.url} download={`${activeAsset.title}.jpg`} className="w-full py-4 bg-[#C5A059] text-white font-black uppercase text-[10px] tracking-widest shadow-xl flex items-center justify-center gap-3">
                          <Download className="w-4 h-4" /> Descarregar do Repositório
                       </a>
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
