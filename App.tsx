
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
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const AppLayout: React.FC = () => {
  const location = useLocation();
  const { t, language } = useLanguage();
  const isAdminPage = location.pathname === '/admin';

  // Atualização dinâmica do título da página (Browser Tab)
  useEffect(() => {
    const routeToTitle: Record<string, string> = {
      '/': 'Home',
      '/sobre': t('nav_about_who'),
      '/composicao': t('nav_about_comp'),
      '/coordenadores': t('nav_about_coord'),
      '/secretario': t('nav_about_sec'),
      '/relatorios': t('nav_about_reports'),
      '/mapa': t('nav_borders'),
      '/corredores': t('nav_corridors'),
      '/legislacao': t('nav_legis'),
      '/noticias': t('nav_news'),
      '/contacto': t('nav_contact'),
      '/admin': t('nav_admin')
    };

    // Lida com rotas dinâmicas como notícias e agências
    let pageTitle = routeToTitle[location.pathname] || 'CGCF';
    if (location.pathname.startsWith('/noticias/')) pageTitle = t('news_room');
    if (location.pathname.startsWith('/agencia/')) pageTitle = t('nav_about_comp');

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

