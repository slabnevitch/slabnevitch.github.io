$(document).ready(function(){
	
	$('.news__expand').click(function(e){
		var expandedItem = $(this).closest('.news__item').find('.news__expanded');
		expandedItem.slideToggle(100);
		expandedItem.toggleClass('active');
		//$(this).text('свернуть');
		if(expandedItem.hasClass('active')){
			$(this).text('свернуть');
		} else {
		$(this).text('подробней');
		}
	});
		
});