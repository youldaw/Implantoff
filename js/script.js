$(function (){

    $('input[name=phone]').mask('+7 (999) 999-99-99');

    $('.menu-opener').on('click',function(e){
        e.preventDefault();
        $('.navbar-collapse').toggleClass('active');
        $('.navbar').toggleClass('active');
        $(this).toggleClass('active');
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


        const swiper3 = new Swiper('.special-offers-slide', {
            // Default parameters
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
            // Responsive breakpoints
            breakpoints: {
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              375: {
                slidesPerView: 1.2,
                spaceBetween: 20
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 1.4,
                spaceBetween: 30
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              // when window width is >= 640px
              992: {
                slidesPerView: 3,
                centeredSlides: true,
                spaceBetween: 40
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
          watchSlidesProgress: true,
          // Responsive breakpoints
          breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            375: {
                slidesPerView: 1.6,
                spaceBetween: 10
              },
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            // when window width is >= 640px
            768: {
              slidesPerView: 3,
              centeredSlides: false,
              spaceBetween: 10
            }
          },
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
            keyingiSlideMessage: 'keyingi-slide',
            watchSlidesVisibility: true,
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
            },
            breakpoints: {
                320: {
                  slidesPerView: 1
                },
                375: {
                    slidesPerView: 1
                  },
                // when window width is >= 480px
                480: {
                  slidesPerView: 1,
                  centeredSlides: true
                },
                768: {
                    slidesPerView: 2,
                    centeredSlides: true
                  },
                // when window width is >= 640px
                992: {
                  slidesPerView: 4,
                }
            },
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
            },
            breakpoints: {
                320: {
                  slidesPerView: 1
                },
                375: {
                    slidesPerView: 1
                  },
                // when window width is >= 480px
                480: {
                  slidesPerView: 1,
                  centeredSlides: true
                },
                768: {
                    slidesPerView: 1,
                    centeredSlides: true
                  },
                // when window width is >= 640px
                992: {
                  slidesPerView: 2,
                }
            },
        });

        // o nas govoryat
        var galleryThumbs = new Swiper(".gallery-thumbs2", {
            spaceBetween: 20,
            slidesPerView: 3,
            slideToClickedSlide:true,
            allowTouchMove: true,
            simulateTouch: true,
            breakpoints: {
                320: {
                  slidesPerView: 1.6,
                  centeredSlides: true,
                  loop: true
                },
                375: {
                    slidesPerView: 2,
                    centeredSlides: true,
                    loop: true
                  },
                // when window width is >= 480px
                480: {
                  slidesPerView: 2.4,
                  centeredSlides: true,
                  loop: true
                },
                768: {
                    slidesPerView: 2,
                    centeredSlides: true,
                    loop: true
                  },
                // when window width is >= 640px
                992: {
                  slidesPerView: 3,
                }
            },
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

        // about page
        var thumbAbout = new Swiper(".gallery-thumbs-about", {
            spaceBetween: 20,
            slidesPerView: 6,
            breakpoints: {
              320: {
                slidesPerView: 1.8,
                loop: true,
                spaceBetween: 10
              },
              375: {
                  slidesPerView: 2.2,
                  loop: true,
                  spaceBetween: 10
                },
              // when window width is >= 480px
              480: {
                slidesPerView: 2.4,
                loop: true,
                spaceBetween: 10
              },
              768: {
                slidesPerView: 4,
                loop: true,
                spaceBetween: 10
              },
              // when window width is >= 640px
              992: {
                loop: true,
                slidesPerView: 6,
                spaceBetween: 10
              }
            },
        });
        var topAbout = new Swiper(".gallery-top-about", {
            spaceBetween: 10,
            navigation: {
              nextEl: ".swiper-button-next7",
              prevEl: ".swiper-button-prev7",
            },
            thumbs: {
              swiper: thumbAbout,
            },
            
        });


        var keys = new Swiper('.keys-slide', {
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
                nextEl: '.swiper-button-next8',
                prevEl: '.swiper-button-prev8'
            },
            breakpoints: {
              320: {
                slidesPerView: 1
              },
              375: {
                  slidesPerView: 1
                },
              // when window width is >= 480px
              480: {
                slidesPerView: 1,
                centeredSlides: true
              },
              768: {
                  slidesPerView: 2,
                  centeredSlides: true
                },
              // when window width is >= 640px
              992: {
                slidesPerView: 4,
              }
          },
        });

    });

    
});

// /* Swiper
//     **************************************************************/
// var swiper= Swiper;
// var init = false;



// /* Which media query
// **************************************************************/
// function swiperMode() {
//     let mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
//     let desktop = window.matchMedia('(min-width: 769px)');

//     // Disable (for mobile)
//     if(desktop.matches) {
//         if (!init) {
//             init = true;
//             swiper3 = new Swiper('.special-offers-slide', {
//                 loop: true,
//                 loopAdditionalSlides: 30,
//                 slidesPerView: 3,
//                 centeredSlides: true,
//                 spaceBetween: 85,
//                 pagination: {
//                     el: '.swiper-pagination',
//                     type: 'fraction',
//                     formatFractionCurrent: function (number) {
//                         return '0' + number;
//                     }
//                 },
//                 navigation: {
//                     nextEl: '.swiper-button-next2',
//                     prevEl: '.swiper-button-prev2'
//                 },

//                 breakpoints: {

//                     767: {
//                         slidesPerView: 1.8,
//                         spaceBetween: 25,
//                     }

//                 }

//             });
//         }
//     }

//     // Enable (for desktop)
//     else if(mobile.matches) {
//         swiper.destroy();
//         init = false;
//     }
// }
// /* On Load
// **************************************************************/
// window.addEventListener('load', function() {
//     swiperMode();
// });

// /* On Resize
// **************************************************************/
// window.addEventListener('resize', function() {
//     swiperMode();
// });