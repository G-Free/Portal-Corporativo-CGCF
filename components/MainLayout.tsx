
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLanguage } from '../LanguageContext';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();
  const { t, language } = useLanguage();
  const isAdminPage = location.pathname === '/admin';

  // Sincronização do título do navegador (Document Title)
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

    let pageTitle = routeToTitle[location.pathname] || 'CGCF';
    
    // Tratamento para rotas dinâmicas
    if (location.pathname.startsWith('/noticias/')) pageTitle = t('news_room');
    if (location.pathname.startsWith('/agencia/')) pageTitle = t('nav_about_comp');

    document.title = `CGCF | ${pageTitle}`;
    
    // Scroll to top ao mudar de rota
    window.scrollTo(0, 0);
  }, [location.pathname, t, language]);

  // Se for página administrativa, renderizamos sem Navbar/Footer padrão
  if (isAdminPage) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      {/* Spacer para compensar o Navbar fixo */}
      <div className="h-[75px] md:h-[110px]"></div>
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
