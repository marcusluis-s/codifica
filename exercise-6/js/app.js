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
                case "ZELDA":
                    swiper.slideTo(2)
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

    // Envelope Modal
    const sendMessageModal = document.getElementById("send-message-modal");
    const iconEnvelopeOpenModal = document.querySelectorAll(".envelope-open-modal");
    const btnCloseModalEnvelope = document.getElementById("btn-close-modal-envelope"); 
    
    iconEnvelopeOpenModal.forEach((iconEnvelope) => {
        iconEnvelope.addEventListener("click", function() {
            sendMessageModal.classList.add("showModal");
        });
    });

    btnCloseModalEnvelope.addEventListener("click", function() {
        sendMessageModal.classList.remove("showModal");
    });

    sendMessageModal.addEventListener("click", function(event) {
        const modalContentEnvelope = document.getElementById("modal-content-envelope");

        if (!modalContentEnvelope.contains(event.target)) {
            sendMessageModal.classList.remove("showModal");
        }
    });

});
