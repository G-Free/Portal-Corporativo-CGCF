
import React from 'react';
import { ArrowLeft, Download, FileText, Calendar, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

const Reports: React.FC = () => {
  const { t } = useLanguage();
  const documents = [
    { title: 'Relatório Anual de Desempenho 2023', type: 'Relatório Anual', year: '2023', size: '4.2 MB' },
    { title: 'Plano Estratégico para o Quinquénio 2026-2030', type: 'Planeamento', year: '2026', size: '2.8 MB' },
    { title: 'Manual de Procedimentos Fronteiriços Coordenados', type: 'Instrução Técnica', year: '2024', size: '5.1 MB' },
    { title: 'Impacto da Digitalização Adueaneira - Q1 2026', type: 'Relatório Trimestral', year: '2026', size: '1.5 MB' },
    { title: 'Diagnóstico das Infraestruturas do Corredor do Lobito', type: 'Relatório Técnico', year: '2024', size: '8.4 MB' },
  ];

  const handleDownload = (title: string) => {
    alert(`Download: ${title}`);
  };

  return (
    <div className="animate-in fade-in duration-700 bg-slate-50 min-h-screen">
      <section className="bg-[#003366] pt-16 pb-24 border-b-4 border-[#C5A059]">
        <div className="max-w-7xl mx-auto px-6">
          <Link to="/sobre" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-300 hover:text-white transition-colors mb-12">
             <ArrowLeft className="w-4 h-4" /> {t('back_to_start')}
          </Link>
          <h1 className="text-white text-5xl font-black uppercase italic tracking-tighter mb-4 leading-none">
            {t('reports_title')}
          </h1>
          <p className="text-slate-300 text-lg font-medium max-w-2xl leading-relaxed">
            {t('reports_desc')}
          </p>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
           <aside className="w-full lg:w-72 shrink-0">
              <div className="bg-white p-8 border border-slate-200 rounded-sm">
                 <h3 className="text-[#003366] text-[10px] font-black uppercase tracking-widest mb-8 flex items-center gap-2">
                    <Filter className="w-3.5 h-3.5" /> {t('nav_admin')}
                 </h3>
                 <div className="space-y-6">
                    <div>
                       <label className="text-[8px] font-black uppercase text-slate-400 block mb-2">Categoria</label>
                       <select className="w-full bg-slate-50 border border-slate-100 text-[10px] font-bold p-3 outline-none">
                          <option>Todas</option>
                       </select>
                    </div>
                 </div>
              </div>
           </aside>

           <div className="flex-grow">
              <div className="grid sm:grid-cols-2 gap-6">
                 {documents.map((doc, i) => (
                    <div key={i} className="bg-white border border-slate-200 p-8 rounded-sm hover:border-[#C5A059] hover:shadow-2xl transition-all group flex flex-col h-full">
                       <div className="flex justify-between items-start mb-6">
                          <div className="w-12 h-12 bg-slate-50 rounded flex items-center justify-center text-[#003366] group-hover:bg-[#003366] group-hover:text-white transition-all">
                             <FileText className="w-6 h-6" />
                          </div>
                          <span className="text-[8px] font-black uppercase text-slate-400 bg-slate-50 px-2 py-1">{doc.year}</span>
                       </div>
                       <h3 className="text-[#003366] text-lg font-black uppercase italic tracking-tight mb-4 group-hover:text-[#C5A059] transition-colors">{doc.title}</h3>
                       <div className="mt-auto space-y-6">
                          <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-widest text-slate-400">
                             <span className="flex items-center gap-2"><Calendar className="w-3 h-3" /> {doc.type}</span>
                             <span>{doc.size}</span>
                          </div>
                          <button 
                            onClick={() => handleDownload(doc.title)}
                            className="w-full py-4 bg-slate-50 group-hover:bg-[#003366] group-hover:text-white text-[#003366] text-[9px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3"
                          >
                             <Download className="w-4 h-4" /> {t('legis_btn_download')}
                          </button>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Reports;
