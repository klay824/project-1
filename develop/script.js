//Client ID: GF1SWDKWIT3C2Q00M5DGNDD23YYKCX513OYTTIX2502SUYGM
//Client Secret: RRNKK4YTYGVVXZUAG11NIHBXHXRUT54WIDCWEFXPMXPHIAPK
//Breakfast diner = 4bf58dd8d48988d147941735
//Steakhouse = 4bf58dd8d48988d1cc941735

var apiId = 'GF1SWDKWIT3C2Q00M5DGNDD23YYKCX513OYTTIX2502SUYGM';
var apiSecret = 'RRNKK4YTYGVVXZUAG11NIHBXHXRUT54WIDCWEFXPMXPHIAPK';
var apiUrl = `https://api.foursquare.com/v2/venues/search?client_id=${apiId}&client_secret=${apiSecret}&v=20180323&categoryId=4bf58dd8d48988d147941735&limit=50&near=Dallas`;

$.ajax({
	dataType: 'json',
	url: apiUrl,
	data: {},
	success: function(data) {
		// Code for handling API response
		console.log(data.response.venues[2]);
		console.log(data.response.venues[2].name);
		console.log(data.response.venues[2].location.address);
	},
	error: function(jqXHR, textStatus, errorThrown) {
		// Code for handling errors
	}
});
