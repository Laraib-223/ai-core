import { z } from "zod";

export const AIResponseSchema = z.object({
  answer: z.string(),
  confidence: z.number(),
  shouldContinue: z.boolean(),
  toolInput: z.string().optional() // <--- Add this line right here!
});

export type AIResponse = z.infer<typeof AIResponseSchema>;