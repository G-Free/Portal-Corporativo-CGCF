
import React from 'react';
import { MOCK_NEWS } from '../constants';
import { Info, Megaphone, Zap } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const NewsTicker: React.FC = () => {
  const { t } = useLanguage();
  
  // Combine news with specific institutional systems info
  const tickerItems = [
    t('ticker_sirof'),
    t('ticker_sgo'),
    ...MOCK_NEWS.map(n => n.title),
    t('hero_legal'),
    "Atenção: Novo protocolo de interoperabilidade digital em vigor.",
    "Reforço na vigilância do Corredor do Lobito e Moçâmedes.",
    "Isenção de vistos para mais de 90 países - Turismo em expansão.",
    "CGCF: Sinergia para o desenvolvimento económico nacional."
  ];

  return (
    <div className="bg-[#C5A059] border-y border-[#b08b4a] py-3 overflow-hidden relative z-40 group">
      <div className="absolute left-0 top-0 bottom-0 px-6 bg-[#C5A059] z-10 flex items-center shadow-[10px_0_15px_rgba(197,160,89,0.5)]">
        <div className="flex items-center gap-2 text-[#003366] font-black text-[10px] uppercase tracking-widest">
          <Megaphone className="w-4 h-4" />
          <span className="hidden sm:inline">Últimas Notificações</span>
        </div>
      </div>
      
      <div className="animate-marquee whitespace-nowrap pl-[180px]">
        {/* We repeat the items to ensure continuous scroll */}
        {[...tickerItems, ...tickerItems].map((text, i) => (
          <div key={i} className="inline-flex items-center gap-4 px-8">
            <Zap className="w-3 h-3 text-[#003366] opacity-50" />
            <span className="text-[#003366] text-[10px] font-black uppercase tracking-widest italic">
              {text}
            </span>
          </div>
        ))}
      </div>

      <div className="absolute right-0 top-0 bottom-0 px-4 bg-gradient-to-l from-[#C5A059] to-transparent z-10 w-20 pointer-events-none"></div>
    </div>
  );
};

export default NewsTicker;
