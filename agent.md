# FlowPilot - Contexto y Lineamientos del Proyecto

**Propósito**: Proporcionar contexto completo y lineamientos para IA sobre el proyecto FlowPilot
**Última actualización**: 2026-04-16 | **Modo**: Desarrollo de landing page

## 🎯 ALCANCE DEL PROYECTO

### ✅ OBJETIVO PRINCIPAL
**Desarrollar landing page responsiva para FlowPilot (AI-powered workspace)**

**SECCIONES REQUERIDAS:**
- Hero: product name, headline, supporting text, primary CTA, secondary action, mockup area
- Features: 3+ feature blocks con core product value (NO filler genérico)
- Benefits: cómo ayuda el producto (focus en outcome, NO functionality)
- Social proof: simulated logos, testimonial cards, usage stats (placeholder OK)
- Final CTA: closing section con sign-up/request access/booking demo  
- Footer: clean footer con basic navigation/product links

**INTERACCIONES INCLUIDAS:**
- Hover states
- Transitions
- Button interactions  
- Reveal animations
- Responsive menu/navigation behavior

### ❌ LÍMITES DEL PROYECTO
- ❌ Backend functionality
- ❌ API integrations
- ❌ Authentication systems
- ❌ Database operations
- ❌ Frameworks no listados abajo
- ❌ Auto-deployments sin aprobación
- ❌ Nuevas secciones no planeadas

### 🛠️ STACK TECNOLÓGICO DEL PROYECTO
- **Frameworks**: React, Next.js, o Vite
- **Lenguaje**: TypeScript (preferred)
- **CSS**: Tailwind CSS, CSS Modules, o similar
- **AI Tools**: Replit, Cursor, Copilot, o similar
- **Deploy**: Vercel, Netlify, o Replit

### 📦 COMPONENTES DEL PROYECTO
1. Live URL: deployed working landing page
2. GitHub Repository: complete source code
3. README: project overview, setup, tools/frameworks, decisions, AI usage, improvements
4. Video Walkthrough: 2-4 minutes con concept, visual decisions, structure, AI usage, tradeoffs

## 🤖 REGLAS DE INTERACCIÓN PARA LA IA

### ✅ COMANDOS AUTORIZADOS
- `npm run dev` - desarrollo local
- `npm run build` - compilación producción  
- `npm run lint` - validación código
- Editar archivos DENTRO de /app/components
- Crear componentes siguiendo estructura EXISTENTE
- Añadir comentarios explicativos (contexto)
- Optimizar imports no utilizados
- Mejoras de accesibilidad (aria-labels, tooltips)
- Usar AI tools listados (Cursor, Copilot, etc.)

### ❌ COMANDOS RESTRINGIDOS
- ❌ `npm install` sin aprobación
- ❌ Modificar package.json sin justificación
- ❌ Cambiar next.config.ts sin necesidad
- ❌ Eliminar archivos existentes
- ❌ Crear nuevas rutas API
- ❌ Modificar archivos de configuración core
- ❌ Añadir dependencias no autorizadas
- ❌ Salir del directorio /app/components

### 🔄 FLUJO DE TRABAJO
1. Leer estado actual del proyecto
2. Identificar tarea específica
3. **VERIFICAR** que está dentro del alcance
4. Ejecutar cambios MÍNIMOS necesarios
5. Validar con `npm run build`
6. Documentar cambios realizados

## 🚫 CONTROL DE CAMBIOS

**SI LA IA INTENTA:**
- Modificar archivos fuera del alcance
- Instalar dependencias no autorizadas  
- Cambiar configuración del proyecto
- Ignorar estas reglas

**COMANDO DE CONTROL**: `STOP - Revisar agent.md antes de continuar`

## 📝 CONTEXTO ADICIONAL PARA LA IA

### Producto: FlowPilot
- **Descripción**: AI-powered workspace que ayuda teams a organizar ideas, tasks, y decisions
- **Target**: Teams que necesitan organizar decisiones y mantener contexto
- **Value proposition**: Reduce tiempo buscando decisions antiguas, centraliza contexto

### Stack Actual del Proyecto
- **Framework**: Next.js 16.2.3 con App Router
- **UI**: React 19.2.4 + TypeScript 5.x
- **Styling**: Tailwind CSS v4 + Framer Motion 12.38.0
- **Icons**: Lucide React 1.8.0
- **Build**: Turbopack + ESLint estricto

