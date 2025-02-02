window.onscroll = function() {
    navList.classList.remove('active');
    menuBtn.classList.remove('ri-arrow-up-double-line');
}

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
