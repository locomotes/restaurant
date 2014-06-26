// var menuTemplate=_.template( $('#menuTemplate').html() );

// var content= $.getJSON('http://restaurantapi.apiary.io/').done( function (data){
// 	$('#menu').html( menuTemplate(data));
// });

var newsTemplate=_.template( $('#newsTemplate').html() );

function stuff(a){
	$('#news').html( newsTemplate(a) );

}

console.log(stuff(news));
// var flikrTemplate=_.template( $('#flikrTemplate').html() );

// var images= $.getJSON('http://restaurantapi.apiary.io/').done( function (data){
// 	$('#flikrImages').html(flikrTemplate(data));
// });
function initialize () {
	var map_canvas = document.getElementById('map_canvas');
	var map_options = {
		center: new google.maps.LatLng(40.751132, -73.855449),
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(map_canvas, map_options)
}
google.maps.event.addDomListener(window, 'load', initialize);

$('#restaurant-name').mouseenter(function(){
	$(this).animate().html('Always a treat.');
	$(this).animate().css('font-size','50px');
	$(this).mouseleave(function(){
	$(this).animate({},'slow').html('Mystery Meat');
	$(this).animate().css('font-size','70px')	

	});
});