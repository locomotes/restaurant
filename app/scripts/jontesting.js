


var template = _.template( $('#box_template').html() );

var special_id;

var logme = function (a) {
console.log(a);
};

$.getJSON('http://restaurantapi.apiary.io/menu/special').done( function (data) {

  special_id = data.menu_item_id;

  logme(special_id);

});d