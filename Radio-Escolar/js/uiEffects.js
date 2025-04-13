// js/uiEffects.js
export function initUIEffects() {
    // 🎸 Glitch en títulos
    document.querySelectorAll(".glitch").forEach(el => {
        el.setAttribute("data-text", el.textContent);
    });

    // 🌌 Fondo animado
    const animatedBg = document.createElement("div");
    animatedBg.classList.add("animated-bg");
    document.body.appendChild(animatedBg);

    for (let i = 0; i < 3; i++) {
        const wave = document.createElement("div");
        wave.classList.add("wave");
        wave.style.animationDelay = `${i * 1.5}s`;
        animatedBg.appendChild(wave);
    }

    // 🔮 Efecto de luces con el cursor
    const cursorLight = document.createElement("div");
    cursorLight.classList.add("cursor-light");
    document.body.appendChild(cursorLight);

    document.addEventListener("mousemove", e => {
        cursorLight.style.left = `${e.clientX}px`;
        cursorLight.style.top = `${e.clientY}px`;
    });

    // 💠 Aplicar efectos visuales
    document.querySelectorAll("h1, h2, h3").forEach(t => t.classList.add("holographic-text"));
    document.querySelectorAll("section, .panel").forEach(p => p.classList.add("glass-panel"));
    document.querySelectorAll("button").forEach(b => b.classList.add("holo-button"));

    // 🎬 Interferencia al cambiar de sección (enlace hash)
    const overlay = document.createElement("div");
    overlay.classList.add("section-transition");
    document.body.appendChild(overlay);

    document.querySelectorAll("a[href^='#']").forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            overlay.classList.add("active");
            setTimeout(() => {
                overlay.classList.remove("active");
                window.location.hash = link.getAttribute("href");
            }, 500);
        });
    });
}
