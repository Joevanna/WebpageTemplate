var application = function() {
	
	function navbarClass() {
		var navbar = $(".nav");
		var scroll = $(window).scrollTop();

		
		if (scroll >= 200 ) {
			console.log('working');
			navbar.addClass('shrink');
		} else {
			navbar.removeClass('shrink');
		}
	}

	function liActiveState() {
		var section = $('section'),
			nav = $('.nav'),
			nav_height = nav.outerHeight();

		var cur_pos = $(this).scrollTop();

		section.each(function() {
			var top = $(this).offset().top - nav_height,
        	bottom = top + $(this).outerHeight();

        	if (cur_pos >= top && cur_pos <= bottom) {
        		nav.find('a').removeClass('active');
        		section.removeClass('active');

        		$(this).addClass('active');
      			nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
        	}
		})

	}

	function events() {
		$(window).on('scroll', navbarClass);
		$(window).on('scroll', liActiveState);
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