# 🎬 GUÍA COMPLETA: Video Demo + Testing + Deployment

## 📋 Índice
1. [Crear Video Demo (3 opciones)](#crear-video-demo)
2. [Testing Completo](#testing-completo)
3. [Deployment en Vercel](#deployment)
4. [Post-Deploy: Validación](#post-deploy)

---

## 🎬 Crear Video Demo

### **OPCIÓN 1: Loom (⭐ RECOMENDADO - Más rápido)**

**Tiempo**: 15 minutos  
**Costo**: Gratis (versión básica)  
**Calidad**: Profesional

#### Pasos:

1. **Instala Loom**
   ```
   → Descarga en loom.com/download
   → Instala chrome extension
   ```

2. **Prepara content**
   - Abre en otra ventana: https://www.figma.com/design (o similar)
   - Prepara pantalla con "dashboard" mockup
   - Script mental (70 segundos):
     ```
     "Hola, soy [fundador]. El problema es que equipos gastan 70% 
     del tiempo buscando decisiones antigas.
     
     Con FlowPilot, la IA organiza automáticamente todo.
     
     [Navega por mockup rápido]
     
     Puedes ver decisiones, responsables, fechas límite, todo en un lugar.
     
     Prueba gratis 14 días. Sin tarjeta de crédito.
     FlowPilot — Organiza tu equipo hoy."
     ```

3. **Graba**
   - Click en ícono Loom → "Start recording"
   - Graba pantalla + narración
   - 70 segundos es perfecto

4. **Exporta**
   - Loom genera link automático
   - Copia link público
   - Subirá a YouTube automáticamente

5. **Embed en landing**
   ```
   Tu link: https://www.loom.com/share/xxxxx
   Convertir a YouTube: 
   - Loom → Settings → Download video
   - Sube a YouTube (privado/no listado)
   - Copia video ID (youtu.be/VIDEO_ID)
   ```

---

### **OPCIÓN 2: CapCut Free (Alternativa visual)**

**Tiempo**: 20 minutos  
**Costo**: Gratis  
**Calidad**: Muy buena

1. **Descarga CapCut**: https://www.capcut.com/desktop
2. **Crea proyecto** (1280x720)
3. **Importa elementos**:
   - Texto animado
   - Clips/imágenes
   - Audio/narración
4. **Anima transiciones** (built-in)
5. **Exporta como MP4**
6. **Sube a YouTube**

---

### **OPCIÓN 3: Synthesia AI (Profesional - Avatar)**

**Tiempo**: 5 minutos  
**Costo**: $10-30/mes  
**Calidad**: Muy profesional (A1 hablando)

1. Ir a synthesia.io
2. Crear video con avatar AI
3. Seleccionar escenas predefinidas
4. Agregar narración (texto → voz)
5. Exportar como MP4
6. Subir a YouTube

---

## 📝 Testing Completo

### **Checklist de Testing**

#### A. **Testing Local (http://localhost:3000)**

```bash
# 1. Inicia dev server
cd /Users/cgiraldq/pruebaTec/flowpilot-landing
npm run dev
# Output: http://localhost:3000
```

#### B. **Testing Visual**
- [ ] **Header**
  - [ ] Logo visible
  - [ ] Navegación responsive
  - [ ] Botón "Acceso anticipado" funciona
  - [ ] Menú móvil abre/cierra

- [ ] **Hero Section**
  - [ ] Título con gradient text
  - [ ] Animaciones de orbs suaves
  - [ ] "Comenzar prueba gratis" abre modal
  - [ ] "Ver demo video" abre video modal
  - [ ] Mockup se mueve suavemente

- [ ] **Features**
  - [ ] 3 tarjetas visible
  - [ ] Hover anima icono y sombra
  - [ ] Texto legible

- [ ] **Benefits**
  - [ ] Métrica +500 anima
  - [ ] Barra de progreso anima
  - [ ] Beneficios con iconos

- [ ] **Testimonios**
  - [ ] Logos de empresas visible
  - [ ] 2 testimonios con estrellas
  - [ ] Hover eleva tarjeta

- [ ] **FinalCTA**
  - [ ] Botones animados
  - [ ] Modal de acceso abre
  - [ ] Modal de video abre

- [ ] **Footer**
  - [ ] Links horizontales organizado
  - [ ] Iconos sociales visible
  - [ ] Copyright presente

#### C. **Testing de Modales**

**Modal de Acceso Anticipado:**
```
1. Click "Acceso anticipado"
2. Completa form:
   - Email: test@example.com
   - Empresa: TestCorp
3. Click "Solicitar Acceso"
4. ✓ Debe mostrar "¡Listo!"
5. ✓ Modal debe cerrarse solo
```

**Modal de Video:**
```
1. Click "Ver demo video" (Hero o FinalCTA)
2. ✓ Modal abre con video
3. ✓ Video puede reproducirse
4. Click fondo → Modal cierra
```

#### D. **Testing de Animaciones**

```
1. Abre DevTools → Performance
2. Haz scroll lento
3. FPS debe estar >50 (idealmente 60)
4. No debe haber lag

En DevTools > Elements verifica:
- Classes correctas
- Transiciones aplicadas
- No hay errores en console
```

#### E. **Testing Mobile**

```bash
# En DevTools (F12)
1. Click device toggle (móbil)
2. Prueba en iPhone SE, iPhone 12, Pixel 5
3. Verifica:
   - Menú hamburguesa funciona
   - Texto legible
   - Botones tappable (+44px)
   - Video responsive
```

#### F. **Testing SEO**

```bash
# Verifica metadata
curl http://localhost:3000 | grep -E "meta|og:|title"

# Debe mostrar:
<title>FlowPilot - Organiza decisiones con IA</title>
<meta name="description" content="...">
<meta property="og:image" content="...">
```

#### G. **Testing de Enlaces**

Test cada link:
- [ ] Header links → Scroll to section
- [ ] Botones CTAs → Abre modal correcto
- [ ] Social icons (footer) → Abre en nueva tab
- [ ] "Ver casos de éxito" → Link funciona

---

## 🚀 Deployment

### **PASO 1: Preparar Código**

```bash
cd /Users/cgiraldq/pruebaTec/flowpilot-landing

# Verifica que build funcione
npm run build
# Output: ✓ Ready in XXXms

# Verifica no hay errores
npm run lint
```

### **PASO 2: Crear Repo GitHub**

Si aún no está versionado:
```bash
# Inizializar git
git init
git add .
git commit -m "Initial commit: FlowPilot landing page"

# Crear repo en github.com
1. Ir a github.com/new
2. Crear repo "flowpilot-landing"
3. Copiar SSH/HTTPS URL

# Conectar local ↔ GitHub
git remote add origin https://github.com/TU_USER/flowpilot-landing.git
git branch -M main
git push -u origin main
```

### **PASO 3: Deploy en Vercel**

#### Opción A: Via dashboard (más fácil)

1. Ir a **vercel.com**
2. Click "New Project"
3. Conecta GitHub
4. Selecciona repo "flowpilot-landing"
5. Framework: **Next.js** (auto-detecta)
6. Click "Deploy"
7. Espera ~60 segundos

✅ **URL vivo**: https://flowpilot-landing.vercel.app

#### Opción B: Via CLI (alternativo)

```bash
npm i -g vercel
vercel
# Sigue wizard
```

### **PASO 4: Agregar Dominio Custom (opcional)**

En Vercel Dashboard:
1. Tu proyecto → Settings → Domains
2. Agregar dominio (ej: flowpilot.dev)
3. Actualizar DNS del proveedor
4. Espera propagación (~5 min)

---

## ✅ Post-Deploy: Validación

### **Checklist Final**

- [ ] **URL Functiona**: https://flowpilot-landing.vercel.app
- [ ] **HTTPS en vivo**: URL tiene 🔒
- [ ] **SEO indexable**:
  ```bash
  curl -s https://flowpilot-landing.vercel.app | grep "og:title"
  ```
- [ ] **Core Web Vitals**:
  - LCP < 2.5s
  - FID < 100ms
  - CLS < 0.1
  
  Check en: https://pagespeed.web.dev

- [ ] **Mobile Optimized**: Lighthouse score >90

---

### **A. Analytics Setup (Vercel Analytics)**

Vercel da analytics gratis. Ya está configurado.

Ver en: Vercel Dashboard → Analytics

Métricas:
- Visits
- Top paths
- Bounce rate
- Duration

---

### **B. Integrar Video**

Una vez tengas link YouTube:

```bash
# En VideoModal.tsx reemplaza VIDEO_ID
src="https://www.youtube.com/embed/TU_VIDEO_ID?autoplay=1"
```

Redeploy automático:
```bash
git add .
git commit -m "Add video demo to modal"
git push
# Vercel re-build automático (~30s)
```

---

### **C. Configurar Email (Opcional)**

Para guardar emails del formulario:

```bash
# Instalar cliente Supabase
npm install @supabase/supabase-js

# Crear tabla en supabase.com:
CREATE TABLE early_access (
  id INT PRIMARY KEY,
  email VARCHAR(255),
  company VARCHAR(255),
  created_at TIMESTAMP
);

# En EarlyAccessModal.tsx:
import { createClient } from '@supabase/supabase-js';

const handleSubmit = async (e) => {
  e.preventDefault();
  const supabase = createClient(url, key);
  await supabase.from('early_access').insert([{ email, company }]);
  setSubmitted(true);
};
```

---

## 📊 Resumen de Pasos

| Paso | Tarea | Tiempo | Estado |
|------|-------|--------|--------|
| 1 | Crear video demo (Loom) | 15 min | ⏳ |
| 2 | Testing local completo | 20 min | ⏳ |
| 3 | Agregar video a modal | 5 min | ⏳ |
| 4 | Push a GitHub | 2 min | ⏳ |
| 5 | Deploy en Vercel | 2 min | ⏳ |
| 6 | Validar en producción | 10 min | ⏳ |
| 7 | Compartir link | 1 min | ⏳ |

**Total: ~55 minutos**

---

## 🎯 Próximos Pasos (Fase 2)

1. **A/B Testing**: Prueba 2 versiones de copy
2. **Email Funnel**: Enviar secuencia de bienvenida
3. **Blog**: Crear contenido SEO
4. **Referral**: Sistema de referidos
5. **Meetup**: Event en comunidad dev

---

## 🆘 Troubleshooting

**"Build fails en Vercel"**
```bash
# Verifica local primero:
npm run build

# Si falla, chequea errores antes de push
```

**"Video no carga"**
```bash
# Verifica URL YouTube es válida:
https://www.youtube.com/embed/VIDEO_ID
# No: https://youtu.be/VIDEO_ID
# No: https://youtube.com/watch?v=VIDEO_ID
```

**"Modal no abre"**
```bash
# DevTools Console → chequea errores:
F12 → Console → busca "error" en rojo
```

---

## 📞 Contacto / Soporte

Para preguntas:
- GitHub Issues
- Vercel Support: vercel.com/support
- Loom Help: loom.com/support

---

**Estado del Proyecto**: ✅ Listo para pasar a Fase 2  
**Próxima Review**: Después del deployment
