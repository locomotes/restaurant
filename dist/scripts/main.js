var menuTemplate=_.template( $('#menuTemplate').html() );

var content= $.getJSON('http://restaurantapi.apiary.io/').done( function (data){
	$('#menu').html( menuTemplate(data));
});
<<<<<<< HEAD
// $(function(){
// 	jQuery('#a-link').remove();   
	
// 	jQuery('<img alt="" />').attr('id', 'loader').attr('src', 'ajax-loader.gif').appendTo('#flickr');
	
	// //assign your api key equal to a variable
// var apiKey = '[391b7344255a48ba1f7460ed1bc02a49]';
// var secret = '[9b1a218c5df0e339]'
	
	// //the initial json request to flickr
	// //to get your latest public photos, use this request: http://api.flickr.com/services/rest/?&amp;method=flickr.people.getPublicPhotos&amp;api_key=' + apiKey + '&amp;user_id=29096781@N02&amp;per_page=15&amp;page=2&amp;format=json&amp;jsoncallback=?
	// $.getJSON('http://api.flickr.com/services/rest/?&amp;method=flickr.photosets.getPhotos&amp;api_key=' + apiKey + '&amp;photoset_id=72157619415192530&amp;format=json&amp;jsoncallback=?',




// var flickrURL = "http://api.flickr.com/services/feeds/ ↲
//  photos_public.gne?ids=25053835@N03&format=json&jsoncallback=?"
// 	$.getJSON(flickrURL, function(data) {
// 	 // do something with the JSON data returned
// 	 }); // end get
// var flickrURL = "http://api.flickr.com/services/feeds/groups_join.gne?id=608918@N24&format=json&jsoncallback=?";
// var flickrURL = "https://api.flickr.com/services/feeds/photos_public.gne;api_key=' + apiKey"
// 	$.getJSON(flickrURL, function(data) {
// 		$("#flickr").append(data);
// 	 // do something with the JSON data returned
// 	});

$.getJSON('http://api.flickr.com/services/rest/?format=json&method=flickr.photos.search&tags=seafood&tag_mode=all&api_key=[391b7344255a48ba1f7460ed1bc02a49]', function (data){
	$("#columnone").append('#flickr');
=======
var flikrTemplate=_.template( $('#flikrTemplate').html() );

var images= $.getJSON('http://restaurantapi.apiary.io/').done( function (data){
	$('#flikrImages').html(flikrTemplate(data));
>>>>>>> e709fc051ca30a22fc7933710dd9a658a3a895d8
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