$(function () {

    /* GNB */
    // 메인메뉴에 마우스를 올리면 서브메뉴가 슬라이드되며 나타난다.
    $('.main > li').mouseenter(function () {
        $('.sub').stop().slideDown();
    });
    // 메인메뉴에 마우스를 내리면 서브메뉴가 슬라이드되며 사라진다.
    $('.main > li').mouseleave(function () {
        $('.sub').stop().slideUp();
    });

}); // $(docuemnt).ready();