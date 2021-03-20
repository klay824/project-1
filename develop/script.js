//Client ID: GF1SWDKWIT3C2Q00M5DGNDD23YYKCX513OYTTIX2502SUYGM
//Client Secret: RRNKK4YTYGVVXZUAG11NIHBXHXRUT54WIDCWEFXPMXPHIAPK
//Breakfast diner = 4bf58dd8d48988d147941735
//Steakhouse = 4bf58dd8d48988d1cc941735
var categoryId;
var userInput;
var venueId;
var apiId = 'GF1SWDKWIT3C2Q00M5DGNDD23YYKCX513OYTTIX2502SUYGM';
var apiSecret = 'RRNKK4YTYGVVXZUAG11NIHBXHXRUT54WIDCWEFXPMXPHIAPK';
var resultText = $('<h6>');
var searchBtn1 = $('#search-form-1');
var searchBtn2 = $('#search-form-2');
var breakfastModal = $('.breakfast-modal');
var steakModal = $('.steak-modal');
var restaurantResult;
var locationResult;
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
	var apiUrl = `https://api.foursquare.com/v2/venues/search?client_id=${apiId}&client_secret=${apiSecret}&v=20200320&categoryId=${categoryId}&limit=50&near=${userInput}`;

	$.ajax({
		dataType: 'json',
		url: apiUrl,
		data: {},
		success: function(data) {
			// Code for handling API response

			var venuesList = data.response.venues;
			var result = venuesList[Math.floor(Math.random() * venuesList.length)];
			console.log(result);
			restaurantResult = result.name;
			locationResult = result.location.address;
			venueId = result.id;
			resultText.append(restaurantResult);
			resultText.append('<br>');
			resultText.append(locationResult);
			resultText.append('<br>');
			if (isBreakfast) {
				breakfastModal.append(resultText);
				isBreakfast = false;
			} else if (isSteak) {
				steakModal.append(resultText);
				isSteak = false;
			}
			getInfo();
		},
		error: function(jqXHR, textStatus, errorThrown) {
			// Code for handling errors
		}
	});
}

function getInfo() {
	var venueUrl = `https://api.foursquare.com/v2/venues/${venueId}?client_id=${apiId}&client_secret=${apiSecret}&v=20200320`;
	$.ajax({
		dataType: 'json',
		url: venueUrl,
		data: {},
		success: function(data) {
			console.log(data.response);
			var link = data.response.venue.url;
			console.log(link);
			resultText.append(`<a href= "${link}">Website</a>`);
		},
		error: function(jqXHR, textStatus, errorThrown) {
			// Code for handling errors
		}
	});
}
