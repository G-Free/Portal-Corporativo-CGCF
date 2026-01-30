import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Composition from './pages/Composition';
import Coordinators from './pages/Coordinators';
import Secretary from './pages/Secretary';
import Reports from './pages/Reports';
import Legislation from './pages/Legislation';
import BorderMap from './pages/BorderMap';
import Dashboard from './pages/Dashboard';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import Contact from './pages/Contact';
import AgencyDetail from './pages/AgencyDetail';
import Corridors from './pages/Corridors';
import { LanguageProvider, useLanguage } from './LanguageContext';
import cgcfLogo from './conteudo/imagens/Imagem1.png';
import logoFooter from './conteudo/imagens/logo_sistema_5.png';
import {
  Menu,
  X,
  Shield,
  Search,
  Facebook,
  Twitter,
  Linkedin,
  MapPin,
  Mail,
  Phone,
  ChevronRight,
  Network,
} from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpen]);

  const navLinks = [
    { name: t("nav_home"), path: "/" },
    { name: t("nav_about"), path: "/sobre" },
    { name: t("nav_borders"), path: "/mapa" },
    { name: t("nav_corridors"), path: "/corredores" },
    { name: t("nav_legis"), path: "/legislacao" },
    { name: t("nav_news"), path: "/noticias" },
    { name: t("nav_contact"), path: "/contacto" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full z-[100]">
      <div className="hidden sm:block bg-[#f8fafc] border-b border-slate-200 py-2">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-slate-500">
          <div className="flex items-center gap-6">
            <span className="text-[#003366]">{t("gov_angola")}</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              {(["PT", "EN", "FR"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`hover:text-[#003366] transition-all ${language === lang ? "text-[#003366] underline decoration-2 underline-offset-4" : ""}`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-3" : "bg-white py-5"}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 md:gap-3">
            <div className="flex flex-col border-l border-slate-200 pl-3">
              <span className="hidden xs:block text-[8px] md:text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">
                República de Angola
              </span>
            </div>
            <img
              src={cgcfLogo}
              alt="CGCF Logo"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-[10px] font-black uppercase tracking-widest transition-all ${
                  isActive(link.path)
                    ? "text-[#003366] border-b-2 border-[#C5A059]"
                    : "text-slate-600 hover:text-[#003366]"
                }`}
              >
                {link.name}
              </Link>
            ))}
            {/* <Link to="/admin" className="ml-4 bg-[#003366] text-white px-5 py-2 rounded-sm text-[10px] font-bold uppercase tracking-widest hover:bg-[#002244] transition-all">
               {t('nav_admin')}
            </Link> */}
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 -mr-2 text-[#003366] active:scale-95 transition-transform"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-white z-[110] transition-all duration-500 lg:hidden ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"}`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          <div className="flex justify-between items-center p-6 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Shield className="w-8 h-8 text-[#003366]" />
              <span className="text-[#003366] font-black text-xl italic tracking-tighter">
                CGCF
              </span>
            </div>
            <button
              title="Close"
              onClick={() => setIsOpen(false)}
              className="p-2 text-[#003366]"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          <nav className="flex flex-col p-6 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center justify-between py-5 border-b border-slate-50 text-sm font-black uppercase tracking-widest ${isActive(link.path) ? "text-[#C5A059]" : "text-[#003366]"}`}
              >
                {link.name}
                <ChevronRight
                  className={`w-4 h-4 ${isActive(link.path) ? "text-[#C5A059]" : "text-slate-300"}`}
                />
              </Link>
            ))}
            <Link
              to="/admin"
              className="mt-6 bg-[#003366] text-white py-5 text-center text-xs font-black uppercase tracking-[0.2em]"
            >
              {t("nav_admin")}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-[#001f3f] text-white pt-16 md:pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 md:mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6 md:mb-0">
              <img
                src={logoFooter}
                alt="CGCF Logo"
                className="h-50 md:h-24 w-auto object-contain"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-xs">
              {t("footer_desc")}
            </p>
          </div>

          <div>
            <h5 className="font-bold uppercase text-[10px] tracking-widest text-[#C5A059] mb-6 md:mb-8">
              Institucional
            </h5>
            <ul className="space-y-4 text-xs text-slate-400 uppercase font-bold tracking-wider">
              <li>
                <Link
                  to="/sobre"
                  className="hover:text-white transition-colors"
                >
                  {t("nav_about")}
                </Link>
              </li>
              <li>
                <Link
                  to="/legislacao"
                  className="hover:text-white transition-colors"
                >
                  {t("nav_legis")}
                </Link>
              </li>
              <li>
                <Link to="/mapa" className="hover:text-white transition-colors">
                  {t("nav_borders")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold uppercase text-[10px] tracking-widest text-[#C5A059] mb-6 md:mb-8">
              Serviços
            </h5>
            <ul className="space-y-4 text-xs text-slate-400 uppercase font-bold tracking-wider">
              <li>
                <Link
                  to="/noticias"
                  className="hover:text-white transition-colors"
                >
                  Sala de Imprensa
                </Link>
              </li>
              <li>
                <Link
                  to="/contacto"
                  className="hover:text-white transition-colors"
                >
                  Apoio Técnico
                </Link>
              </li>
              <li>
                <a
                  title="Portal MINFIN"
                  href="https://minfin.gov.ao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Portal MINFIN
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold uppercase text-[10px] tracking-widest text-[#C5A059] mb-6 md:mb-8">
              Contactos
            </h5>
            <ul className="space-y-4 text-xs text-slate-400 font-bold">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>KM 33 – Icolo e Bengo, Luanda</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>+244 923 537 111</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] md:text-[10px] font-bold text-slate-500 uppercase tracking-widest">
          <span className="text-center md:text-left">
            © 2024 {t("gov_angola")} • {t("footer_rights")}
          </span>
          <div className="flex gap-6 md:gap-8">
            <a href="#" className="hover:text-white">
              Termos
            </a>
            <a href="#" className="hover:text-white">
              Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const AppLayout: React.FC = () => {
  const location = useLocation();
  const { t, language } = useLanguage();
  const isAdminPage = location.pathname === "/admin";

  // Atualização dinâmica do título da página (Browser Tab)
  useEffect(() => {
    const routeToTitle: Record<string, string> = {
      "/": "Home",
      "/sobre": t("nav_about_who"),
      "/composicao": t("nav_about_comp"),
      "/coordenadores": t("nav_about_coord"),
      "/secretario": t("nav_about_sec"),
      "/relatorios": t("nav_about_reports"),
      "/mapa": t("nav_borders"),
      "/corredores": t("nav_corridors"),
      "/legislacao": t("nav_legis"),
      "/noticias": t("nav_news"),
      "/contacto": t("nav_contact"),
      "/admin": t("nav_admin"),
    };

    // Lida com rotas dinâmicas como notícias e agências
    let pageTitle = routeToTitle[location.pathname] || "CGCF";
    if (location.pathname.startsWith("/noticias/")) pageTitle = t("news_room");
    if (location.pathname.startsWith("/agencia/"))
      pageTitle = t("nav_about_comp");

    document.title = `CGCF | ${pageTitle}`;
  }, [location, t, language]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {!isAdminPage && <Navbar />}
      {!isAdminPage && <div className="h-[75px] md:h-[110px]"></div>}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/composicao" element={<Composition />} />
          <Route path="/coordenadores" element={<Coordinators />} />
          <Route path="/secretario" element={<Secretary />} />
          <Route path="/relatorios" element={<Reports />} />
          <Route path="/mapa" element={<BorderMap />} />
          <Route path="/corredores" element={<Corridors />} />
          <Route path="/legislacao" element={<Legislation />} />
          <Route path="/noticias" element={<News />} />
          <Route path="/noticias/:id" element={<NewsDetail />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/agencia/:acronym" element={<AgencyDetail />} />
        </Routes>
      </main>
      {!isAdminPage && <Footer />}
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <AppLayout />
      </HashRouter>
    </LanguageProvider>
  );
}
