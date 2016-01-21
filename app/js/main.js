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

	function shuffle() {

		var $grid = $('.grid').isotope({
		    itemSelector: '.element-item'
		  });
		  // filter functions
		  var filterFns = {
		    // show if number is greater than 50
		    numberGreaterThan50: function() {
		      var number = $(this).find('.number').text();
		      return parseInt( number, 10 ) > 50;
		    }
		  };
		  // bind filter button click
		  $('.filters-button-group').on( 'click', 'a', function() {
		    var filterValue = $( this ).attr('data-filter');
		    // use filterFn if matches value
		    filterValue = filterFns[ filterValue ] || filterValue;
		    $grid.isotope({ filter: filterValue });
		  });

		    $('.button-group').on( 'click', 'a', function(e) {
		    	e.preventDefault();
		      $('.button-group').find('.active').removeClass('active');
		      $( this ).addClass('active');

		  });
  
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
		$('.button-group a').on('click', shuffle);
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