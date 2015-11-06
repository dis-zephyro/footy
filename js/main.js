$(document).ready(function() {

    // Проверка на тип устройства
    var Android = navigator.userAgent.search(/Android/i);
    var iPhone = navigator.userAgent.search(/iPhone/i);
    var iPad = navigator.userAgent.search(/iPad/i);
    if(Android != -1 || iPhone != -1 || iPad != -1) {
        $('video-bg').addClass('hide');
    } else {}
});



$(window).on('load', function () {
    var $preloader = $('.preloader-inner');
    $preloader.delay(1800).fadeOut('slow');
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
    'padding'    : 0,
    'closeBtn'   : false
});

$('.btn-close').click(function(){
    $.fancybox.close();
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


// Map

ymaps.ready(init);

var myMap,
    myPlacemark;

function init(){
    myMap = new ymaps.Map("map", {
        center: [48.7209,44.5032],
        zoom: 14,
        controls: ['smallMapDefaultSet']
    });

    myPlacemark = new ymaps.Placemark([48.7209,44.5032], {
        hintContent: ''
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/placemark.png',
        iconImageSize: [44, 64],
        iconImageOffset: [-2, -65]
    });

    myMap.behaviors.disable('scrollZoom');
    myMap.behaviors.disable('multiTouch');
    myMap.geoObjects.add(myPlacemark);
}