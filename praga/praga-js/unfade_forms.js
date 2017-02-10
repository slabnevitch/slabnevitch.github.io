$(document).ready(function(){
	
	$('.consult').click(function(e){
			$('.consulting').fadeIn();
			window.addEventListener('keyup', onkeypressHandler);
			$('.consulting__close').click(function(e){
			   $(this).closest('.hidden-form').fadeOut();
			   window.removeEventListener('keyup', onkeypressHandler);
			});
	});
	$('.header__regform').click(function(e){
			$('.booking').fadeIn();
			window.addEventListener('keyup', onkeypressHandler);
			$('.consulting__close').click(function(e){
			   $(this).closest('.hidden-form').fadeOut();
			    window.removeEventListener('keyup', onkeypressHandler);
			});
	});
	function onkeypressHandler(e){
		if(e.which == 27){
			$('.hidden-form').fadeOut();
			window.removeEventListener('keyup', onkeypressHandler);
		}
		return;
	}
});