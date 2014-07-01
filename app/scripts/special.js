
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