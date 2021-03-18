var quoteUrl = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";

fetch(quoteUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })