//Client ID: GF1SWDKWIT3C2Q00M5DGNDD23YYKCX513OYTTIX2502SUYGM
//Client Secret: RRNKK4YTYGVVXZUAG11NIHBXHXRUT54WIDCWEFXPMXPHIAPK

var apiId = 'GF1SWDKWIT3C2Q00M5DGNDD23YYKCX513OYTTIX2502SUYGM';
var apiSecret = 'RRNKK4YTYGVVXZUAG11NIHBXHXRUT54WIDCWEFXPMXPHIAPK';
var apiUrl = `https://api.foursquare.com/v2/venues/explore?client_id=${apiId}&client_secret=${apiSecret}&v=20180323&limit=1&ll=40.7243,-74.0018&query=steak`;
// function getApi(url) {
// 	fetch(url).then(function(response) {
// 		console.log(response);
// 		if (response.status === 200) {
// 			responseText.textContent = response.status;
// 		}
// 		return response.json();
// 	});
// }

$.ajax({
	dataType: 'json',
	url: apiUrl,
	data: {},
	success: function(data) {
		// Code for handling API response
		console.log(data);
	},
	error: function(jqXHR, textStatus, errorThrown) {
		// Code for handling errors
	}
});
