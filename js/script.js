$(function (){

    $('input[name=phone]').mask('+7 (999) 999-99-99');

    $('.mob-burger, .menu-closer').on('click',function(e){
        e.preventDefault();
        $('.navbar-collapse').toggleClass('active');
    });
    


    var slider1 = new Swiper('.slider1', {
        loop: true,
        slidesPerView: 1,
        // spaceBetween: 15,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
            formatFractionCurrent: function (number) {
                return '0' + number;
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });

    var slider2 = new Swiper('.slider2', {
        loop: true,
        loopAdditionalSlides: 30,
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 85,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
            formatFractionCurrent: function (number) {
                return '0' + number;
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });

    var slider3 = new Swiper('.slider3', {
        loop: true,
        slidesPerView: 4,
        // centeredSlides: true,
        spaceBetween: 2,
        realIndex: 4,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
            formatFractionCurrent: function (number) {
                return '0' + number;
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });

    var mySwiper = new Swiper(".mySwiper", {
        spaceBetween: 20,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: mySwiper,
        },
    });
    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;
    


    
});

