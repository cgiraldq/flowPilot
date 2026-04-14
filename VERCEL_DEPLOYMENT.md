# 🚀 Desplegar FlowPilot en Vercel

## ¿Por qué Vercel?
✅ Creador oficial de Next.js  
✅ Despliegue automático al hacer `git push`  
✅ Free tier: Sin límites de deployments ni almacenamiento  
✅ CDN global incluido automáticamente  
✅ Analytics y logs en tiempo real  
✅ SSL gratis (HTTPS)  

---

## 📋 Opción 1: Despliegue Manual Rápido (5 minutos)

### Paso 1: Ir a Vercel
Abre en tu navegador:
```
https://vercel.com
```

### Paso 2: Conectarse con GitHub
1. Click en **"Sign Up"** o **"Log In"**
2. Selecciona **"Continue with GitHub"**
3. Autoriza Vercel para acceder a tu GitHub

### Paso 3: Importar Proyecto
1. En el dashboard de Vercel, click **"Add New..."** → **"Project"**
2. Busca `cgiraldq/flowPilot`
3. Click **"Import"**
4. Vercel detectará automáticamente:
   - ✅ Framework: **Next.js**
   - ✅ Build command: npm run build
   - ✅ Output directory: .next
5. Click **"Deploy"** y listo! ⏱️ ~2-3 minutos

---

## 📋 Opción 2: Despliegue con CLI (alternativa)

Si prefieres usar la terminal:

```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Desplegar
cd /Users/cgiraldq/pruebaTec/flowpilot-landing
vercel

# 3. Seguir prompts:
#    - "Which scope?" → Tu cuenta personal
#    - "Link existing project?" → No (primera vez)
#    - "What is your project named?" → flowpilot-landing
#    - "In which directory is your code?" → ./
#    - Vercel auto-detecta proyecto Next.js

# 4. Tu URL estará lista inmediatamente!
# Ej: https://flowpilot-landing.vercel.app
```

---

## 🔄 Auto-Deploy Automático

Una vez conectado, **cada `git push` redespliega automáticamente**:

```bash
# Hacer cambios locales
git add .
git commit -m "Update testimonials"
git push origin main

# ✅ Vercel automáticamente:
# - Descarga el código
# - Ejecuta npm install
# - Corre npm run build
# - Deploya a CDN
# - Tu sitio está actualizado en ~1-2 minutos
```

---

## 📊 After Deployment Checklist

Una vez en Vercel:

☐ **Verificar URL en vivo**
   - Abre: `https://flowpilot-landing.vercel.app`
   - (o tu URL personalizada)

☐ **Probar funcionalidades**
   - ✅ Click en "Acceso anticipado" (modal)
   - ✅ Click en video (debe cargar demo)
   - ✅ Scroll en desktop y mobile
   - ✅ Menú hamburguesa en mobile

☐ **Configurar dominio personalizado** (opcional)
   - En Vercel dashboard → Settings → Domains
   - Agregar dominio: ej. `flowpilot.com`
   - Seguir instrucciones de DNS

☐ **Monitorear Analytics**
   - Vercel dashboard muestra:
     - Visitas únicas
     - Requests por day
     - Response times
     - Performance score

---

## 🆘 Troubleshooting

### Error: "Build failed"
```
Causa: node_modules mal sincronizados
Solución:
rm -rf node_modules package-lock.json
npm install
git push
```

### URL no muestra contenido
```
Espera 2-3 minutos (Vercel está cacheando)
Si persiste: Fuerza refresh (Cmd+Shift+R en Mac)
```

### Video no carga
```
Verifica que YouTube ID sea correcto en VideoModal.tsx
Línea: src="https://www.youtube.com/embed/9bZkp7q19f0?autoplay=1"
```

---

## 💰 Costos

### Free Tier (Recomendado para inicio)
- ✅ 2,500 Function Invocations/día
- ✅ Bandwidth: Unlimited
- ✅ Domains: 1 .vercel.app gratis
- ✅ Deployments: Unlimited
- ✅ SSL/HTTPS: Gratis

### Pro Tier ($20/mes) - Si creces
- ✅ 1,000,000 Function Invocations/mes
- ✅ Priority support
- ✅ Advanced analytics

**Para un landing page: Free tier es suficiente** ✅

---

## 🎯 Next Steps

1. **Deploy en Vercel** (ahora)
2. **Compartir URL en redes sociales**
3. **Monitorear analytics** (Vercel dashboard)
4. **Agregar dominio personalizado** (opcional)
5. **Configurar email form backend** (si capturan leads)

---

**Tu sitio estará LIVE en minutos sin costo. 🚀**

For more help: https://vercel.com/docs
