var app = {
	
	init: function(){
		$('.search').on("click", function(event){
			event.preventDefault();
			app.getDonutSpots();
		})
	},

	getDonutSpots: function(){
		var zipCode = $('.zipcode').val();

		var data = {zipCode: zipCode};
		console.log(data);
		$.ajax({
			url: '/',
			type: 'POST',
			data: JSON.stringify(data),
			contentType: 'application/json',
			success: function(data){
				//console.log("INSIDE CLIENT APP",data); // yelp data
				app.displaySpots(data);
			},
			error: function(err){
				console.log(err);
			}
		});
	},

	displaySpots: function(data){
		//console.log(data.businesses);
		var shops = data.businesses;
		for(var i = 0; i < shops.length; i++){
			//console.log(shops[i]);
			var location = shops[i]['location']['display_address'];
			console.log(location);

			var str = '';
			for(var j = 0; j < location.length; j++){
				str += " " + location[j];
			}
			str;
			var spots = shops[i].name;


			//console.log(spots);
			var $template = $('<div></div>');
			var output = $template.html(spots + " " + str);
			$('#spots').append(output);
		}
	}
}