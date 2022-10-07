$(function (){

    $('input[name=phone]').mask('+7 (999) 999-99-99');

    $('.mob-burger, .menu-closer').on('click',function(e){
        e.preventDefault();
        $('.navbar-collapse').toggleClass('active');
    });
    


    $('.head-slide').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        center: false,
        smartSpeed:900,
        items:1,
        navText: ['<img src="images/slide-left-arrow.svg">','<img src="images/slide-right-arrow.svg">'],
        responsive:{
            0:{
                items:1,
            },
            580:{
                items:1,
            },
            1000:{
                items:1,
            }
        }
    });
    $('.head-slide').on('initialized.owl.carousel changed.owl.carousel', function(e) {
        if (!e.namespace)  {
          return;
        }
        var carousel = e.relatedTarget;
        $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + ' / ' + carousel.items().length);
      }).owlCarousel({
        items: 1,
        loop:true,
        margin:0,
        nav:true
    });

    // offers-slide
    $('.offers-slide').owlCarousel({
        loop:true,
        margin:100,
        nav:true,
        dots:false,
        center: true,
        smartSpeed:900,
        items:3,
        navText: ['<img src="images/slide-left-arrow.svg">','<img src="images/slide-right-arrow.svg">'],
        responsive:{
            0:{
                items:1,
                margin: 0,
            },
            580:{
                items:2,
                margin:30,
            },
            992:{
                items:2,
                margin:80,
            },
            1200:{
                items:3,
                margin:80,
            },
            1400:{
                items:3,
            }
        }
    });
    $('.offers-slide').on('initialized.owl.carousel changed.owl.carousel', function(e) {
        if (!e.namespace)  {
          return;
        }
        var carousel = e.relatedTarget;
        $('.slider-counter-offers').text(carousel.relative(carousel.current()) + 1 + ' / ' + carousel.items().length);
      }).owlCarousel({
        items: 1,
        loop:true,
        margin:0,
        nav:true
    });

});

