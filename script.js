// ===================================NAVBAR============================================

const menuBtn = document.querySelector('ri-menu-2.line');
const navList = document.querySelector('.navlist');

menuBtn.onclick = function(){
    menuBtn.classList.toggle('ri-arrow-up-double-line');
    navList.classList.toggle('active')
}

window.onscroll = function(){
    navList.classList.remove('active');
    menuBtn.classList.remove('ri-arrow-up-double--line');
}


// ================================SCROLLREVEAL ANIMATION=============================


const sr = ScrollReveal({
    distance: '80px',
    duration: 2500,
    delay: 200,
    reset: true,


});

sr.reveal('.top-nav', { origin: 'top' });
sr.reveal('.home-container .content h1', { origin: 'bottom' });
sr.reveal('.home-container .content p', { origin: 'left' });
sr.reveal('.features-container .box:nth-child(1)', { delay: 100, origin: 'top' });
sr.reveal('.features-container .box:nth-child(2)', { delay: 300, origin: 'top' });
sr.reveal('.features-container .box:nth-child(3)', { delay: 500, origin: 'top' });
sr.reveal('.features-container .box:nth-child(4)', { delay: 700, origin: 'top' });
sr.reveal('.about-container .right', { origin: 'left' });
sr.reveal('.courses-container', { origin: 'top' });
sr.reveal('.team-container .card:nth-child(1)', { delay: 100, origin: 'top' });
sr.reveal('.team-container .card:nth-child(2)', { delay: 300, origin: 'top' });
sr.reveal('.team-container .card:nth-child(3)', { delay: 500, origin: 'top' });
sr.reveal('.team-container .card:nth-child(4)', { delay: 700, origin: 'top' });
sr.reveal('.team-container .card:nth-child(5)', { delay: 900, origin: 'top' });
sr.reveal('.blog-container', { origin: 'left' });
sr.reveal('.testimonial-container .box:nth-child(1)', { delay: 100, origin: 'top' });
sr.reveal('.testimonial-container .box:nth-child(2)', { delay: 300, origin: 'top' });
sr.reveal('.testimonial-container .box:nth-child(3)', { delay: 500, origin: 'top' });
sr.reveal('.contact-container .form div:first-child', { origin: 'right' });
sr.reveal('.contact-container .form div:last-child', { origin: 'left' });
sr.reveal('.footer-container', { origin: 'top' });
