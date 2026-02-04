import React from "react";
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import logo from "../conteudo/imagens/logo_sistema_5.png";

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#001f3f] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <img src={logo} alt="Logo" className="w-32 md:w-40 mb-6" />
            <p className="text-slate-400 text-sm leading-relaxed">
              {t("footer_desc")}
            </p>
          </div>
          <div>
            <h5 className="font-black text-[10px] uppercase text-[#C5A059] tracking-widest mb-8">
              Institucional
            </h5>
            <ul className="text-xs text-slate-400 font-bold space-y-4 uppercase">
              <li>
                <Link to="/sobre">{t("nav_about_who")}</Link>
              </li>
              <li>
                <Link to="/composicao">{t("nav_about_comp")}</Link>
              </li>
              <li>
                <Link to="/legislacao">{t("nav_legis")}</Link>
              </li>
              <li>
                <Link to="/mapa">{t("nav_borders")}</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-black text-[10px] uppercase text-[#C5A059] tracking-widest mb-8">
              Governação
            </h5>
            <ul className="text-xs text-slate-400 font-bold space-y-4 uppercase">
              <li>
                <Link to="/coordenadores">{t("nav_about_coord")}</Link>
              </li>
              <li>
                <Link to="/secretario">{t("nav_about_sec")}</Link>
              </li>
              <li>
                <Link to="/relatorios">{t("nav_about_reports")}</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-black text-[10px] uppercase text-[#C5A059] tracking-widest mb-8">
              Sede
            </h5>
            <p className="text-xs text-slate-400 font-bold leading-relaxed uppercase tracking-wider">
              {t("footer_hq")}
              <br />
              {t("gov_angola")}
            </p>
          </div>
        </div>
        <div className="pt-10 border-t border-white/10 text-center text-[10px] font-black text-slate-500 uppercase tracking-widest">
          {t("footer_rights")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
