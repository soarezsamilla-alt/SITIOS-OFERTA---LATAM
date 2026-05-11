
'use server';
/**
 * @fileOverview Um fluxo Genkit para recomendar projetos agrícolas adequados com base nos detalhes da terra fornecidos pelo usuário.
 *
 * - recommendProject - Uma função que recebe detalhes da terra e retorna uma lista de projetos agrícolas recomendados.
 * - ProjectRecommendationInput - O tipo de entrada para a função recommendProject.
 * - ProjectRecommendationOutput - O tipo de retorno para a função recommendProject.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const ProjectRecommendationInputSchema = z.object({
  landSize: z
    .number()
    .describe('O tamanho da terra em hectares (ex: 0.5, 1, 2, 3, 5).'),
  location: z
    .string()
    .describe('A localização geográfica da terra (ex: "Minas Gerais, Brasil").'),
  climate: z
    .string()
    .describe(
      'As condições climáticas da terra (ex: "Tropical Úmido", "Savana Tropical", "Zona Semiárida", "Zona Temperada", "Zona Andina").'
    ),
  desiredAgriculturalOutput: z
    .string()
    .describe(
      'O tipo de produtos agrícolas nos quais o usuário está interessado (ex: "café", "hortifruti", "pecuária leiteira", "piscicultura", "agrofloresta", "avicultura", "suinocultura", "apicultura").'
    ),
});
export type ProjectRecommendationInput = z.infer<
  typeof ProjectRecommendationInputSchema
>;

const ProjectRecommendationOutputSchema = z.object({
  recommendations: z.array(
    z.object({
      name: z.string().describe('O nome do projeto recomendado.'),
      description: z
        .string()
        .describe('Uma breve descrição do projeto recomendado.'),
      reason:
        z.string().describe('Por que este projeto é adequado com base nos critérios fornecidos.'),
    })
  ),
});
export type ProjectRecommendationOutput = z.infer<
  typeof ProjectRecommendationOutputSchema
>;

const projectRecommendationPrompt = ai.definePrompt({
  name: 'projectRecommendationPrompt',
  input: { schema: ProjectRecommendationInputSchema },
  output: { schema: ProjectRecommendationOutputSchema },
  prompt: `Você é um consultor agrícola especialista em projetos de fazendas produtivas na América Latina.
Seu objetivo é recomendar projetos adequados de um catálogo de mais de 100 opções, com base nos detalhes da terra do usuário e no produto desejado.

Use as seguintes informações para gerar suas recomendações. Forneça no máximo 3 recomendações em PORTUGUÊS (BRASIL).

Detalhes da Terra do Usuário:
- Tamanho da Terra: {{{landSize}}} hectares
- Localização Geográfica: {{{location}}}
- Condições Climáticas: {{{climate}}}
- Produção Desejada: {{{desiredAgriculturalOutput}}}

Informações do Catálogo (para sua referência):
- Projetos categorizados por tamanho (0.5ha, 1ha, 2ha, 3ha, 5ha).
- Projetos por vocação: Café, hortifruti, piscicultura, pecuária leiteira, agrofloresta, avicultura, suinocultura, apicultura.
- Climas: Tropical Úmido, Savana Tropical, Zona Semiárida, Zona Templada, Zona Andina.

Recomende projetos que melhor se ajustem aos critérios. Para cada recomendação, forneça:
1. Um 'name' (nome) para o projeto.
2. Uma 'description' (descrição) técnica.
3. Um 'reason' (motivo) explicando a adequação.

Certifique-se de que as recomendações sejam realistas. Se não houver um ajuste direto, sugira a alternativa mais próxima. Responda sempre em português.
`,
});

const recommendProjectFlow = ai.defineFlow(
  {
    name: 'recommendProjectFlow',
    inputSchema: ProjectRecommendationInputSchema,
    outputSchema: ProjectRecommendationOutputSchema,
  },
  async (input) => {
    const { output } = await projectRecommendationPrompt(input);
    return output!;
  }
);

export async function recommendProject(
  input: ProjectRecommendationInput
): Promise<ProjectRecommendationOutput> {
  return recommendProjectFlow(input);
}
