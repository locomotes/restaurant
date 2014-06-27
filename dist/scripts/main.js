var template = _.template( $('#box_template').html() );

$.getJSON('http://restaurantapi.apiary.io/menu', function (menu){

	_.each(menu.appetizers, function(fooditem){
	
		$('#box').append( template(fooditem) );

 	});

 	_.each(menu.entrees, function(fooditem){
	
		$('#box2').append( template(fooditem) );

 	});

 	_.each(menu.sides, function(fooditem){
	
		$('#box3').append( template(fooditem) );

 	});

});



 
//  var template = _.template( $('#box2_template').html() );

// $.getJSON('http://restaurantapi.apiary.io/menu', function (data){

// 	_.each(data.item, function(description){
	
// 		$('#box2').append( template(description) );

//  	});

// });


 
//  var template = _.template( $('#box3_template').html() );

// $.getJSON('http://restaurantapi.apiary.io/menu', function (data){

// 	_.each(data.id, function(id){
	
// 		$('#box3').append( template(id) );

//  	});

// });




	
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
