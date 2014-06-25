var menuTemplate=_.template( $('#menuTemplate').html() );

var content= $.getJSON('http://restaurantapi.apiary.io/').done( function (data){
	$('#menu').html( menuTemplate(data));
});
var flikrTemplate=_.template( $('#flikrTemplate').html() );

var images= $.getJSON('http://restaurantapi.apiary.io/').done( function (data){
	$('#flikrImages').html(flikrTemplate(data));
});
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

// $('#map_canvas').hover()function({

// 	$(this).addClass('hover');

// })

// ^^Check syntax, but this should work
