import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./LanguageContext";
import MainLayout from "./components/MainLayout";

// Páginas
import Home from "./pages/Home";
import About from "./pages/About";
import Composition from "./pages/Composition";
import Organogram from "./pages/Organogram";
import Coordinators from "./pages/Coordinators";
import Secretary from "./pages/Secretary";
import Reports from "./pages/Reports";
import Legislation from "./pages/Legislation";
import BorderMap from "./pages/BorderMap";
import Dashboard from "./pages/Dashboard";
import SirofDashboard from "./pages/SirofDashboard";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Contact from "./pages/Contact";
import AgencyDetail from "./pages/AgencyDetail";
import Corridors from "./pages/Corridors";
import Interoperability from "./pages/Interoperability";

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <HashRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/composicao" element={<Composition />} />
            <Route path="/organigrama" element={<Organogram />} />
            <Route path="/coordenadores" element={<Coordinators />} />
            <Route path="/secretario" element={<Secretary />} />
            <Route path="/relatorios" element={<Reports />} />
            <Route path="/mapa" element={<BorderMap />} />
            <Route path="/corredores" element={<Corridors />} />
            <Route path="/interoperabilidade" element={<Interoperability />} />
            <Route path="/legislacao" element={<Legislation />} />
            <Route path="/noticias" element={<News />} />
            <Route path="/noticias/:id" element={<NewsDetail />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/sirof" element={<SirofDashboard />} />
            <Route path="/agencia/:acronym" element={<AgencyDetail />} />
          </Routes>
        </MainLayout>
      </HashRouter>
    </LanguageProvider>
  );
};

export default App;