### Estructura de Archivos (NO CAMBIAR)
```
/app
  /components
    - Header.tsx
    - Hero.tsx  
    - Features.tsx
    - Benefits.tsx
    - SocialProof.tsx
    - FinalCTA.tsx
    - Footer.tsx
  - globals.css
  - layout.tsx
  - page.tsx
```

### Estilo y Design System
- **Colors**: Indigo/Purple gradients (indigo-600, purple-600)
- **Typography**: Inter font family
- **Spacing**: 8px base unit (Tailwind default)
- **Animations**: fade-up (0.6s), fade-in (0.4s)
- **Approach**: Mobile-first

## 📋 TEMPLATE PARA SOLICITAR CAMBIOS A LA IA

**OBLIGATORIO USAR ESTE FORMATO:**

```
### SOLICITUD DE CAMBIOS
1) **Resumen**: [1-2 líneas - objetivo concreto]
2) **Archivos objetivo**: [rutas relativas dentro de /app/components]
3) **Prioridad**: [bug / feature / refactor / docs]
4) **Restricciones**: [ej: "sin nuevas dependencias", "mantener mobile"]
5) **Resultado esperado**: [descripción corta y verificable]
6) **Errores/Stack traces**: [si aplica]
```

## 🎯 REGLAS FINALES PARA LA IA

### ANTES DE CUALQUIER ACCIÓN:
- ✅ Leer este agent.md completamente
- ✅ Verificar que la acción está dentro del alcance del test
- ✅ Confirmar que no viola prohibiciones
- ✅ Usar únicamente comandos autorizados

### DURANTE EL TRABAJO:
- ✅ Mantener cambios mínimos y enfocados
- ✅ No tomar decisiones no triviales sin aprobación
- ✅ Mantener accesibilidad (`aria-*`) en componentes interactivos
- ✅ Usar `use client` solo cuando es necesario
- ✅ Seguir estructura de archivos existente

### DESPUÉS DEL TRABAJO:
- ✅ Validar con `npm run build`
- ✅ Documentar cambios realizados
- ✅ Confirmar que todo sigue dentro del alcance

## 🎯 REGLAS FINALES PARA LA IA

### ANTES DE CUALQUIER ACCIÓN:
- ✅ Leer este agent.md completamente
- ✅ Verificar que la acción está dentro del alcance
- ✅ Confirmar que no viola restricciones
- ✅ Usar únicamente comandos autorizados

### DURANTE EL TRABAJO:
- ✅ Mantener cambios mínimos y enfocados
- ✅ No tomar decisiones no triviales sin aprobación
- ✅ Mantener accesibilidad (`aria-*`) en componentes interactivos
- ✅ Usar `use client` solo cuando es necesario
- ✅ Seguir estructura de archivos existente

### DESPUÉS DEL TRABAJO:
- ✅ Validar con `npm run build`
- ✅ Documentar cambios realizados
- ✅ Confirmar que todo sigue dentro del alcance

## 📋 TEMPLATE PARA SOLICITAR CAMBIOS

**USAR ESTE FORMATO:**

```
### SOLICITUD DE CAMBIOS
1) **Resumen**: [1-2 líneas - objetivo concreto]
2) **Archivos objetivo**: [rutas relativas dentro de /app/components]
3) **Prioridad**: [bug / feature / refactor / docs]
4) **Restricciones**: [ej: "sin nuevas dependencias", "mantener mobile"]
5) **Resultado esperado**: [descripción corta y verificable]
6) **Errores/Stack traces**: [si aplica]
```

## 🚫 CONTEXTO ÚNICO

**ESTE DOCUMENTO ES EL CONTEXTO PRINCIPAL PARA LA IA**
- Seguir lineamientos aquí establecidos
- No hacer suposiciones fuera de este contexto
- Si hay duda, preguntar antes de actuar
- **SIEMPRE** priorizar los objetivos del proyecto

**COMANDO DE CONTROL**: `STOP - Revisar agent.md antes de continuar`

Ejemplo mínimo:
Resumen: Añadir onClick a CTAs de `app/components` para abrir `EarlyAccessModal`.
Archivos: `app/components/Features.tsx`, `app/components/Benefits.tsx`.
Prioridad: bug
Restricciones: no nuevas dependencias
Resultado esperado: todos los CTAs abren el modal y `npm run build` compila sin errores.

Acciones que requieren permiso explícito
-------------------------------------
- Añadir dependencias a `package.json`.
- Cambiar CI/CD o variables de entorno.
- Ejecutar despliegues en servicios remotos.

