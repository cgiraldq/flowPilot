# FlowPilot - Landing Page

Una página de aterrizaje moderna y responsiva construida con **Next.js 16**, **Tailwind CSS v4**, **Framer Motion** y **React 19**.

## 🎯 Características

✅ **Hero Section** - Título impactante con CTA y mockup visual  
✅ **Características** - 3 secciones destacadas con iconos  
✅ **Beneficios** - Métricas y resultados clave  
✅ **Testimonios** - Cards de clientes con calificaciones  
✅ **Social Proof** - Logos de empresas confiadas  
✅ **CTA Final** - Llamada a la acción principal  
✅ **Header Responsive** - Navegación adaptable con menú móvil  
✅ **Footer Completo** - Enlaces, redes sociales e información legal  
✅ **Animaciones Suaves** - Fade-in, fade-up con Framer Motion  
✅ **Hover Effects** - Interactividad en botones y enlaces  

## 📋 Requisitos

- **Node.js** 18+ 
- **npm** o **yarn**

## 🚀 Instalación Rápida

```bash
# Clonar o entrar al directorio del proyecto
cd flowpilot-landing

# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev

# Abrir en el navegador
# http://localhost:3000
```

## 📦 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo (puerto 3000) |
| `npm run build` | Compila para producción |
| `npm start` | Inicia servidor de producción |
| `npm run lint` | Ejecuta validación de código |

## 🏗️ Estructura del Proyecto

```
flowpilot-landing/
├── app/
│   ├── components/
│   │   ├── Header.tsx         # Navegación principal
│   │   ├── Hero.tsx           # Sección héroe con CTA
│   │   ├── Features.tsx       # 3 características clave
│   │   ├── Benefits.tsx       # Beneficios y métricas
│   │   ├── SocialProof.tsx    # Testimonios y logos
│   │   ├── FinalCTA.tsx       # Llamada a la acción final
│   │   └── Footer.tsx         # Pie de página con redes
│   ├── globals.css            # Estilos globales Tailwind
│   ├── layout.tsx             # Layout raíz y metadata
│   └── page.tsx               # Página principal
├── public/                    # Archivos estáticos
├── tailwind.config.js         # Configuración de Tailwind
├── next.config.ts             # Configuración de Next.js
├── tsconfig.json              # Configuración de TypeScript
├── postcss.config.mjs         # Configuración de PostCSS
├── eslint.config.mjs          # Configuración de ESLint
└── package.json               # Dependencias del proyecto
```

## 🎨 Tecnologías Usadas

- **Next.js 16.2.3** - Framework de React optimizado
- **React 19.2.4** - Librería de UI
- **Tailwind CSS 4** - Framework de estilos utility-first
- **Framer Motion 12.38.0** - Animaciones suaves
- **Lucide React 1.8.0** - Iconos SVG
- **TypeScript 5** - Tipado estático
- **ESLint 9** - Linting y code quality

## 🎬 Secciones Principales

### Header
- Logo "FlowPilot" con gradient de color
- Navegación principal en desktop
- Botón de "Acceso anticipado"
- Menú móvil colapsable

### Hero
- Título principal con gradient text
- Descripción breve del valor
- Dos CTAs: "Comenzar prueba gratis" y "Ver demo"
- Mockup visual del dashboard

### Características
- 3 tarjetas de características clave
- Iconos descriptivos
- Animación de entrada al hacer scroll

### Beneficios
- Resultados cuantitativos (+500 equipos)
- 3 beneficios principales con iconos
- Barra de progreso visual
- Animaciones de parallax

### Testimonios
- Logos de empresas confiadas
- 2 testimonios con calificación (5 estrellas)
- Cards responsivas

### CTA Final
- Fondo gradient indigo-purple
- Dos botones: "Solicitar acceso" y "Agendar demo"
- Mensaje de confianza ("Sin compromiso")

### Footer
- Información por columnas (Producto, Empresa, Legal)
- Enlaces de redes sociales (SVG icons)
- Copyright y derechos

## 🌐 Respuesta Mobile

Todos los componentes incluyen:
- Breakpoints Tailwind: `sm`, `md`, `lg`
- Menú móvil colapsable en Header
- Texto y espaciado responsive
- Imágenes adaptables

## ⚡ Rendimiento

- Compilación con **Turbopack** (más rápida que webpack)
- Optimización automática de Next.js
- CSS purificado automáticamente
- Carga incremental

## 🔍 Validación y Testing

### Build Validation
```bash
npm run build
```
Confirma:
- ✅ Compilación sin errores
- ✅ CSS limpio sin advertencias
- ✅ TypeScript sin errores
- ✅ ESLint pasa validación

### Local Testing
```bash
npm run dev
```
Luego verificar en `http://localhost:3000`:
- ✅ Hero y mockup se visibilizan
- ✅ 3 características aparecen
- ✅ Beneficios con métricas cargados
- ✅ Testimonios y logos visibles
- ✅ CTA final accessible
- ✅ Footer con iconos Y enlaces
- ✅ Header menú móvil funcional
- ✅ Animaciones smooth en scroll
- ✅ Hover effects en botones

## 🎯 Mejoras Aplicadas

1. **Tipografía Global** - Inter applied to all text globally
2. **Footer con Iconos SVG** - Twitter, LinkedIn, GitHub inline
3. **Accesibilidad Base** - Encabezados semánticos y navegación clara
4. **Animaciones Suaves** - Framer Motion en todas las secciones
5. **Responsive Design** - Totalmente adaptado a móvil

## 📝 Notas de Diseño

- **Color Scheme**: Indigo/Purple gradients (indigo-600, purple-600)
- **Typography**: Inter 100-900 weight range
- **Spacing**: 8px base unit (Tailwind default)
- **Animations**: fade-up (0.6s), fade-in (0.4s)
- **Viewport**: Mobile-first approach

## 🚢 Deployment

El proyecto está listo para deployar en:
- **Vercel** (recomendado - creator de Next.js)
- **Netlify**
- **Any Node.js hosting**

### Vercel (Recomendado)
```bash
npm i -g vercel
vercel
# Sigue los pasos en el navegador
```

---

## 2026-04-16 - Optimización Vibe Coding Aplicada

###  Mejoras de Arquitectura

**Refactorización Completa:**
- Hero.tsx reducido de 168 a 95 líneas (-43%)
- Eliminados estados duplicados en 5 componentes
- Implementada arquitectura con Context API
- Creados hooks y componentes reutilizables

**Nuevos Componentes:**
- `AnimatedBackground` - Fondos animados reutilizables
- `MockupDashboard` - Mockup visual desacoplado
- `useAnimationVariants` - Hook para animaciones centralizadas
- `useModal()` - Hook para manejo de modales
- `ModalContext` - Context API para estado global

**Principios Aplicados:**
- DRY (Don't Repeat Yourself)
- SRP (Single Responsibility Principle)
- Separation of Concerns
- Reusability y Maintainability

**Métricas de Optimización:**
- Build sin errores
- Código más limpio y mantenible
- Arquitectura escalable
- Mejor performance

---

**FlowPilot Landing v0.3.0**  Abril 2026  Optimizado con buenas prácticas Vibe Coding
