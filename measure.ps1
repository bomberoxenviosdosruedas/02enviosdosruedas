$paths = @("AGENTS.md", "DESIGN.md", "DESIGN_OPTIMIZADO_2.1.md", "MEJORAS_SISTEMA_DISEÑO.md", "INFORME_OPTIMIZACION_DISEÑO_2026.md", "PROJECT.md", "README.md", "SEO_AUDIT_REPORT.md", "SKILLS.md", "FLOW_IMAGE_PROMPTS.md", "prompts-3d-typography-envios-express.md", "prompts-express-hero-inline.md", "docs")
$files = Get-ChildItem -Path $paths -Recurse -Include *.md,*.html -ErrorAction SilentlyContinue

$totalLines = 0
$totalChars = 0

foreach ($f in $files) {
    $lines = (Get-Content $f.FullName).Count
    $chars = $f.Length
    $tokens = [math]::Round($chars / 4)
    $totalLines += $lines
    $totalChars += $chars
    $relPath = $f.FullName.Replace("C:\Users\prest\proyectos\02enviosdosruedas\", "")
    Write-Host "$relPath | Líneas: $lines | Tokens est.: $tokens"
}

$totalTokens = [math]::Round($totalChars / 4)
Write-Host "========================================"
Write-Host "TOTAL DOCUMENTOS: $($files.Count)"
Write-Host "TOTAL LÍNEAS: $totalLines"
Write-Host "TOTAL TOKENS ESTIMADOS: $totalTokens"
