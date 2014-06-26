$('#logo').mouseenter(function(){
	$(this).animate().html('Mystery Meat');
	$(this).mouseleave(function(){
	$(this).animate().html('¿MM?');	
	});
});