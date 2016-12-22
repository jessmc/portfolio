$(document).ready(function (){

	// Nav bar fade in
	$(window).scroll(function(){
		if ($(this).scrollTop() >450) {
			$(".navbar").fadeIn(700);
		} else {
			$(".navbar").fadeOut(500);
		}
	});

	// About me title and paragraph fading in
	$(".about-title").css('opacity', 0);

	$(".about-title").waypoint(function() {
		$(".about-title").addClass('fadeIn');
		}, {offset: '70%'});

	$(".about-para").css('opacity', 0);

	$(".about-para").waypoint(function() {
		$(".about-para").addClass('fadeIn');
		}, {offset: '70%'});

	// Skills title fading in
	$(".skills-title").css('opacity', 0);

	$(".skills-title").waypoint(function() {
		$(".skills-title").addClass('fadeIn');
		}, {offset: '80%'});

	// Images of code skills fading in and up
	$(".code-logos").css('opacity', 0);

	$(".code-logos").waypoint(function() {
		$(".code-logos").addClass('fadeInUp');
		}, {offset: '70%'});

	
});	


