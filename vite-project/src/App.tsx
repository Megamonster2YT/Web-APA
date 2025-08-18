import React, { useState, useEffect, useRef } from 'react';
import { Menu, Linkedin, MessageSquareText, Phone } from 'lucide-react';

// Custom hook para la animación de fade-in
const useFadeInOnScroll = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(currentRef);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // El 10% del elemento es visible
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return [ref, isInView];
};

// Componente principal de la aplicación
const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formMessage, setFormMessage] = useState('');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormMessage('¡Gracias! Tu mensaje ha sido enviado correctamente.');
    e.target.reset();
  };

  // Datos de los miembros del equipo y proyectos
  const teamMembers = [
    { name: 'Nombre Apellido', role: 'Diseñador UX/UI', linkedin: '#', whatsapp: '#', img: 'https://placehold.co/150x150/1f2937/ffffff?text=Miembro+1' },
    { name: 'Nombre Apellido', role: 'Desarrollador Full-Stack', linkedin: '#', whatsapp: '#', img: 'https://placehold.co/150x150/1f2937/ffffff?text=Miembro+2' },
    { name: 'Nombre Apellido', role: 'Gerente de Proyectos', linkedin: '#', whatsapp: '#', img: 'https://placehold.co/150x150/1f2937/ffffff?text=Miembro+3' },
    { name: 'Nombre Apellido', role: 'Especialista en QA', linkedin: '#', whatsapp: '#', img: 'https://placehold.co/150x150/1f2937/ffffff?text=Miembro+4' },
  ];

  const projects = [
    { title: 'Sitio Web Corporativo', description: 'Desarrollo de un sitio web corporativo de alto rendimiento para una empresa de tecnología.', img: 'https://placehold.co/600x400/1f2937/ffffff?text=Proyecto+Web' },
    { title: 'Aplicación Móvil de E-commerce', description: 'Creación de una aplicación móvil para iOS y Android con pasarela de pago y gestión de inventario.', img: 'https://placehold.co/600x400/1f2937/ffffff?text=Aplicacion+Movil' },
    { title: 'Plataforma SaaS de Gestión', description: 'Desarrollo de una plataforma web (SaaS) para la gestión de proyectos y equipos.', img: 'https://placehold.co/600x400/1f2937/ffffff?text=Dashboard+SaaS' },
  ];

  // Aplicar el hook a cada sección
  const [nosotrosRef, nosotrosInView] = useFadeInOnScroll();
  const [proyectosRef, proyectosInView] = useFadeInOnScroll();
  const [contactoRef, contactoInView] = useFadeInOnScroll();

  // URL para el contacto de WhatsApp (personalizar con tu número y mensaje)
  const whatsappUrl = `https://wa.me/5491112345678?text=${encodeURIComponent('Hola, me gustaría más información sobre sus servicios de desarrollo.')}`;

  return (
    <div className="bg-black text-white font-inter">
      {/* Barra de navegación */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-80 backdrop-blur-lg">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-white text-xl font-bold">
            APA
          </a>
          <div className="hidden md:flex space-x-6 text-gray-300 font-semibold">
            <a href="#inicio" className="hover:text-red-600 transition-colors">Inicio</a>
            <a href="#nosotros" className="hover:text-red-600 transition-colors">Nosotros</a>
            <a href="#proyectos" className="hover:text-red-600 transition-colors">Proyectos</a>
            <a href="#contacto" className="hover:text-red-600 transition-colors">Contacto</a>
          </div>
          <button onClick={toggleMobileMenu} className="md:hidden text-white focus:outline-none">
            <Menu className="w-6 h-6" />
          </button>
        </nav>
        <div className={`md:hidden bg-gray-900 text-white text-center py-4 space-y-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <a href="#inicio" onClick={toggleMobileMenu} className="block py-2 hover:bg-gray-800 transition-colors">Inicio</a>
          <a href="#nosotros" onClick={toggleMobileMenu} className="block py-2 hover:bg-gray-800 transition-colors">Nosotros</a>
          <a href="#proyectos" onClick={toggleMobileMenu} className="block py-2 hover:bg-gray-800 transition-colors">Proyectos</a>
          <a href="#contacto" onClick={toggleMobileMenu} className="block py-2 hover:bg-gray-800 transition-colors">Contacto</a>
        </div>
      </header>

      <main>
        {/* Sección de inicio (Hero Section) */}
        <section id="inicio" className="relative min-h-screen flex items-center justify-center text-center py-24 bg-gray-950 overflow-hidden">
          {/* Imagen de fondo elegante */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://placehold.co/1920x1080/000000/ffffff?text=Tu+Imagen+Elegante+Aqui")',
            }}
          ></div>
          {/* Capa de superposición para mejorar la legibilidad del texto */}
          <div className="absolute inset-0 z-10 bg-black/70"></div>
          
          {/* Contenido de la sección Hero */}
          <div className="relative z-20 max-w-4xl mx-auto px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-2">
              <span className="text-red-600">Transformamos ideas</span><br /> en experiencias digitales.
            </h1>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Analista Programadores Asociados
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              APA te ayuda a mejorar tu desarrollo con soluciones innovadoras y eficientes,
              creando productos que realmente importan.
            </p>
            <a href="#contacto" className="px-8 py-3 rounded-full font-bold transition-all duration-300 bg-red-600 text-white shadow-lg shadow-red-500/50 hover:bg-red-700">
              Comienza tu proyecto
            </a>
          </div>
        </section>

        {/* Sección de equipo */}
        <section id="nosotros" className="py-24 bg-black">
          <div ref={nosotrosRef} className={`container mx-auto px-4 text-center transition-all duration-1000 transform ${nosotrosInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">Conoce a nuestro equipo</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 hover:border-red-600">
                  <img src={member.img} alt={`Foto de ${member.name}`} className="w-24 h-24 mx-auto rounded-full mb-4 object-cover border-4 border-red-600" />
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-red-500 font-medium">{member.role}</p>
                  <div className="flex justify-center space-x-4 mt-4">
                    <a href={member.linkedin} className="transition-transform transform hover:scale-125 duration-200" aria-label={`LinkedIn de ${member.name}`}>
                      <Linkedin className="w-6 h-6 text-gray-400 hover:text-red-600" />
                    </a>
                    <a href={member.whatsapp} className="transition-transform transform hover:scale-125 duration-200" aria-label={`WhatsApp de ${member.name}`}>
                      <MessageSquareText className="w-6 h-6 text-gray-400 hover:text-red-600" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sección de proyectos */}
        <section id="proyectos" className="py-24 bg-gray-950">
          <div ref={proyectosRef} className={`container mx-auto px-4 text-center transition-all duration-1000 transform ${proyectosInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">Nuestros Proyectos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-gray-900 border border-gray-800 rounded-xl p-4 overflow-hidden transition-all duration-300 hover:scale-105 hover:border-red-600">
                  <img src={project.img} alt={`Imagen del proyecto: ${project.title}`} className="w-full h-48 object-cover rounded-md mb-4" />
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <p className="text-gray-400 mt-2">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sección de contacto */}
        <section id="contacto" className="py-24 bg-black">
          <div ref={contactoRef} className={`container mx-auto px-4 text-center transition-all duration-1000 transform ${contactoInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">Contáctanos</h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              ¿Listo para comenzar tu proyecto? Llena el formulario o contáctanos directamente.
            </p>
            <div className="max-w-xl mx-auto">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <input type="text" placeholder="Nombre completo" className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600" required />
                <input type="email" placeholder="Correo electrónico" className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600" required />
                <input type="text" placeholder="Asunto" className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600" required />
                <textarea placeholder="Tu mensaje..." rows="5" className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600 resize-none" required></textarea>
                <button type="submit" className="px-8 py-3 rounded-full font-bold transition-all duration-300 bg-red-600 text-white shadow-lg shadow-red-500/50 hover:bg-red-700 w-full">
                  Enviar Mensaje
                </button>
              </form>
              {formMessage && (
                <div className="mt-4 text-green-500 font-semibold text-sm animate-pulse">
                  {formMessage}
                </div>
              )}
              {/* Botón de WhatsApp añadido aquí */}
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-6 inline-flex items-center justify-center w-full px-8 py-3 rounded-full font-bold transition-all duration-300 bg-green-600 text-white hover:bg-green-700"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contáctanos por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Pie de página */}
      <footer className="bg-gray-950 text-gray-500 py-8 text-center">
        <div className="container mx-auto px-4">
          <p>&copy; 2024 APA Analista Programadores Asociados. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
