document.addEventListener("DOMContentLoaded", function() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {
            const servicesContainer = document.querySelector(".services-container");
            
            const dataLimit = data.slice(0, 3);

            dataLimit.forEach(service => {
                const card = document.createElement("div");
                card.classList.add("service-card");
                card.innerHTML = `
                    <h3>${service.title}</h3>
                    <p>${service.body}</p>
                `;
                servicesContainer.appendChild(card);
            });
        })
        .catch(error => console.error("Erro ao carregar os dados:", error));
});

