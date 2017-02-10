
(function () {
	$(document).ready(function(){
		var counter = 0;
		var sladeWrapper = $('.slider-wrapper');
		var sliderItem = $('.item');
		var itemsForBackground = document.querySelectorAll('.item');
		var handlers = $('.slider__button-item');
		var timer;
		
		var imgUrls = [ 'url(praga-img/bg_slide_01.jpg)', 'url(praga-img/bg_slide_02.jpg)', 'url(praga-img/bg_slide_03.jpg)', 'url(praga-img/bg_slide_04.jpg)', 'url(praga-img/bg_slide_05.jpg)'];
		
				for(var i=0; i < itemsForBackground.length; i++){
					itemsForBackground[i].style.backgroundImage = imgUrls[i];
				}

		$('.slider__left-arrow').click(function(e){
		  counterReduction();
		 
		});
		$('.slider__right-arrow').click(function(e){
		  counterIncrease();
		});
		
		handlers.click(function(e){
		 console.log($(this).index());
		  counter = $(this).index();
		  getVisibility();
		  handlersActivate();
		  sliderWrapperMotion();
		  clearInterval(timer);
		  slideTimer();
		});

		function counterIncrease(){
		  counter++;
		  if(counter > 4){
			counter = 0;
		  }
		  
		  sliderWrapperMotion();
		  getVisibility();
		  handlersActivate();
		  
		  clearInterval(timer);
		  slideTimer();
		}
		function counterReduction(){
		  counter--;
		  if(counter < 0){
			counter = 4;
		  }
		  
		  sliderWrapperMotion();
		  getVisibility();
		  handlersActivate();
		  
		  clearInterval(timer);
		  slideTimer();
		  
		}

		function slideTimer(){
		 timer = setInterval(function(){
			 counterIncrease();
		  }, 5000);
		}

		function sliderWrapperMotion(){
		  var sliderWrapperMargTop = -counter * 769;
		  sladeWrapper.css('margin-top', sliderWrapperMargTop);
		  
		}
		

		function getVisibility(){
		  var currentSlide = sliderItem.eq(counter);
		  currentSlide.animate({opacity: 1}, 1000);
		  currentSlide.siblings().animate({opacity: 0}, 1000);
		}

		function handlersActivate(){
		  handlers.eq(counter).find('.slider__insider').addClass('slider__insider--active');
		   handlers.eq(counter).siblings().find('.slider__insider').removeClass('slider__insider--active');
		}

		$('.reset').click(function(e){
		  counter = 0;
		  counterFieldUpdate();
		  sliderWrapperMotion();
		  getVisibility();
		  handlersActivate();
		});

		
		getVisibility();
		slideTimer();
	});
}());