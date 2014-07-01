var template = _.template( $('#box_template').html() );
var special = "http://restaurantapi.apiary.io/menu/special";
var menuurl = "http://restaurantapi.apiary.io/menu";

$.getJSON(menuurl, function (menu){
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
}).done(function(menu){
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


  $.getJSON(special, function (data) {
    var special_id = data.menu_item_id;
    console.log(menu);
    _.each(menu.entrees, function(a) {
      if (a.id === special_id) {
        $("#specialname").append( a.item + "..........." );
        $("#specialprice").append( a.price );
        $("#specialtwo").append( a.description );
      }
    });
  }); 



});
// $.getJSON(special, function (data) {
//   var special_id = data.menu_item_id;
//   $.getJSON(menu, function (data) {
//     data.entrees.forEach(function(a) {
//       if (a.id === special_id) {
//         $("#specialname").append( a.item + "..........." );
//         $("#specialprice").append( a.price );
//         $("#specialtwo").append( a.description );
//       }
//     });
//   }); 
// });

// _.each(menu.entrees, function(a) {





 
//  var template = _.template( $('#box2_template').html() );

// $.getJSON('http://restaurantapi.apiary.io/menu', function (data){

//  _.each(data.item, function(description){
  
//    $('#box2').append( template(description) );

//    });

// });


 
//  var template = _.template( $('#box3_template').html() );

// $.getJSON('http://restaurantapi.apiary.io/menu', function (data){

//  _.each(data.id, function(id){
  
//    $('#box3').append( template(id) );

//    });

// });

