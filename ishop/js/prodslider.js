function ready(){
	(function(){
		
			/*закрывание окна с фото*/
			$('.close').click(function(e){
				e.preventDefault();
				$(this).parent().fadeOut(200);
				
			});
			/*смена фото в среднем окне*/
			$('.item-link').click(function(e){
				e.preventDefault();
				var $this = $(this);
				getMediumPreview($this);
			});
		 /* slider here*/
			var wrapper = $('.slider-wrap'),
					sliderItem = $('.slide-item'),
					slider = $('.slider'),
					back = $('.back-handler'),
					forward = $('.forward-handler'),
				 
					itemStep =  sliderItem.eq(1).offset().left - sliderItem.eq(0).offset().left,
					coordDifference = itemStep - sliderItem.eq(0).outerWidth(),
					wrapperSize= itemStep * 3,
					counter = 0;
		 // console.log(sliderItem.length);
		 
			wrapper.css('width', wrapperSize);
			wrapper.css('height', sliderItem.eq(0).css('height'));
			slider.css('width', sliderItem.eq(0).outerWidth() * sliderItem.length);
			
			/*slider handling*/
				back.click(function(e){
					e.preventDefault();
				 
					counter--;
					if(counter < -2){
						counter = -2;
						
					}
					
					sliderMoove();
					 handlersPaint();
				});
				forward.click(function(e){
					e.preventDefault();
				 
					counter++;
					 if(counter > 0){
						counter = 0;
					}
					 
					sliderMoove();
					handlersPaint();
				});
			function sliderMoove(){
				slider.css('margin-left', itemStep * counter);
			}
			/*click on ".display*/

			function getFullSrc(src, charQuantity, size, color){
			 var srcFirstPart = 'http://slabnevitch.myfh.ru/parovarka/',
						srcAdd = '.jpg',
						srcSubName = src.substring(37, src.length),
						srcName = srcSubName.substring(0, srcSubName.length - charQuantity);
				if(!size){
					size = '';
					}
				if(color){
					srcName = color;
					}
				//alert(srcFirstPart + srcName + size + srcAdd);
				return srcFirstPart + srcName + size + srcAdd;
			}
			/*change colors for handlers*/
			 function handlersPaint(){
				 if(counter == -2){
					 back.css('color', 'gray');
				 }else{
					 back.css('color', '#000');
				 }
					if(counter == 0){
					 forward.css('color', 'gray');
				 }else{
					 forward.css('color', '#000');
				 }
			 }
			$('.magnifier').click(function(e){
				var bigImgCont = $('.big-image-container'),
						 bigImg = $('.big-image'),
						 src = $('.main-img').attr('src');
				 bigImg.attr('src', getFullSrc(src, 11));
				 bigImgCont.fadeIn(300);
			});
			
				 $('.color-button').click(function(e){
					 var color = $(this).attr('id'),
							 $this = $('.slide-item').eq($(this).index()),
							 $$this = $(this);
					 
					 getMediumPreview($this, color);
					 $('.triangle').css('margin-left', $$this.position().left - $('.triangle').outerWidth() / 3);
				 });
			 function getMediumPreview($this, color){
						var src = $this.find('.item-image').attr('src'),
						display = $('.display'),
						displayImg = display.find('.main-img');
						
				if(!$this.closest('.slide-item').hasClass('active')){
						 displayImg.fadeOut(300, function(){
							
							 displayImg.attr('src', getFullSrc(src, 10, '_medium', color)).fadeIn(300);
						 });
				 $this.closest('.slide-item').addClass('active').siblings().removeClass('active');
				}
			 }
			
		
	})();	
}
document.addEventListener('DOMContentLoaded', ready);