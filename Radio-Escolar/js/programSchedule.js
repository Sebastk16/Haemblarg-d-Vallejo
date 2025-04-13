// js/programSchedule.js
export function initProgramSchedule() {
    // 📆 Horario semanal (puedes personalizarlo)
    const schedule = [
        { day: 1, hour: 18, title: "Noticias Vallejianas" },     // Lunes 18:00
        { day: 2, hour: 20, title: "Programa Cultural" },        // Martes 20:00
        { day: 4, hour: 19, title: "Música en Vivo" },           // Jueves 19:00
        { day: 5, hour: 17, title: "Literatura y Debate" },      // Viernes 17:00
        { day: 6, hour: 21, title: "Noche de Cine Emblemático" } // Sábado 21:00
    ];

    const now = new Date();
    const currentDay = now.getDay(); // 0 (domingo) a 6 (sábado)
    const currentHour = now.getHours();

    const liveProgram = schedule.find(item => item.day === currentDay && item.hour === currentHour);

    if (liveProgram) {
        showLiveProgramNotification(liveProgram.title);
    }

    // 🛎️ Mostrar notificación si hay programa en vivo
    function showLiveProgramNotification(title) {
        const note = document.createElement("div");
        note.classList.add("program-live-alert");
        note.innerHTML = `
            🔔 <strong>${title}</strong> está en vivo ahora.
            <a href="#live" class="join-live-link">Ver ahora</a>
        `;
        document.body.appendChild(note);

        setTimeout(() => note.remove(), 15000);
    }

    // 🗓️ Mostrar lista de horarios en un panel (opcional)
    const panel = document.createElement("div");
    panel.classList.add("schedule-panel");
    panel.innerHTML = `
        <h3>📅 Programación Semanal</h3>
        <ul>
            ${schedule.map(item => `
                <li>
                    ${getDayName(item.day)} - ${item.hour}:00 → <strong>${item.title}</strong>
                </li>
            `).join("")}
        </ul>
    `;
    document.body.appendChild(panel);

    function getDayName(d) {
        return ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"][d];
    }
}
