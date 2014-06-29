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
    
    $(this).append('<div class="allergy-info-box">' + '<span class="allergy-info-box-title">Allergies</span><br>' +  allergy_info + '</div>');
  
  }, function () {
  
    $(this).find('div').remove();
    
});

var spicy_info = "This item is spicy, please handle with care and drink lots of water!";


$('.spicy-icon').hover(function () {
    
    $(this).append('<div class="spicy-info-box">' + '<span class="spicy-info-box-title">Spicy!</span><br>' + spicy_info + '</div>');
  
  }, function () {
  
    $(this).find('div').remove();

 });

    var favorite_info = "We have been doing this a long time and this item has become one of our favorites.";


$('.favorite-icon').hover(function () {
    
    $(this).append('<div class="favorite-info-box">' + '<span class="favorite-info-box-title">A Favorite!</span><br>' + favorite_info + '</div>');
  
  }, function () {
  
    $(this).find('div').remove();


});


    var vegan_info = "This item contains no meat and has been prepared without the use of animal products.";


$('.vegan-icon').hover(function () {
    
    $(this).append('<div class="vegan-info-box">' + '<span class="vegan-info-box-title">Vegan Option</span><br>' + vegan_info + '</div>');
  
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

