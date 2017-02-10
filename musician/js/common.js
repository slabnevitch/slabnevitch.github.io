$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//CAROUSELS
	$(document).ready(function(){
		var owlOne = $("#carousel-one").owlCarousel({
			items: 1,
			nav: false,
			loop: true,
			autoHeight: true
		});
		var owlTwo = $("#carousel-two").owlCarousel({
			items:3,
			onTranslated: callback,
			onInitialized: carInit,
			nav: false,
			loop: true,
			center:true,
			margin:150,
			autoHeight: true,
			autoWidth: true,
			responsiveClass:true,
			responsive:{
				0:{
					items:4,
					nav:false
				},
				1204:{
					items:3,
					nav:false
				},
				1205:{
					items:4,
					nav:false
				},

				2000:{
					items:5,
					nav:false
				}

			}



		});
		owlTwo.on('mousewheel', '.owl-stage', function (e) {
			if (e.deltaY>0) {
				owlTwo.trigger('next.owl');
			} else {
				owlTwo.trigger('prev.owl');
			}
			e.preventDefault();
		});
		var $sliderHandlerPrev = $('.slider__handler-prev'),
		$sliderHandlerNext = $('.slider__handler-next');


		$sliderHandlerPrev.click(function(e){
			owlOne.trigger('prev.owl.carousel');
		});

		$sliderHandlerNext.click(function(e){
			owlOne.trigger('next.owl.carousel');
		});
		function carInit(e){
			var $historySlideItem = $('.history .owl-item.center'),
			$slidePoint = $historySlideItem.find('.car-two__point'),
			$slideText = $historySlideItem.find('.car-two__text'),
			$slideDate = $historySlideItem.find('span');

			$slidePoint.css('visibility', 'visible');
			$slideText.css('visibility', 'visible');
			$slideDate.css('color', '#575a59');
		}
		function callback(event){
			var $historySlideItem = $('.history .owl-item.center'),
			$slidePoint = $historySlideItem.find('.car-two__point'),
			$slideText = $historySlideItem.find('.car-two__text'),
			$slideDate = $historySlideItem.find('span');
			
			$slidePoint.css('visibility', 'visible');
			$slideText.css('visibility', 'visible');
			$slideDate.css('color', '#575a59');
			$historySlideItem.siblings()
			.find('.car-two__point')
			.css('visibility', 'hidden');
			$historySlideItem.siblings()
			.find('.car-two__text')
			.css('visibility', 'hidden');
			$historySlideItem.siblings()
			.find('span')
			.css('color', '#b2b2b2');
			//$historySlideItem.css('width', '243px');
			console.log('event');
		}
		
		//nav-scroll
		var $links = $('.header__link'),
		$sections = $('section');

		$links.click(function(e){
			e.preventDefault();
			var $thisLink = $(this),
			$thisLinkHref = $thisLink.attr('href'),
			$sect = $($thisLinkHref),
			sectTop = $sect.offset().top;
			console.log(sectTop);
			$('html, body').animate({scrollTop: sectTop}, 1000);

		});

	//audio
	var music = document.querySelectorAll('audio'),
	disco = document.querySelector('#disco'),
	discoButtons = disco.querySelectorAll('.button');
	
	[].forEach.call(discoButtons, function(elem) {
		elem.addEventListener('click', audioControl);
	});
	
	
	function audioControl(e) {
		e.preventDefault();
		var target = e.target
				track = target.nextElementSibling;
				track.volume = .2;
				track.addEventListener("timeupdate", progressBar); 
		if(!target.classList.contains('on')){
			track.play();
			target.classList.add('on');
			target.innerHTML = 'pause';
			
		}else{
			track.pause(track.currentTime);
			target.classList.remove('on');
			target.innerHTML = 'play';

		}
		
	}

	function progressBar(e){
		if(this.currentTime == this.duration){
			this.previousElementSibling.classList.remove('on');
			this.previousElementSibling.innerHTML	 = 'play';
		}
	}
	// audiojs.events.ready(function() {
	// 	var as = audiojs.createAll();
	// });
});
	
	
	
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
