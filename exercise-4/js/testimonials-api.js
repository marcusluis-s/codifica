async function fetchUserData() {
    try {
        // Requisição para obter usuários
        const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await usersResponse.json();

        // Requisição para obter comentários
        const commentsResponse = await fetch('https://jsonplaceholder.typicode.com/comments');
        const comments = await commentsResponse.json();

        // Requisição para obter fotos
        const photosResponse = await fetch('https://jsonplaceholder.typicode.com/photos');
        const photos = await photosResponse.json();

        const firstThreeUsers = users.slice(0, 3);
        const firstThreePhotos = photos.slice(0, 3);
        const firstThreeComments = comments.slice(0, 3);

        const userData = firstThreeUsers.map((user, index) => ({
            name: user.name,
            photo: firstThreePhotos[index] ? firstThreePhotos[index].url : null,
            comment: firstThreeComments[index] ? firstThreeComments[index].body : null
        }));

        const testimonialsContainer = document.querySelector(".testimonials-container");

        userData.forEach(element => {
            //console.log(element);
            const card = document.createElement("div");
            card.classList.add("testimonial-card");

            card.innerHTML = `
                <img src="${element.photo}"/>
                <h3>${element.name}</h3>
                <p>${element.comment}</p>
            `;

            testimonialsContainer.appendChild(card);
        });

        //console.log(userData);

    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
}

fetchUserData();

