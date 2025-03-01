// Alterna el menú en dispositivos móviles (si aplica en otras secciones)
function toggleMenu() {
    const menu = document.querySelector('nav ul.menu');
    if(menu) menu.classList.toggle('show');
  }
  
  // Animaciones adicionales al cargar la página y efecto parallax
  document.addEventListener("DOMContentLoaded", () => {
    const heroContent = document.querySelector('.hero-content');
    // Activamos la animación de entrada agregando la clase "animate"
    setTimeout(() => {
      heroContent.classList.add('animate');
    }, 300); // pequeño retardo para un efecto más suave
  
    // Parallax: ajusta la posición del fondo del hero al hacer scroll
    window.addEventListener('scroll', () => {
      const hero = document.querySelector('.hero');
      let scrollPosition = window.pageYOffset;
      // Ajusta la posición vertical del fondo para crear efecto parallax
      hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    });
  
    // Efecto bounce para el botón CTA al hacer clic
    const cta = document.querySelector('.cta');
    cta.addEventListener('click', () => {
      cta.classList.add('bounce');
      setTimeout(() => {
        cta.classList.remove('bounce');
      }, 300);
    });
  });
  