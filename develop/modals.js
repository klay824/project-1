// loads document then runs the function
$(document).ready(function () {

  // local variables
  var searchBtn1 = $("#search-form-1");
  var searchBtn2 = $("#search-form-2");
  var quoteUrl = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
    
  // makes modals pop up on button click
  $('.modal').modal({
    dismissible: false
  });
  
  // fetches quote upon search button click and writes it to the breakfast modal
  searchBtn1.submit(function (event) {
    event.preventDefault();

    // removes the previous quote upon generating a new one
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

        var quoteDisplayed = '<h6 class="remove">' + quote + '</h6>';
        var ronQuote = $(".quote");
        ronQuote.append(quoteDisplayed);
      })
  })

  // removes the generated quote upon closure of the breakfast modal so the modal is empty upon re-opening
  $(".modal-close").click(function() {
    $(".remove").remove();
  })
  
  // fetches quote upon search button click and write is to the steak modal
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

        var quoteDisplayed = '<h6 class="remove">' + quote + '</h6>';
        var ronQuote = $(".quote");
        ronQuote.append(quoteDisplayed);
      })
  })
})