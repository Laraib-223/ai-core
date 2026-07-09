import "dotenv/config";
import express from "express";
import { askAgent } from "./agent/claude.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("AI Core Running");
});

app.post("/ask", async (req, res) => {
    try {
        const { question } = req.body;
        if (!question) {
            return res.status(400).json({ error: "Missing required parameter 'question'" });
        }

        // Call the orchestrator pipeline
        const result = await askAgent(question);
        
        // Directly send back the validated structured JSON object
        res.json(result);

    } catch (error: any) {
        console.error("Express Route Error:", error);
        res.status(500).json({
            error: "AI failed",
            details: error.message
        });
    }
});

app.listen(3000, () => {
    console.log("Server Started on http://localhost:3000");
});