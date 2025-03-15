const texts = [
    "El desarrollo es el arte de transformar ideas en realidad. A través del código, la creatividad y la innovación, construimos soluciones que no solo resuelven problemas, sino que también inspiran y conectan al mundo. Ya sea diseñando una página web, creando una aplicación o integrando tecnologías emergentes, cada línea de código es un paso hacia un futuro más inteligente, eficiente y lleno de posibilidades. El desarrollo no es solo tecnología; es el puente entre lo imaginado y lo posible.",
    "Cada línea de código es un paso hacia un futuro más inteligente y eficiente, conectando ideas con posibilidades a través de la tecnología.",
    "Desarrollar no solo es resolver problemas, es construir un futuro lleno de oportunidades y conectar al mundo a través de la innovación tecnológica.",
    "El desarrollo como transformación: El desarrollo es el proceso de convertir ideas en realidad a través del código, la creatividad y la innovación, creando soluciones que resuelven problemas e inspiran al mundo."
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