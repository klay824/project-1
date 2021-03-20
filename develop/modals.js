$(document).ready(function () {

  var searchBtn1 = $("#search-form-1");
  var searchBtn2 = $("#search-form-2");
  var quoteUrl = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
  var breakfastUrl = `${quoteUrl}/search/breakfast`;
  var steakUrl = `${quoteUrl}/search/steak`;

  $('.modal').modal({
    // dismissible: true
  });
  searchBtn1.submit(function (event) {
    event.preventDefault();

    fetch(breakfastUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

        var random = Math.floor(Math.random() * data.length);
        console.log(random);

        var quote = data[random];
        console.log(quote);



        var quoteDisplayed = '<p>' + quote + '</p>';
        var ronQuote = $(".modal-content");
        ronQuote.append(quoteDisplayed);
      })
  })

  searchBtn2.submit(function (event) {
    event.preventDefault();

    fetch(steakUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

        var random = Math.floor(Math.random() * data.length);
        console.log(random);

        var quote = data[random];
        console.log(quote);



        var quoteDisplayed = '<p>' + quote + '</p>';
        var ronQuote = $(".modal-content");
        ronQuote.append(quoteDisplayed);
      })
  })

});

