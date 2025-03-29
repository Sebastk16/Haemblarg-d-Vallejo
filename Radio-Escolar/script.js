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

document.addEventListener("DOMContentLoaded", function () {
    const schedule = [
        { time: "08:00", name: "Despierta con la Radio" },
        { time: "10:00", name: "Noticias Escolares" },
        { time: "12:00", name: "Música y Cultura" },
        { time: "14:00", name: "Lo Mejor del Pop" },
        { time: "16:00", name: "Entrevistas en Vivo" },
        { time: "18:00", name: "Electrónica y Chill" },
        { time: "20:00", name: "Noche de Podcast" }
    ];

    // 📅 Crear la tabla de horarios
    const scheduleContainer = document.createElement("div");
    scheduleContainer.classList.add("program-schedule");
    scheduleContainer.innerHTML = "<h2>📅 Programación de Hoy</h2>";

    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes(); // Convertir a minutos

    schedule.forEach(program => {
        const programTime = parseInt(program.time.split(":")[0]) * 60 + parseInt(program.time.split(":")[1]);

        const programItem = document.createElement("div");
        programItem.classList.add("program-item");
        programItem.innerHTML = `<span>${program.time}</span> <span>${program.name}</span>`;

        // 🔥 Resaltar el programa actual
        if (currentTime >= programTime && currentTime < programTime + 59) {
            programItem.classList.add("highlight");
            showProgramNotification(program.name);
        }

        scheduleContainer.appendChild(programItem);
    });

    document.body.appendChild(scheduleContainer);

    // 🔔 Función para mostrar notificaciones cuando empieza un programa
    function showProgramNotification(programName) {
        const notification = document.createElement("div");
        notification.classList.add("program-notification");
        notification.innerHTML = `🔔 ¡Está empezando "${programName}" en la radio!`;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.opacity = "1";
        }, 100);

        setTimeout(() => {
            notification.style.opacity = "0";
            setTimeout(() => notification.remove(), 500);
        }, 5000);
    }

    // ⏳ Verificar cada minuto si hay un nuevo programa en curso
    setInterval(() => {
        document.querySelectorAll(".program-item").forEach(item => item.classList.remove("highlight"));

        const now = new Date();
        const currentTime = now.getHours() * 60 + now.getMinutes();

        schedule.forEach(program => {
            const programTime = parseInt(program.time.split(":")[0]) * 60 + parseInt(program.time.split(":")[1]);

            if (currentTime >= programTime && currentTime < programTime + 59) {
                document.querySelectorAll(".program-item").forEach(item => {
                    if (item.innerText.includes(program.name)) {
                        item.classList.add("highlight");
                        showProgramNotification(program.name);
                    }
                });
            }
        });
    }, 60000);
});