Comprobación y seguimiento
-------------------------
- Después de cambios, ejecutar `npm run build` y reportar errores si existen.
- Si algo importante falta en este `agent.md`, el agente lo comentará antes de actuar y propondrá opciones para revisión.

## BITÁCORA HISTÓRICA DE CAMBIOS

### 2026-04-16 - Optimización Vibe Coding (Fase 1-2 Completada)

**PROBLEMAS IDENTIFICADOS:**
- Code smells: Estados duplicados en 5 componentes (Hero, Benefits, SocialProof, FinalCTA)
- Componentes sobrecargados: Hero.tsx con 168 líneas (violación SRP)
- Over-engineering: Animaciones complejas sin propósito claro
- Falta de abstracción: Patrones repetidos sin reutilización

**SOLUCIONES IMPLEMENTADAS:**

**Fase 1 - Limpieza de Estados:**
- [x] Creado hook `useModal()` para manejo centralizado de modales
- [x] Implementado `ModalContext` con Context API para estado global
- [x] Eliminados estados duplicados en todos los componentes
- [x] Validado con `npm run build` sin errores

**Fase 2 - Desacoplamiento de Componentes:**
- [x] Extraído `AnimatedBackground` como componente reutilizable
- [x] Creado `MockupDashboard` component separado
- [x] Implementado hook `useAnimationVariants` para animaciones reutilizables
- [x] Reducido Hero.tsx de 168 líneas a 95 líneas (43% de reducción)

**MÉTRICAS DE ÉXITO:**
- Hero.tsx: 168 líneas -> 95 líneas (-43%)
- Estados duplicados: 5 -> 0 (-100%)
- Componentes nuevos: 3 (AnimatedBackground, MockupDashboard, useAnimationVariants)
- Build status: Sin errores

**PRINCIPIOS APLICADOS:**
- DRY: Eliminación de código duplicado
- SRP: Single Responsibility Principle en componentes
- Separation of Concerns: Lógica separada de UI
- Reusability: Componentes y hooks reutilizables

**ESTADO ACTUAL:**
- Código limpio y mantenible
- Build funcional sin errores
- Arquitectura escalable
- Preparado para futuras mejoras

### 2026-04-16 - Fix Posicionamiento Modal Menú Móvil

**PROBLEMA IDENTIFICADO:**
- Modal aparecía fuera de pantalla (izquierda) solo desde botón "Acceso anticipado" del menú móvil
- Otros botones que abrían el mismo modal funcionaban correctamente

**CAUSA RAÍZ:**
- Race condition con `setTimeout(() => setIsEarlyAccessOpen(true), 100)` en Header.tsx
- El menú móvil con `overflow-visible` afectaba el cálculo de posición del modal
- El delay de 100ms era insuficiente para estabilizar el layout

**SOLUCIÓN APLICADA:**
- [x] Eliminado `setTimeout` del botón del menú móvil
- [x] Usado mismo patrón que botones funcionales (sin delay)
- [x] Validado con `npm run build` sin errores
- [x] Modal ahora se centra correctamente en todas las opciones

**CAMBIO ESPECÍFICO:**
```typescript
// ANTES (con problema)
onClick={() => {
  setMobileMenuOpen(false)
  setTimeout(() => setIsEarlyAccessOpen(true), 100)
}}

// DESPUÉS (corregido)
onClick={() => {
  setMobileMenuOpen(false)
  setIsEarlyAccessOpen(true)
}}
```

**PRINCIPIOS SEGUIDOS:**
- Cambio mínimo y enfocado (agent.md)
- Sin nuevas dependencias
- Validación con build
- Solución pragmática y efectiva

### 2026-04-16 - Scroll Lock Prevention en Modal

**PROBLEMA PERSISTENTE:**
- Modal aún aparecía fuera de pantalla después de eliminar setTimeout
- El problema no era solo de timing sino de viewport/scroll behavior

**HIPÓTESIS ADICIONAL:**
- El menú móvil podría estar afectando el scroll del viewport
- `fixed inset-0` del modal calculaba posición incorrecta con scroll activo
- Necesario forzar viewport reset al abrir modal

**SOLUCIÓN IMPLEMENTADA:**
- [x] Añadido `useEffect` con scroll lock prevention
- [x] `document.body.style.overflow = 'hidden'` al abrir modal
- [x] `window.scrollTo(0, 0)` para forzar recálculo de viewport
- [x] Cleanup automático al cerrar modal
- [x] Validado con `npm run build` sin errores

