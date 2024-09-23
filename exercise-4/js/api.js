document.addEventListener("DOMContentLoaded", function() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {
            const testimonialsContainer = document.querySelector(".testimonials-container");
            
            const dataLimit = data.slice(0, 3);

            dataLimit.forEach(testimonial => {
                const card = document.createElement("div");
                card.classList.add("testimonial-card");
                card.innerHTML = `
                    <h3>${testimonial.title}</h3>
                    <p>${testimonial.body}</p>
                `;
                testimonialsContainer.appendChild(card);
            });
        })
        .catch(error => console.error("Erro ao carregar os depoimentos:", error));
});

