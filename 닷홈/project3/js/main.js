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

}); // ready()
