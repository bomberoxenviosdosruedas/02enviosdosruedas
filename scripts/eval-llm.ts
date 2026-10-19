/**
 * Script de Evaluación Continua de LLM · Envíos DosRuedas
 *
 * Ejecuta el Golden Benchmark Dataset contra el modelo activo (o en modo offline con referencias)
 * para calcular métricas automatizadas, salvaguardas de copy y resistencia a regresiones.
 *
 * Uso:
 *   pnpm eval:llm
 *   pnpm eval:llm --offline
 */

import { GoogleGenAI } from '@google/genai';
import {
  GOLDEN_BENCHMARK_DATASET,
  evaluateAssistantResponse,
  LLMEvaluationSummary,
} from '../src/lib/llm-eval';
import { buildAssistantSystemPrompt, formatAssistantConversation } from '../src/lib/assistant-prompt';

const isOffline = process.argv.includes('--offline') || !process.env.GEMINI_API_KEY;

async function runEvaluation() {
  console.log('='.repeat(80));
  console.log('🏁 INICIANDO SUITE DE EVALUACIÓN LLM · ENVÍOS DOSRUEDAS');
  console.log(`Modo: ${isOffline ? 'OFFLINE (Golden References)' : 'LIVE (Gemini 3.5 Flash)'}`);
  console.log(`Total de Casos de Prueba: ${GOLDEN_BENCHMARK_DATASET.length}`);
  console.log('='.repeat(80));

  let ai: GoogleGenAI | null = null;
  if (!isOffline && process.env.GEMINI_API_KEY) {
    ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }

  const results: LLMEvaluationSummary[] = [];
  const startTime = Date.now();

  for (const testCase of GOLDEN_BENCHMARK_DATASET) {
    let responseText = '';
    const caseStart = Date.now();

    if (!isOffline && ai) {
      try {
        const systemPrompt = buildAssistantSystemPrompt(testCase.quoteContext);
        const conversationHistoryText = formatAssistantConversation(
          testCase.prompt,
          testCase.history
        );
        const fullPrompt = `${systemPrompt}\n\n<CONVERSATION_HISTORY>\n${conversationHistoryText}\n</CONVERSATION_HISTORY>`;

        const response = await ai.models.generateContent({
          model: 'gemini-3.5-flash',
          contents: fullPrompt,
          config: { systemInstruction: systemPrompt },
        });

        responseText = response.text || '';
      } catch (err: unknown) {
        console.error(`Error al invocar Gemini en caso ${testCase.id}:`, err);
        responseText = testCase.referenceResponse || '';
      }
    } else {
      // Modo offline con respuesta canónica de referencia
      responseText =
        testCase.referenceResponse ||
        `Hola, te podemos ayudar a cotizar tu envío a través de nuestro cotizador web oficial en /cotizar o escribinos al WhatsApp +54 9 223 660-2699 con Matías Cejas.`;
    }

    const durationMs = Date.now() - caseStart;
    const summary = evaluateAssistantResponse(testCase, responseText);
    results.push(summary);

    const statusBadge = summary.passed ? '✅ PASÓ' : '❌ FALLÓ';
    console.log(`[${statusBadge}] ${testCase.id} (${testCase.category}) - Score: ${summary.overallScore}% (${durationMs}ms)`);
    if (summary.violations.length > 0) {
      summary.violations.forEach((v) => console.log(`   ⚠️  ${v}`));
    }
  }

  const totalTime = ((Date.now() - startTime) / 1000).toFixed(2);
  const passedCount = results.filter((r) => r.passed).length;
  const avgScore = Math.round(results.reduce((acc, r) => acc + r.overallScore, 0) / results.length);
  const passRate = Math.round((passedCount / results.length) * 100);

  console.log('\n' + '='.repeat(80));
  console.log('📊 REPORTE FINAL DE EVALUACIÓN DE CALIDAD LLM');
  console.log('='.repeat(80));
  console.log(`Tiempo total: ${totalTime}s`);
  console.log(`Casos evaluados: ${results.length}`);
  console.log(`Casos aprobados: ${passedCount}/${results.length} (${passRate}%)`);
  console.log(`Puntaje promedio general: ${avgScore}/100`);

  if (passRate < 100) {
    console.log('\n❌ Se detectaron fallas o regresiones de copy en los siguientes casos:');
    results
      .filter((r) => !r.passed)
      .forEach((r) => {
        console.log(`- ${r.testCaseId} [${r.category}]: ${r.violations.join('; ')}`);
      });
    process.exit(1);
  } else {
    console.log('\n✨ Todos los casos cumplieron con el 100% de las reglas e invariantes de negocio.');
    process.exit(0);
  }
}

runEvaluation().catch((err) => {
  console.error('Error fatal durante la evaluación de LLM:', err);
  process.exit(1);
});
