#!/bin/bash

# FlowPilot Landing - Test & Verification Checklist
# Este script facilita la validación rápida de la landing page

echo "🔍 FlowPilot Landing - Verificación Completa"
echo "==========================================="
echo ""

# 1. Validar build
echo "✓ Paso 1: Validar compilación..."
npm run build > /dev/null 2>&1
if [ $? -eq 0 ]; then
  echo "  ✅ Build completado sin errores"
else
  echo "  ❌ Build fallido. Ver detalles con: npm run build"
  exit 1
fi

echo ""
echo "✓ Paso 2: Validar estructura de archivos..."

FILES_TO_CHECK=(
  "app/page.tsx"
  "app/layout.tsx"
  "app/globals.css"
  "tailwind.config.js"
  "app/components/Header.tsx"
  "app/components/Hero.tsx"
  "app/components/Features.tsx"
  "app/components/Benefits.tsx"
  "app/components/SocialProof.tsx"
  "app/components/FinalCTA.tsx"
  "app/components/Footer.tsx"
)

MISSING=0
for file in "${FILES_TO_CHECK[@]}"; do
  if [ -f "$file" ]; then
    echo "  ✅ $file"
  else
    echo "  ❌ $file - FALTANTE"
    MISSING=$((MISSING + 1))
  fi
done

if [ $MISSING -eq 0 ]; then
  echo "  ✅ Todos los archivos presentes"
else
  echo "  ⚠️  $MISSING archivos faltantes"
fi

echo ""
echo "✓ Paso 3: Verificar dependencias..."
PACKAGES="framer-motion lucide-react tailwindcss"
for pkg in $PACKAGES; do
  if npm list $pkg > /dev/null 2>&1; then
    echo "  ✅ $pkg instalado"
  else
    echo "  ❌ $pkg NON instalado"
  fi
done

echo ""
echo "==========================================="
echo "📋 LISTA DE VERIFICACIÓN MANUAL"
echo "==========================================="
echo ""
echo "Ejecuta: npm run dev"
echo "Luego abre: http://localhost:3000"
echo ""
echo "Verifica visualmente:"
echo "  [ ] Header con logo FlowPilot"
echo "  [ ] Menú de navegación en desktop"
echo "  [ ] Menú móvil colapsable (pantalla pequeña)"
echo "  [ ] Hero section con título y CTAs"
echo "  [ ] 3 características con iconos"
echo "  [ ] Sección de beneficios con métricas"
echo "  [ ] Logos de empresas"
echo "  [ ] 2 testimonios con estrellas (5 estrellas)"
echo "  [ ] CTA final con 2 botones"
echo "  [ ] Footer con redes sociales (iconos SVG)"
echo ""
echo "Verifica interactividad:"
echo "  [ ] Hover effects en botones"
echo "  [ ] Animaciones al hacer scroll"
echo "  [ ] Menú móvil abre/cierra correctamente"
echo "  [ ] Enlaces de navegación funcionan"
echo ""
echo "Verifica tipografía:"
echo "  [ ] Fuente Inter cargada globalmente"
echo "  [ ] Textos sin fuente por defecto"
echo ""
echo "==========================================="
echo "✅ Listo para prueba. Ejecuta:"
echo "   npm run dev"
echo "==========================================="
