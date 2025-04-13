// js/mobileMode.js
export function initMobileMode() {
    const isMobile = window.innerWidth < 768 || /Mobi|Android/i.test(navigator.userAgent);

    if (!isMobile) return;

    console.log("🔧 Activando modo liviano para móviles...");

    // Ocultar fondo animado
    const bg = document.querySelector(".animated-bg");
    if (bg) bg.style.display = "none";

    // Eliminar glitch y hologramas
    document.querySelectorAll(".glitch, .holographic-text, .cursor-light").forEach(el => {
        el.classList.remove("glitch", "holographic-text", "cursor-light");
    });

    // Pausar música si está sonando
    const musicPlayers = document.querySelectorAll("audio, .music-player");
    musicPlayers.forEach(el => {
        if (el.pause) el.pause();
        el.style.display = "none";
    });

    // Ocultar gráfico de oyentes (si lo tienes)
    const chart = document.getElementById("listenersChart");
    if (chart) chart.style.display = "none";

    // Reducir tamaño de textos si es necesario
    document.body.style.fontSize = "90%";
}
