const texts = [
    "Explora soluciones tecnológicas innovadoras y servicios de informática personalizados. Desde desarrollo de software y gestión de sistemas hasta ciberseguridad y consultoría IT, optimizamos tu infraestructura digital para impulsar tu negocio.",
    "Soluciones IT especializadas en configuración remota y reparación de equipos electrónicos. Optimizamos tu tecnología para que tu negocio nunca se detenga.",
    "Mantenemos tu tecnología en óptimas condiciones con servicios de configuración remota y reparación de equipos electrónicos, adaptados a tus necesidades",
    "Confía en expertos para la configuración remota y reparación de tus equipos electrónicos. Soluciones rápidas y efectivas para mantener tu negocio en marcha."
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