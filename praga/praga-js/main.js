$(document).ready(function(){
	
		 $('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
	
	$('form').submit(function(e) {
		e.preventDefault();
		/* $.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() { */
			alert("Спасибо за заявку!");
			$(this).find('input').val('');
			setTimeout(function() {
				$('.hidden-form').fadeOut();
			}, 1000);
	
		//return false;
	});
	
	
	$('.header__logo').mouseover(function(e){
		logoRotate(90);
	});
	
	$('.header__logo').mouseout(function(e){
		logoRotate(-90);
	});
		
	function logoRotate(rotateAngle){
		
		$('.header__logo img').rotate({animateTo: rotateAngle});
	}
		
	/* Animation page elements */
	$('.slider__tittle').animated('pulse', 'fadeOut');
	$('.section-header, .about__tittle').animated('slideInUp', 'fadeOut');
	$('.client-count').animated('zoomIn', 'fadeOut');
	
	$(window).on('load', function(){
		$('.preloader').fadeOut(500);
	});
});
