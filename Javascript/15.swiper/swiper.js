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
            disableOnInteraction: false, //사용자가 슬라이드를 직접 사용 후 자동 슬라이드 정지/진행 설정
            pauseOnMouseEnter:true, //마우스가 슬라이더 위로 올라가면 슬라이드 중지
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