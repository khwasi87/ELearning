$('#owl1').owlCarousel({
    loop: true,
    items: 3,
    margin: 10,
    nav: false,
    autoplay: false,
    dots: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            autoplay: true,
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});
$('#owl2').owlCarousel({
    loop: true,
    items: 3,
    margin: 10,
    nav: false,
    autoplay: false,
    dots: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            autoplay: true,
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});
$('#owl3').owlCarousel({
    loop: true,
    items: 3,
    margin: 10,
    nav: false,
    autoplay: false,
    dots: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 2,
            autoplay: true,
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
});

$(window).scroll(function() {
    if ($(window).scrollTop() >= 50) {
        $('header').css('background', '#EBF7FC');
    } else {
        $('header').css('background', 'transparent');
    }
});