
var special = "http://restaurantapi.apiary.io/menu/special";
var menu = "http://restaurantapi.apiary.io/menu";
$.getJSON(special, function (data) {
	var special_id = data.menu_item_id;
	$.getJSON(menu, function (data) {
		data.entrees.forEach(function(a) {
			if (a.id === special_id) {
				$("#specialname").append( a.item + "..........." );
				$("#specialprice").append( a.price );
				$("#specialtwo").append( a.description );
			}
		});
	});	
});


// console.log(a.item);
// $("#specials").append( a.item );
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

 	_.each(menu.appetizers, function(a){
 		
 	})

}).done(function(){

	var allergy_info = "This item may contain shellfish or another item that some people may be allergic to. Please ask your waiter or waitress for assistance.";


$('.allergies-icon').hover(function () {
    
    $(this).append('<div class="allergy-info-box">' + '<div class="allergy-info-box-title">Allergies</div><br>' +  allergy_info + '</div>');
  
  }, function () {
  
    $(this).find('div').remove();
    
});

var spicy_info = "This item is spicy, please handle with care and drink lots of water!";


$('.spicy-icon').hover(function () {
    
    $(this).append('<div class="spicy-info-box">' + '<div class="spicy-info-box-title">Spicy!</div><br>' + spicy_info + '</div>');
  
  }, function () {
  
    $(this).find('div').remove();

 });

    var favorite_info = "We have been doing this a long time and this item has become one of our favorites.";


$('.favorite-icon').hover(function () {
    
    $(this).append('<div class="favorite-info-box">' + '<div class="favorite-info-box-title">A Favorite!</div><br>' + favorite_info + '</div>');
  
  }, function () {
  
    $(this).find('div').remove();


});


    var vegan_info = "This item contains no meat and has been prepared without the use of animal products.";


$('.vegan-icon').hover(function () {
    
    $(this).append('<div class="vegan-info-box">' + '<div class="vegan-info-box-title">Vegan Option</div><br>' + vegan_info + '</div>');
  
  }, function () {
  
    $(this).find('div').remove();


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


var template = _.template( $('#box_template').html() );

var special_id;

var logme = function (a) {
console.log(a);
};

$.getJSON('http://restaurantapi.apiary.io/menu/special').done( function (data) {

  special_id = data.menu_item_id;

  logme(special_id);

});


	
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

/*
Request:

var xhr = new XMLHttpRequest();
xhr.open("GET", "http://restaurantapi.apiary-mock.com/news/latest");
xhr.onreadystatechange = function () {
  if (this.readyState == 4) {
    alert('Status: '+this.status+'\nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'\nBody: '+this.responseText);
  }
};
xhr.send(null);

Response:

200 (OK)
Content-Type: application/json
{
    "post_id": 13,
    "title": "Acorn Finished Pork",
    "post": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}
*/







// following attempt based off of API examples @ http://api.jquery.com/jquery.getjson/


// $.getJSON('http://restaurantapi.apiary-mock.com/news/latest', function (data) {
// 	var items = [];
// 	$.each( data, function (a, b, c) {
// 		items.push('<p>' + a + '<br />' + b + c + '</p>' )
// 	}); 

// 	($) 
// };





// templating??

// var template2 = _.template( $('#newsTemplate').html() );

// $.getJSON('http://restaurantapi.apiary-mock.com/news/latest', function (data) {
// 	// _.each(data.post_id, function (a) {
// 		$('#newsBox').append( template2( data ));
// 	// });
// });


// var template = _.template( $('#newsTemplate').html() );

// $.getJSON('http://restaurantapi.apiary-mock.com/news/latest', function (data) {
// 	_.each(data.post_id, function (a) {
// 		$('#newsBox').console.log(a);
// 	});
// });


var template2 = _.template( $('#newsTemplate').html() );

$.getJSON('http://restaurantapi.apiary-mock.com/news/latest', function (data) {
		$('#newsBox').append( template2( data ));
});

$('#restaurant-name').mouseenter(function(){
	$(this).animate().html('Always a treat').css('font-size','60px');
	$(this).mouseleave(function(){
		$(this).animate().html('Mystery Meat').css('font-size','70px');
	});
});



             