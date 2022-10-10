$(function (){

    $('input[name=phone]').mask('+7 (999) 999-99-99');

    $('.mob-burger, .menu-closer').on('click',function(e){
        e.preventDefault();
        $('.navbar-collapse').toggleClass('active');
    });
    


    $(function () {
        var swiper = new Swiper('.video-slide', {
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

        var swiper = new Swiper('.special-offers-slide', {
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

        var swiper = new Swiper('.command-slide', {
            loop: true,
            slidesPerView: 4,
            centeredSlides: true,
            spaceBetween: 5,
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
    });


    
});

