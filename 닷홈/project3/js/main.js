$(function () {
    // 모바일 버튼 동작
    $('.hamBtn').click(function () {
        $(this).toggleClass("on");
        $('.gnb').toggleClass("on");
    });

    // 내비게이션 버튼 동작
    $('.gnb li').click(function () {
        $('.hamBtn').toggleClass("on");
        $('.gnb').toggleClass("on");
    });

    // 섹션1: 캐로셀
    $(".slider").bxSlider({
        auto: true,
        // autoControls: true,
        stopAutoOnClick: true,
        pager: false,
        slideWidth: 360,
        minSlides: 1,
        maxSlides: 4,
        moveSlides: 1,
        slideMargin: 20,
        captions: true
    });

    // 섹션3: 스크롤 모션
    $(window).scroll(function(){
        let wst = $(window).scrollTop(); // 창의 스크롤 탑 값
             $('.num').text('스크롤 량=' + wst);

        if (wst > 600) {
            $('.motion1').stop().animate({top: 0}, 500, 'easeOutExpo')
            $('.motion2').stop().animate({top: 0}, 600, 'easeOutExpo')
            $('.motion3').stop().animate({top: 0}, 800, 'easeOutExpo')
            $('.motion4').stop().animate({top: 0}, 1000, 'easeOutExpo')
        } else {
            $('.motion1').stop().animate({top: 1000})
            $('.motion2').stop().animate({top: 2000})
            $('.motion3').stop().animate({top: 3000})
            $('.motion4').stop().animate({top: 4000})
        }

    }); // scroll()

}); // ready()
