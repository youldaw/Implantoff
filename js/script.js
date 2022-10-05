$(function (){

    $('input[name=phone]').mask('+7 (999) 999-99-99');

    $('.mob-burger, .menu-closer').on('click',function(e){
        e.preventDefault();
        $('.navbar-collapse').toggleClass('active');
    });
    


    // $('.other-slide').owlCarousel({
    //     loop:true,
    //     margin:30,
    //     nav:true,
    //     dots:false,
    //     center: false,
    //     smartSpeed:900,
    //     items:3,
    //     navText: ['<img src="images/chevron-left.png">','<img src="images/chevron-right.png">'],
    //     responsive:{
    //         0:{
    //             items:1.2,
    //             margin:10,
    //         },
    //         580:{
    //             items:2,
    //         },
    //         1000:{
    //             items:3,
    //         }
    //     }
    // });

});

