// js/liveStatus.js
export function initLiveStatus() {
    async function checkLiveStatus() {
        await checkYouTube();
        await checkTwitch();
    }

    async function checkYouTube() {
        const ytFrame = document.getElementById("liveVideoYT");
        if (!ytFrame) return;

        try {
            const API_KEY = "TU_API_KEY";
            const CHANNEL_ID = "UCNTgnioM4lW1CK0XHXky9ig";
            const res = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&eventType=live&type=video&key=${API_KEY}`);
            const data = await res.json();

            if (data.items.length > 0) {
                ytFrame.src = `https://www.youtube.com/embed/${data.items[0].id.videoId}?autoplay=1`;
                showLiveNotification("YouTube");
            }
        } catch (err) {
            console.error("Error en YouTube:", err);
        }
    }

    async function checkTwitch() {
        const twFrame = document.getElementById("liveVideoTW");
        if (!twFrame) return;

        try {
            const CLIENT_ID = "nlanmx7x07tdozekq5wuc1a8crny4c";
            const OAUTH_TOKEN = "kzrd6ke9up8ao4c0tz0f7ny41msbdy";
            const CHANNEL = "haemcvlive";
            const PARENT = "https://haemblarg-d-vallejo.netlify.app/radio-escolar/";

            const res = await fetch(`https://api.twitch.tv/helix/streams?user_login=${CHANNEL}`, {
                headers: {
                    "Client-ID": CLIENT_ID,
                    "Authorization": `Bearer ${OAUTH_TOKEN}`
                }
            });
            const data = await res.json();

            if (data.data.length > 0) {
                twFrame.src = `https://player.twitch.tv/?channel=${CHANNEL}&parent=${PARENT}`;
                showLiveNotification("Twitch");
            }
        } catch (err) {
            console.error("Error en Twitch:", err);
        }
    }

    function showLiveNotification(platform) {
        const n = document.createElement("div");
        n.classList.add("live-notification");
        n.textContent = `🔴 ¡Transmisión en vivo en ${platform}!`;
        document.body.appendChild(n);
        setTimeout(() => n.remove(), 5000);
    }

    checkLiveStatus();
    setInterval(checkLiveStatus, 60000);
}
