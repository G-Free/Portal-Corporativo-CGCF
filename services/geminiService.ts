
import { GoogleGenAI } from "@google/genai";

export const getLatestBorderInsights = async (query: string, language: string = 'PT') => {
  if (!process.env.API_KEY) {
    return { text: "Serviço de IA indisponível (chave ausente).", sources: [] };
  }
  
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Gere um RESUMO EXECUTIVO institucional sobre: ${query}. 
      Idioma de resposta obrigatório: ${language === 'PT' ? 'Português de Angola' : language === 'EN' ? 'English' : 'Français'}.
      Estilo: Relatório de inteligência militar, máximo 3 tópicos curtos. Sem saudações.`,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    return {
      text: response.text || "Sem síntese disponível.",
      sources: sources.map((chunk: any) => ({
        title: chunk.web?.title || 'Referência Oficial',
        url: chunk.web?.uri || '#'
      }))
    };
  } catch (error) {
    console.error("AI Error:", error);
    return { text: "Falha na recuperação de dados estratégicos.", sources: [] };
  }
};