document.addEventListener("DOMContentLoaded", function () {
    const chatContainer = document.createElement("div");
    chatContainer.classList.add("chat-container");
    chatContainer.innerHTML = `
        <div class="chat-header">💬 Chat en Vivo (Click para Abrir)</div>
        <div class="chat-body">
            <div class="chat-options">
                <button id="showYTChat">YouTube Chat</button>
                <button id="showTWChat">Twitch Chat</button>
                <button id="showInternalChat">Chat Interno</button>
            </div>
            <div id="youtubeChat" class="chat-frame" style="display: none;">
                <iframe src="https://www.youtube.com/live_chat?v=VIDEO_ID&embed_domain=la-emblematica-de-vallejo.netlify.app" width="100%" height="100%" frameborder="0"></iframe>
            </div>
            <div id="twitchChat" class="chat-frame" style="display: none;">
                <iframe src="https://www.twitch.tv/embed/haemcvlive/chat?parent=la-emblematica-de-vallejo.netlify.app" width="100%" height="100%" frameborder="0"></iframe>
            </div>
            <div id="internalChat" class="internal-chat" style="display: none;">
                <div class="chat-messages"></div>
                <div class="chat-input">
                    <input type="text" id="messageInput" placeholder="Escribe un mensaje...">
                    <button id="sendMessage">Enviar</button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(chatContainer);

    const chatHeader = document.querySelector(".chat-header");
    const chatBody = document.querySelector(".chat-body");

    chatHeader.addEventListener("click", function () {
        chatContainer.classList.toggle("active");
    });

    // 🎮 Botones para cambiar entre chats
    document.getElementById("showYTChat").addEventListener("click", function () {
        showChat("youtubeChat");
    });

    document.getElementById("showTWChat").addEventListener("click", function () {
        showChat("twitchChat");
    });

    document.getElementById("showInternalChat").addEventListener("click", function () {
        showChat("internalChat");
    });

    function showChat(chatId) {
        document.querySelectorAll(".chat-frame, .internal-chat").forEach(chat => chat.style.display = "none");
        document.getElementById(chatId).style.display = "block";
    }

    // 📝 Chat Interno
    const chatMessages = document.querySelector(".chat-messages");
    const messageInput = document.getElementById("messageInput");
    const sendMessageBtn = document.getElementById("sendMessage");

    sendMessageBtn.addEventListener("click", function () {
        const message = messageInput.value.trim();
        if (message !== "") {
            const newMessage = document.createElement("div");
            newMessage.textContent = message;
            chatMessages.appendChild(newMessage);
            messageInput.value = "";
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    });

    messageInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendMessageBtn.click();
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // 🎨 Agregar botón de Modo Oscuro/Claro
    const modeToggle = document.createElement("button");
    modeToggle.textContent = "🌙 Modo Oscuro";
    modeToggle.classList.add("mode-toggle");
    document.body.appendChild(modeToggle);

    // 🌙 Verificar la preferencia del usuario en localStorage
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
        modeToggle.textContent = "☀️ Modo Claro";
    }

    // 🎛️ Alternar Modo
    modeToggle.addEventListener("click", function () {
        document.body.classList.toggle("light-mode");
        if (document.body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
            modeToggle.textContent = "☀️ Modo Claro";
        } else {
            localStorage.setItem("theme", "dark");
            modeToggle.textContent = "🌙 Modo Oscuro";
        }
    });

    // 📢 Notificaciones Push
    function showPushNotification(message) {
        const notification = document.createElement("div");
        notification.classList.add("push-notification");
        notification.innerHTML = `📢 ${message}`;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.opacity = "1";
        }, 100);

        setTimeout(() => {
            notification.style.opacity = "0";
            setTimeout(() => notification.remove(), 500);
        }, 5000);
    }

    // 🎥 Verificar transmisiones en vivo y enviar notificaciones push
    async function checkLiveStatus() {
        let isLive = false;

        try {
            const API_KEY = "AIzaSyD7cy4fM629aMOjW3jJK2UAsxhbK6GnLy0";
            const CHANNEL_ID = "UCNTgnioM4lW1CK0XHXky9ig";
            const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&eventType=live&type=video&key=${API_KEY}`);
            const data = await response.json();

            if (data.items.length > 0) {
                isLive = true;
                if (!localStorage.getItem("notifiedLive")) {
                    showPushNotification("🔴 ¡Nueva transmisión en vivo en YouTube!");
                    localStorage.setItem("notifiedLive", "true");
                }
            } else {
                localStorage.removeItem("notifiedLive");
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
                isLive = true;
                if (!localStorage.getItem("notifiedLiveTwitch")) {
                    showPushNotification("🔴 ¡Nueva transmisión en vivo en Twitch!");
                    localStorage.setItem("notifiedLiveTwitch", "true");
                }
            } else {
                localStorage.removeItem("notifiedLiveTwitch");
            }
        } catch (error) {
            console.error("Error verificando transmisión en vivo de Twitch:", error);
        }
    }

    // ⏳ Verificar transmisiones en vivo cada 30 segundos
    setInterval(checkLiveStatus, 30000);
    checkLiveStatus();
});



