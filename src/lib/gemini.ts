import { GoogleGenAI } from "@google/genai";

let client: GoogleGenAI | null = null;

export function getGeminiClient(): GoogleGenAI {
  if (!client) {
    // Read API key from environment variables
    const apiKey = process.env.GEMINI_API_KEY || "";
    client = new GoogleGenAI({ apiKey });
  }
  return client;
}
