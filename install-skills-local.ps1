#!/usr/bin/env pwsh
<#
.SYNOPSIS
    Instala todas las skills recomendadas LOCALMENTE en .agents/skills/
    (sin flag -g, para que solo estén disponibles en este repo)
#>

$ErrorActionPreference = "Stop"

Write-Host "🔧 Instalando skills LOCALMENTE en .agents/skills/..." -ForegroundColor Cyan

# Asegurar que existe el directorio
$skillsDir = Join-Path $PSScriptRoot ".agents\skills"
if (-not (Test-Path $skillsDir)) {
    New-Item -ItemType Directory -Path $skillsDir -Force | Out-Null
    Write-Host "  📁 Creado: $skillsDir" -ForegroundColor Green
}

# Lista de skills a instalar (formato: "owner/repo@skill")
$skills = @(
    # RENDIMIENTO (Prioridad 🔴)
    "vercel-labs/agent-skills@vercel-react-best-practices"
    "vercel-labs/agent-skills@vercel-optimize"
    "addyosmani/agent-skills@performance-optimization"
    
    # DISEÑO GRÁFICO / UI (Prioridad 🟠)
    "anthropics/skills@frontend-design"
    "leonxlnx/taste-skill@design-taste-frontend"
    "leonxlnx/taste-skill@redesign-existing-projects"
    "pbakaus/impeccable@impeccable"
    
    # GSAP / MOTION (Prioridad 🟠)
    "greensock/gsap-skills@gsap-react"
    "greensock/gsap-skills@gsap-performance"
    
    # TAILWIND v4 / DESIGN SYSTEM (Prioridad 🟡)
    "secondsky/claude-skills@tailwind-v4-shadcn"
    "lombiq/tailwind-agent-skills@tailwind-4-docs"
    
    # EXTRAS ÚTILES
    "vercel-labs/agent-skills@web-design-guidelines"
    "vercel-labs/agent-skills@vercel-composition-patterns"
    "cloudflare/skills@web-perf"
)

$installed = @()
$failed = @()

foreach ($skill in $skills) {
    Write-Host "`n  ⬇️  Instalando: $skill" -ForegroundColor Yellow
    try {
        # npx skills add <skill> (sin -g = local to .agents/skills/)
        $result = npx skills add $skill 2>&1
        if ($LASTEXITCODE -eq 0) {
            Write-Host "     ✅ OK" -ForegroundColor Green
            $installed += $skill
        } else {
            Write-Host "     ❌ FALLÓ (exit code $LASTEXITCODE)" -ForegroundColor Red
            Write-Host "     $result" -ForegroundColor Gray
            $failed += @{ Skill = $skill; Error = $result }
        }
    } catch {
        Write-Host "     ❌ EXCEPCIÓN: $_" -ForegroundColor Red
        $failed += @{ Skill = $skill; Error = $_.ToString() }
    }
}

Write-Host "`n========== RESUMEN ==========" -ForegroundColor Cyan
Write-Host "✅ Instaladas: $($installed.Count)" -ForegroundColor Green
$installed | ForEach-Object { Write-Host "   - $_" -ForegroundColor Green }

if ($failed.Count -gt 0) {
    Write-Host "`n❌ Fallaron: $($failed.Count)" -ForegroundColor Red
    $failed | ForEach-Object { Write-Host "   - $($_.Skill): $($_.Error)" -ForegroundColor Red }
}

Write-Host "`n📂 Skills locales en: $skillsDir" -ForegroundColor Cyan
Get-ChildItem $skillsDir -Directory | ForEach-Object { Write-Host "   - $($_.Name)" -ForegroundColor Gray }

Write-Host "`n✨ Listo. Reiniciá el agente para que cargue las nuevas skills." -ForegroundColor Cyan