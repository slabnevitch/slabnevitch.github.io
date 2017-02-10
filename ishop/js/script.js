$(document).ready(function(){	
	(function () {
	 	//alert('accorden script is loading');
		var slWrapper = document.querySelector('.slider-actions__wrapper'),
			slItem = document.querySelector('.slider-actions__item'),
			slItem_1 =  document.querySelectorAll('.slider-actions__item')[0],
			slItem_2 =  document.querySelectorAll('.slider-actions__item')[1],
			leftHandler = document.querySelector('.left-handler'),
			rightHandler = document.querySelector('.right-handler'),
			slItemNew = document.querySelector('.slider-actions__new'),
			counter = -2;
			
		var itemStyles = getComputedStyle(slItem);
			itemStylesBefore = getComputedStyle(slItemNew),
			slItemCoordLeft_1 = slItem_1.getBoundingClientRect().left;
			slItemCoordLeft_2 = slItem_2.getBoundingClientRect().left;
			difference = (slItem_2.getBoundingClientRect().left - slItem_1.getBoundingClientRect().left);
		
		slWrapper.style.marginLeft = difference * (-2) + 'px';
		leftHandler.onclick = function(e){
			counter--;
			if(counter < -4){
				counter = 0;
			}
			mooveSlider();
			
		}

		rightHandler.onclick = function(e){
			counter++;
			if(counter > 0){
				counter = 0;
			}
			mooveSlider();
			
		}
			
			function mooveSlider(){
			slWrapper.style.marginLeft = difference * counter + 'px';
			
			} 
		/*--------------------------------------------------------------------------------------*/
		var accordeonTarget = $('.left-sidebar__header'),
			accordeonItem = $('left-sidebar__semantic-dt');
		
		$('.left-sidebar__semantic-dt').slideUp();
		
		accordeonTarget .click(function(e){
			e.preventDefault();
					var $This = $(this);
					console.log($This.attr('class'));
					var thisParentSiblings = $(this).closest('.left-sidebar__semantic-dl');
					if(!$This.hasClass('left-sidebar__header--active')){
						$(this).closest('.left-sidebar__semantic-dl').find('.left-sidebar__semantic-dt').stop(true, true).slideDown(300);
						$(this).addClass('left-sidebar__header--active');					
					}else{
					$(this).removeClass('left-sidebar__header--active');
					$(this).closest('.left-sidebar__semantic-dl').find('.left-sidebar__semantic-dt').stop(true, true).slideUp(300);
					}
					
				});
	})();
});

