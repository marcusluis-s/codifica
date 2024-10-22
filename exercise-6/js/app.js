document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: false,

        pagination: {
            el: '.swiper-pagination'
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });

    document.addEventListener('keydown', function (event) {
        if(event.key === 'ArrowLeft') {
            swiper.slidePrev();
        } else if(event.key === 'ArrowRight') {
            swiper.slideNext();
        }
    });

    const gameInput = document.getElementById('gameInput');

    gameInput.addEventListener('keypress', function (event){
        if(event.key === 'Enter'){
            let searchGame = gameInput.value.trim().toUpperCase();

            switch(searchGame){
                case 'MARIO':
                    swiper.slideTo(0);
                    break;
                case 'POKEMON':
                    swiper.slideTo(1);
                    break;
                default:
                    alert('Jogo não foi encontrado');
                    break;
            }
        }
    });
    
    // Login Modal
    const modal = document.getElementById("modal");
    const btnOpenModal = document.getElementById("btn-open-modal");
    const btnCloseModal = document.getElementById("btn-close-modal");

    btnOpenModal.addEventListener("click", function() {
        modal.classList.add("showModal");
    });

    btnCloseModal.addEventListener("click", function() {
        modal.classList.remove("showModal");
    });

    modal.addEventListener("click", function(event) {
        const modalContent = document.getElementById("modal-content");

        if (!modalContent.contains(event.target)) {
            modal.classList.remove("showModal");
        }
    });

});
