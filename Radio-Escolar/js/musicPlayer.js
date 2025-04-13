// js/musicPlayer.js
export function initMusicPlayer() {
    const playlist = ["audio/lofi1.mp3", "audio/lofi2.mp3", "audio/electro1.mp3"];
    let currentTrack = parseInt(localStorage.getItem("lastTrack") || "0");
    const audio = new Audio(playlist[currentTrack]);
    audio.loop = false;
    audio.volume = parseFloat(localStorage.getItem("musicVolume") || "0.5");

    const player = document.createElement("div");
    player.classList.add("music-player");
    player.innerHTML = `
        <button id="prevTrack">⏮️</button>
        <button id="playPauseMusic">▶️</button>
        <button id="nextTrack">⏭️</button>
        <input type="range" id="musicVolume" min="0" max="100" value="${audio.volume * 100}">
    `;
    document.body.appendChild(player);

    const playPause = player.querySelector("#playPauseMusic");
    const prev = player.querySelector("#prevTrack");
    const next = player.querySelector("#nextTrack");
    const volume = player.querySelector("#musicVolume");

    let isPlaying = false;

    playPause.onclick = () => {
        isPlaying ? audio.pause() : audio.play().catch(console.error);
        playPause.textContent = isPlaying ? "▶️" : "⏸️";
        isPlaying = !isPlaying;
    };

    prev.onclick = () => { currentTrack = (currentTrack - 1 + playlist.length) % playlist.length; changeTrack(); };
    next.onclick = () => { currentTrack = (currentTrack + 1) % playlist.length; changeTrack(); };

    volume.oninput = () => {
        const vol = volume.value / 100;
        audio.volume = vol;
        localStorage.setItem("musicVolume", vol);
    };

    function changeTrack() {
        audio.src = playlist[currentTrack];
        localStorage.setItem("lastTrack", currentTrack);
        audio.play().catch(console.error);
        isPlaying = true;
        playPause.textContent = "⏸️";
    }

    async function pauseIfLive() {
        try {
            const yt = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCNTgnioM4lW1CK0XHXky9ig&eventType=live&type=video&key=TU_API_KEY`);
            const ytData = await yt.json();
            if (ytData.items.length > 0) return pause();

            const tw = await fetch(`https://api.twitch.tv/helix/streams?user_login=haemcvlive`, {
                headers: { "Client-ID": "TU_CLIENT_ID", "Authorization": `Bearer TU_OAUTH_TOKEN` }
            });
            const twData = await tw.json();
            if (twData.data.length > 0) return pause();
        } catch (err) {
            console.error("Error en pausa por vivo:", err);
        }
    }

    function pause() {
        audio.pause();
        isPlaying = false;
        playPause.textContent = "▶️";
    }

    setInterval(pauseIfLive, 30000);
    pauseIfLive();
}
