const texts = [
    "Soluciones integrales en redes: diseño, implementación y gestión de infraestructuras de conectividad. Garantizamos redes seguras, estables y escalables para optimizar la comunicación y el rendimiento de tu negocio.",
    "Soluciones integrales en redes: diseño, implementación y gestión de infraestructuras de conectividad. Garantizamos redes seguras, estables y escalables para optimizar la comunicación y el rendimiento de tu negocio.",
    "Soluciones integrales en redes: diseño, implementación y gestión de infraestructuras de conectividad. Garantizamos redes seguras, estables y escalables para optimizar la comunicación y el rendimiento de tu negocio.",
    "Soluciones integrales en redes: diseño, implementación y gestión de infraestructuras de conectividad. Garantizamos redes seguras, estables y escalables para optimizar la comunicación y el rendimiento de tu negocio."
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