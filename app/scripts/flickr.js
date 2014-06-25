var flikrTemplate=_.template( $('#flikrTemplate').html() );

var images= $.getJSON('http://restaurantapi.apiary.io/').done( function (data){
	$('#flikrImages').html(flikrTemplate(data));
});