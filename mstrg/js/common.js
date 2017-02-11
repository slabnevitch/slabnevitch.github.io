$(function() {
	// toggle-menu
	var toggleButt = $('.mobile-menu-toggle'),
		mobMenu = $('.menu');
	toggleButt.click(function(e){
		e.preventDefault();
		mobMenu.stop(true, true).slideToggle();
	});

	//video-tabs
	var $tabContents = $('.tab-content'),
		$tabButtons = $('.win-slider__min-video-item');

	$tabButtons.click(function(e){
		e.preventDefault();
		var $this = $(this),
			id = $this.attr('href'),
			currentVideoTitle = $this.find('.win-slider__min-video-tittle').text(),
			currentTabContent = $tabContents.filter(id),
			currentTitle = currentTabContent.find('.win-slider__title');
			
			currentTabContent.show().siblings().hide();

			currentTitle.text(currentVideoTitle);
	});

	//carousel
	$(document).ready(function(){

		$("#owl-projects").owlCarousel({
			items: 3,
			onTranslated: callback,
			loop: true,
			nav: true,
			URLhashListener:true,
			center:true,
			startPosition: 'URLHash',
			 //margin:10,
			// page: true,
			responsiveClass:true,
			responsive:{
				0:{
					items:1,
					nav:false
				},
				480:{
					items:1,
					nav:false
				},

				500:{
					items:3,
					nav:true
				},
				1000:{
					items:3,
					nav:true,
					loop:true
				}
			},
			navText: ['<', '>']
		}
		
		);
		function callback(event) {
			var name = event.type;
			// var currentItemHash = $('.win-slider .owl-stage .owl-item.center').attr("class");          
			var currentItemHash = $('#owl-projects .owl-item.center img').attr('data-hash'),
					currentPreviewId = '#' + currentItemHash,
					currentPreview = $('[href="'+ currentPreviewId +'"]');

			currentPreview
			.addClass('projects__preview-item--active')
			.siblings()
			.removeClass('projects__preview-item--active');
		}
		$("#owl-testimonials").owlCarousel({
			items: 1,
			loop: true,
			nav: true,
			autoHeight: true,
			//margin:10,
			// page: true,
			responsiveClass:true,
			responsive:{
				0:{
					items:1,
					nav:false
				},
				480:{
					items:1,
					nav:false
				},

				500:{
					items:1,
					nav:true
				},
				1000:{
					items:1,
					nav:true,
					loop:true
				}
			},
			navText: []
		}

		);
	});
	
	var $testimonialHandlers = $('.testimonials .fa'),
			$customHandlerLeft = $('.testimonials .owl-prev'),
			$customHandlerRight = $('.testimonials .owl-next');
	
	$testimonialHandlers.click(function(e){
			 if($(this).index() == 0){
				$('.testimonials .owl-prev').trigger(e);
			 }else{
			 	$('.testimonials .owl-next').trigger(e);
			 }
	});

//magnific-popup
	$('.popup-with-form').magnificPopup({
	
	});

//navigation
	var navLinks = $('.menu-link'),
		sections = $('section');

	navLinks.click(function(e){
		e.preventDefault();
		var id = $(this).attr('href'),
			currentSectTop = $(id).offset().top;

		$('html, body').animate({scrollTop: currentSectTop}, 800);
		//alert(currentSectTop);
	}); 

	var carPreviewButton = $('.projects__preview-item');
		carPreviewButton.click(function(e){
			$(this).addClass('projects__preview-item--active')
					.siblings()
					.removeClass('projects__preview-item--active');
		});



	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

// $(window).load(function() {

// 	$(".loader_inner").fadeOut();
// 	$(".loader").delay(400).fadeOut("slow");

// });
