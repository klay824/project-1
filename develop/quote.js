var quoteUrl = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
var breakfastUrl = `${quoteUrl}/search/breakfast`;
var steakUrl = `${quoteUrl}/search/steak`;

fetch(breakfastUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        var quote = (data[2]);
        // var quoteDisplayed = '<h4>' + quote + '</h4>';
        // var ronQuote = $("body");
        // ronQuote.append(quoteDisplayed);
    })

fetch(steakUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        var quote = (data);
        // var quoteDisplayed = '<h4>' + quote + '</h4>';
        // var ronQuote = $("body");
        // ronQuote.append(quoteDisplayed);
    })