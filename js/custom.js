$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 100 ? $('.to_top').fadeIn() : $('.to_top').fadeOut(0)
        sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on');
    });

    $('.to_top').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 600);
    });

    //mainslide

    $('.main_slide').on('init afterChange', function (e) {
        const current = $('.main_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
    })
    $('.main_slide').slick({
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 800,
        pauseOnHover: false,
        pauseOnFocus: false,
    });
    $('.main_visual .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev')
    });
    $('.main_visual .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext')
    });

    $('.premium_line').slick({
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }],
        dots: true,
    });
    $('.main_premium .premium_arrows .left').on('click', function () {
        $('.premium_line').slick('slickPrev')
    });
    $('.main_premium .premium_arrows .right').on('click', function () {
        $('.premium_line').slick('slickNext')
    });

    $('.product_slide').on('init afterChange', function () {
        const crt = $('.product_slide .slick-current');
        crt.addClass('on').siblings().removeClass('on');
    });
    $('.product_slide').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                fade: true,
            }
        }],
    });
    $('.main_unit .unit_arrows .left').on('click', function () {
        $('.product_slide').slick('slickPrev')
    });
    $('.main_unit .unit_arrows .right').on('click', function () {
        $('.product_slide').slick('slickNext')
    });


    //mobile
    $('.mmenu').on('click', function () {
        $(this).toggleClass('on');
        $('.gnb').toggleClass('on');
        $('h1').toggleClass('on');
        $('.user_area').toggleClass('on');
    });

    $('.header .gnb>ul>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().find('.sub').stop().slideUp();

            $(this).parent().addClass('on').siblings().removeClass('on');
        }
    });

    //resize
    $(window).on('resize', function () {
        $('.mmenu').removeClass('on');
        $('.gnb').removeClass('on');
        $('h1').removeClass('on');
        $('.user_area').removeClass('on');

        $('.sub').removeAttr('style');
    });
    //wheel
    $('.gnb').on('wheel', function (e) {
        if ($(this).hasClass('on')) {
            e.preventDefault();
        }
    });

});