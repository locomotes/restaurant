$('#restaurant-name').mouseenter(function(){
	$(this).animate().html('Always a treat').css('font-size','60px');
	$(this).mouseleave(function(){
		$(this).animate().html('Mystery Meat').css('font-size','70px');
	});
});