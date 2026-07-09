import { portkey } from "./portkeyClient.js";

export async function aiGateway(question: string) {
  const response = await portkey.chat.completions.create({
    model: "anthropic/claude-3-5-haiku",
    messages: [
      {
        role: "user",
        content: question
      }
    ]
  });

  return response;
}