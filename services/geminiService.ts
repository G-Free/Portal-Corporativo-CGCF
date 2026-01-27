// geminiServices.ts -> agora usando OpenAI
import OpenAI from "openai";

export const getLatestBorderInsights = async (
  query: string,
  language: string = "PT",
) => {
  if (!process.env.OPENAI_API_KEY) {
    return { text: "Serviço de IA indisponível (chave ausente).", sources: [] };
  }

  try {
    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // Monta o prompt no estilo militar, máximo 3 tópicos curtos
    const prompt = `
Gere um RESUMO EXECUTIVO institucional sobre: ${query}.
Idioma de resposta obrigatório: ${language === "PT" ? "Português de Angola" : language === "EN" ? "English" : "Français"}.
Estilo: Relatório de inteligência militar, máximo 3 tópicos curtos. Sem saudações.
`;

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini", // modelo rápido e econômico, você pode usar gpt-4 se tiver acesso
      messages: [{ role: "user", content: prompt }],
      temperature: 0.3, // deixa mais objetivo
    });

    const text =
      response.choices?.[0]?.message?.content || "Sem síntese disponível.";

    // OpenAI não fornece sources diretamente, então deixamos vazio
    const sources: { title: string; url: string }[] = [];

    return { text, sources };
  } catch (error) {
    console.error("AI Error:", error);
    return { text: "Falha na recuperação de dados estratégicos.", sources: [] };
  }
};
