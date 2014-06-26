$('#restaurant-name').mouseenter(function(){
	$(this).animate().html('Always a treat.');
	$(this).animate().css('font-size','50px');
	$(this).mouseleave(function(){
	$(this).animate({},'slow').html('Mystery Meat');
	$(this).animate().css('font-size','70px')	

	});
});