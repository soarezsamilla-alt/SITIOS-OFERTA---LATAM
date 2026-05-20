'use server';
/**
 * @fileOverview Un flujo Genkit para recomendar proyectos agrícolas adecuados basados en los detalles de la tierra proporcionados por el usuario.
 *
 * - recommendProject - Una función que recibe detalles de la tierra y devuelve una lista de proyectos agrícolas recomendados.
 * - ProjectRecommendationInput - El tipo de entrada para la función recommendProject.
 * - ProjectRecommendationOutput - El tipo de retorno para la función recommendProject.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const ProjectRecommendationInputSchema = z.object({
  landSize: z
    .number()
    .describe('El tamaño de la tierra en hectáreas (ej: 0.5, 1, 2, 3, 5).'),
  location: z
    .string()
    .describe('La ubicación geográfica de la tierra (ej: "Antioquia, Colombia").'),
  climate: z
    .string()
    .describe(
      'Las condiciones climáticas de la tierra (ej: "Tropical Húmedo", "Sabana Tropical", "Zona Semiárida", "Zona Templada", "Zona Andina").'
    ),
  desiredAgriculturalOutput: z
    .string()
    .describe(
      'El tipo de productos agrícolas en los que el usuario está interesado (ej: "café", "frutas y hortalizas", "ganadería lechera", "piscicultura", "agroforestería", "avicultura", "cerdos", "apicultura").'
    ),
});
export type ProjectRecommendationInput = z.infer<
  typeof ProjectRecommendationInputSchema
>;

const ProjectRecommendationOutputSchema = z.object({
  recommendations: z.array(
    z.object({
      name: z.string().describe('El nombre del proyecto recomendado.'),
      description: z
        .string()
        .describe('Una breve descripción técnica del proyecto recomendado.'),
      reason:
        z.string().describe('Por qué este proyecto es adecuado según los criterios proporcionados.'),
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
  prompt: `Eres un consultor agrícola experto en proyectos de fincas productivas en América Latina.
Tu objetivo es recomendar proyectos adecuados de un catálogo de más de 100 opciones, basándote en los detalles de la tierra del usuario y en el producto deseado.

Usa la siguiente información para generar tus recomendaciones. Proporciona como máximo 3 recomendaciones en ESPAÑOL (LATINOAMÉRICA).

Detalles de la Tierra del Usuario:
- Tamaño de la Tierra: {{{landSize}}} hectáreas
- Ubicación Geográfica: {{{location}}}
- Condiciones Climáticas: {{{climate}}}
- Producción Deseada: {{{desiredAgriculturalOutput}}}

Información del Catálogo (para tu referencia):
- Proyectos categorizados por tamaño (0.5ha, 1ha, 2ha, 3ha, 5ha).
- Proyectos por vocación: Café, frutas y hortalizas, piscicultura, ganadería lechera, agroforestería, avicultura, cerdos, apicultura.
- Climas: Tropical Húmedo, Sabana Tropical, Zona Semiárida, Zona Templada, Zona Andina.

Recomienda proyectos que mejor se ajusten a los criterios. Para cada recomendación, proporciona:
1. Un 'name' (nombre) para el proyecto.
2. Una 'description' (descripción) técnica.
3. Un 'reason' (motivo) explicando la adecuación.

Asegúrate de que las recomendaciones sean realistas. Si no hay un ajuste directo, sugiere la alternativa más cercana. Responde siempre en español neutro de Latinoamérica.
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
