document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("mensajeExito");
    const errorMessage = document.getElementById("mensajeError");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Validación de campos
        const nombre = form.nombre.value.trim();
        const email = form.email.value.trim();
        const mensaje = form.mensaje.value.trim();

        if (nombre === "" || email === "" || mensaje === "") {
            errorMessage.style.display = "block";
            return;
        }

        // Validación de formato de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errorMessage.style.display = "block";
            return;
        }

        // Si pasa todas las validaciones, mostrar mensaje de éxito
        successMessage.style.display = "block";
        errorMessage.style.display = "none";

        // Aquí podrías enviar los datos del formulario a través de AJAX si deseas
    });
});