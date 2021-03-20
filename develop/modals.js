// loads document then runs the function
$(document).ready(function () {

  // local variables
  var searchBtn1 = $("#search-form-1");
  var searchBtn2 = $("#search-form-2");
  var quoteUrl = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
  var breakfastUrl = `${quoteUrl}/search/breakfast`;
  var steakUrl = `${quoteUrl}/search/steak`;
  
  // makes modals pop up on button click
  $('.modal').modal({
    
  });
  
  searchBtn1.submit(function (event) {
    event.preventDefault();
    $(".remove").remove();

    fetch(quoteUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

        var random = Math.floor(Math.random() * data.length);
        console.log(random);

        var quote = data[random];
        console.log(quote);



        var quoteDisplayed = '<h5 class="remove">' + quote + '</h5>';
        var ronQuote = $(".modal-content");
        ronQuote.append(quoteDisplayed);
      })
  })

  $(".modal-close").click(function() {
    $(".remove").remove();
  })
  
 
  searchBtn2.submit(function (event) {
    event.preventDefault();
    $(".remove").remove();

    fetch(quoteUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

        var random = Math.floor(Math.random() * data.length);
        console.log(random);

        var quote = data[random];
        console.log(quote);



        var quoteDisplayed = '<h5 class="remove">' + quote + '</h5>';
        var ronQuote = $(".modal-content");
        ronQuote.append(quoteDisplayed);
      })
  })

  $(".modal-close").click(function() {
    $(".remove").remove();
  })

});


