document.addEventListener("DOMContentLoaded", function() {
    // Form Validation
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("mensajeExito");
    const errorMessage = document.getElementById("mensajeError");

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();

            // Validación de campos
            const nombre = form.nombre.value.trim();
            const email = form.email.value.trim();
            const mensaje = form.mensaje.value.trim();

            if (nombre === "" || email === "" || mensaje === "") {
                errorMessage.style.display = "block";
                successMessage.style.display = "none";
                return;
            }

            // Validación de formato de email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                errorMessage.style.display = "block";
                successMessage.style.display = "none";
                return;
            }

            // Si pasa todas las validaciones, mostrar mensaje de éxito
            successMessage.style.display = "block";
            errorMessage.style.display = "none";

            // Aquí podrías enviar los datos del formulario a través de AJAX si deseas
        });
    }

    // Carousel Functionality
    const carouselContainer = document.querySelector('.carousel');
    if (carouselContainer) {
        const slides = carouselContainer.querySelectorAll('.slide');
        const prevButton = document.querySelector('.carousel-prev');
        const nextButton = document.querySelector('.carousel-next');
        let currentIndex = 0;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.display = (i === index) ? 'block' : 'none';
                slide.style.opacity = (i === index) ? 1 : 0;
            });
        }

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
            showSlide(currentIndex);
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
            showSlide(currentIndex);
        });

        showSlide(currentIndex); // Initialize the carousel
    }
});
// Variables globales para el carrito
let cart = [];

// Función para agregar un elemento al carrito
function addToCart(name, description, price) {
    cart.push({ name, description, price });
    renderCart();
}

// Función para renderizar los elementos del carrito
function renderCart() {
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = '';
    cart.forEach(item => {
                const cartItemDiv = document.createElement('div');
                cartItemDiv.classList.add('cart-item');

                const itemInfo = document.createElement('div');
                itemInfo.classList.add('cart-item-info');

                const itemName = document.createElement('h4');
                itemName.textContent = item.name;
                itemInfo.appendChild(itemName);