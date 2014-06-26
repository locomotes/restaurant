// var menuTemplate=_.template( $('#menuTemplate').html() );

// var content= $.getJSON('http://restaurantapi.apiary.io/').done( function (data){
// 	$('#menu').html( menuTemplate(data));
// });

var newsTemplate=_.template( $('#newsTemplate').html() );

function stuff(a){
	$('#news').html( newsTemplate(a) );

}

console.log(stuff(news));