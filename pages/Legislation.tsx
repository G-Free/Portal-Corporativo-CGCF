
import React, { useState } from 'react';
import { MOCK_LEGISLATION } from '../constants';
import { Search, Download, FileText, Eye, Calendar } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Link } from 'react-router-dom';

const Legislation: React.FC = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = MOCK_LEGISLATION.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f1f5f9] animate-in fade-in duration-700">
      {/* Header Institucional Padrão */}
      <section className="bg-[#003366] pt-16 pb-24 border-b-4 border-[#C5A059]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-10">
             <Link to="/" className="hover:text-white transition-colors">Início</Link>
             <span>/</span>
             <span className="text-[#C5A059]">Legislação</span>
          </div>
          <h1 className="text-white text-5xl font-black uppercase italic tracking-tighter mb-4 leading-none">
            {t('legis_repo')}
          </h1>
          <p className="text-slate-300 text-lg font-medium max-w-2xl leading-relaxed mb-10">
            {t('legis_desc')}
          </p>
          
          <div className="relative max-w-2xl">
             <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
             <input 
                type="text" 
                placeholder={t('legis_search')}
                className="w-full pl-16 pr-6 py-5 rounded-sm bg-white border border-slate-200 text-sm font-bold focus:ring-4 focus:ring-[#C5A059]/10 outline-none transition-all shadow-xl"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
             />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-sm overflow-hidden shadow-sm">
           <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50 border-b border-slate-200">
                 <tr>
                    <th className="p-6 text-[10px] font-black uppercase text-slate-500 tracking-widest">Documento</th>
                    <th className="p-6 text-[10px] font-black uppercase text-slate-500 tracking-widest hidden md:table-cell">Tipo</th>
                    <th className="p-6 text-[10px] font-black uppercase text-slate-500 tracking-widest hidden md:table-cell">Data</th>
                    <th className="p-6 text-[10px] font-black uppercase text-slate-500 tracking-widest text-right">Acções</th>
                 </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                 {filtered.map(item => (
                    <tr key={item.id} className="hover:bg-slate-50 transition-colors group">
                       <td className="p-6">
                          <div className="flex gap-4">
                             <div className="w-10 h-10 bg-slate-50 rounded flex items-center justify-center border border-slate-100 text-[#003366] group-hover:bg-[#003366] group-hover:text-white transition-all">
                                <FileText className="w-5 h-5" />
                             </div>
                             <div>
                                <h3 className="text-sm font-bold text-[#003366] mb-1 group-hover:text-[#C5A059] transition-colors uppercase tracking-tight">{item.title}</h3>
                                <p className="text-[10px] font-medium text-slate-500 line-clamp-1">{item.description}</p>
                             </div>
                          </div>
                       </td>
                       <td className="p-6 hidden md:table-cell">
                          <span className="px-3 py-1 bg-slate-100 text-[#003366] text-[9px] font-black uppercase tracking-widest rounded-sm border border-slate-200">
                             {item.type}
                          </span>
                       </td>
                       <td className="p-6 hidden md:table-cell">
                          <span className="text-[10px] font-black text-slate-400 flex items-center gap-2 uppercase">
                             <Calendar className="w-3.5 h-3.5" /> {item.date}
                          </span>
                       </td>
                       <td className="p-6 text-right">
                          <div className="flex justify-end gap-2">
                             <button className="p-2 text-slate-400 hover:text-[#003366] transition-all"><Eye className="w-4 h-4" /></button>
                             <button className="p-2 text-slate-400 hover:text-[#003366] transition-all"><Download className="w-4 h-4" /></button>
                          </div>
                       </td>
                    </tr>
                 ))}
              </tbody>
           </table>
        </div>
      </section>
    </div>
  );
};

export default Legislation;
