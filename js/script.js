$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

// owl couresl end 

$(document).ready(function(){

    $('.your-class').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        dots: true,
        autoplaySpeed: 1000,
      });

});

// slick end 

var mixer = mixitup('.portfolio');
// mixi end 
