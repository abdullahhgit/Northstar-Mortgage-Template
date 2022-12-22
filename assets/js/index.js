$('.menu-hamburger').click(function () {
    $('.hamburger-dropdown-section').slideDown("slow");
});
$('.hamburger-close').click(function () {
    $('.hamburger-dropdown-section').slideUp("slow");
});

$(document).ready(function () {
    $('.three-cart-slider').slick({
        slidesToShow: 3,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1900,
                settings: {
                    slidesToShow: 3,
                    infinite: false,
                    autoplay: false,
                }
            },
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: false,
                }
            },
        ]
    });
});

$(document).ready(function () {
    $('.testimonial-comment-section').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false,
    });
});

$(window).on("scroll", function () {
    if ($(window).scrollTop() > 100) {
        $(".header").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
        $(".header").removeClass("active");
    }
});

$('.loan-option-dropdown').hover(function () {
    $(".loan-sub-dropdown").addClass("opened");
    $(".main-dropdown").addClass("active");
}, function () {
    $(".loan-sub-dropdown").removeClass("opened");
    $(".main-dropdown").removeClass("active");
});

$('.tools-option-dropdown').hover(function () {
    $(".tools-sub-dropdown").addClass("opened");
    $(".main-dropdown").addClass("active");
}, function () {
    $(".tools-sub-dropdown").removeClass("opened");
    $(".main-dropdown").removeClass("active");
});

$('.about-option-dropdown').hover(function () {
    $(".about-sub-dropdown").addClass("opened");
    $(".main-dropdown").addClass("active");
}, function () {
    $(".about-sub-dropdown").removeClass("opened");
    $(".main-dropdown").removeClass("active");
});
