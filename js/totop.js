$(function () {
    var topp;
    $(window).scroll(function () {
        topp = $(window).scrollTop();
        if (topp > 80) {
            $('#toTop').css('display', 'block');
        }
        if (topp == 0) {
            $('#toTop').css('display','none');
        }
    });
    $('#toTop').click(function(){
    	$("html,body").animate({scrollTop:0}, 300);
	});
})