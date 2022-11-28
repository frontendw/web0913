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

    /* tabs */
    $('.tabBtn li').eq(0).css({background: '#000'});
    $('.tabBtn li').click(function(){
        $(this).css({background: '#000'}).siblings().css({background: '#777'});

        var i = $(this).index();
        $('.tabs > div').eq(i).css({display: 'block'}).siblings('div').css({display: 'none'});
    });

    /* modal popup */
    $('.modal button').click(function(){  
        // 모달을 숨긴다.
        $('.modal').hide();  
    });
    // #tabs1의 첫번째 li를 클릭하면
    $('#tabs1 li').eq(0).click(function(){  
        // 모달을 나타나게 한다.
        $('.modal').show();  
    });

}); // $(docuemnt).ready();