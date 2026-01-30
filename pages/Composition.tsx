
import React, { useState } from 'react';
import { 
  Building2, Landmark, Shield, HeartPulse, Sprout, Globe, 
  Truck, Radio, Waves, Wind, Sword, HardHat, Zap, Map, 
  PieChart, Camera, Library, Eye, Scale, Plane, Banknote, 
  ChevronRight, ArrowLeft, Info, ListFilter,
  CheckCircle2, Users, Gavel
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

const Composition: React.FC = () => {
  const { t } = useLanguage();
  const [activeSector, setActiveSector] = useState('all');

  const sectors = [
    { id: 'all', label: t('sector_all'), icon: ListFilter },
    { id: 'sovereignty', label: t('sector_sovereignty'), icon: Shield },
    { id: 'economy', label: t('sector_economy'), icon: Banknote },
    { id: 'infra', label: t('sector_infra'), icon: Truck },
    { id: 'social', label: t('sector_social'), icon: Sprout },
  ];

  const bodies = [
    { 
      sector: 'sovereignty',
      ministry: "Ministério do Interior (MININT)", 
      agencies: [
        { name: "Serviço de Migração e Estrangeiros", acronym: "SME" },
        { name: "Serviço de Investigação Criminal", acronym: "SIC" },
        { name: "Polícia de Guarda Fronteira", acronym: "PGF" }
      ],
      icon: Shield,
      color: "border-red-600"
    },
    { sector: 'sovereignty', ministry: "Ministério da Defesa Nacional", agencies: [], icon: Sword, color: "border-slate-700" },
    { sector: 'economy', ministry: "Ministério das Finanças (MINFIN)", agencies: [{ name: "Administração Geral Tributária", acronym: "AGT" }], icon: Banknote, color: "border-blue-500" },
    { sector: 'infra', ministry: "Ministério dos Transportes (MINTRANS)", agencies: [{ name: "Agência Marítima Nacional", acronym: "AMN" }], icon: Truck, color: "border-amber-500" },
    { sector: 'social', ministry: "Ministério da Saúde (MINSA)", agencies: [], icon: HeartPulse, color: "border-emerald-500" },
  ];

  const filteredBodies = activeSector === 'all' ? bodies : bodies.filter(b => b.sector === activeSector);

  return (
    <div className="animate-in fade-in duration-700 bg-slate-50 min-h-screen font-sans">
      <section className="bg-[#003366] pt-12 pb-24 border-b-[6px] border-[#C5A059] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-10">
            <Link to="/" className="hover:text-white transition-colors">{t('nav_home')}</Link>
            <span>/</span>
            <span className="text-[#C5A059]">{t('comp_title')}</span>
          </div>
          <h1 className="text-white text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-tight mb-6">
            {t('comp_title')}
          </h1>
          <p className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed max-w-2xl opacity-80">
            {t('comp_desc')}
          </p>
        </div>
      </section>

      <div className="sticky top-[75px] md:top-[110px] z-50 bg-white border-b border-slate-200 shadow-sm overflow-x-auto">
        <div className="max-w-7xl mx-auto px-6 flex gap-10 py-5">
            {sectors.map(sector => (
              <button
                key={sector.id}
                onClick={() => setActiveSector(sector.id)}
                className={`flex items-center gap-3 text-[10px] font-black uppercase tracking-widest transition-all pb-1 border-b-2 ${
                  activeSector === sector.id ? 'text-[#003366] border-[#003366]' : 'text-slate-400 border-transparent hover:text-slate-600'
                }`}
              >
                <sector.icon className="w-4 h-4" />
                {sector.label}
              </button>
            ))}
        </div>
      </div>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 bg-white border border-slate-200 p-8 rounded-lg shadow-sm flex flex-col md:flex-row items-center gap-8 border-l-[6px] border-[#003366]">
            <div className="bg-[#f1f5f9] p-5 rounded-full text-[#003366]"><Landmark className="w-8 h-8" /></div>
            <div>
              <h4 className="text-[#003366] text-xs font-black uppercase tracking-widest mb-1">{t('comp_legal_ref')}</h4>
              <p className="text-slate-500 text-sm font-medium leading-relaxed italic">{t('comp_legal_desc')}</p>
            </div>
            <Link to="/legislacao" className="bg-[#003366] text-white px-8 py-4 rounded text-[10px] font-black uppercase tracking-widest shrink-0 hover:bg-[#C5A059] transition-all">
              {t('comp_legal_btn')}
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredBodies.map((body, idx) => (
              <div key={idx} className={`bg-white border-t-[6px] ${body.color} p-10 rounded-xl shadow-sm hover:shadow-2xl transition-all flex flex-col`}>
                <h3 className="text-[#003366] text-lg font-black uppercase italic tracking-tight leading-snug mb-8">{body.ministry}</h3>
                {body.agencies.map((agency, aidx) => (
                   <div key={aidx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg mb-2">
                      <span className="text-[10px] font-bold text-slate-600">{agency.name}</span>
                      <span className="text-[9px] font-black text-[#003366] bg-white border px-2 py-0.5 rounded">{agency.acronym}</span>
                   </div>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-24 grid lg:grid-cols-2 gap-10">
             <div className="bg-[#003366] p-12 rounded-xl text-white shadow-2xl relative">
                <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-6">{t('comp_clause_title')}</h3>
                <p className="text-slate-300 text-sm font-medium leading-relaxed opacity-90">{t('comp_clause_desc')}</p>
             </div>
             <div className="bg-white border-2 border-dashed border-slate-200 p-12 rounded-xl text-center">
                <Users className="w-12 h-12 text-[#C5A059] mb-6" />
                <h3 className="text-[#003366] text-xl font-black uppercase italic mb-4">{t('comp_info_title')}</h3>
                <p className="text-slate-500 text-sm font-medium mb-8">{t('comp_info_desc')}</p>
                <Link to="/contacto" className="text-[10px] font-black uppercase text-[#003366] border-b-2 border-[#C5A059] pb-1">{t('comp_info_btn')}</Link>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Composition;
