# 🎬 Video Demo: Opciones Reales

## Videos de Referencia (Plataformas similares)

### 1. **Slack - Referencia de Formato**
- URL: https://www.youtube.com/embed/coCR_u0nkFc
- Duración: 60s
- Estilo: Producción profesional + testimonios

### 2. **Notion - Alternativa minimalista**
- URL: https://www.youtube.com/embed/eYksZt6UfCE
- Duración: 90s
- Estilo: Screen recording + texto overlay

### 3. **Linear - Demo técnica**
- URL: https://www.youtube.com/embed/NPXHpoDKuhA
- Duración: 75s
- Estilo: Navegación de producto

---

## Videos Placeholder (Usar ahora, reemplazar después)

### ✅ Video Placeholder Genérico (Rick Roll 😄)
- **ID**: dQw4w9WgXcQ
- **Usar**: Mientras creas el tuyo
- **Replacear con**: Tu VIDEO_ID cuando esté listo

### Videos Técnicos (SaaS)
- **Vercel Demo**: zRCdLKR7i2M
- **Next.js Intro**: 2NVkgVgceKU
- **React Hooks**: TNhaIjx5Kbs

---

## 🎥 Cómo Crear TU Video Demo

### **Mejor opción: Loom (Recomendado)**

Pasos JSON (para tu referencia):
```json
{
  "pasos": [
    {
      "numero": 1,
      "titulo": "Instalar Loom",
      "acciones": [
        "Ir a loom.com/download",
        "Descargar Chrome Extension",
        "Permitir acceso a pantalla"
      ]
    },
    {
      "numero": 2,
      "titulo": "Preparar escenas",
      "duracion": "70 segundos total",
      "escenas": [
        {
          "nombre": "Intro",
          "duracion": "5s",
          "contenido": "Presentación + problema"
        },
        {
          "nombre": "Demo",
          "duracion": "45s",
          "contenido": "Navegar por dashboard"
        },
        {
          "nombre": "CTA",
          "duracion": "20s",
          "contenido": "Prueba gratis + cierre"
        }
      ]
    },
    {
      "numero": 3,
      "titulo": "Grabar",
      "acciones": [
        "Click ícono Loom",
        "Seleccionar pantalla",
        "Grabar con narración",
        "Detener cuando termine"
      ]
    },
    {
      "numero": 4,
      "titulo": "Convertir a YouTube",
      "acciones": [
        "Descargar MP4 desde Loom",
        "Subir a YouTube (no listado)",
        "Copiar VIDEO_ID",
        "Pegar en VideoModal.tsx"
      ]
    }
  ]
}
```

---

## 📹 Script de Guion (70 segundos)

### **Intro (5s)**
```
"Hola, bienvenido a FlowPilot.

La mayoría de equipos pierden 70% del tiempo 
buscando decisiones antigas en conversaciones perdidas.

Hoy te mostramos cómo cambiar eso."
```

### **Demo (45s)**
```
"Con FlowPilot, cada conversación 
se convierte automáticamente en:

✓ Decisiones clara
✓ Responsables  
✓ Fechas límite
✓ Contexto completo

La IA organiza todo. Tú solo colaboras.

[NAVEGA POR MOCKUP/DASHBOARD RÁPIDO]

Mira, aquí está la conversación.
La IA resumió automáticamente.

Conversión: 'Decidimos modelo freemium $29/mes'
Responsable: Juan
Vence: 15 de abril

Todo conectado. Nada se pierde."
```

### **CTA (20s)**
```
"¿Listo para que tu equipo sea más productivo?

Prueba FlowPilot completamente gratis. 14 días.
Sin tarjeta de crédito.

Ingresa en FlowPilot.app o usa el link 
en la descripción.

Organiza tu equipo hoy."
```

---

## 🎬 Alternativa: Video Dinámico (Código)

Si prefieres generar video programáticamente:

```bash
# 1. Instalar dependencias
npm install ffmpeg-static fluent-ffmpeg canvas

# 2. Generar video
node scripts/generate-video.js

# 3. Output: /public/videos/flowpilot-demo.mp4

# 4. Usar en landing:
<video src="/videos/flowpilot-demo.mp4" />
```

Ventajas:
- ✅ Personalizable 100%
- ✅ No depende de Loom
- ✅ Reutilizable

Desventajas:
- ⚠️ Necesita node-canvas
- ⚠️ Más tiempo setup

---

## 🔗 Integrar Video en Landing

### **Opción 1: YouTube Embed (Más fácil)**

```tsx
// En VideoModal.tsx
<iframe
  src="https://www.youtube.com/embed/TU_VIDEO_ID?autoplay=1"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write"
  allowFullScreen
/>
```

### **Opción 2: Video Local (Más control)**

```tsx
<video 
  src="/videos/demo.mp4"
  controls
  autoPlay
  muted
  loop
/>
```

### **Opción 3: HLS Stream (Profesional)**

```tsx
// npm install hls.js
import HLS from 'hls.js'

useEffect(() => {
  const video = videoRef.current
  const hls = new HLS()
  hls.loadSource('https://link-a-stream.m3u8')
  hls.attachMedia(video)
}, [])
```

---

## 📊 Comparativa de Opciones

| Opción | Calidad | Facilidad | Tiempo | Costo |
|--------|---------|-----------|--------|-------|
| **Loom** | Buena | ⭐⭐⭐⭐⭐ | 15 min | Gratis |
| **CapCut** | Muy buena | ⭐⭐⭐⭐ | 20 min | Gratis |
| **Ffmpeg** | Variable | ⭐⭐⭐ | 30 min | Gratis |
| **Synthesia** | Profesional | ⭐⭐ | 10 min | $30 |
| **Wistia** | Profesional | ⭐⭐⭐ | 15 min | $25 |

---

## ✅ Testing Video

```bash
# 1. Verificar que YouTube URL sea válida
✓ https://www.youtube.com/embed/VIDEO_ID

# 2. Probar en localhost
npm run dev
# Click "Ver demo video" → debe reproducirse

# 3. Probar responsivo
F12 → Responsive mode → iPhone/Android

# 4. Probar volumen
Video debe reproducirse SIN sonido (muted)
```

---

## 🚀 Pasos Finales

1. **Elige método**: Recomendamos Loom
2. **Graba video**: 70 segundos máximo
3. **Descarga MP4**: Exporta desde Loom
4. **Sube a YouTube**: (no listado para privacidad)
5. **Copia VIDEO_ID**: De URL `youtu.be/VIDEO_ID`
6. **Actualiza modal**: En `VideoModal.tsx`
7. **Redeploy**: `git push` → Vercel actualiza automático

---

**Nota**: El video actual usa ID `dQw4w9WgXcQ` (placeholder). 
Reemplaza con tu VIDEO_ID una vez lo grabes.

Tiempo total: **15-20 minutos** ⏱️
