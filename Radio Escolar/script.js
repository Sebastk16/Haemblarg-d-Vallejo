document.addEventListener("DOMContentLoaded", function () {
    const liveIndicator = document.querySelector(".live-indicator");

    function animateLiveIndicator() {
        let colors = ["#ff007f", "#ff4da6", "#ff99cc", "#ff007f"];
        let index = 0;
        
        function updateIndicator() {
            liveIndicator.style.backgroundColor = colors[index];
            liveIndicator.style.boxShadow = `0 0 10px ${colors[index]}`;
            index = (index + 1) % colors.length;
            requestAnimationFrame(updateIndicator);
        }
        
        requestAnimationFrame(updateIndicator);
    }
    
    if (liveIndicator) {
        animateLiveIndicator();
    }

    document.addEventListener("click", function playIntroSound() {
        const audio = new Audio("/Radio Escolar/intro.mp3");
        audio.volume = 0.5;
        audio.play().catch(error => console.error("Error reproduciendo sonido:", error));
        document.removeEventListener("click", playIntroSound);
    });

    function showLiveNotification(platform) {
        const notification = document.createElement("div");
        notification.classList.add("live-notification");
        notification.innerHTML = `🔴 ¡Nueva transmisión en vivo disponible en ${platform}!`;
        document.body.appendChild(notification);
        
        notification.style.opacity = "1";
        notification.style.transition = "opacity 1s ease-in-out";
        
        setTimeout(() => {
            notification.style.opacity = "0";
            setTimeout(() => notification.remove(), 500);
        }, 5000);
    }

    function fadeInElement(element) {
        element.style.opacity = 0;
        element.style.transition = "opacity 1s ease-in-out";
        setTimeout(() => {
            element.style.opacity = 1;
        }, 100);
    }

    const backgroundMusic = new Audio("background-music.mp3");
    backgroundMusic.loop = true;
    backgroundMusic.volume = 0.3;

    const musicButton = document.createElement("button");
    musicButton.textContent = "🎵 Activar Música";
    musicButton.classList.add("music-button");
    document.body.appendChild(musicButton);

    let isPlaying = false;
    musicButton.addEventListener("click", () => {
        if (isPlaying) {
            backgroundMusic.pause();
            musicButton.textContent = "🎵 Activar Música";
        } else {
            backgroundMusic.play().catch(error => console.error("Error reproduciendo música de fondo:", error));
            musicButton.textContent = "🔇 Desactivar Música";
        }
        isPlaying = !isPlaying;
    });
    
    async function checkLiveStatus() {
        try {
            const API_KEY = "AIzaSyD7cy4fM629aMOjW3jJK2UAsxhbK6GnLy0";
            const CHANNEL_ID = "UCNTgnioM4lW1CK0XHXky9ig";
            const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&eventType=live&type=video&key=${API_KEY}`);
            const data = await response.json();
            
            if (data.items.length > 0) {
                showLiveNotification("YouTube");
                fadeInElement(document.getElementById("liveVideoYT"));
            }
        } catch (error) {
            console.error("Error verificando transmisión en vivo de YouTube:", error);
        }
        
        try {
            const CLIENT_ID = "16ddpcdt2j340pavbyt8z989csh7dg";
            const OAUTH_TOKEN = "TU_NUEVO_OAUTH_TOKEN";
            const CHANNEL_NAME = "haemcvlive";
            const PARENT_DOMAIN = "la-emblematica-de-vallejo.netlify.app";
            
            const response = await fetch(`https://api.twitch.tv/helix/streams?user_login=${CHANNEL_NAME}`, {
                headers: {
                    "Client-ID": CLIENT_ID,
                    "Authorization": `Bearer ${OAUTH_TOKEN}`
                }
            });
            const data = await response.json();
            
            if (data.data.length > 0) {
                showLiveNotification("Twitch");
                fadeInElement(document.getElementById("liveVideoTW"));
            }
        } catch (error) {
            console.error("Error verificando transmisión en vivo de Twitch:", error);
        }
    }
    
    const refreshInterval = localStorage.getItem("refreshInterval") || 60000;
    setInterval(checkLiveStatus, refreshInterval);

    checkLiveStatus();
});

