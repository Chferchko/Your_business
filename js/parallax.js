$(window).scroll(function (event) {
	var h = 0 - $(this).scrollTop() / 3;
	$('.page__main').css('background-position-y', h +'px');
});