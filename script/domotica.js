const texts = [
    "Transforma tu espacio con domótica: automatización inteligente para hogares y edificios. Controla iluminación, climatización, seguridad y más, optimizando confort, eficiencia energética y conectividad.",
    "Instala un sistema de domótica que permita a los residentes controlar la iluminación, la temperatura y la seguridad de la casa de manera remota a través de una aplicación móvil, mejorando la comodidad y la eficiencia energética.",
    "Implementa un sistema de gestión inteligente en un edificio comercial, ajustando automáticamente la climatización y la iluminación según la ocupación de las habitaciones, reduciendo el consumo energético y creando un ambiente de trabajo más productivo.",
    "En un hogar o espacio comercial, integra sistemas de audio, video y control de ambientes en un solo sistema de domótica, permitiendo crear experiencias personalizadas de entretenimiento y confort con solo un toque o comando de voz.",
    "Instala cámaras de vigilancia, sensores de movimiento y alarmas conectadas a un sistema central de domótica, permitiendo monitorear y gestionar la seguridad del hogar o edificio en tiempo real desde cualquier lugar."
]

let currentIndex = 0;
const carouselElement = document.getElementById('text-carousel');
const dotsContainer = document.querySelector('.carousel-dots');

// Generar los puntos dinámicamente
texts.forEach((text, index) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (index === 0) {
    dot.classList.add('active');
  }
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function updateCarousel() {
  carouselElement.textContent = texts[currentIndex];
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
  currentIndex = (currentIndex + 1) % texts.length;
}

updateCarousel();
setInterval(updateCarousel, 5000);