
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ShieldCheck, Landmark, ChevronRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#f1f5f9] animate-in fade-in duration-700">
      {/* Header Institucional Padrão */}
      <section className="bg-[#003366] pt-16 pb-24 border-b-4 border-[#C5A059]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-10">
             <Link to="/" className="hover:text-white transition-colors">Início</Link>
             <span>/</span>
             <span className="text-[#C5A059]">Contactos</span>
          </div>
          <h1 className="text-white text-5xl font-black uppercase italic tracking-tighter mb-4 leading-none">
            {t('contact_title')}
          </h1>
          <p className="text-slate-300 text-lg font-medium max-w-2xl leading-relaxed">
            {t('contact_intro')}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Informações de Contacto */}
          <div className="lg:col-span-5 space-y-12">
            <div>
               <h3 className="text-[#003366] text-xs font-black uppercase tracking-widest mb-10 flex items-center gap-3">
                 <div className="w-8 h-1 bg-[#C5A059]"></div>
                 {t('contact_channels')}
               </h3>
               
               <div className="space-y-10">
                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 bg-white border border-slate-200 flex items-center justify-center rounded-sm text-[#003366] group-hover:border-[#C5A059] transition-all shrink-0 shadow-sm">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2">{t('contact_hq')}</h4>
                      <p className="text-[#003366] font-bold leading-relaxed">
                        Centro Logístico Aduaneiro<br/>
                        KM 33 – Icolo e Bengo, Luanda
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 bg-white border border-slate-200 flex items-center justify-center rounded-sm text-[#003366] group-hover:border-[#C5A059] transition-all shrink-0 shadow-sm">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2">{t('contact_support')}</h4>
                      <p className="text-[#003366] font-black text-2xl tracking-tighter">
                        923 537 111
                      </p>
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Segunda a Sexta, 08h00 - 15h00</span>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 bg-white border border-slate-200 flex items-center justify-center rounded-sm text-[#003366] group-hover:border-[#C5A059] transition-all shrink-0 shadow-sm">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2">{t('contact_email')}</h4>
                      <p className="text-[#003366] font-bold">geral@cgcf.gov.ao</p>
                      <p className="text-[#C5A059] font-bold">suporte@cgcf.gov.ao</p>
                    </div>
                  </div>
               </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white p-12 md:p-16 rounded-sm border border-slate-200 shadow-2xl relative overflow-hidden">
                 <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-10">
                       <div className="w-12 h-12 bg-slate-50 border border-slate-100 flex items-center justify-center text-[#C5A059] shadow-inner">
                          <ShieldCheck className="w-6 h-6" />
                       </div>
                       <div>
                          <h3 className="text-[#003366] text-2xl font-black uppercase italic tracking-tight">{t('contact_form_title')}</h3>
                          <p className="text-slate-400 text-[9px] font-black uppercase tracking-[0.2em] mt-1">Soberania e Transparência Digital</p>
                       </div>
                    </div>

                    {submitted ? (
                      <div className="py-16 text-center animate-in zoom-in duration-300">
                         <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Send className="w-10 h-10" />
                         </div>
                         <h4 className="text-[#003366] text-xl font-black uppercase mb-4 tracking-tighter italic">Protocolo Submetido</h4>
                         <p className="text-slate-500 font-medium text-sm">O seu pedido foi registado no sistema central. Receberá uma notificação oficial no seu e-mail institucional.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-12">
                        <div className="grid md:grid-cols-1 gap-12">
                          <div>
                            <label className="block text-[10px] font-black uppercase text-slate-400 mb-4 tracking-wider">Nome Completo</label>
                            <input title="Nome completo" required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-sm px-5 py-4 text-slate-700 outline-none font-bold text-sm focus:border-[#C5A059] transition-all" />
                          </div>
                          <div>
                            <label className="block text-[10px] font-black uppercase text-slate-400 mb-3 tracking-wider">E-mail Institucional</label>
                            <input title="E-mail institucional" required type="email" className="w-full bg-slate-50 border border-slate-200 rounded-sm px-5 py-4 text-slate-700 outline-none font-bold text-sm focus:border-[#C5A059] transition-all" />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-[10px] font-black uppercase text-slate-400 mb-3 tracking-wider">Assunto do Protocolo</label>
                          <select title="Assunto do protocolo" className="w-full bg-slate-50 border border-slate-200 rounded-sm px-5 py-4 text-slate-700 outline-none font-black text-[10px] uppercase tracking-widest focus:border-[#C5A059] transition-all">
                             <option>Apoio Técnico ao Sistema</option>
                             <option>Consulta de Legislação Fronteiriça</option>
                             <option>Informação sobre Posto Específico</option>
                             <option>Outros Assuntos Institucionais</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-[10px] font-black uppercase text-slate-400 mb-3 tracking-wider">Exposição de Motivos</label>
                          <textarea title="Exposição de motivos do protocolo" required rows={5} className="w-full bg-slate-50 border border-slate-200 rounded-sm px-5 py-4 text-slate-700 outline-none font-medium text-sm focus:border-[#C5A059] transition-all resize-none"></textarea>
                        </div>

                        <button type="submit" className="w-full bg-[#003366] hover:bg-[#002244] text-white font-black py-5 rounded-sm uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-4 transition-all shadow-xl group">
                           {t('contact_form_submit')} <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </form>
                    )}
                 </div>
                 
                 <div className="absolute -bottom-12 -right-12 opacity-[0.03] pointer-events-none">
                    <Landmark className="w-64 h-64" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