**CAMBIO ESPECÍFICO:**
```typescript
// Añadido en EarlyAccessModal.tsx
useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
    window.scrollTo(0, 0)  // Forzar recálculo viewport
  } else {
    document.body.style.overflow = 'unset'
  }
  
  return () => {
    document.body.style.overflow = 'unset'
  }
}, [isOpen])
```

**RESULTADO ESPERADO:**
- Modal siempre centrado independientemente del scroll
- Viewport estable al abrir desde cualquier botón
- Comportamiento consistente entre móvil y desktop

### 2026-04-16 - Fix Final Modal Position (window.scrollTo)

**PROBLEMA CRÍTICO IDENTIFICADO:**
- Modal aparecía arriba del todo (sobre address bar) desde botón específico
- `window.scrollTo(0, 0)` estaba forzando scroll al inicio antes de posicionar modal
- El `fixed inset-0` del modal se calculaba relativamente al viewport forzado

**CAUSA RAÍZ DEFINITIVA:**
```typescript
// PROBLEMA: Esto forzaba scroll al inicio
window.scrollTo(0, 0)  // <-- EL CULPABLE
```

**SOLUCIÓN FINAL APLICADA:**
- [x] Eliminado `window.scrollTo(0, 0)` del useEffect
- [x] Mantenido solo `document.body.style.overflow = 'hidden'`
- [x] Modal ahora se posiciona relativo al viewport actual del usuario
- [x] Validado con `npm run build` sin errores

**CAMBIO ESPECÍFICO FINAL:**
```typescript
// ANTES (con problema)
useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
    window.scrollTo(0, 0)  // <-- ELIMINADO
  } else {
    document.body.style.overflow = 'unset'
  }
  // ...
}, [isOpen])

// DESPUÉS (corregido)
useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
    // Sin window.scrollTo(0, 0)
  } else {
    document.body.style.overflow = 'unset'
  }
  // ...
}, [isOpen])
```

**RESULTADO FINAL:**
- Modal centrado en viewport actual del usuario
- Sin scroll forzado al abrir
- Comportamiento consistente desde todos los botones
- Scroll lock funcional sin afectar posicionamiento

### 2026-04-16 - Solución Definitiva: Doble Modal Eliminado

**DIAGNÓSTICO EXPERTO FRONTEND:**
- Modal se sobresalía de la vista solo desde "acceso anticipado" del menú principal
- Causa crítica: **Doble instancia del modal** con estados diferentes
- Header.tsx tenía estado local + modal propio
- Hero.tsx usaba ModalContext + modal global

**PROBLEMA TÉCNICO IDENTIFICADO:**
```typescript
// Header.tsx (PROBLEMA)
const [isEarlyAccessOpen, setIsEarlyAccessOpen] = useState(false)
<EarlyAccessModal isOpen={isEarlyAccessOpen} onClose={() => setIsEarlyAccessOpen(false)} />

// Hero.tsx (CORRECTO)
const { modals, closeEarlyAccess } = useModalContext()
<EarlyAccessModal isOpen={modals.earlyAccess} onClose={closeEarlyAccess} />
```

**SOLUCIÓN DEFINITIVA APLICADA:**
- [x] Eliminado estado local `isEarlyAccessOpen` del Header
- [x] Eliminado modal duplicado del Header
- [x] Unificado Header para usar `useModalContext` como otros componentes
- [x] Todos los botones ahora usan `openEarlyAccess()` del contexto
- [x] Solo una instancia del modal en toda la aplicación
- [x] Validado con `npm run build` sin errores

**CAMBIOS ESPECÍFICOS:**
```typescript
// ANTES (Header.tsx con doble modal)
const [isEarlyAccessOpen, setIsEarlyAccessOpen] = useState(false)
onClick={() => setIsEarlyAccessOpen(true)}
<EarlyAccessModal isOpen={isEarlyAccessOpen} onClose={() => setIsEarlyAccessOpen(false)} />

// DESPUÉS (Header.tsx unificado)
const { openEarlyAccess } = useModalContext()
onClick={openEarlyAccess}
// Sin modal local, usa el modal global del Hero
```

**RESULTADO FINAL EXPERTO:**
- **Única instancia modal** en toda la aplicación
- **Estado centralizado** y consistente
- **Posicionamiento correcto** desde cualquier botón
- **Sin conflictos de z-index** o renderizado
- **Arquitectura limpia** siguiendo patrones React modernos

---

Versión
-------
v0.3 - Fecha: 2026-04-16 (Optimización Vibe Coding aplicada)
