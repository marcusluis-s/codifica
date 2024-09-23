import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

AOS.init({
    duration: 1000,
    delay: 300,
    offset: 200
});

const swiper = new Swiper(".swiper", {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();

        let valid = true;
        let errorMessages = [];

        if (name === "") {
            alert("O campo 'Nome' não pode estar vazio.");
            valid = false;
        }

        const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            alert("O campo 'Email' não pode estar vazio.");
            valid = false;
        } else if (!validateEmail.test(email)) {
            errorMessages.push("Por favor, insira um endereço de email válido."); 
        }

        if (phone === "") {
            alert("O campo 'Telefone' não pode estar vazio.");
            valid = false;
        } else if (!/^\d{9,11}$/.test(phone)) {
            errorMessages.push("Por favor, insira um númro de telefone válido.");
        }

        if (message === "") {
            alert("O campo 'Mensagem' não pode estar vazio.");
            valid = false;
        }

        if (!valid) {
            alert(errorMessages.join("\n")) 
        } else {
            //form.submit(); 
            console.log("enviando dados:", name, email, phone, message);

            form.reset();

            alert("Formulário enviado com sucesso!");
        }
    });
});
