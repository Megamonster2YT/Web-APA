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

const contactIcon = document.querySelector('.contact-icon');
const contactDropdown = document.querySelector('.contact-dropdown');

contactIcon.addEventListener('click', () => {
  contactDropdown.style.display = contactDropdown.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', (event) => {
  if (!event.target.matches('.contact-icon')) {
    contactDropdown.style.display = 'none';
  }
});

const socialIcons = document.querySelectorAll('.social-icon')

socialIcons.forEach(socialIcon => {
  socialIcon.addEventListener('click', () => {
    const socialDropdown = socialIcon.nextElementSibling;
    socialDropdown.style.display = socialDropdown.style.display === 'block' ? 'none' : 'block';
  });
});

document.addEventListener('click', (event) => {
  if (!event.target.matches('.social-icon')) {
    const socialDropdowns = document.querySelectorAll('.social-dropdown');
    socialDropdowns.forEach(socialDropdown => {
      socialDropdown.style.display = 'none';
    });
  }
});const locationIcon = document.querySelector('.location-icon');
const locationDropdown = document.querySelector('.location-dropdown');

locationIcon.addEventListener('click', () => {
  locationDropdown.style.display = locationDropdown.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', (event) => {
  if (!event.target.matches('.location-icon')) {
    locationDropdown.style.display = 'none';
  }
});