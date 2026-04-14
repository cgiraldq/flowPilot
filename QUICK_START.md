# ⚡ GUÍA RÁPIDA: 5 PASOS PARA COMPLETAR LA PRUEBA

## 🎯 TU CHECKLIST

### **PASO 1: VIDEO DEMO (15 min) ⏳**

**Opción A: Loom (Recomendado)**
```
1. loom.com/download → Chrome extension
2. Abre otra ventana con un dashboard/figma
3. Click Loom → "Start recording"
4. Graba narración 70 segundos (guion abajo)
5. Descarga MP4
6. YouTube → Upload (no listado)
7. Copia VIDEO_ID de URL (youtu.be/VIDEO_ID)
```

**Guion de 70 segundos:**
```
"Hola, soy de FlowPilot. Los equipos pierden 70% de tiempo 
buscando decisiones antigas.

Con FlowPilot, cada conversación se convierte automáticamente en:
- Decisiones claras
- Responsables
- Fechas límite
- Contexto completo

La IA organiza todo. Tú solo colaboras. 

[Navega rápido por mockup/dashboard]

Aquí ves la conversación. La IA resumió: "Modelo freemium $29/mes".
Responsable: Juan. Vence: 15 abril.

Todo conectado. Nada se pierde.

Prueba gratis 14 días. Sin tarjeta de crédito.
Ingresa en FlowPilot.app"
```

---

### **PASO 2: INTEGRAR VIDEO (5 min) ⏳**

**Archivo**: `app/components/VideoModal.tsx`

Reemplaza en la línea donde dice:
```
src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
```

Con tu VIDEO_ID:
```
src="https://www.youtube.com/embed/TU_VIDEO_ID_AQUI?autoplay=1"
```

**Ejemplo real**:
```
Si tu URL es: youtu.be/abc123def456

Entonces VIDEO_ID = abc123def456

URL final = https://www.youtube.com/embed/abc123def456?autoplay=1
```

---

### **PASO 3: LOCAL TESTING (10 min) ✅**

```bash
# Terminal
cd /Users/cgiraldq/pruebaTec/flowpilot-landing
npm run dev

# Abre localhost:3000

# Testa:
✓ Click "Acceso anticipado" → Abre modal
✓ Llena form → Click submit → Muestra "¡Listo!"
✓ Click "Ver demo video" → Video aparece
✓ Video reproduce
✓ Scroll suave, animaciones OK
✓ Mobile responsive (F12)
```

---

### **PASO 4: DEPLOY (10 min) 🚀**

**Opción A: Vercel (Más fácil)**
```bash
# Terminal
npm i -g vercel
vercel

# Follow prompts:
# Link folder? → Yes
# Deploy from current dir? → Yes
# Install? → Yes

# OUTPUT: https://flowpilot-landing.vercel.app
```

**Opción B: Via Dashboard (Más visual)**
```
1. vercel.com → Login
2. Import project
3. Selecciona repo GitHub
4. Click Deploy
5. Espera ~60 segundos
```

---

### **PASO 5: VERIFICACIÓN FINAL (5 min) ✅**

En tu URL vivo (vercel.app):
```
✓ Todo carga rápido
✓ Botones funcionan
✓ Modales abren
✓ Video reproduce
✓ Mobile se ve bien
✓ No hay errores (F12)
```

---

## 📋 VERSIÓN ULTRA-RÁPIDA (Si tienes poco tiempo)

### **15 Minutos Total**

```
1. Usa VIDEO_ID placeholder: dQw4w9WgXcQ (ya está)
2. npm run dev  (verifica local)
3. vercel       (deploy)
4. ✓ Listo

Luego reemplazas video cuando lo tengas.
```

---

## 🎬 VIDEOS DE REFERENCIA (Sin grabar)

Si no tienes tiempo, usa estos:
- Product video: dQw4w9WgXcQ
- Slack demo: coCR_u0nkFc
- Notion demo: eYksZt6UfCE

Ejemplo en VideoModal.tsx:
```jsx
src="https://www.youtube.com/embed/coCR_u0nkFc?autoplay=1"
```

---

## ❌ SI ALGO FALLA

**Video no carga**:
```
Verifica formato URL:
✓ https://www.youtube.com/embed/VIDEO_ID
✗ https://youtu.be/VIDEO_ID
✗ https://youtube.com/watch?v=VIDEO_ID
```

**Modal no abre**:
```
Abre F12 → Console → busca errores
Probablemente import o syntax error
npm run dev → verifica en terminal
```

**Deploy falla en Vercel**:
```
npm run build    (verifica que funciona local)
git add .
git commit -m "fix"
git push
```

---

## 📊 ESTADO ACTUAL

```
✅ Landing completa
✅ Modales funcionando
✅ Animaciones OK
✅ Responsive
⏳ Video demo (ESTE PASO)
⏳ Deploy en Vercel (SIGUIENTE)
```

---

## 🏁 META FINAL

```
URL Vivo: https://flowpilot-landing.vercel.app
✓ Landing funciona 100%
✓ Video plays
✓ Modales interactivos
✓ Analytics ready
```

---

## ⏱️ TIEMPO TOTAL

- Paso 1 (Video): 15-20 min
- Paso 2 (Código): 5 min  
- Paso 3 (Testing): 10 min
- Paso 4 (Deploy): 10 min
- Paso 5 (Verify): 5 min

**TOTAL: ~55 minutos**

---

**¿Listo? Comienza por PASO 1 👆**
