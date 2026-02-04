
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, Shield, ChevronDown, ChevronRight, LayoutGrid, 
  Users, Award, FileText
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { DigitalAsset } from '../types';
import logo from "../conteudo/imagens/imagem1_logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setAboutDropdown(false);
  }, [location]);

  const navLinks = [
    { name: t('nav_home'), path: '/' },
    {
      name: t('nav_about'),
      path: '/sobre',
      dropdown: [
        { name: t('nav_about_who'), path: '/sobre', icon: Shield, desc: t('nav_desc_who') },
        { name: t('nav_about_comp'), path: '/composicao', icon: LayoutGrid, desc: t('nav_desc_comp') },
        { name: t('nav_about_coord'), path: '/coordenadores', icon: Users, desc: t('nav_desc_coord') },
        { name: t('nav_about_sec'), path: '/secretario', icon: Award, desc: t('nav_desc_sec') },
        { name: t('nav_about_reports'), path: '/relatorios', icon: FileText, desc: t('nav_desc_reports') },
      ]
    },
    { name: t('nav_borders'), path: '/mapa' },
    { name: t('nav_corridors'), path: '/corredores' },
    { name: t('nav_legis'), path: '/legislacao' },
    { name: t('nav_news'), path: '/noticias' },
    { name: t('nav_contact'), path: '/contacto' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full z-[100]">
      {/* Top Bar */}
      <div className="hidden sm:block bg-[#f8fafc] border-b border-slate-200 py-2">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-slate-500">
          <div className="flex items-center gap-6">
            <span className="text-[#003366]">{t('gov_angola')}</span>
          </div>
          <div className="flex items-center gap-3">
            {(['PT', 'EN', 'FR'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`hover:text-[#003366] transition-all ${language === lang ? 'text-[#003366] underline decoration-2 underline-offset-4' : ''}`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className={`transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-white py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 md:gap-3">
            <img src={logo} alt="Logo" className="w-32 md:w-30" />
            <div className="flex flex-col border-l border-slate-200 pl-3">
              <span className="hidden xs:block text-[8px] md:text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">{t('gov_angola')}</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.path}
                className="relative group"
                onMouseEnter={() => link.dropdown && setAboutDropdown(true)}
                onMouseLeave={() => link.dropdown && setAboutDropdown(false)}
              >
                <Link
                  to={link.path}
                  className={`px-3 py-2 text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-1 ${isActive(link.path) || (link.dropdown && link.dropdown.some(d => isActive(d.path))) ? 'text-[#003366] border-b-2 border-[#C5A059]' : 'text-slate-600 hover:text-[#003366]'}`}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="w-3 h-3" />}
                </Link>

                {link.dropdown && aboutDropdown && (
                  <div className="absolute top-full left-0 w-80 bg-white shadow-[0_20px_50px_rgba(0,51,102,0.15)] border border-slate-100 py-4 mt-0 animate-in fade-in slide-in-from-top-2 duration-200 rounded-sm">
                    <div className="flex flex-col gap-1 relative z-10">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="group/item flex items-center gap-4 px-6 py-3 transition-all hover:bg-slate-50"
                        >
                          <div className="w-10 h-10 bg-white border border-slate-100 flex items-center justify-center rounded-sm shadow-sm group-hover/item:bg-[#003366] group-hover/item:text-white transition-all">
                            <sub.icon className="w-4 h-4 text-[#C5A059] group-hover/item:text-white transition-colors" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-700 group-hover/item:text-[#003366] transition-colors leading-none mb-1">
                              {sub.name}
                            </span>
                            <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tight">
                              {sub.desc}
                            </span>
                          </div>
                          <ChevronRight className="w-3 h-3 ml-auto text-slate-300 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-[#003366]">
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-[110] transition-all duration-500 lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full overflow-y-auto p-6">
          <div className="flex justify-between items-center mb-12">
            <Shield className="w-10 h-10 text-[#003366]" />
            <button title="Fechar menu" onClick={() => setIsOpen(false)}><X className="w-8 h-8" /></button>
          </div>
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link to={link.path} className="text-xl font-black uppercase italic text-[#003366] py-2 block border-b border-slate-100">{link.name}</Link>
                {link.dropdown && (
                  <div className="pl-4 mt-2 flex flex-col gap-2">
                    {link.dropdown.map(sub => (
                      <Link key={sub.name} to={sub.path} className="text-xs font-bold uppercase text-slate-400 py-2">{sub.name}</Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
