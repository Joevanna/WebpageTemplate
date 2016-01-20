var application = function() {
	
	function navbarClass() {
		var navbar = $(".nav");
		var scroll = $(window).scrollTop();

		
		if (scroll >= 200 ) {
		
			navbar.addClass('shrink');
		} else {
			navbar.removeClass('shrink');
		}
	}

	function chageLiStateOnScroll() {
		var sections = $('section'),
			nav = $('.sections-nav'),
			nav_height = nav.outerHeight(),
			currentPos = $(this).scrollTop();

		sections.each(function() {
			var top = $(this).offset().top - nav_height,
				bottom = top + $(this).outerHeight();

			if (currentPos >= top && currentPos <= bottom) {
				console.log('you are here');
				nav.find('a').removeClass('active');
				nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
			}
		});

	}

	function onClickLiGoToSection(event) {
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
		$('a').removeClass('active');
		$(this).addClass('active');
	}

	function events() {
		$(window).on('scroll', navbarClass);
		$(window).on('scroll',chageLiStateOnScroll);
		$('.nav li a').on('click', onClickLiGoToSection);
	}

	function init() {
		events();
	}

	return {
		init: init
	}
}();


$(document).ready(function() {

	application.init();

});