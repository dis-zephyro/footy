
///Reply Slider

$('.reply').slick({
    arrows: false,
    autoplay: true,
    dots: true,
    autoplaySpeed: 5200,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('.reply__nav.prev').click(function(){
    $('.reply').slick('slickPrev');
});

$('.reply__nav.next').click(function(){
    $('.reply').slick('slickNext');
});


//  Modal

$(".btn-modal").fancybox({
    'padding'    : 0
});