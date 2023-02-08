$('.spoiler-item-title').click(function () {
	if ($(window).width() <= 576) {
		$(this).toggleClass('spoiler-item-title-active').next().slideToggle();
	}
});

function showSpoilerItem() {
	if ($(window).width() >= 577) {
		$('.spoiler-item-text').css('display', 'block');

	} else {
		$('.spoiler-item-text').css('display', 'none');
		$('.spoiler-item-title').removeClass('spoiler-item-title-active');
	}
};

$(window).resize(function () {
	showSpoilerItem();
});

// ---------------------------------------------------------------------------

{/*
	function hideActiveClass() {
		if ($(window).width() <= 576) {
			if ($('.spoiler-item-title').hasClass('spoiler-item-title-active')) {
				$('.spoiler-item-title').removeClass('spoiler-item-title-active');
			}
		}
	};ff
	
	$(document).ready(function () {
		showSpoilerItem();
	});
	
*/}

// ---------------------------------------------------------------------------

// Spoiler construction
{
	/* <div class="spoiler accordion">
		<div class="spoiler-item">
			<h3 class="spoiler-item-title"></h3>
			<div class="spoiler-item-text"></div>
		</div>
		</div> */

	// .active-item-title
	/* Класс со стилями для активного элемента */

	// .spoiler-item-text CSS
	/* {display: none} */
	
}