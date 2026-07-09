# FlyRank AI Core - Backend Engine (Checkpoint 1)

A production-grade Backend AI Service built with TypeScript and Node.js. This repository implements an orchestrator pipeline utilizing the Anthropic Claude-3.5-Sonnet model via the Portkey AI Gateway framework. The service is structurally enforced via rigorous schema type checking and runtime validation guardrails.

##  Core Architectural Patterns

This engine explicitly satisfies the four core backend patterns for AI agent infrastructure:

1. **Portkey AI Gateway Framework:** The LLM integration is completely decoupled using the `portkey` API platform, enabling seamless, single-line configuration provider/model swaps without breaking client-side integrations.
2. **Structured Output Ingestion:** Leverages `zod` object parsing schemas (`AIResponseSchema`) to ensure that unstructured model generation strings are tightly marshaled into valid runtime structures (`answer`, `confidence`, `shouldContinue`, `toolInput`).
3. **Flow Gate Control Interception:** Implements a strict execution gate analyzing the parsed structural intent `shouldContinue` to drive downstream state evaluation or safely exit processing loops.
4. **Decoupled Tool Factory Architecture:** Evaluates requested behaviors over internal mock database datasets (`data/products.ts`) via a centralized switch-pattern registry (`executeTool`).
5. **Output Boundary Safety Guardrail:** Implements an advanced, lexical analysis mechanism (`validateDynamicSql`). Unlike traditional query cleaning, this guardrail acts strictly at the **output boundary**, intercepting untrusted, model-generated inputs *prior* to reaching execution sinks.

---

##  Project Structure

```text
flyrank-ai-core/
├── src/
│   ├── agent/       # Orchestrator orchestration logic (claude.ts)
│   ├── data/        # Mock structural local datastores (products.ts)
│   ├── gateway/     # Portkey configuration client initializers
│   ├── guardrails/  # Input & output lexical safety sanitization blocks
│   ├── schema/      # Zod validation and types definitions
│   ├── tools/       # Core tool factory switch registration loops
│   └── index.ts     # Main Express.js application listener root
├── tsconfig.json    # TypeScript compiler options
└── package.json     # Project dependencies configuration
