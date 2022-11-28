$(function () {

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