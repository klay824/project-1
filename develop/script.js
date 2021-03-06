//Breakfast diner = 4bf58dd8d48988d147941735
//Steakhouse = 4bf58dd8d48988d1cc941735

var categoryId;
var userInput;
var venueId;
var apiId = config.API_ID;
var apiSecret = config.API_KEY;
var resultText = $('<h6>');
var searchBtn1 = $('#search-form-1');
var searchBtn2 = $('#search-form-2');
var breakfastModal = $('.breakfast-div');
var steakModal = $('.steak-div');
var mapBreakfastSpot = $('.breakfast-map-div');
var mapSteakSpot = $('.steak-map-div');
var restaurantResult;
var locationResult;
var isSteak = false;
var isBreakfast = false;
var mapDiv;
$('.modal').modal({
	dismissible: false
});

searchBtn1.submit(function (event) {
	event.preventDefault();
	resultText.empty();
	if (mapDiv !== undefined) {
		mapDiv.remove();
	}
	var breakfastId = '4bf58dd8d48988d147941735';
	categoryId = breakfastId;
	userInput = $('#search-value-1').val();
	isBreakfast = true;
	getVenues();
});

searchBtn2.submit(function (event) {
	event.preventDefault();
	resultText.empty();
	if (mapDiv !== undefined) {
		mapDiv.remove();
	}
	var steakId = '4bf58dd8d48988d1cc941735';
	categoryId = steakId;
	userInput = $('#search-value-2').val();
	console.log(userInput);
	isSteak = true;
	getVenues();
});

function getVenues() {
	var apiUrl = `https://api.foursquare.com/v2/venues/search?client_id=${apiId}&client_secret=${apiSecret}&v=20200320&categoryId=${categoryId}&limit=50&near=${userInput}`;

	$.ajax({
		dataType: 'json',
		url: apiUrl,
		data: {},
		success: function (data) {
			// Code for handling API response

			var venuesList = data.response.venues;
			console.log(venuesList);
			var result = venuesList[Math.floor(Math.random() * venuesList.length)];
			console.log(result);
			console.log(result.location.lat, result.location.lng);
			var lat = result.location.lat;
			var lng = result.location.lng;
			restaurantResult = result.name;
			locationResult = result.location.formattedAddress;
			venueId = result.id;
			resultText.append(restaurantResult);
			resultText.append('<br>');
			for (i = 0; i < locationResult.length - 1; i++) {
				resultText.append(locationResult[i]);
				resultText.append('<br>');
			}

			if (isBreakfast) {
				breakfastModal.append(resultText);
				mapDiv = $('<div id= "map"></div>');
				mapBreakfastSpot.append(mapDiv);
				generateMap(lat, lng);
				isBreakfast = false;
			} else if (isSteak) {
				steakModal.append(resultText);
				mapDiv = $('<div id= "map"></div>');
				mapSteakSpot.append(mapDiv);
				generateMap(lat, lng);
				isSteak = false;
			}
			getInfo();
		},
		error: function (jqXHR, textStatus, errorThrown) {
			// Code for handling errors
		}
	});
}

function generateMap(lat, lng) {
	var map = L.map('map').setView([lat, lng], 12);

	L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=NMlV6qsKkpTmzuffq3KG').addTo(map);

	var ronIcon = L.icon({
		iconUrl: './develop/images/ron-head.png',
		iconSize: [32, 32],
		iconAnchor: [16, 32]
	});

	L.marker([lat, lng], { icon: ronIcon }).addTo(map);
}

function getInfo() {
	var venueUrl = `https://api.foursquare.com/v2/venues/${venueId}?client_id=${apiId}&client_secret=${apiSecret}&v=20200320`;
	$.ajax({
		dataType: 'json',
		url: venueUrl,
		data: {},
		success: function (data) {
			console.log(data.response);
			var link = data.response.venue.url;
			console.log(link);
			resultText.append(`<a href= "${link}">Website</a>`);
		},
		error: function (jqXHR, textStatus, errorThrown) {
			// Code for handling errors
		}
	});
}
$('.modal-close').click(function () {
	resultText.empty();
	if (mapDiv !== undefined) {
		mapDiv.remove();
	}
});
