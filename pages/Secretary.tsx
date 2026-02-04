import React from "react";
import {
  Quote,
  FileText,
  ArrowLeft,
  Workflow,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext";
import secretarioimage from '../conteudo/imagens/image.jpg';

const Secretary: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="animate-in fade-in duration-700 bg-white min-h-screen">
      <section className="bg-[#003366] pt-16 pb-24 border-b-4 border-[#C5A059]">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            to="/sobre"
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-300 hover:text-white transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" /> {t("back_to_start")}
          </Link>
          <h1 className="text-white text-5xl font-black uppercase italic tracking-tighter mb-4 leading-none">
            {t("sec_title")}
          </h1>
          <p className="text-slate-300 text-lg font-medium max-w-2xl leading-relaxed">
            {t("sec_subtitle")}
          </p>
        </div>
      </section>

      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="w-full md:w-72 shrink-0">
            <div className="w-full aspect-[3/4] bg-slate-100 rounded-sm border-b-8 border-[#C5A059] shadow-2xl overflow-hidden mb-6">
              <img
                src={secretarioimage}
                className="w-full h-full object-cover"
                alt="Dr. José Leiria"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-[#003366] text-xl font-black uppercase italic tracking-tight">
                Dr. José Leiria
              </h3>
              <p className="text-[#C5A059] text-[10px] font-black uppercase tracking-widest mt-1">
                {t("nav_about_sec")}
              </p>
            </div>
          </div>

          <div className="flex-grow">
            <div className="bg-slate-50 p-12 rounded-sm border-l-8 border-[#C5A059] relative">
              <Quote className="absolute right-8 top-8 w-16 h-16 text-slate-200/50" />
              <p className="text-slate-700 text-xl font-medium leading-relaxed italic mb-8 relative z-10">
                "{t("sec_quote_paulo")}"
              </p>
              <div className="space-y-6 pt-8 border-t border-slate-200">
                <h4 className="text-[#003366] text-[10px] font-black uppercase tracking-widest">
                  {t("sec_priorities")}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-center gap-4 text-xs font-bold text-slate-500">
                    <Workflow className="w-5 h-5 text-[#C5A059]" />{" "}
                    {t("sec_p1")}
                  </div>
                  <div className="flex items-center gap-4 text-xs font-bold text-slate-500">
                    <Clock className="w-5 h-5 text-[#C5A059]" /> {t("sec_p2")}
                  </div>
                  <div className="flex items-center gap-4 text-xs font-bold text-slate-500">
                    <ShieldCheck className="w-5 h-5 text-[#C5A059]" />{" "}
                    {t("sec_p3")}
                  </div>
                  <div className="flex items-center gap-4 text-xs font-bold text-slate-500">
                    <FileText className="w-5 h-5 text-[#C5A059]" />{" "}
                    {t("sec_p4")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Secretary;
