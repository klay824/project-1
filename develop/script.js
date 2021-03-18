//Client ID: a_iIN-AAkwXxP2O6_bWT3g

// API Key: cEhI0X89y--0ThDWWoEcUJ1OJ0s2yhfvWcdwurErDWl5b5JmH8qVHSCfgadoN04WQDtJaOuEUrcqSNk0rJkod1ic25nYvTfJcdcRA409DgSZrCC8j3hBs5K3UKRSYHYx

var apiKey =
	'cEhI0X89y--0ThDWWoEcUJ1OJ0s2yhfvWcdwurErDWl5b5JmH8qVHSCfgadoN04WQDtJaOuEUrcqSNk0rJkod1ic25nYvTfJcdcRA409DgSZrCC8j3hBs5K3UKRSYHYx';
var foodApi = 'https://api.yelp.com/v3/businesses/search';

$.ajax({
	url: 'http://api.yelp.com/business_review_search',
	dataType: 'jsonp',
	data: { term: 'restaurant', lat: xxx, long: xxx }, // callback is not necessary
	success: function(data) {
		console.log(data);
	}
});