document.addEventListener("DOMContentLoaded", function () {
    // 💠 Agregar efecto de luces interactivas con el cursor
    const cursorLight = document.createElement("div");
    cursorLight.classList.add("cursor-light");
    document.body.appendChild(cursorLight);

    document.addEventListener("mousemove", function (event) {
        cursorLight.style.left = `${event.clientX}px`;
        cursorLight.style.top = `${event.clientY}px`;
    });

    // 🔮 Aplicar efecto holográfico en los títulos
    document.querySelectorAll("h1, h2, h3").forEach(title => {
        title.classList.add("holographic-text");
    });

    // 💎 Aplicar efecto de vidrio a los contenedores principales
    document.querySelectorAll("section, .panel").forEach(panel => {
        panel.classList.add("glass-panel");
    });

    // 🎛️ Convertir botones en holográficos
    document.querySelectorAll("button").forEach(button => {
        button.classList.add("holo-button");
    });
});


document.addEventListener("DOMContentLoaded", function () {
    let notifiedLive = false; // Para evitar notificaciones repetidas

    async function checkLiveStatus() {
        let isLive = false;
        let liveProgramName = "";

        try {
            const API_KEY = "AIzaSyD7cy4fM629aMOjW3jJK2UAsxhbK6GnLy0";
            const CHANNEL_ID = "UCNTgnioM4lW1CK0XHXky9ig";
            const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&eventType=live&type=video&key=${API_KEY}`);
            const data = await response.json();

            if (data.items.length > 0) {
                isLive = true;
                liveProgramName = data.items[0].snippet.title;
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
                isLive = true;
                liveProgramName = data.data[0].title;
            }
        } catch (error) {
            console.error("Error verificando transmisión en vivo de Twitch:", error);
        }

        // 📢 Si hay una transmisión en vivo, enviar notificación
        if (isLive && !notifiedLive) {
            sendLiveNotification(liveProgramName);
            notifiedLive = true;
        } else if (!isLive) {
            notifiedLive = false; // Restablecer notificaciones si no hay transmisión
        }
    }

    function sendLiveNotification(programName) {
        const summary = generateAISummary(programName);
        const notificationOptions = {
            body: summary,
            icon: "live-icon.png"
        };

        if (Notification.permission === "granted") {
            new Notification("🔴 EN VIVO: " + programName, notificationOptions);
            navigator.vibrate([200, 100, 200]); // Vibración en móviles
        } else if (Notification.permission !== "denied") {
            Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                    new Notification("🔴 EN VIVO: " + programName, notificationOptions);
                    navigator.vibrate([200, 100, 200]);
                }
            });
        }
    }

    function generateAISummary(programName) {
        // 🧠 Simulación de IA generando resúmenes dinámicos
        const summaries = [
            `¡No te pierdas "${programName}"! Un programa lleno de información y entretenimiento.`,
            `🎙️ Ahora en vivo: "${programName}". ¡Únete a la conversación en el chat!`,
            `🔊 "${programName}" ha comenzado. Escucha las últimas novedades y entrevistas exclusivas.`,
            `📡 Conéctate a "${programName}" en vivo. Música, entrevistas y más en nuestra radio escolar.`
        ];
        return summaries[Math.floor(Math.random() * summaries.length)];
    }

    // ⏳ Verificar transmisiones en vivo cada 30 segundos
    setInterval(checkLiveStatus, 30000);
    checkLiveStatus();
});

document.addEventListener("DOMContentLoaded", function () {
    // 📡 Indicador de Calidad de Señal
    const signalMeter = document.createElement("div");
    signalMeter.classList.add("signal-meter");
    signalMeter.innerHTML = `
        <h3>📡 Calidad de Señal</h3>
        <div class="signal-bar"></div>
    `;
    document.body.appendChild(signalMeter);

    const signalBar = document.querySelector(".signal-bar");

    async function checkSignalQuality() {
        let signalStrength = Math.random() * 100; // Simulación de señal

        if (signalStrength < 30) {
            showHologramAlert("⚠️ Señal Débil - Posible Interrupción");
        } else {
            hideHologramAlert();
        }

        signalBar.style.width = `${signalStrength}%`;
    }

    function showHologramAlert(message) {
        let alertBox = document.querySelector(".alert-hologram");
        if (!alertBox) {
            alertBox = document.createElement("div");
            alertBox.classList.add("alert-hologram");
            document.body.appendChild(alertBox);
        }
        alertBox.textContent = message;
        alertBox.style.display = "block";
    }

    function hideHologramAlert() {
        const alertBox = document.querySelector(".alert-hologram");
        if (alertBox) alertBox.style.display = "none";
    }

    setInterval(checkSignalQuality, 5000);

    // 📊 Gráfico en Tiempo Real de Oyentes
    const chartContainer = document.createElement("div");
    chartContainer.innerHTML = `<canvas id="listenersChart"></canvas>`;
    document.body.appendChild(chartContainer);

    const ctx = document.getElementById("listenersChart").getContext("2d");
    let listenerData = [5, 10, 15, 20, 25, 30, 35];
    let timeLabels = ["10s", "20s", "30s", "40s", "50s", "60s", "70s"];

    const listenersChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: timeLabels,
            datasets: [{
                label: "Oyentes en Vivo",
                data: listenerData,
                borderColor: "cyan",
                backgroundColor: "rgba(0, 255, 255, 0.2)",
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });

    function updateListeners() {
        const newListeners = Math.floor(Math.random() * 100); // Simulación de oyentes
        listenerData.shift();
        listenerData.push(newListeners);
        listenersChart.update();
    }

    setInterval(updateListeners, 5000);

    // 🎵 Ondas de Sonido Interactivas
    const waveContainer = document.createElement("div");
    waveContainer.classList.add("wave-visualizer");

    for (let i = 0; i < 20; i++) {
        const wave = document.createElement("div");
        wave.classList.add("wave");
        wave.style.animationDelay = `${i * 0.1}s`;
        waveContainer.appendChild(wave);
    }

    document.body.appendChild(waveContainer);

    function adjustWaveHeight(volumeLevel) {
        document.querySelectorAll(".wave").forEach(wave => {
            wave.style.height = `${10 + (volumeLevel * 30)}px`;
        });
    }

    // Simulación de volumen cambiando
    setInterval(() => {
        adjustWaveHeight(Math.random());
    }, 500);
});

document.addEventListener("DOMContentLoaded", function () {
    // 📱 Deshabilitar animaciones pesadas en móviles
    if (window.innerWidth < 768) {
        document.body.classList.add("low-performance");
    }

    // 🎵 Optimizar carga de la música de fondo en móviles
    const musicButton = document.querySelector(".music-button");
    if (musicButton) {
        musicButton.addEventListener("click", () => {
            if (window.innerWidth < 768) {
                alert("🎧 Para ahorrar batería, la música no se activará automáticamente en móviles.");
            }
        });
    }

    // 🛑 Asegurar que el chat no bloquee la pantalla en móviles
    const chatContainer = document.querySelector(".chat-container");
    if (chatContainer) {
        chatContainer.addEventListener("click", function () {
            if (window.innerWidth < 768) {
                chatContainer.classList.toggle("expanded");
            }
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {
    // 📌 Seleccionar el chat y el botón flotante
    const chatButton = document.createElement("button");
    chatButton.classList.add("chat-toggle-btn");
    chatButton.innerHTML = "💬";
    document.body.appendChild(chatButton);

    const chatContainer = document.querySelector(".chat-container");

    // 🔄 Alternar visibilidad del chat al presionar el botón
    chatButton.addEventListener("click", function () {
        if (chatContainer.style.display === "none" || chatContainer.style.display === "") {
            chatContainer.style.display = "block";
        } else {
            chatContainer.style.display = "none";
        }
    });
});