document.addEventListener("DOMContentLoaded", function () {
    // 🎵 Reproductor flotante
    const audio = new Audio("background-music.mp3");
    audio.loop = true;
    let isPlaying = false;

    const player = document.createElement("div");
    player.classList.add("audio-player");
    player.innerHTML = `
        <button id="playPauseBtn">▶️</button>
        <span>Radio Escolar</span>
    `;
    document.body.appendChild(player);

    document.getElementById("playPauseBtn").addEventListener("click", function () {
        if (isPlaying) {
            audio.pause();
            this.textContent = "▶️";
        } else {
            audio.play().catch(err => console.error("Error al reproducir música:", err));
            this.textContent = "⏸️";
        }
        isPlaying = !isPlaying;
    });


    

    // 🎨 Modo Claro/Oscuro
    const modeToggle = document.createElement("button");
    modeToggle.textContent = "🌞 Modo Claro";
    modeToggle.style.position = "fixed";
    modeToggle.style.top = "10px";
    modeToggle.style.right = "10px";
    modeToggle.style.padding = "10px";
    modeToggle.style.borderRadius = "5px";
    modeToggle.style.cursor = "pointer";
    document.body.appendChild(modeToggle);

    modeToggle.addEventListener("click", function () {
        document.body.classList.toggle("light-mode");
        if (document.body.classList.contains("light-mode")) {
            modeToggle.textContent = "🌙 Modo Oscuro";
        } else {
            modeToggle.textContent = "🌞 Modo Claro";
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // 🌌 Glitch en los títulos
    document.querySelectorAll(".glitch").forEach(element => {
        element.setAttribute("data-text", element.textContent);
    });

    // 📺 Transición de interferencia entre secciones
    const transitionOverlay = document.createElement("div");
    transitionOverlay.classList.add("section-transition");
    document.body.appendChild(transitionOverlay);

    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function (event) {
            if (this.getAttribute("href").startsWith("#")) {
                event.preventDefault();
                transitionOverlay.classList.add("active");
                setTimeout(() => {
                    transitionOverlay.classList.remove("active");
                    window.location.hash = this.getAttribute("href");
                }, 500);
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // 🎛️ Crear fondo animado
    const animatedBg = document.createElement("div");
    animatedBg.classList.add("animated-bg");
    document.body.appendChild(animatedBg);

    for (let i = 0; i < 3; i++) {
        const wave = document.createElement("div");
        wave.classList.add("wave");
        wave.style.animationDelay = `${i * 1.5}s`;
        animatedBg.appendChild(wave);
    }

    // 🎧 Sincronizar movimiento con el audio
    const audio = new Audio("background-music.mp3");
    audio.loop = true;
    let isPlaying = false;

    document.getElementById("playPauseBtn").addEventListener("click", function () {
        if (isPlaying) {
            audio.pause();
            animatedBg.style.animationPlayState = "paused";
        } else {
            audio.play().catch(err => console.error("Error reproduciendo música:", err));
            animatedBg.style.animationPlayState = "running";
        }
        isPlaying = !isPlaying;
    });

    // 🔊 Ajustar la intensidad del fondo con el volumen
    const audioVolume = document.getElementById("audioVolume");
    audioVolume.addEventListener("input", function () {
        const volume = this.value / 100;
        animatedBg.style.opacity = 0.5 + (volume * 0.5); 
    });
});


document.addEventListener("DOMContentLoaded", function () {
    let playedRadioEffect = false;

    function playRadioTuningEffect() {
        const radioTuning = new Audio("radio-tuning.mp3");
        radioTuning.volume = 0.6;
        radioTuning.play().catch(err => console.error("Error reproduciendo sonido de radio:", err));
    }

    async function checkLiveStatus() {
        try {
            const API_KEY = "AIzaSyD7cy4fM629aMOjW3jJK2UAsxhbK6GnLy0";
            const CHANNEL_ID = "UCNTgnioM4lW1CK0XHXky9ig";
            const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&eventType=live&type=video&key=${API_KEY}`);
            const data = await response.json();
            
            if (data.items.length > 0 && !playedRadioEffect) {
                playRadioTuningEffect();
                playedRadioEffect = true;
                setTimeout(() => {
                    document.getElementById("liveVideoYT").src = `https://www.youtube.com/embed/${data.items[0].id.videoId}?autoplay=1`;
                }, 3000); // Espera 3 segundos antes de iniciar el video
            }
        } catch (error) {
            console.error("Error verificando transmisión en vivo de YouTube:", error);
        }
        
        try {
            const CLIENT_ID = "16ddpcdt2j340pavbyt8z989csh7dg";
            const OAUTH_TOKEN = "TU_NUEVO_OAUTH_TOKEN";
            const CHANNEL_NAME = "haemcvlive";
            const PARENT_DOMAIN = "la-emblematica-de-vallejo.netlify.app";
            
            const response = await fetch(`https://api.twitch.tv/helix/streams?user_login=${CHANNEL_NAME}`, {
                headers: {
                    "Client-ID": CLIENT_ID,
                    "Authorization": `Bearer ${OAUTH_TOKEN}`
                }
            });
            const data = await response.json();
            
            if (data.data.length > 0 && !playedRadioEffect) {
                playRadioTuningEffect();
                playedRadioEffect = true;
                setTimeout(() => {
                    document.getElementById("liveVideoTW").src = `https://player.twitch.tv/?channel=${CHANNEL_NAME}&parent=${PARENT_DOMAIN}`;
                }, 3000); // Espera 3 segundos antes de iniciar el video
            }
        } catch (error) {
            console.error("Error verificando transmisión en vivo de Twitch:", error);
        }
    }

    setInterval(checkLiveStatus, 60000); // Verifica cada 60 segundos
    checkLiveStatus();
});


document.addEventListener("DOMContentLoaded", function () {
    // 🎛️ Elementos de audio
    const audio = new Audio("background-music.mp3");
    audio.loop = true;
    audio.volume = 0.5;
    let isPlaying = false;
    
    // 📺 Obtener transmisiones en vivo
    const liveYT = document.getElementById("liveVideoYT");
    const liveTW = document.getElementById("liveVideoTW");

    // 🎚️ Crear controles avanzados de audio
    const controlsDiv = document.createElement("div");
    controlsDiv.classList.add("audio-controls");
    controlsDiv.innerHTML = `
        <button id="muteButton">🔇 Silenciar</button>
        <input type="range" id="volumeSlider" class="audio-slider" min="0" max="100" value="50">
    `;
    document.body.appendChild(controlsDiv);

    const muteButton = document.getElementById("muteButton");
    const volumeSlider = document.getElementById("volumeSlider");

    // 🔊 Control de volumen
    volumeSlider.addEventListener("input", function () {
        const volume = this.value / 100;
        audio.volume = volume;
        if (liveYT) liveYT.volume = volume;
        if (liveTW) liveTW.volume = volume;
    });

    // 🔕 Botón de mute
    muteButton.addEventListener("click", function () {
        if (audio.muted) {
            audio.muted = false;
            if (liveYT) liveYT.muted = false;
            if (liveTW) liveTW.muted = false;
            muteButton.textContent = "🔇 Silenciar";
        } else {
            audio.muted = true;
            if (liveYT) liveYT.muted = true;
            if (liveTW) liveTW.muted = true;
            muteButton.textContent = "🔊 Activar Sonido";
        }
    });

    // ▶️ Reproducir música automáticamente
    document.getElementById("playPauseBtn").addEventListener("click", function () {
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play().catch(err => console.error("Error reproduciendo música:", err));
        }
        isPlaying = !isPlaying;
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const playlist = [
        "audio/lofi1.mp3",
        "audio/lofi2.mp3",
        "audio/electro1.mp3"
    ];

    let currentTrack = localStorage.getItem("lastTrack") ? parseInt(localStorage.getItem("lastTrack")) : 0;
    const audio = new Audio(playlist[currentTrack]);
    audio.loop = false;
    audio.volume = localStorage.getItem("musicVolume") ? parseFloat(localStorage.getItem("musicVolume")) : 0.5;
    
    // 🎵 Crear el reproductor de playlist
    const musicPlayer = document.createElement("div");
    musicPlayer.classList.add("music-player");
    musicPlayer.innerHTML = `
        <button id="prevTrack">⏮️</button>
        <button id="playPauseMusic">▶️</button>
        <button id="nextTrack">⏭️</button>
        <input type="range" id="musicVolume" min="0" max="100" value="${audio.volume * 100}">
    `;
    document.body.appendChild(musicPlayer);

    const playPauseBtn = document.getElementById("playPauseMusic");
    const prevTrackBtn = document.getElementById("prevTrack");
    const nextTrackBtn = document.getElementById("nextTrack");
    const volumeSlider = document.getElementById("musicVolume");

    let isPlaying = false;

    // ▶️ Play / Pause
    playPauseBtn.addEventListener("click", function () {
        if (isPlaying) {
            audio.pause();
            playPauseBtn.textContent = "▶️";
        } else {
            audio.play().catch(err => console.error("Error reproduciendo música:", err));
            playPauseBtn.textContent = "⏸️";
        }
        isPlaying = !isPlaying;
    });

    // ⏭️ Siguiente canción
    nextTrackBtn.addEventListener("click", function () {
        currentTrack = (currentTrack + 1) % playlist.length;
        changeTrack();
    });

    // ⏮️ Canción anterior
    prevTrackBtn.addEventListener("click", function () {
        currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
        changeTrack();
    });

    function changeTrack() {
        audio.src = playlist[currentTrack];
        localStorage.setItem("lastTrack", currentTrack);
        audio.play().catch(err => console.error("Error reproduciendo música:", err));
        isPlaying = true;
        playPauseBtn.textContent = "⏸️";
    }

    // 🎚️ Control de volumen
    volumeSlider.addEventListener("input", function () {
        const volume = this.value / 100;
        audio.volume = volume;
        localStorage.setItem("musicVolume", volume);
    });

    // 🔴 Pausar música si hay una transmisión en vivo
    async function checkLiveStatus() {
        try {
            const API_KEY = "AIzaSyD7cy4fM629aMOjW3jJK2UAsxhbK6GnLy0";
            const CHANNEL_ID = "UCNTgnioM4lW1CK0XHXky9ig";
            const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&eventType=live&type=video&key=${API_KEY}`);
            const data = await response.json();
            
            if (data.items.length > 0) {
                audio.pause();
                playPauseBtn.textContent = "▶️";
                isPlaying = false;
            }
        } catch (error) {
            console.error("Error verificando transmisión en vivo de YouTube:", error);
        }
        
        try {
            const CLIENT_ID = "16ddpcdt2j340pavbyt8z989csh7dg";
            const OAUTH_TOKEN = "TU_NUEVO_OAUTH_TOKEN";
            const CHANNEL_NAME = "haemcvlive";
            
            const response = await fetch(`https://api.twitch.tv/helix/streams?user_login=${CHANNEL_NAME}`, {
                headers: {
                    "Client-ID": CLIENT_ID,
                    "Authorization": `Bearer ${OAUTH_TOKEN}`
                }
            });
            const data = await response.json();
            
            if (data.data.length > 0) {
                audio.pause();
                playPauseBtn.textContent = "▶️";
                isPlaying = false;
            }
        } catch (error) {
            console.error("Error verificando transmisión en vivo de Twitch:", error);
        }
    }

    setInterval(checkLiveStatus, 30000); // Verifica cada 30 segundos
    checkLiveStatus();
});





