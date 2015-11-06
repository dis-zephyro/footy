$(window).on('load', function () {
    var $preloader = $('.preloader-inner');
    $preloader.delay(1500).fadeOut('slow');
});


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


$('.btn-compare input[type="radio"]').click(function() {
    var box = $(this).closest('.container');
    var check1 = ($('#compare01').is(':checked'));
    var check2 = ($('#compare02').is(':checked'));

    if (check1) {
        box.find('.comparison__rest').hide();
        box.find('.comparison__fitt').show();
    }

    if (check2) {
        box.find('.comparison__fitt').hide();
        box.find('.comparison__rest').show();
    }
});



$('input[type="checkbox"]').click(function() {
    var rows = $(this).closest('tr');
    var check = rows.find('span.check i');
    var checkbox = ($(this).is(':checked'));

    if (checkbox) {
        check.addClass('text-success');
    }
    else{
        check.removeClass('text-success');
    }
});