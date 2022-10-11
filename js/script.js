$(function (){

    $('input[name=phone]').mask('+7 (999) 999-99-99');

    $('.mob-burger, .menu-closer').on('click',function(e){
        e.preventDefault();
        $('.navbar-collapse').toggleClass('active');
    });
    


    $(function () {
        var swiper1 = new Swiper('.video-slide', {
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

        var swiper3 = new Swiper('.special-offers-slide', {
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
                nextEl: '.swiper-button-next2',
                prevEl: '.swiper-button-prev2'
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
			nextEl: ".swiper-button-next3",
			prevEl: ".swiper-button-prev3",
		  },
		  thumbs: {
			swiper: mySwiper,
		  },
		});

        var swiper4 = new Swiper('.command-slide', {
            loop: true,
            slidesPerView: 4,
            // centeredSlides: true,
            spaceBetween: 2,
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
                formatFractionCurrent: function (number) {
                    return '0' + number;
                }
            },
            navigation: {
                nextEl: '.swiper-button-next4',
                prevEl: '.swiper-button-prev4'
            }
        });


        var swiper5 = new Swiper('.service-slide', {
            loop: true,
            slidesPerView: 2,
            // centeredSlides: true,
            spaceBetween: 2,
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
                formatFractionCurrent: function (number) {
                    return '0' + number;
                }
            },
            navigation: {
                nextEl: '.swiper-button-next5',
                prevEl: '.swiper-button-prev5'
            }
        });

        // o nas govoryat
        var galleryThumbs = new Swiper(".gallery-thumbs2", {
            spaceBetween: 20,
            slidesPerView: 3,
            freeMode: true,
            watchSlidesProgress: true,
        });
        var galleryTop = new Swiper(".gallery-top2", {
            spaceBetween: 10,
            navigation: {
              nextEl: ".swiper-button-next6",
              prevEl: ".swiper-button-prev6",
            },
            thumbs: {
              swiper: galleryThumbs,
            },
        });

    });

    
});

