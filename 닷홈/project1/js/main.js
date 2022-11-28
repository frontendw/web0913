$(function () {

    /* 캐로셀 */
    $('.slide').bxSlider({
        auto: true,
        stopAutoOnClick: true,
        // controls: false,
        // mode: 'fade',
        // autoControls: true,
        // pager: false,
        slideWidth: 1200
    });

    /* 공지사항/갤러리 */
    $('.tabBtn li').eq(0).css({background: '#000'});
    $('.tabBtn li').click(function(){
        $(this).css({background: '#000'}).siblings().css({background: '#777'});

        var i = $(this).index();
        $('.tabs > div').eq(i).css({display: 'block'}).siblings('div').css({display: 'none'});
    });

    /* 모달 팝업창 */
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