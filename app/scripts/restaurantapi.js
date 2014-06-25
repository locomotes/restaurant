var template =_.template($('#box_template').html();

$.getJSON('http://restaurantapi.apiary.io/menu', function (data){

	_.each(appetizers)(data, function(){
	$('#box').append(template() );

 });

});

//.getJSON('http://restaurantapi.apiary.io/menu')
