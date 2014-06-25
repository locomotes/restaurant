function initialize () {
	var map_canvas = document.getElementById('map_canvas');
	var mapOptions = {
		center: new google.maps.LatLng(40.751132, -73.855449),
		zoom: 5,
		mapTypeId: google.maps.MapTypeId.HYBRID
	}
	var map = new google.maps.Map(map_canvas);
}