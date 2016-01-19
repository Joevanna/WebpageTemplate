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
		var y = $(window).scrollTop();

        $('li a').each(function (event) {

            if (y >= $($(this).attr('href')).offset().top) {
                $('li a').not(this).removeClass('active');
                $(this).addClass('active');
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
		$('.nav li a').on('click', onClickLiGoToSection);
	}

	function init() {
		events();
		 $(window).scroll(function () {

	        var y = $(this).scrollTop();

	        $('li a').each(function (event) {
            if (y >= $($(this).attr('href')).offset().top) {
                $('li a').not(this).removeClass('active');
                $(this).addClass('active');
            }
        });

    });
	}

	return {
		init: init
	}
}();


$(document).ready(function() {

	application.init();

});