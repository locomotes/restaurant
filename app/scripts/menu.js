var menuTemplate=_.template( $('#menuTemplate').html() );

var content= $.getJSON('http://restaurantapi.apiary.io/').done( function (data){
	$('#menu').html( menuTemplate(data));
});