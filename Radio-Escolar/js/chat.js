// js/chat.js
export function initChat() {
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
                <iframe src="https://www.youtube.com/live_chat?v=VIDEO_ID&embed_domain=haemblarg-d-vallejo.netlify.app/radio-escolar/" width="100%" height="100%" frameborder="0"></iframe>
            </div>
            <div id="twitchChat" class="chat-frame" style="display: none;">
                <iframe src="https://www.twitch.tv/embed/haemcvlive/chat?parent=haemblarg-d-vallejo.netlify.app/radio-escolar/" width="100%" height="100%" frameborder="0"></iframe>
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

    const chatHeader = chatContainer.querySelector(".chat-header");
    const chatBody = chatContainer.querySelector(".chat-body");

    chatHeader.addEventListener("click", () => {
        chatContainer.classList.toggle("active");
    });

    // Alternar entre los chats
    document.getElementById("showYTChat").onclick = () => showChat("youtubeChat");
    document.getElementById("showTWChat").onclick = () => showChat("twitchChat");
    document.getElementById("showInternalChat").onclick = () => showChat("internalChat");

    function showChat(chatId) {
        document.querySelectorAll(".chat-frame, .internal-chat").forEach(el => el.style.display = "none");
        document.getElementById(chatId).style.display = "block";
    }

    // Chat interno local
    const chatMessages = chatContainer.querySelector(".chat-messages");
    const messageInput = document.getElementById("messageInput");
    const sendButton = document.getElementById("sendMessage");

    sendButton.addEventListener("click", () => {
        const message = messageInput.value.trim();
        if (message !== "") {
            const msg = document.createElement("div");
            msg.textContent = message;
            chatMessages.appendChild(msg);
            messageInput.value = "";
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    });

    messageInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") sendButton.click();
    });

    // Botón flotante para móviles
    const toggleBtn = document.createElement("button");
    toggleBtn.classList.add("chat-toggle-btn");
    toggleBtn.textContent = "💬";
    document.body.appendChild(toggleBtn);

    toggleBtn.addEventListener("click", () => {
        const isHidden = chatContainer.style.display === "none" || chatContainer.style.display === "";
        chatContainer.style.display = isHidden ? "block" : "none";
    });
}
