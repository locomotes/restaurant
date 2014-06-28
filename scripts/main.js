


var template = _.template( $('#box_template').html() );

var special_id;

var logme = function (a) {
console.log(a);
};

$.getJSON('http://restaurantapi.apiary.io/menu/special').done( function (data) {

  special_id = data.menu_item_id;

  logme(special_id);

});d
// var menuTemplate=_.template( $('#menuTemplate').html() );

// var content= $.getJSON('http://restaurantapi.apiary.io/').done( function (data){
// 	$('#menu').html( menuTemplate(data));
// });

var newsTemplate=_.template( $('#newsTemplate').html() );

function stuff(a){
	$('#news').html( newsTemplate(a) );

}

console.log(stuff(news));


	
	// //assign your api key equal to a variable
// var apiKey = '[391b7344255a48ba1f7460ed1bc02a49]';
// var secret = '[9b1a218c5df0e339]'
	
	// //the initial json request to flickr
	// //to get your latest public photos, use this request: http://api.flickr.com/services/rest/?&amp;method=flickr.people.getPublicPhotos&amp;api_key=' + apiKey + '&amp;user_id=29096781@N02&amp;per_page=15&amp;page=2&amp;format=json&amp;jsoncallback=?
	// $.getJSON('http://api.flickr.com/services/rest/?&amp;method=flickr.photosets.getPhotos&amp;api_key=' + apiKey + '&amp;photoset_id=72157619415192530&amp;format=json&amp;jsoncallback=?',


(function() {
  var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  $.getJSON( flickerAPI, {
    tags: "seafood",
    tagmode: "any",
    format: "json",
    size: "h"
  })
    .done(function( data ) {
      $.each( data.items, function( i, item ) {
        $( "<img>" ).attr( "src", item.media.m ).appendTo( "#flickr" );
        if ( i === 5 ) {
          return false;
        }
      });
    });
})();


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
var news= {
    "post_id": 13,
    "title": "Acorn Finished Pork",
    "post": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

}