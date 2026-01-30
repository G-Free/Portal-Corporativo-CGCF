
import React, { useState } from 'react';
import { MOCK_LEGISLATION } from '../constants';
import { Search, Download, FileText, Eye, Calendar, FileDown } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Link } from 'react-router-dom';

const Legislation: React.FC = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = MOCK_LEGISLATION.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAction = (type: 'view' | 'download', title: string) => {
    const action = type === 'view' ? 'Visualizando' : 'Iniciando download de';
    alert(`${action}: ${title}\n(Em ambiente de produção, esta acção abriria o repositório oficial do Diário da República)`);
  };

  return (
    <div className="min-h-screen bg-[#f1f5f9] animate-in fade-in duration-700">
      {/* Header Institucional Centralizado */}
      <section className="bg-[#003366] pt-16 pb-24 border-b-4 border-[#C5A059]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-10">
             <Link to="/" className="hover:text-white transition-colors">Início</Link>
             <span>/</span>
             <span className="text-[#C5A059]">Legislação</span>
          </div>
          <h1 className="text-white text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4 leading-none">
            {t('legis_repo')}
          </h1>
          <p className="text-slate-300 text-base md:text-lg font-medium max-w-2xl leading-relaxed mb-12">
            {t('legis_desc')}
          </p>
          
          {/* Busca Centralizada */}
          <div className="relative w-full max-w-xl mx-auto">
             <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
             <input 
                type="text" 
                placeholder={t('legis_search')}
                className="w-full pl-14 pr-6 py-5 rounded-sm bg-white border border-slate-200 text-sm font-bold focus:ring-4 focus:ring-[#C5A059]/10 outline-none transition-all shadow-2xl text-slate-700 placeholder:text-slate-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
             />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-sm overflow-hidden shadow-sm">
           <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50 border-b border-slate-200">
                 <tr>
                    <th className="p-6 text-[10px] font-black uppercase text-slate-500 tracking-widest">Documento</th>
                    <th className="p-6 text-[10px] font-black uppercase text-slate-500 tracking-widest hidden md:table-cell text-center">Tipo</th>
                    <th className="p-6 text-[10px] font-black uppercase text-slate-500 tracking-widest hidden md:table-cell text-center">Data</th>
                    <th className="p-6 text-[10px] font-black uppercase text-slate-500 tracking-widest text-right">Ações</th>
                 </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                 {filtered.map(item => (
                    <tr key={item.id} className="hover:bg-slate-50 transition-colors group">
                       <td className="p-6">
                          <div className="flex gap-4 items-center">
                             <div className="w-10 h-10 bg-slate-50 rounded flex items-center justify-center border border-slate-100 text-[#003366] group-hover:bg-[#003366] group-hover:text-white transition-all shrink-0">
                                <FileText className="w-5 h-5" />
                             </div>
                             <div>
                                <h3 className="text-sm font-bold text-[#003366] mb-1 group-hover:text-[#C5A059] transition-colors uppercase tracking-tight leading-tight">{item.title}</h3>
                                <p className="text-[10px] font-medium text-slate-500 line-clamp-1">{item.description}</p>
                             </div>
                          </div>
                       </td>
                       {/* Colunas Visíveis apenas em MD+ */}
                       <td className="p-6 hidden md:table-cell text-center">
                          <span className="px-3 py-1 bg-slate-100 text-[#003366] text-[9px] font-black uppercase tracking-widest rounded-sm border border-slate-200 whitespace-nowrap">
                             {item.type}
                          </span>
                       </td>
                       <td className="p-6 hidden md:table-cell text-center">
                          <span className="text-[10px] font-black text-slate-400 flex items-center justify-center gap-2 uppercase whitespace-nowrap">
                             <Calendar className="w-3.5 h-3.5" /> {item.date}
                          </span>
                       </td>
                       <td className="p-6 text-right">
                          <div className="flex justify-end items-center gap-2">
                             <button 
                               onClick={() => handleAction('view', item.title)}
                               title="Visualizar Documento"
                               className="p-2.5 text-slate-400 hover:text-[#003366] transition-all bg-slate-50 hover:bg-slate-100 rounded-sm border border-slate-200"
                             >
                               <Eye className="w-4 h-4" />
                             </button>
                             
                             {/* Botão de Download com Icone e Tooltip */}
                             <div className="flex items-center gap-1">
                               <button 
                                 onClick={() => handleAction('download', item.title)}
                                 title="Baixar PDF"
                                 className="p-2.5 text-white bg-[#003366] hover:bg-[#C5A059] transition-all rounded-sm flex items-center gap-2"
                               >
                                 <Download className="w-4 h-4" />
                                 <span className="text-[8px] font-black uppercase tracking-widest hidden lg:inline">Baixar PDF</span>
                               </button>
                             </div>
                          </div>
                       </td>
                    </tr>
                 ))}
              </tbody>
           </table>
           
           {filtered.length === 0 && (
             <div className="p-20 text-center">
                <FileDown className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Nenhum documento encontrado.</p>
             </div>
           )}
        </div>
      </section>
    </div>
  );
};

export default Legislation;
