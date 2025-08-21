// Esto ya estaba 

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}


// Codigo Generado por Ia Geminis


/** @type {import('tailwindcss').Config} */
module.exports = {
  // `content` es la parte más importante. Le dice a Tailwind dónde buscar
  // las clases que usas en tu código.
  content: [
    // Escanea todos los archivos con estas extensiones (.js, .jsx, .ts, .tsx)
    // dentro del directorio `src` y sus subdirectorios.
    // Esto asegura que Tailwind genere solo los estilos que realmente usas.
    "./src/**/*.{js,jsx,ts,tsx}",
    
    // Si tienes archivos de índice en la raíz del proyecto (como index.html),
    // también puedes incluirlos aquí.
    "./index.html",
  ],
  
  // `theme` es donde puedes extender o personalizar el diseño por defecto de Tailwind.
  // Por ejemplo, puedes agregar tus propios colores, fuentes, espaciados, etc.
  theme: {
    extend: {
      // Aquí puedes definir tus propios colores personalizados,
      // como un color primario o secundario.
      colors: {
        'mi-color-primario': '#1A73E8',
      },
      
      // También puedes añadir tus propias fuentes.
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  
  // `plugins` es donde agregas funcionalidades adicionales a Tailwind.
  // Por ejemplo, el plugin de formularios de Tailwind.
  plugins: [
    require('@tailwindcss/forms'),
  ],
}