'use server';
/**
 * @fileOverview A Genkit flow for recommending suitable farm projects based on user-provided land details.
 *
 * - recommendProject - A function that takes land details and returns a list of recommended farm projects.
 * - ProjectRecommendationInput - The input type for the recommendProject function.
 * - ProjectRecommendationOutput - The return type for the recommendProject function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const ProjectRecommendationInputSchema = z.object({
  landSize: z
    .number()
    .describe('The size of the land in hectares (e.g., 0.5, 1, 2, 3, 5).'),
  location: z
    .string()
    .describe('The geographical location of the land (e.g., "Veracruz, Mexico").'),
  climate: z
    .string()
    .describe(
      'The climate conditions of the land (e.g., "Tropical Húmedo", "Sabana Tropical", "Zona Semiárida", "Zona Templada", "Zona Andina").'
    ),
  desiredAgriculturalOutput: z
    .string()
    .describe(
      'The type of agricultural products the user is interested in (e.g., "café", "hortifruti", "ganadería lechera", "piscicultura", "agroforestería", "avicultura", "porcinocultura", "apicultura").'
    ),
});
export type ProjectRecommendationInput = z.infer<
  typeof ProjectRecommendationInputSchema
>;

const ProjectRecommendationOutputSchema = z.object({
  recommendations: z.array(
    z.object({
      name: z.string().describe('The name of the recommended project.'),
      description: z
        .string()
        .describe('A brief description of the recommended project.'),
      reason:
        z.string().describe('Why this project is suitable based on the provided criteria.'),
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
  prompt: `You are an expert agricultural consultant for productive farm projects in Latin America.
Your goal is to recommend suitable farm projects from a catalog of over 100 options, based on the user's land details and desired agricultural output.

Use the following information to generate your recommendations. Provide a maximum of 3 recommendations.

User Land Details:
- Land Size: {{{landSize}}} hectares
- Geographical Location: {{{location}}}
- Climate Conditions: {{{climate}}}
- Desired Agricultural Output: {{{desiredAgriculturalOutput}}}

Project Catalog Information (for your reference):
- Projects are categorized by land size (0.5ha, 1ha, 2ha, 3ha, 5ha).
- Projects are categorized by productive vocation: Café, hortifruti, piscicultura, ganadería lechera, agroforestería, avicultura, porcinocultura, apicultura.
- Projects are categorized by climatic region: Tropical Húmedo, Sabana Tropical, Zona Semiárida, Zona Templada, Zona Andina.
- There are also Special Projects like Organic certified, permaculture, agrotourism, home agroindustry, renewable energy.

Recommend projects that best fit the user's criteria. For each recommendation, provide:
1. A 'name' for the project.
2. A 'description' of the project.
3. A 'reason' explaining why it is suitable, referencing the user's input and project catalog categories.

Make sure the recommendations are realistic and align with the provided categories. If a direct match isn't possible, suggest a close alternative or combination, explaining your reasoning.
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
