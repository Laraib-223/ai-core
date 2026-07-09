export type ToolContext = {
  toolCalls: number;
  logs: string[];
};

export const createToolContext = (): ToolContext => ({
  toolCalls: 0,
  logs: [],
});