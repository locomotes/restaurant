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
