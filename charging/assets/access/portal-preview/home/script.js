//mbitell

document.querySelectorAll(".nav-link-item").forEach(item => {
  item.addEventListener("mouseenter", () => {
      let dropdown = item.querySelector(".dropdown-menu");
      if (dropdown) {
          dropdown.style.animation = "none";
          setTimeout(() => {
              dropdown.style.animation = "fadeIn 0.4s ease-in-out";
          }, 10);
      }
  });
});

//memeriondo

document.addEventListener('DOMContentLoaded', () => {
    /* -----------------------------------------
       1. Animaciones de entrada con ScrollReveal
    ----------------------------------------- */
    ScrollReveal().reveal('.logo, .navlist ul li, .subscribe-btn', {
      duration: 1000,
      origin: 'top',
      distance: '20px',
      easing: 'ease-out',
      reset: false,
      interval: 100 // Animación escalonada para cada elemento
    });
  
    /* -----------------------------------------
       2. Mostrar/Ocultar la caja de búsqueda
    ----------------------------------------- */
    const searchIcon = document.querySelector('.searchbar i');
    const searchClick = document.querySelector('.searchclick');
  
    // Al hacer clic en el ícono de la lupa, alterna la clase "active"
    searchIcon.addEventListener('click', () => {
      searchClick.classList.toggle('active');
    });
  
    /* -----------------------------------------
       3. Toggle del estilo en el <body> con checkbox
    ----------------------------------------- */
    const toggleCheckbox = document.querySelector('.toggle-checkbox');
    
    // Si se encuentra el checkbox, se añade el listener
    if (toggleCheckbox) {
      toggleCheckbox.addEventListener('change', function () {
        if (this.checked) {
          document.body.classList.add('body');
        } else {
          document.body.classList.remove('body');
        }
      });
    }
  });

//header scroll

const header = document.getElementById('header');

//function to handle scroll event

function handlescroll() {
    if (window.scrollY > 0) {
        header.classList.add('scrolled')
    } else {
        header.classList.remove('scrolled')
    }
}

//attach
window.addEventListener('scroll', handlescroll);





window.onscroll = function() {
    navList.classList.remove('active');
    menuBtn.classList.remove('ri-arrow-up-double-line');
}


document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('mobile-menu');
  const navLinksContainer = document.querySelector('.nav-links-container');

  menuToggle.addEventListener('click', () => {
      navLinksContainer.classList.toggle('active');
  });
});


// ================================SCROLLREVEAL ANIMATION=============================
const sr = ScrollReveal({
    distance: '80px',
    duration: 2500,
    delay: 200,
    reset: true,
});

// Usando ScrollReveal en varios elementos
sr.reveal('.top-nav', { origin: 'top' });
sr.reveal('.home-container .content h1', { origin: 'bottom' });
sr.reveal('.home-container .content p', { origin: 'left' });
sr.reveal('.features-container .box:nth-child(1)', { delay: 100, origin: 'top' });
sr.reveal('.features-container .box:nth-child(2)', { delay: 300, origin: 'top' });
sr.reveal('.features-container .box:nth-child(3)', { delay: 500, origin: 'top' });
sr.reveal('.features-container .box:nth-child(4)', { delay: 700, origin: 'top' });
sr.reveal('.about-container .right', { origin: 'left' });
sr.reveal('.blog-container', { origin: 'left' });
sr.reveal('.testimonial-container .box:nth-child(1)', { delay: 100, origin: 'top' });
sr.reveal('.testimonial-container .box:nth-child(2)', { delay: 300, origin: 'top' });
sr.reveal('.testimonial-container .box:nth-child(3)', { delay: 500, origin: 'top' });
sr.reveal('.contact-container .form div:first-child', { origin: 'right' });
sr.reveal('.contact-container .form div:last-child', { origin: 'left' });
sr.reveal('.footer-container', { origin: 'top' });


/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
 
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav-toggle','nav-menu')


 


 