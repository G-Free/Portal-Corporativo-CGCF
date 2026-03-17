import React, { useState, useMemo, useEffect } from "react";
import {
  Search,
  Plane,
  Briefcase,
  Info,
  Activity,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  ArrowRight,
  FileText,
  Download,
  AlertCircle,
  Scale,
  Building2,
  CheckCircle2,
  Globe,
  Clock,
  Mail,
  Phone,
  ExternalLink,
  Filter,
  Monitor as MonitorIcon,
  Users,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext";


const FAQ: React.FC = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [activeSection, setActiveSection] = useState('geral');

  const sections = useMemo(() => [
    { id: 'geral', title: 'Visão Geral', icon: Globe },
    { id: 'viagens', title: t('faq_cat_travel'), icon: Plane },
    { id: 'comercio', title: t('faq_cat_trade'), icon: Briefcase },
    { id: 'transparencia', title: t('faq_cat_info'), icon: Info },
    { id: 'tecnologia', title: t('faq_cat_tech'), icon: Activity },
    { id: 'direitos', title: t('faq_rights_duties'), icon: Scale },
    { id: 'instituicoes', title: t('faq_institutions'), icon: Building2 },
  ], [t]);

  const visaExemptCountries = {
    Africa: ['África do Sul', 'Botswana', 'Cabo Verde', 'Maurícia', 'Moçambique', 'Namíbia', 'São Tomé e Príncipe', 'Zâmbia', 'Zimbabwe'],
    Europa: ['Portugal', 'Espanha', 'França', 'Itália', 'Alemanha', 'Bélgica', 'Países Baixos', 'Polónia', 'Hungria', 'Roménia'],
    Americas: ['Brasil', 'Argentina', 'Chile', 'Estados Unidos da América', 'Canadá'],
    Asia: ['Emirados Árabes Unidos', 'China', 'Coreia do Sul', 'Japão', 'Israel', 'Turquia']
  };

  const allExemptCountries = Object.values(visaExemptCountries).flat().sort();

  const isExempt = useMemo(() => {
    if (!selectedCountry) return null;
    return allExemptCountries.includes(selectedCountry);
  }, [selectedCountry, allExemptCountries]);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-50 min-h-screen animate-in fade-in duration-700">
      {/* Editorial Hero Section */}
      <section className="bg-[#003366] pt-32 pb-64 border-b-8 border-[#C5A059] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:40px_40px]"></div>
          <div className="absolute -right-24 -top-24 w-96 h-96 bg-[#C5A059]/20 rounded-full blur-3xl"></div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-4 text-[10px] font-black text-[#C5A059] uppercase tracking-[0.4em] mb-16 animate-in slide-in-from-left duration-700">
             <Link to="/" className="hover:text-white transition-colors">{t('nav_home')}</Link>
             <span className="text-white/20">/</span>
             <span className="text-white">CENTRO DE APOIO & FAQ</span>
          </div>
          
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-8">
               <h1 className="text-white text-6xl md:text-9xl font-black uppercase italic tracking-tighter leading-[0.85] mb-12 animate-in slide-in-from-bottom duration-700 delay-100">
                 CENTRO DE<br/>
                 <span className="text-[#C5A059]">APOIO & FAQ</span>
               </h1>
               <div className="max-w-2xl border-l-4 border-[#C5A059] pl-10 animate-in fade-in duration-1000 delay-300">
                 <p className="text-slate-300 font-medium text-2xl leading-relaxed italic">
                   {t('faq_intro_text')}
                 </p>
               </div>
            </div>
            <div className="lg:col-span-4">
               <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-sm shadow-2xl transform hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#C5A059]/10 rounded-bl-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="flex items-center justify-between mb-8 relative z-10">
                    <p className="text-[#C5A059] text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                      <Clock className="w-3 h-3" /> {t('faq_last_update')}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-[8px] font-black text-emerald-500 uppercase tracking-widest">Sistemas OK</span>
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <div className="space-y-4 relative z-10">
                    <button className="group flex items-center justify-between w-full bg-white text-[#003366] px-8 py-5 text-[10px] font-black uppercase tracking-widest hover:bg-[#C5A059] hover:text-white transition-all shadow-xl">
                      {t('faq_download_pdf')} 
                      <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                    </button>
                    <Link to="/contacto" className="group flex items-center justify-between w-full bg-rose-600 text-white px-8 py-5 text-[10px] font-black uppercase tracking-widest hover:bg-rose-700 transition-all shadow-lg">
                      {t('faq_formal_complaint')} 
                      <AlertCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </Link>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 -mt-24 relative z-20">
        {/* Search Bar - Floating */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#C5A059] to-[#003366] rounded-sm blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative flex items-center bg-white rounded-sm shadow-2xl overflow-hidden">
              <div className="pl-8 text-slate-400">
                <Search className="w-6 h-6" />
              </div>
              <input 
                type="text" 
                placeholder={t('faq_search_placeholder')}
                className="w-full pl-6 pr-8 py-8 text-lg font-bold text-[#003366] outline-none placeholder:text-slate-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="pr-8">
                <div className="bg-slate-100 px-3 py-1 rounded text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  ESC
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Sidebar Navigation - Vertical Tabs */}
          <aside className="lg:col-span-3">
            <div className="sticky top-[120px] space-y-2">
              <div className="bg-white border border-slate-200 rounded-sm shadow-xl overflow-hidden">
                <div className="p-6 border-b border-slate-100 bg-slate-50/50">
                  <h3 className="text-[#003366] text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                    <Filter className="w-3 h-3 text-[#C5A059]" /> Categorias de Apoio
                  </h3>
                </div>
                <nav className="flex flex-col">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`flex items-center gap-4 px-6 py-5 text-[10px] font-black uppercase tracking-widest transition-all text-left border-b border-slate-50 last:border-b-0 group ${
                        activeSection === section.id 
                        ? 'bg-[#003366] text-white' 
                        : 'text-slate-500 hover:bg-slate-50 hover:text-[#003366]'
                      }`}
                    >
                      <section.icon className={`w-4 h-4 shrink-0 ${activeSection === section.id ? 'text-[#C5A059]' : 'text-slate-300 group-hover:text-[#C5A059]'}`} />
                      <span className="flex-1">{section.title}</span>
                      {activeSection === section.id && (
                        <ArrowRight className="w-3 h-3 text-[#C5A059] animate-in slide-in-from-left-2" />
                      )}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Quick Support Card */}
              <div className="bg-[#003366] p-8 rounded-sm text-white shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#C5A059]/10 rounded-bl-full -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-700"></div>
                <h4 className="text-sm font-black uppercase italic tracking-tighter mb-4 relative z-10">Precisa de Ajuda?</h4>
                <p className="text-slate-400 text-[10px] font-medium italic leading-relaxed mb-6 relative z-10">
                  Nossa equipa está pronta para auxiliar em questões técnicas e aduaneiras.
                </p>
                <Link to="/contacto" className="inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-[#C5A059] hover:text-white transition-colors relative z-10">
                  Abrir Ticket <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="lg:col-span-9 pb-32 min-h-[600px]">
            
            {activeSection === 'geral' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-12">
                {/* Recent Updates - Bento Style (Integrated into Main) */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 bg-[#C5A059] p-8 rounded-sm text-white relative overflow-hidden group">
                    <Clock className="absolute -right-8 -bottom-8 w-40 h-40 text-white/10 group-hover:scale-110 transition-transform duration-700" />
                    <div className="relative z-10">
                      <span className="text-[9px] font-black uppercase tracking-[0.3em] opacity-60 mb-3 block">{t('faq_recent_updates')}</span>
                      <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-4 leading-tight">Isenção de vistos para 98 países & Novos protocolos SADC</h3>
                      <p className="text-white/80 text-xs font-medium italic mb-6 max-w-xl">
                        O Governo de Angola aprovou novas medidas para facilitar a entrada de turistas e investidores, simplificando processos.
                      </p>
                      <button className="bg-white text-[#003366] px-6 py-3 text-[9px] font-black uppercase tracking-widest hover:bg-[#003366] hover:text-white transition-all">
                        Ler Decreto Completo
                      </button>
                    </div>
                  </div>
                  <div className="bg-[#003366] p-8 rounded-sm text-white flex flex-col justify-between border-b-4 border-[#C5A059]">
                    <div>
                      <AlertCircle className="w-8 h-8 text-[#C5A059] mb-4" />
                      <h4 className="text-lg font-black uppercase italic tracking-tighter mb-2">Apoio em Tempo Real</h4>
                      <p className="text-slate-400 text-[10px] font-medium italic leading-relaxed">
                        Equipa técnica monitoriza as operações 24/7.
                      </p>
                    </div>
                    <Link to="/contacto" className="text-[9px] font-black uppercase tracking-widest text-[#C5A059] flex items-center gap-2 mt-6 group">
                      Falar com Agente <ArrowRight className="w-3 h-3 group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </div>

                <div className="bg-white border border-slate-200 p-12 rounded-sm shadow-sm">
                  <h3 className="text-[#003366] text-3xl font-black uppercase italic tracking-tighter mb-8">Bem-vindo ao Centro de Apoio</h3>
                  <p className="text-slate-500 text-lg font-medium italic leading-relaxed mb-12">
                    Selecione uma categoria no menu lateral para aceder a informações detalhadas sobre procedimentos fronteiriços, legislação e suporte técnico.
                  </p>
                  <div className="grid md:grid-cols-2 gap-8">
                    {sections.filter(s => s.id !== 'geral').map(section => (
                      <button 
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className="flex items-center gap-6 p-8 bg-slate-50 border border-slate-100 rounded-sm hover:border-[#C5A059] hover:bg-white transition-all text-left group"
                      >
                        <div className="w-12 h-12 bg-[#003366] text-[#C5A059] rounded-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                          <section.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-[#003366] text-sm font-black uppercase tracking-widest">{section.title}</h4>
                          <p className="text-slate-400 text-[10px] font-medium italic mt-1">Explorar tópicos e FAQs</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {activeSection === 'viagens' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                {/* 🧳 VIAGENS E TURISMO */}
                <section id="viagens">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-slate-200 pb-8">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-[#003366] text-[#C5A059] rounded-sm flex items-center justify-center shadow-2xl transform -rotate-3">
                    <Plane className="w-10 h-10" />
                  </div>
                  <div>
                    <h2 className="text-[#003366] text-5xl font-black uppercase italic tracking-tighter leading-none">VIAGENS E TURISMO</h2>
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mt-3">Protocolos de Mobilidade e Controlo Migratório</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="px-4 py-2 bg-slate-100 rounded text-[9px] font-black text-slate-500 uppercase tracking-widest">SME-01</div>
                  <div className="px-4 py-2 bg-emerald-100 rounded text-[9px] font-black text-emerald-600 uppercase tracking-widest">ACTIVO</div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* 1. Documentação Obrigatória */}
                <div className="bg-white border border-slate-200 rounded-sm shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-8 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
                    <h3 className="text-[#003366] font-black uppercase text-sm tracking-tight flex items-center gap-3">
                      <FileText className="w-5 h-5 text-[#C5A059]" /> 1. Documentação Obrigatória
                    </h3>
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Requisitos Legais</span>
                  </div>
                  <div className="p-10 space-y-8">
                    <p className="text-slate-500 font-medium italic text-sm leading-relaxed">
                      Conforme o Artigo 12.º da Lei de Migração, para entrada em Angola é imperativo apresentar:
                    </p>
                    <div className="grid gap-3">
                      {[
                        'Passaporte válido por mínimo de 6 meses',
                        'Página livre para carimbo',
                        'Visto válido ou elegibilidade para isenção',
                        'Comprovativo de alojamento',
                        'Bilhete de regresso ou continuação de viagem',
                        'Meios financeiros suficientes',
                        'Certificado internacional de vacinação'
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 border-l-4 border-[#003366] group hover:bg-[#003366] hover:text-white transition-all cursor-default">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 group-hover:text-[#C5A059] shrink-0" />
                          <span className="text-[10px] font-black uppercase tracking-tight">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="p-6 bg-amber-50 border border-amber-100 rounded-sm flex gap-4 items-start">
                      <AlertCircle className="w-5 h-5 text-amber-500 shrink-0" />
                      <p className="text-amber-900 text-[10px] font-bold uppercase italic leading-relaxed">
                        A decisão final de admissão é soberana e compete exclusivamente ao Serviço de Migração e Estrangeiros (SME) no posto de fronteira.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2. Regime de Vistos - Widget Especializado */}
                <div className="bg-slate-900 rounded-sm shadow-2xl overflow-hidden flex flex-col">
                  <div className="p-8 border-b border-white/10 bg-white/5 flex items-center justify-between">
                    <h3 className="text-white font-black uppercase text-sm tracking-tight flex items-center gap-3">
                      <Globe className="w-5 h-5 text-[#C5A059]" /> 2. Verificador de Isenção
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">Base de Dados Actualizada</span>
                    </div>
                  </div>
                  <div className="p-10 flex-1 flex flex-col">
                    <p className="text-slate-400 text-sm font-medium italic mb-10 leading-relaxed">
                      Utilize nossa ferramenta oficial para verificar se o seu país de origem beneficia do regime de isenção de vistos para turismo.
                    </p>
                    
                    <div className="space-y-8 flex-1">
                      <div className="space-y-4">
                        <label className="block text-[10px] font-black uppercase tracking-widest text-[#C5A059] opacity-80">Selecione a Nacionalidade</label>
                        <div className="relative">
                          <Filter className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
                          <select title="Selecionar País"
                            value={selectedCountry}
                            onChange={(e) => setSelectedCountry(e.target.value)}
                            className="w-full pl-14 pr-10 py-6 bg-white/5 border border-white/10 rounded-sm text-white text-lg font-bold outline-none focus:border-[#C5A059] focus:bg-white/10 transition-all appearance-none cursor-pointer"
                          >
                            <option value="" className="text-slate-900">Seleccionar País...</option>
                            {allExemptCountries.map(c => <option key={c} value={c} className="text-slate-900">{c}</option>)}
                          </select>
                          <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5 pointer-events-none" />
                        </div>
                      </div>

                      {selectedCountry ? (
                        <div className={`p-8 rounded-sm border-2 animate-in zoom-in-95 duration-500 flex-1 flex flex-col justify-center ${isExempt ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-rose-500/10 border-rose-500/30 text-rose-400'}`}>
                          <div className="flex items-start gap-6">
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center shrink-0 ${isExempt ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'}`}>
                              {isExempt ? <CheckCircle2 className="w-10 h-10" /> : <AlertCircle className="w-10 h-10" />}
                            </div>
                            <div>
                              <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-2 opacity-60">Status de Elegibilidade</p>
                              <h4 className="text-2xl font-black uppercase italic tracking-tighter leading-tight">
                                {isExempt 
                                  ? `ISENÇÃO CONFIRMADA` 
                                  : `VISTO OBRIGATÓRIO`}
                              </h4>
                              <p className="text-sm font-medium italic mt-4 opacity-80 leading-relaxed">
                                {isExempt 
                                  ? `Cidadãos de ${selectedCountry} podem entrar em Angola sem visto para fins de turismo por até 30 dias.` 
                                  : `Cidadãos de ${selectedCountry} devem solicitar um visto consular ou autorização prévia online.`}
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="flex-1 border-2 border-dashed border-white/10 rounded-sm flex flex-col items-center justify-center p-12 text-center opacity-30">
                          <Globe className="w-12 h-12 mb-4" />
                          <p className="text-[10px] font-black uppercase tracking-widest">Aguardando Seleção de País</p>
                        </div>
                      )}
                    </div>

                    <div className="mt-10 pt-8 border-t border-white/10 flex items-center justify-between">
                      <span className="text-[9px] font-black text-white/30 uppercase tracking-widest">Ref: Decreto 22/26</span>
                      <button className="text-[10px] font-black uppercase tracking-widest text-[#C5A059] hover:text-white transition-colors">
                        Ver Lista Completa
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

            {activeSection === 'comercio' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                {/* 🚛 COMÉRCIO E LOGÍSTICA */}
                <section id="comercio">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-slate-200 pb-8">
                    <div className="flex items-center gap-6">
                      <div className="w-20 h-20 bg-[#003366] text-[#C5A059] rounded-sm flex items-center justify-center shadow-2xl transform rotate-3">
                        <Briefcase className="w-10 h-10" />
                      </div>
                      <div>
                        <h2 className="text-[#003366] text-5xl font-black uppercase italic tracking-tighter leading-none">COMÉRCIO E LOGÍSTICA</h2>
                        <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mt-3">Facilitação, Corredores e Controlo Aduaneiro</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="px-4 py-2 bg-slate-100 rounded text-[9px] font-black text-slate-500 uppercase tracking-widest">AGT-04</div>
                      <div className="px-4 py-2 bg-blue-100 rounded text-[9px] font-black text-blue-600 uppercase tracking-widest">ESTÁVEL</div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                    {[
                      { 
                        title: 'Facilitação Comercial', 
                        desc: 'Mecanismos para acelerar o fluxo de mercadorias legítimas.',
                        items: ['Inspeções conjuntas (AGT/SME)', 'Gestão de risco automatizada', 'Digitalização de manifestos', 'Priorização de perecíveis'], 
                        icon: CheckCircle2,
                        color: 'emerald'
                      },
                      { 
                        title: 'Declaração Aduaneira', 
                        desc: 'Normas para importação e exportação de bens.',
                        items: ['Valores acima de 10.000 USD', 'Mercadorias para revenda', 'Equipamentos temporários', 'Produtos de uso controlado'], 
                        icon: FileText,
                        color: 'blue'
                      },
                      { 
                        title: 'Eficiência de Tempos', 
                        desc: 'Estratégias para reduzir a imobilização nas fronteiras.',
                        items: ['Submissão antecipada de dados', 'Operador Económico Autorizado', 'Pagamento electrónico de taxas', 'Canais de despacho acelerado'], 
                        icon: Clock,
                        color: 'amber'
                      }
                    ].map((box, i) => (
                      <div key={i} className="bg-white border border-slate-200 p-10 rounded-sm hover:border-[#C5A059] transition-all group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full -mr-16 -mt-16 group-hover:bg-[#C5A059]/10 transition-colors"></div>
                        <box.icon className={`w-12 h-12 text-[#C5A059] mb-8 group-hover:scale-110 transition-transform`} />
                        <h4 className="text-[#003366] text-xl font-black uppercase italic tracking-tighter mb-4">{box.title}</h4>
                        <p className="text-slate-400 text-xs font-medium italic mb-8 leading-relaxed">{box.desc}</p>
                        <ul className="space-y-4">
                          {box.items.map((item, j) => (
                            <li key={j} className="text-[10px] font-black text-slate-600 uppercase tracking-tight flex items-center gap-3">
                              <div className="w-1.5 h-1.5 bg-[#C5A059] rounded-full"></div> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {activeSection === 'transparencia' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                {/* 📰 INFORMAÇÃO E TRANSPARÊNCIA */}
                <section id="transparencia">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-slate-200 pb-8">
                    <div className="flex items-center gap-6">
                      <div className="w-20 h-20 bg-[#003366] text-[#C5A059] rounded-sm flex items-center justify-center shadow-2xl transform -rotate-2">
                        <Info className="w-10 h-10" />
                      </div>
                      <div>
                        <h2 className="text-[#003366] text-5xl font-black uppercase italic tracking-tighter leading-none">INFORMAÇÃO E TRANSPARÊNCIA</h2>
                        <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mt-3">Dados Oficiais, Evidências e Repositório Técnico</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-sm overflow-hidden shadow-sm">
                    <div className="grid md:grid-cols-2">
                      <div className="p-12 border-b md:border-b-0 md:border-r border-slate-100 space-y-8">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                            <Shield className="w-5 h-5 text-[#003366]" />
                          </div>
                          <h4 className="text-[#003366] text-sm font-black uppercase tracking-widest">Veracidade das Informações</h4>
                        </div>
                        <p className="text-slate-500 text-sm font-medium leading-relaxed italic">
                          Os conteúdos publicados no portal são baseados em dados oficiais, validados pelas entidades competentes e seguem as normas de comunicação pública do Estado Angolano. Garantimos a integridade de cada dado apresentado através de auditorias regulares.
                        </p>
                        <div className="flex items-center gap-6 pt-4">
                          <div className="text-center">
                            <p className="text-2xl font-black text-[#003366]">100%</p>
                            <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Oficial</p>
                          </div>
                          <div className="text-center">
                            <p className="text-2xl font-black text-[#003366]">RTD</p>
                            <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Auditado</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-12 space-y-8 bg-slate-50/30">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                            <Activity className="w-5 h-5 text-[#C5A059]" />
                          </div>
                          <h4 className="text-[#003366] text-sm font-black uppercase tracking-widest">Estudos e Dados Científicos</h4>
                        </div>
                        <p className="text-slate-500 text-sm font-medium leading-relaxed italic">
                          Disponibilizamos relatórios estatísticos, indicadores de desempenho, documentos normativos e estudos técnicos para investigadores e decisores. Nossa base de dados é a espinha dorsal para políticas públicas baseadas em evidências.
                        </p>
                        <button className="w-full bg-[#003366] text-white px-8 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-[#C5A059] transition-all flex items-center justify-center gap-4">
                          Solicitar Dados Adicionais <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {activeSection === 'tecnologia' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                {/* 🖥️ TECNOLOGIA E MONITORIZAÇÃO */}
                <section id="tecnologia">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-slate-200 pb-8">
                    <div className="flex items-center gap-6">
                      <div className="w-20 h-20 bg-[#003366] text-[#C5A059] rounded-sm flex items-center justify-center shadow-2xl transform rotate-2">
                        <Activity className="w-10 h-10" />
                      </div>
                      <div>
                        <h2 className="text-[#003366] text-5xl font-black uppercase italic tracking-tighter leading-none">TECNOLOGIA E MONITORIZAÇÃO</h2>
                        <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mt-3">Inovação, Vigilância 24/7 e Interoperabilidade</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: 'Biometria SME', icon: Users, desc: 'Reconhecimento facial e dactilar.' },
                      { label: 'Interoperabilidade', icon: Globe, desc: 'Protocolos de dados unificados.' },
                      { label: 'Gestão de Risco', icon: Shield, desc: 'Inteligência preditiva AGT.' },
                      { label: 'Monitorização', icon: MonitorIcon, desc: 'Vigilância remota via SIROF.' }
                    ].map((tech, i) => (
                      <div key={i} className="bg-[#003366] p-10 rounded-sm text-center group hover:bg-[#C5A059] transition-all duration-500 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-[#C5A059] group-hover:bg-white"></div>
                        <tech.icon className="w-10 h-10 text-[#C5A059] mx-auto mb-6 group-hover:text-white group-hover:scale-110 transition-all" />
                        <h5 className="text-white text-[10px] font-black uppercase tracking-widest mb-2">{tech.label}</h5>
                        <p className="text-white/40 text-[8px] font-bold uppercase tracking-tight group-hover:text-white/70">{tech.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {activeSection === 'direitos' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                {/* ⚖ DIREITOS E DEVERES */}
                <section id="direitos">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-slate-200 pb-8">
                    <div className="flex items-center gap-6">
                      <div className="w-20 h-20 bg-[#003366] text-[#C5A059] rounded-sm flex items-center justify-center shadow-2xl transform -rotate-1">
                        <Scale className="w-10 h-10" />
                      </div>
                      <div>
                        <h2 className="text-[#003366] text-5xl font-black uppercase italic tracking-tighter leading-none">DIREITOS E DEVERES</h2>
                        <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mt-3">Cidadania, Ética e Conformidade Regulatória</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-emerald-50 border-l-8 border-emerald-500 p-12 rounded-sm shadow-sm">
                      <h4 className="text-emerald-900 text-xl font-black uppercase italic tracking-tighter mb-10">Seus Direitos</h4>
                      <ul className="space-y-6">
                        {[
                          { t: 'Atendimento digno e imparcial', d: 'Respeito total à dignidade humana em todos os postos.' },
                          { t: 'Informação clara e fidedigna', d: 'Acesso a dados precisos sobre taxas e procedimentos.' },
                          { t: 'Proteção de dados pessoais', d: 'Segurança absoluta das informações biométricas e fiscais.' },
                          { t: 'Direito de reclamação formal', d: 'Canais abertos para auditoria de conduta institucional.' }
                        ].map((item, i) => (
                          <li key={i} className="group">
                            <div className="flex items-center gap-4 mb-2">
                              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                              <span className="text-[11px] font-black text-emerald-900 uppercase tracking-tight">{item.t}</span>
                            </div>
                            <p className="text-[10px] font-medium text-emerald-700/70 italic pl-9">{item.d}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-slate-900 border-l-8 border-[#C5A059] p-12 rounded-sm shadow-2xl text-white">
                      <h4 className="text-white text-xl font-black uppercase italic tracking-tighter mb-10">Seus Deveres</h4>
                      <ul className="space-y-6">
                        {[
                          { t: 'Apresentar documentação válida', d: 'Passaportes e vistos dentro do prazo de vigência legal.' },
                          { t: 'Declarar bens corretamente', d: 'Transparência total sobre mercadorias e valores monetários.' },
                          { t: 'Cumprir normas sanitárias', d: 'Apresentação de certificados de vacinação quando exigido.' },
                          { t: 'Respeitar a autoridade pública', d: 'Colaboração com os agentes de fiscalização em serviço.' }
                        ].map((item, i) => (
                          <li key={i} className="group">
                            <div className="flex items-center gap-4 mb-2">
                              <div className="w-5 h-5 border-2 border-[#C5A059] rounded-full flex items-center justify-center">
                                <div className="w-1.5 h-1.5 bg-[#C5A059] rounded-full"></div>
                              </div>
                              <span className="text-[11px] font-black text-white uppercase tracking-tight">{item.t}</span>
                            </div>
                            <p className="text-[10px] font-medium text-slate-400 italic pl-9">{item.d}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {activeSection === 'instituicoes' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                {/* 🏛 INSTITUIÇÕES RESPONSÁVEIS */}
                <section id="instituicoes">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-slate-200 pb-8">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-[#003366] text-[#C5A059] rounded-sm flex items-center justify-center shadow-2xl transform rotate-1">
                    <Building2 className="w-10 h-10" />
                  </div>
                  <div>
                    <h2 className="text-[#003366] text-5xl font-black uppercase italic tracking-tighter leading-none">INSTITUIÇÕES RESPONSÁVEIS</h2>
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mt-3">Órgãos Intervenientes e Autoridades Competentes</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { name: 'Serviço de Migração e Estrangeiros', desc: 'Autoridade soberana para o controlo migratório, emissão de vistos e gestão de fluxos de pessoas.', code: 'SME' },
                  { name: 'Administração Geral Tributária', desc: 'Órgão responsável pela fiscalização aduaneira, arrecadação de receitas e facilitação do comércio.', code: 'AGT' },
                  { name: 'Polícia de Guarda Fronteiras', desc: 'Garante a integridade territorial e a segurança pública nas zonas de fronteira terrestre e marítima.', code: 'PGF' },
                  { name: 'Ministério das Relações Exteriores', desc: 'Coordena a política externa, missões diplomáticas e a rede consular para vistos internacionais.', code: 'MIREX' },
                  { name: 'Ministério da Saúde (Vigilância)', desc: 'Implementa protocolos epidemiológicos e garante a segurança sanitária nas fronteiras.', code: 'MINSA' }
                ].map((inst, i) => (
                  <div key={i} className="bg-white border border-slate-200 p-10 rounded-sm flex flex-col justify-between group hover:border-[#003366] transition-all">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-[9px] font-black text-[#C5A059] bg-[#C5A059]/10 px-3 py-1 rounded-full uppercase tracking-widest">{inst.code}</span>
                        <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-[#003366] transition-colors" />
                      </div>
                      <h5 className="text-[#003366] text-sm font-black uppercase tracking-tight mb-4">{inst.name}</h5>
                      <p className="text-slate-500 text-[10px] font-medium italic leading-relaxed">{inst.desc}</p>
                    </div>
                    <button className="mt-8 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-[#C5A059] flex items-center gap-2 transition-colors">
                      Aceder ao Portal Oficial <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                ))}
                </div>
                </section>
              </div>
            )}

            {/* Support CTA */}
            <div className="bg-[#003366] p-12 md:p-20 rounded-sm text-white shadow-2xl relative overflow-hidden text-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/10 rounded-bl-full"></div>
              <div className="relative z-10 max-w-2xl mx-auto">
                <MessageSquare className="w-16 h-16 text-[#C5A059] mx-auto mb-8" />
                <h3 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter mb-6">
                  {t('faq_contact_prompt')}
                </h3>
                <p className="text-slate-300 text-lg font-medium leading-relaxed italic mb-12">
                  {t('news_support_desc')}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link 
                    to="/contacto" 
                    className="bg-white text-[#003366] hover:bg-[#C5A059] hover:text-white px-12 py-5 font-black rounded-sm text-xs uppercase tracking-widest transition-all inline-flex items-center gap-4 shadow-xl"
                  >
                    {t('faq_contact_btn')} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

