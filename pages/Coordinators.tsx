import React from "react";
import { Quote, ShieldCheck, Award, ArrowLeft, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext";
import minintImage from "../conteudo/imagens/minint.jpg";
import ministerImage from "../conteudo/imagens/ministra_financas_mensagem.jpg";

const Coordinators: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="animate-in fade-in duration-700 bg-[#f8fafc] min-h-screen">
      <section className="bg-[#003366] pt-16 pb-28 border-b-[6px] border-[#C5A059] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-white/5 skew-x-12 translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link
            to="/sobre"
            className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-[#C5A059] transition-all mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />{" "}
            {t("coord_back")}
          </Link>
          <h1 className="text-white text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-6 leading-none">
            {t("coord_title")
              .split(" ")
              .map((word, index) => (
                <span
                  key={index}
                  className={index === 1 ? "text-[#C5A059]" : ""}
                >
                  {word}{" "}
                </span>
              ))}
          </h1>
          <p className="text-slate-300 text-lg md:text-xl font-medium max-w-2xl leading-relaxed opacity-90">
            {t("coord_subtitle")}
          </p>
        </div>
      </section>

      <section className="py-20 px-6 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            <div className="bg-white border border-slate-100 rounded-sm shadow-2xl hover:border-[#C5A059] transition-all duration-500 flex flex-col group overflow-hidden">
              <div className="p-10 lg:p-14 flex flex-col h-full">
                <div className="flex flex-col items-center mb-12">
                  <div className="relative mb-8">
                    <div className="absolute -inset-4 border border-slate-100 rounded-sm group-hover:border-[#C5A059]/30 transition-colors"></div>
                    <div className="w-48 h-60 bg-slate-400 rounded-sm overflow-hidden border-4 border-white shadow-lg relative z-10 ">
                      <img
                        src={ministerImage}
                        className="w-full h-full object-cover"
                        alt="Dra. Vera Daves de Sousa"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-[#003366] text-2xl lg:text-3xl font-black uppercase italic tracking-tighter mb-2">
                      Dra. Vera Daves de Sousa
                    </h3>
                    <div className="inline-block bg-[#003366] text-white text-[9px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full">
                      {t("coord_general")}
                    </div>
                  </div>
                </div>
                <div className="relative flex-grow">
                  <Quote className="absolute -left-6 -top-10 w-20 h-20 text-slate-50 opacity-50 -z-0" />
                  <p className="relative z-10 text-slate-700 text-lg lg:text-xl font-medium leading-relaxed italic text-center px-4">
                    "{t("coord_quote_fonseca")}"
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-100 rounded-sm shadow-2xl hover:border-[#C5A059] transition-all duration-500 flex flex-col group overflow-hidden">
              <div className="p-10 lg:p-14 flex flex-col h-full">
                <div className="flex flex-col items-center mb-12">
                  <div className="relative mb-8">
                    <div className="absolute -inset-4 border border-slate-100 rounded-sm group-hover:border-[#C5A059]/30 transition-colors"></div>
                    <div className="w-48 h-60 bg-slate-400 rounded-sm overflow-hidden border-4 border-white shadow-lg relative z-10 ">
                      <img
                        src={minintImage}
                        className="w-full h-full object-cover"
                        alt="Dr. Manuel Gomes Conceição Homem"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-[#003366] text-2xl lg:text-3xl font-black uppercase italic tracking-tighter mb-2">
                      Eng. Manuel Conceição Homem
                    </h3>
                    <div className="inline-block bg-[#C5A059] text-white text-[9px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full">
                      {t("coord_adjunct")}
                    </div>
                  </div>
                </div>
                <div className="relative flex-grow">
                  <Quote className="absolute -left-6 -top-10 w-20 h-20 text-slate-50 opacity-50 -z-0" />
                  <p className="relative z-10 text-slate-700 text-lg lg:text-xl font-medium leading-relaxed italic text-center px-4">
                    "{t("coord_quote_helena")}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Coordinators;
