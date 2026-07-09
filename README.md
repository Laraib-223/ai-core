Project Structure
```text
ai-core/
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
