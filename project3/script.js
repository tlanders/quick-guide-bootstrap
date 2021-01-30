$(document).ready(function () {
    $('.mynavbar-button').click(function () {
        $('.mynavbar-button').toggleClass('navclick');
    });

    $(window).scroll(function () {
        let position = $(this).scrollTop();

        if(position > 200) {
            $('.nav-menu').addClass('mynavbar-reduced');
        } else {
            $('.nav-menu').removeClass('mynavbar-reduced');
        }
    });

    $(window).scroll(function () {
        let position = $(this).scrollTop();
        if(position > 650) {
            $('.camera-img').addClass('fromLeft');
            $('.mission-text').addClass('fromRight')
        } else if(position < 600) {
            $('.camera-img').removeClass('fromLeft');
            $('.mission-text').removeClass('fromRight')
        }
    });
});































