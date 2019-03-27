$('#burger').on('click', function(){
	if ($(this).hasClass('burger')){
		$('.page-header__nav').css("display", "block");
		$(this).removeClass('burger');
		$(this).addClass('cross');
	} 
	else {
		$('.page-header__nav').css("display", "none");
		$(this).addClass('burger');
		$(this).removeClass('cross');
	}
});

$(document).ready(function(){
	if($( window ).width() < 1024){
		$('.video-slider').slick();	
	} else {
		$('.video-slider').slick('unslick');
	}
});