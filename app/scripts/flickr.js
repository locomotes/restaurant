

	
	// //assign your api key equal to a variable
// var apiKey = '[391b7344255a48ba1f7460ed1bc02a49]';
// var secret = '[9b1a218c5df0e339]'
	
	// //the initial json request to flickr
	// //to get your latest public photos, use this request: http://api.flickr.com/services/rest/?&amp;method=flickr.people.getPublicPhotos&amp;api_key=' + apiKey + '&amp;user_id=29096781@N02&amp;per_page=15&amp;page=2&amp;format=json&amp;jsoncallback=?
	// $.getJSON('http://api.flickr.com/services/rest/?&amp;method=flickr.photosets.getPhotos&amp;api_key=' + apiKey + '&amp;photoset_id=72157619415192530&amp;format=json&amp;jsoncallback=?',


(function() {
  var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  $.getJSON( flickerAPI, {
    tags: "steak",
    tagmode: "any",
    format: "json",
    size: "h"
  })
    .done(function( data ) {
      $.each( data.items, function( i, item ) {
        $( "<img>" ).attr( "src", item.media.m ).appendTo( "#flickrcontainer" );
        if ( i === 3 ) {
          return true;
        }
      });
    });
})();

(function() {
  var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  $.getJSON( flickerAPI, {
    tags: "steak",
    tagmode: "any",
    format: "json",
    size: "s"
  })
    .done(function( data ) {
      $.each( data.items, function( i, item ) {
        $( "<img>" ).attr( "src", item.media.m ).appendTo( "#specialimage" );
        if ( i === 1 ) {
          return true;
        }
      });
    });
})();