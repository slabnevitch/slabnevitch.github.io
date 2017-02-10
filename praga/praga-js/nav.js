(function () {
	
	function ready(e){
		var menu = document.querySelector('.header__menu');
			
			console.log('eaylashes '+$('.eyelashes').height());
			console.log('manicure '+$('.manicure').height());
			
			$('.header__link').click(function(e){
				var dataAtrr = $(this).attr('href'),
				offset = 50,
				dataAtrr = dataAtrr.substr(1, dataAtrr.length),
				section = $('[data-name="'+ dataAtrr +'"]');
				if(dataAtrr === 'manicure' || dataAtrr === 'orthonyxia' || dataAtrr === 'about'){
					offset = 150;
				}
				var scroll = section.offset().top - offset;
				
				//alert(dataAtrr);
				$('html, body').animate({scrollTop: scroll}, 800);
			});
			/*menu.onclick = function(e){
				
				if(e.target.className = 'header__link'){
					e.preventDefault();
					
					var adress = e.target.getAttribute('href').substring(1);
					
					var section = document.querySelector('[data-name="'+ adress +'"]');
					 var target = section.getBoundingClientRect().top;
						 console.log(section);
						$('html').animate({scrollTop: target }, 1000);
						//alert(section);

				}
			}*/
			
		$('.header__logo').click(function(){
			$('html, body').animate({scrollTop: 0}, 800);
			$('.header__logo img').rotate({animateTo: 360});
		});		
	}
	document.addEventListener("DOMContentLoaded", ready);
}());