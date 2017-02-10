
(function () {
	
	function ready(e){
		var links = $('.header__link');
		
		window.onscroll = function(e){
			
			
				$('[data-name]').each(function(){
					var $this = $(this),
				
				sectionTop = $this.offset().top - 200,
				sectionBottom = sectionTop + $this.height();
				
				//console.log($this.outerHeight());
				windScroll = $(window).scrollTop();
					if(sectionTop < windScroll && sectionBottom > windScroll){
						var name = $this.attr('data-name');
						 links.filter('[href="#' + name +'"]').closest('.header__item').addClass('header__item--hover').siblings().removeClass('header__item--hover');
							/*currentLink = $(".header__link").filter('[href="#' + name +'"]');
							currentLink.closest('.header__item').addClass('header__item--hover').siblings().removeClass('header__item--hover');*/
						
					}
				
			}); 
			/*[].forEach.call(sections, function(elem){
				
				var sectionTop = elem.getBoundingClientRect().top,
					sectionBottom = sectionTop + elem.clientHeight,
					windScroll = $(window).scrollTop();
					
					if(sectionTop < windScroll && sectionBottom > windScroll){
						//console.log(elem.getAttribute('data-name'));
						//console.log(elem.getAttribute('bredov'));
						console.log(elem.className+sectionTop);
						var name = elem.getAttribute('data-name')
						$('.header__portfolio-tittle').text(name);
					}
			});*/
			
			if(window.pageYOffset < 1000){
				$('.header__item').removeClass('header__item--hover');
			}
		}
		
			
	}
	document.addEventListener("DOMContentLoaded", ready);
}());