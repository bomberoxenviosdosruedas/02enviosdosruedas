import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getGeminiClient } from "@/lib/gemini";
import { buildAssistantSystemPrompt, formatAssistantConversation } from "@/lib/assistant-prompt";

// Force dynamic execution for API endpoints using system env vars
export const dynamic = "force-dynamic";

const assistantInputSchema = z.object({
  prompt: z.string().trim().min(1, "Se requiere un mensaje del usuario.").max(1000, "El mensaje no puede superar 1000 caracteres."),
  history: z
    .array(
      z.object({
        sender: z.string().max(50),
        text: z.string().max(1000),
      })
    )
    .max(10)
    .optional(),
  quoteContext: z.record(z.string(), z.unknown()).optional().nullable(),
});

export async function POST(req: NextRequest) {
  // Verificación perimetral de origen para mitigar abuso automatizado entre sitios
  const secFetchSite = req.headers.get("sec-fetch-site");
  if (secFetchSite === "cross-site") {
    return NextResponse.json(
      { error: "Acceso no autorizado desde origen cruzado." },
      { status: 403 }
    );
  }

  try {
    const rawBody = await req.json();
    const parseResult = assistantInputSchema.safeParse(rawBody);

    if (!parseResult.success) {
      const isMissingPrompt = !rawBody?.prompt || String(rawBody.prompt).trim() === "";
      return NextResponse.json(
        { error: isMissingPrompt ? "Se requiere un mensaje del usuario." : parseResult.error.issues[0]?.message || "Datos de entrada inválidos." },
        { status: 400 }
      );
    }

    const { prompt, history, quoteContext } = parseResult.data;

    const ai = getGeminiClient();

    // Contexto oficial unificado para el asistente
    const systemPrompt = buildAssistantSystemPrompt(quoteContext);

    // Formatear historial con delimitadores claros contra Prompt Injection
    const conversationHistoryText = formatAssistantConversation(prompt, history);

    const fullPrompt = `${systemPrompt}\n\n<CONVERSATION_HISTORY>\n${conversationHistoryText}\n</CONVERSATION_HISTORY>`;

    // Solicitar respuesta de Gemini
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: fullPrompt,
      config: {
        systemInstruction: systemPrompt,
      },
    });

    const replyText = response.text || "Disculpas, estoy experimentando un breve retraso en la ruta de datos. ¿Podrías volver a consultarme?";

    return NextResponse.json({ text: replyText });
  } catch (error: unknown) {
    // Log the real error server-side only — never expose internal messages to the client
    if (error instanceof Error) {
      console.error("Error in Assistant API route:", error.message);
    } else {
      console.error("Error in Assistant API route (unknown):", error);
    }
    return NextResponse.json(
      { error: "El asistente no está disponible en este momento. Intentá de nuevo en unos minutos." },
      { status: 500 }
    );
  }
}
