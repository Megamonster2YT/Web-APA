# 🚀 Guía de Configuración del Entorno de Desarrollo

Bienvenido/a al proyecto.  
Esta guía te ayudará a configurar el entorno de desarrollo necesario para trabajar con el código base, incluyendo la gestión de versiones de **Node.js**, la instalación de **Tailwind CSS v3** y la librería de iconos **Lucide-React**.

---

## 📋 Requisitos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu equipo:

- **Node.js**: Versión `20.19+` o superior (se recomienda la versión **LTS**).
- **npm**: Gestor de paquetes (incluido con Node.js).
- **Git**: Sistema de control de versiones.

---

## ⚠️ Nota Importante sobre Tailwind CSS

Este proyecto utiliza **Tailwind CSS versión 3**.  
Si intentas instalar la **versión 4**, recibirás un error como el siguiente:

```
npm ERR! could not determine executable to run
```

Esto ocurre porque la inicialización cambió en Tailwind v4 y el comando  
`npx tailwindcss init -p` ya **no es válido** en esa versión.  

✅ Solución: Usar explícitamente la versión 3.

---

## 🛠️ Instalación y Configuración

### 1. Clonar el Repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_PROYECTO>
```

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Verificar/Actualizar Versión de Node.js

Si recibes un error de versión de Node.js incompatible, usa **nvm** para gestionarla:

```bash
nvm install --lts    # Instala la última versión LTS de Node.js
nvm use --lts        # Activa esa versión en tu sesión actual
```

---

## 🎨 Configuración de Tailwind CSS (v3)

### 1. Instalar Tailwind, PostCSS y Autoprefixer

```bash
<<npm install -D tailwindcss@3 postcss autoprefixer>>
```

### 2. Inicializar Archivos de Configuración

```bash
npx tailwindcss init -p
```

Esto creará los archivos:

- `tailwind.config.js`
- `postcss.config.js`

### 3. Configuración Básica de Tailwind

**tailwind.config.js**
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**postcss.config.js**
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

**src/index.css**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 🖼️ Instalación de la Librería de Iconos

Este proyecto utiliza **Lucide-React** para los iconos.  
Si al iniciar recibes el error `Failed to resolve import`, ejecuta:

```bash
npm install lucide-react
```

---

## 🚀 Levantar el Entorno de Desarrollo

Ejecuta el servidor local con:

```bash
npm run dev
```

Esto abrirá la aplicación en tu navegador.  
Si ves los estilos de Tailwind aplicados y los iconos funcionando, ¡todo está listo para comenzar a desarrollar!

---

## ✅ Verificación

- Tailwind CSS v3 cargando correctamente.  
- Dependencias instaladas sin errores.  
- Iconos de **Lucide-React** disponibles.  
- Aplicación accesible en el navegador tras correr `npm run dev`.

---

## 📂 Estructura Base del Proyecto

```bash
.
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.app.json       
├── tsconfig.node.json
├── tsconfig.json
└── src
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    └── components/
```