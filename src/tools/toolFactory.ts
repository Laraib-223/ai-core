import { z } from "zod";
import { ToolContext } from "./context";

export function makeTool(
  name: string,
  description: string,
  schema: z.ZodSchema,
  execute: (input: any, context: ToolContext) => any
) {
  return {
    name,
    description,
    schema,
    execute,
  };
}