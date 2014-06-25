console.log('The Iron Yard Rocks');
function initialize () {
	var map_canvas = document.getElementById('map_canvas');
	var map_options = {
		center: new google.maps.LatLng(40.751132, -73.855449),
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.HYBRID
	}
	var map = new google.maps.Map(map_canvas, map_options)
}
google.maps.event.addDomListener(window, 'load', initialize);

// function initialize() {
//   var map_canvas = document.getElementById('map_canvas');
//   var map_options = {
//     center: new google.maps.LatLng(44.5403, -78.5463),
//     zoom: 8,
//     mapTypeId: google.maps.MapTypeId.ROADMAP
//   }
//   var map = new google.maps.Map(map_canvas, map_options)
// }
// google.maps.event.addDomListener(window, 'load', initialize);