function updateClock() {
    const now = new Date();

    // Obtener horas, minutos y segundos
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');

    // Actualizar el contenido del div con id "reloj"
    document.getElementById("reloj").textContent = `${hours} : ${minutes} : ${seconds}`;
}

// Llamada inicial
updateClock();

// Actualizar cada segundo
setInterval(updateClock, 1000);
