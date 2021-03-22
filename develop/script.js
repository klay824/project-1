//Client ID: GF1SWDKWIT3C2Q00M5DGNDD23YYKCX513OYTTIX2502SUYGM
//Client Secret: RRNKK4YTYGVVXZUAG11NIHBXHXRUT54WIDCWEFXPMXPHIAPK
// Client ID #2: 331Z0TB522DGP3GHJXVW4OTCRNC4G4DNSMISOO2KMZKTFGVX
// Client Secret #2: UAT2EFVC2OKRSLAXE4BEOHCQSDE5CR0MYCY3MTD3JEXASLG1
//Breakfast diner = 4bf58dd8d48988d147941735
//Steakhouse = 4bf58dd8d48988d1cc941735
var categoryId;
var userInput;
var venueId;
var apiId = '331Z0TB522DGP3GHJXVW4OTCRNC4G4DNSMISOO2KMZKTFGVX';
var apiSecret = 'UAT2EFVC2OKRSLAXE4BEOHCQSDE5CR0MYCY3MTD3JEXASLG1';
var resultText = $('<h6>');
var searchBtn1 = $('#search-form-1');
var searchBtn2 = $('#search-form-2');
var breakfastModal = $('.breakfast-modal');
var steakModal = $('.steak-modal');
var mapBreakfastEl = $('#map-breakfast');
var mapSteakEl = $('#map-steak');
var restaurantResult;
var locationResult;
var isSteak = false;
var isBreakfast = false;

$('.modal').modal({
	dismissible: false
});

searchBtn1.submit(function(event) {
	event.preventDefault();
	resultText.empty();
	mapBreakfastEl.show();
	var breakfastId = '4bf58dd8d48988d147941735';
	categoryId = breakfastId;
	userInput = $('#search-value-1').val();
	isBreakfast = true;
	getVenues();
});

searchBtn2.submit(function(event) {
	event.preventDefault();
	resultText.empty();
	mapSteakEl.show();
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
		success: function(data) {
			// Code for handling API response

			var venuesList = data.response.venues;
			console.log(venuesList);
			var result = venuesList[Math.floor(Math.random() * venuesList.length)];
			console.log(result);
			console.log(result.location.lat, result.location.lng);
			var lat = result.location.lat;
			var lng = result.location.lng;
			// var mapEl = $('#map');
			// var mapEl = $('<div id="map">')
			// generateMap(lat, lng);
			restaurantResult = result.name;
			locationResult = result.location.address;
			venueId = result.id;
			resultText.append(restaurantResult);
			resultText.append('<br>');
			resultText.append(locationResult);
			resultText.append('<br>');

			if (isBreakfast) {
				breakfastModal.append(resultText);
				// breakfastModal.append(mapEl);
				generateBreakfastMap(lat, lng);	
				isBreakfast = false;
			} else if (isSteak) {
				steakModal.append(resultText);
				// breakfastModal.append(mapEl);
				generateSteakMap(lat, lng);
				isSteak = false;
			}
			getInfo();
		},
		error: function(jqXHR, textStatus, errorThrown) {
			// Code for handling errors
		}
	});
}


function generateBreakfastMap(lat, lng) {
    var map = L.map('map-breakfast').setView([lat, lng], 12);

    L.tileLayer("https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=NMlV6qsKkpTmzuffq3KG"
	).addTo(map);

    var ronIcon = L.icon({
        iconUrl: './develop/images/ron-head.png',
        iconSize: [32, 32],
        iconAnchor: [16,32]
    })
	
    L.marker([lat, lng], {icon: ronIcon}).addTo(map);
}

function generateSteakMap(lat, lng) {
    var map = L.map('map-steak').setView([lat, lng], 12);

    L.tileLayer("https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=NMlV6qsKkpTmzuffq3KG"
	).addTo(map);

    var ronIcon = L.icon({
        iconUrl: './develop/images/ron-head.png',
        iconSize: [32, 32],
        iconAnchor: [16,32]
    })
	
    L.marker([lat, lng], {icon: ronIcon}).addTo(map);
}


function getInfo() {
	//TOO MANY CALLS
	// var venueUrl = `https://api.foursquare.com/v2/venues/${venueId}?client_id=${apiId}&client_secret=${apiSecret}&v=20200320`;
	// $.ajax({
	// 	dataType: 'json',
	// 	url: venueUrl,
	// 	data: {},
	// 	success: function(data) {
	// 		console.log(data.response);
	// 		var link = data.response.venue.url;
	// 		console.log(link);
	// 		resultText.append(`<a href= "${link}">Website</a>`);
	// 	},
	// 	error: function(jqXHR, textStatus, errorThrown) {
	// 		// Code for handling errors
	// 	}
	// });
}
$('.modal-close').click(function() {
	resultText.empty();
	mapBreakfastEl.hide();
	mapSteakEl.hide();
});
