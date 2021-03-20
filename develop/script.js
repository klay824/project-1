//Client ID: GF1SWDKWIT3C2Q00M5DGNDD23YYKCX513OYTTIX2502SUYGM
//Client Secret: RRNKK4YTYGVVXZUAG11NIHBXHXRUT54WIDCWEFXPMXPHIAPK
//Breakfast diner = 4bf58dd8d48988d147941735
//Steakhouse = 4bf58dd8d48988d1cc941735
var categoryId;
var userInput;
var apiId = 'GF1SWDKWIT3C2Q00M5DGNDD23YYKCX513OYTTIX2502SUYGM';
var apiSecret = 'RRNKK4YTYGVVXZUAG11NIHBXHXRUT54WIDCWEFXPMXPHIAPK';
var apiUrl = `https://api.foursquare.com/v2/venues/search?client_id=${apiId}&client_secret=${apiSecret}&v=20180323&categoryId=${categoryId}&limit=50&near=${userInput}`;
var breakfastButton = $('.btn btn-primary');
var searchBtn1 = $('#search-form-1');
var searchBtn2 = $('#search-form-2');
var breakfastModal = $('.breakfast-modal');
var steakModal = $('.steak-modal');
var result;
var resultText = $('<h3>');
var isSteak = false;
var isBreakfast = false;

$('.modal').modal(
	{
		// dismissible: true
	}
);

searchBtn1.submit(function(event) {
	event.preventDefault();
	var breakfastId = '4bf58dd8d48988d147941735';
	categoryId = breakfastId;
	userInput = $('#search-value-1').val();
	isBreakfast = true;
	getVenues();
});

searchBtn2.submit(function(event) {
	event.preventDefault();
	var steakId = '4bf58dd8d48988d1cc941735';
	categoryId = steakId;
	userInput = $('#search-value-2').val();
	isSteak = true;
	getVenues();
});

function getVenues() {
	apiUrl = `https://api.foursquare.com/v2/venues/search?client_id=${apiId}&client_secret=${apiSecret}&v=20180323&categoryId=${categoryId}&limit=50&near=${userInput}`;
	$.ajax({
		dataType: 'json',
		url: apiUrl,
		data: {},
		success: function(data) {
			// Code for handling API response
			var venuesList = data.response.venues;
			result = data.response.venues[Math.floor(Math.random() * venuesList.length)].name;
			console.log(result);
			resultText = $('<h3>');
			resultText.text(result);
			if (isBreakfast) {
				breakfastModal.append(resultText);
				isBreakfast = false;
			} else if (isSteak) {
				steakModal.append(resultText);
				isSteak = false;
			}
		},
		error: function(jqXHR, textStatus, errorThrown) {
			// Code for handling errors
		}
	});
}
