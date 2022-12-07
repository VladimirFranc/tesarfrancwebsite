$(document).ready(function() {
    $(".fancybox").fancybox({
    'hideOnContentClick': true
    });

    var Slider = $("#slider");
    var items = $('.items');
    // // // if(items.length > 1) {
    // // //     Slider.owlCarousel({
    // // //     animateOut: 'fadeOut',
    // // //     autoplay: true,
    // // //     autoplaySpeed: 3000,
    // // //     autoplayTimeout: 4000,
    // // //     autoplayHoverPause: false,
    // // //     singleItem:true,
    // // //     items: 1,
    // // //     loop: true
    // // //     });
    // // // } else {
    // // //     Slider.owlCarousel({
    // // //     animateOut: 'fadeOut',
    // // //     autoplay: true,
    // // //     autoplaySpeed: 3000,
    // // //     autoplayTimeout: 4000,
    // // //     autoplayHoverPause: false,
    // // //     singleItem:true,
    // // //     items: 1,
    // // //     loop: false
    // // //     });
    // // // }
    

    $("#slider-prev").click(function () {
        Slider.trigger('prev.owl.carousel');
    });

    $("#slider-next").click(function () {
        Slider.trigger('next.owl.carousel');
    });

    function repeatSliderText() {
        $(".slider .slider-text-wrapper").animate({right:'100%'},14000).css({right:'-50%'}).animate({right:'100%'},100,repeatSliderText);
    }
    repeatSliderText();
});

(function() {
/*$("#slider").owlCarousel({
navigation : false, // Show next and prev buttons
pagination : false,
autoPlay: true,
slideSpeed : 400,
paginationSpeed : 400,
singleItem:true
});*/



})();