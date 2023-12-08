$(document).ready(function () {

    $(".hamburger").click(function () {
        $(this).toggleClass("is-active");
        if ($(this).hasClass("is-active")) {
            $("body").css("overflow-y", "hidden");
            $(".header-small-menu").addClass("active-menu");
        } else {
            $(".header-small-menu").addClass("deactive-menu");
            setTimeout(function () {
                $(".header-small-menu").removeClass("active-menu deactive-menu");
                $("body").css("overflow-y", "unset");
            }, 900);
        }
    });

    $('.partners-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        dots: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.people-2rows-slider').slick({
        rows: 2,
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.people-2rows').each(function () {
        var maxCardHeight = 0;
        var maxInfoHeight = 0;
        var $cards = $(this).find('.slick-slide div');
        var $info = $(this).find('.slick-slide .people')
        $cards.each(function () {
            var cardHeight = $(this).height();
            if (cardHeight > maxCardHeight) {
                maxCardHeight = cardHeight;
            }
        });
        $info.each(function () {
            var infoHeight = $(this).height();
            if (infoHeight > maxInfoHeight) {
                maxInfoHeight = infoHeight;
            }
        });
        $info.css('height', maxInfoHeight + 20);
    });

    $('.people-1row-slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});
