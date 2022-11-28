$(function () {

    /* tabs */
    $('.tabBtn li').eq(0).css({background: '#000'});
    $('.tabBtn li').click(function(){
        $(this).css({background: '#000'}).siblings().css({background: '#777'});

        var i = $(this).index();
        $('.tabs > div').eq(i).css({display: 'block'}).siblings('div').css({display: 'none'});
    });

}); // $(docuemnt).ready();