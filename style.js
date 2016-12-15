const left = document.getElementsByClassName("left");
const right = document.getElementsByClassName("right");

$(document).ready(function (){
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

	// Projects fading in from the left
	for (let i=0; i < left.length; i++) {
	$(left[i]).css('opacity', 0);

	$(left[i]).waypoint(function() {
		$(left[i]).addClass('fadeInLeft');
		}, {offset: '70%'});
	}
	// Projects fading in from the right
	for (let i=0; i < right.length; i++) {
	$(right[i]).css('opacity', 0);

	$(right[i]).waypoint(function() {
		$(right[i]).addClass('fadeInRight');
		}, {offset: '70%'});
	}
});	

$(document).ready(function (){

	$(window).scroll(function(){
		if ($(this).scrollTop() >450) {
			$(".navbar").fadeIn(700);
		} else {
			$(".navbar").fadeOut(500);
		}
	});
});


