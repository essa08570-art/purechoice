'use server';
/**
 * @fileOverview A Genkit flow that synthesizes product pros and cons from product descriptions and reviews.
 *
 * - generateProductProsCons - A function that handles the generation of pros and cons.
 * - GenerateProductProsConsInput - The input type for the generateProductProsCons function.
 * - GenerateProductProsConsOutput - The return type for the generateProductProsCons function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateProductProsConsInputSchema = z.object({
  productName: z.string().describe('The name of the product.'),
  productDescription: z.string().describe('A detailed description of the product.'),
  userReviews: z.string().describe('A concatenated string of user reviews for the product.'),
});
export type GenerateProductProsConsInput = z.infer<typeof GenerateProductProsConsInputSchema>;

const GenerateProductProsConsOutputSchema = z.object({
  pros: z.array(z.string()).describe('A list of advantages or positive aspects of the product.'),
  cons: z.array(z.string()).describe('A list of disadvantages or negative aspects of the product.'),
});
export type GenerateProductProsConsOutput = z.infer<typeof GenerateProductProsConsOutputSchema>;

export async function generateProductProsCons(input: GenerateProductProsConsInput): Promise<GenerateProductProsConsOutput> {
  return generateProductProsConsFlow(input);
}

const productProsConsPrompt = ai.definePrompt({
  name: 'productProsConsPrompt',
  input: { schema: GenerateProductProsConsInputSchema },
  output: { schema: GenerateProductProsConsOutputSchema },
  prompt: `You are an expert product analyst. Your task is to synthesize the key pros and cons of a product based on its description and user reviews.

Product Name: {{{productName}}}
Product Description: {{{productDescription}}}

User Reviews:
"""
{{{userReviews}}}
"""

Carefully analyze the provided information. Extract the most salient positive points for the 'pros' list and the most significant negative points for the 'cons' list. Each point should be concise and insightful.

Ensure the output is a JSON object with two fields: 'pros' and 'cons', where each is an array of strings.`,
});

const generateProductProsConsFlow = ai.defineFlow(
  {
    name: 'generateProductProsConsFlow',
    inputSchema: GenerateProductProsConsInputSchema,
    outputSchema: GenerateProductProsConsOutputSchema,
  },
  async (input) => {
    const { output } = await productProsConsPrompt(input);
    return output!;
  }
);
