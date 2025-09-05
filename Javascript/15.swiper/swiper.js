addEventListener('DOMContentLoaded', function () {
    //dom 트리 생성(body 실행) 후 DOMContentLoaded 함수 처리
    createSwiper();
}); // window.addEventListener

//Swiper 생성 함수
function createSwiper() {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        // direction: 'vertical',
        loop: true,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // auto play
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
    }); //Swiper class
}