window.onload = function(){	
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

}