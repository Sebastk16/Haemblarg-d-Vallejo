function verificar(token) {
    const captchaBox = document.getElementById('captcha-box');
    const container = document.querySelector('.container');
    const successContainer = document.querySelector('.success-container');

    // Reemplazar el contenido del captchaBox con el loader
    captchaBox.innerHTML = '<div class="loader" id="loader"></div>';
    const loader = document.getElementById('loader'); // Reasigna el loader

    // Muestra el loader
    loader.style.display = 'block';

    setTimeout(() => {
        // Oculta el loader y muestra la pantalla de éxito
        container.style.display = 'none';
        successContainer.style.display = 'block';

        setTimeout(() => {
            window.location.href = '/charging/index.html';
        }, 3000);
    }, 2000);
}
