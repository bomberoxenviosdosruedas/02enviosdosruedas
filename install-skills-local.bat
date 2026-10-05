@echo off
REM Instala todas las skills recomendadas LOCALMENTE en .agents/skills/
REM (sin flag -g, para que solo estén disponibles en este repo)
REM Usa -y y --agent '*' para modo no interactivo

echo 🔧 Instalando skills LOCALMENTE en .agents\skills\...

REM Asegurar que existe el directorio
if not exist ".agents\skills" (
    mkdir ".agents\skills"
    echo   📁 Creado: .agents\skills
)

REM Lista de skills a instalar
set SKILLS=^
 vercel-labs/agent-skills@vercel-react-best-practices ^
 vercel-labs/agent-skills@vercel-optimize ^
 addyosmani/agent-skills@performance-optimization ^
 anthropics/skills@frontend-design ^
 leonxlnx/taste-skill@design-taste-frontend ^
 leonxlnx/taste-skill@redesign-existing-projects ^
 pbakaus/impeccable@impeccable ^
 greensock/gsap-skills@gsap-react ^
 greensock/gsap-skills@gsap-performance ^
 secondsky/claude-skills@tailwind-v4-shadcn ^
 lombiq/tailwind-agent-skills@tailwind-4-docs ^
 vercel-labs/agent-skills@web-design-guidelines ^
 vercel-labs/agent-skills@vercel-composition-patterns ^
 cloudflare/skills@web-perf

set INSTALLED=0
set FAILED=0

for %%S in (%SKILLS%) do (
    echo.
    echo   ⬇️  Instalando: %%S
    npx skills add %%S -y --agent "*"
    if errorlevel 1 (
        echo   ❌ FALLÓ: %%S
        set /a FAILED+=1
    ) else (
        echo   ✅ OK: %%S
        set /a INSTALLED+=1
    )
)

echo.
echo ========== RESUMEN ==========
echo ✅ Instaladas: %INSTALLED%
echo ❌ Fallaron: %FAILED%
echo.
echo 📂 Skills locales en: .agents\skills\
dir /b ".agents\skills" 2>nul
echo.
echo ✨ Listo. Reiniciá el agente para que cargue las nuevas skills.