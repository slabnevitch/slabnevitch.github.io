
function ready(){
	
	function init(){
		var wrapper = $('.slider-wrap'),
					sliderItem = $('.slide-item'),
					slider = $('.slider'),
					back = $('.back-handler'),
					forward = $('.forward-handler'),
					
					itemStep =  sliderItem.eq(1).offset().left - sliderItem.eq(0).offset().left,
					coordDifference = itemStep - sliderItem.eq(0).outerWidth(),
					wrapperSize= itemStep * 3,
					counter = 0,
					
					itemLink = $('.item-link'),
					closeButton = $('.close'),
					magnifier = $('.magnifier');
					
					closeButton.click(function(e){
						e.preventDefault();
						$(this).parent().fadeOut(200);
						
					});
					
					back.click(function(e){
						e.preventDefault();
					 
						counter--;
						if(counter < -2){
							counter = -2;
							
						}
						
						sliderMoove(counter, slider, itemStep);
						 
					});
					
					forward.click(function(e){
						e.preventDefault();
					 
						counter++;
						 if(counter > 0){
							counter = 0;
						}
						 
						sliderMoove(counter, slider, itemStep);
						
					});
					
					itemLink.click(function(e){
						e.preventDefault();
						var src = $(this).find('.item-image').attr('src'),
							$this = $(this),
							index = $this.closest('.slide-item').index() + 1,
							fullSrc = getUrl(src, '_medium', index);
						displayMedImages($this, fullSrc)
					});
					
					magnifier.click(function(e){
						e.preventDefault();
						var thisParent = $(this).parent(),
							$this = thisParent.find('.main-img'),
							src = $this.attr('src'),
							index;
							
							$('.slide-item').each(function(i, elem){
								 if($(this).hasClass('active')){
									 index = i + 1;
								} 
								
							});
							fullSrc = getUrl(src, '_large', index);
							console.log(fullSrc);
							displayLargImages(fullSrc);
					});
					
					$('.color-button').click(function(e){
						  var cButton = $(this),
										tri = $('.triangle'),
										left = cButton.position().left  + 2,
										top = tri.position().top;
							tri.css('margin-left', left);
						 /* tri.offset(function(i,val){
								return {top:val.top, left:left};
							}); */
				 });
	}
	
	function sliderMoove(counter, slider, itemStep){
		
		slider.css('margin-left', itemStep * counter);
	}
	
	function getUrl(src, size, index){
						
			  var target = '0',
						pos = 0;

						while(true){
							var foundPos = src.indexOf(target, pos);
							if (foundPos == -1) break;

							//console.log(foundPos);
							pos = foundPos + 1; 
						}
						
						var newString = src.substring(0, pos - 1),
								sizeCharacters = '0' + index + size + '.jpg';
						
						//console.log(newString + sizeCharacters);
				
		return newString + sizeCharacters;
	}
	
	function displayMedImages($this, fullSrc){
	
		var display = $('.display'),
				displayImg = display.find('.main-img');
						
		if(!$this.closest('.slide-item').hasClass('active')){
			 displayImg.fadeOut(function(){
								
				displayImg.attr('src', fullSrc).fadeIn(300);
				});
			$this.closest('.slide-item').addClass('active').siblings().removeClass('active');
		}
	}
	
	function displayLargImages(fullSrc){
			var bigImgCont = $('.big-image-container'),
					bigImg = bigImgCont.find('.big-image');
			bigImg.attr('src', fullSrc);
			bigImgCont.fadeIn(200);
			
	}
	
	init();
}


document.addEventListener('DOMContentLoaded', ready);