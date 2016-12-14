$(document).ready(function (){
	$(window).scroll(function(){
		if ($(this).scrollTop() >450) {
			$(".navbar").fadeIn(700);
		} else {
			$(".navbar").fadeOut(500);
		}
	});
});
