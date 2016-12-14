$(document).ready(function (){

	$('.pink').hide(0).delay(400).fadeIn(2000);
	$('.blue').hide(0).delay(300).fadeIn(1000);

	$(window).scroll(function(){
		if ($(this).scrollTop() >450) {
			$(".navbar").fadeIn(700);
		} else {
			$(".navbar").fadeOut(500);
		}
	});
});


