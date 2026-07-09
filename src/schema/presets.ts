import { z } from "zod";

export const AnswerSchema = z.object({
  answer: z.string(),
  status: z.enum(["continue", "finalize", "abort"]),
});

export type Answer = z.infer<typeof AnswerSchema>;

export function shouldContinue(status: string) {
  return status === "continue";
}