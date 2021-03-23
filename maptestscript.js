$(document).ready(function () {
        // const mapEl = $("#map");
        const searchForm = $("#search-form");


    searchForm.submit(function (event) {
        event.preventDefault();
        let lat = $("#lat").val();
        let lng = $("#lng").val();
        console.log(lat, lng);
        // var mapEl = $("<div class='map'>")
        var mapEl = document.createElement("div");
        mapEl.style.height='600px';  
        mapEl.style.width='600px';    
        var body = document.querySelector('body');

        

        var map = L.map(mapEl).setView([lat, lng], 12);

        L.tileLayer("https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=NMlV6qsKkpTmzuffq3KG").addTo(map);

        var ronIcon = L.icon({
            iconUrl: './develop/images/ron-head.png',
            iconSize: [32, 32],
            iconAnchor: [16,32]
        });

        L.marker([lat, lng], {icon: ronIcon}).addTo(map);

        
        body.appendChild(mapEl);

    })



});


// function generateMap(lat, lng) {
//     var map = L.map('map').setView([lat, lng], 12);

//     L.tileLayer("https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=NMlV6qsKkpTmzuffq3KG", {
//     attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
//     }).addTo(map);

//     var ronIcon = L.icon({
//         iconUrl: './develop/images/ron-head.png',
//         iconSize: [32, 32],
//         iconAnchor: [16,32]
//     });

//     L.marker([lat, lng], {icon: ronIcon}).addTo(map);
// }







// const searchForm = $("#search-form");
// let userCity = $("#city-search");
// let userOptions = $("#food-options");
// const breakfastCatId = $


// let requestUrl = `https://api.foursquare.com/v2/venues/search?near=${userCity}&client_id=GF1SWDKWIT3C2Q00M5DGNDD23YYKCX513OYTTIX2502SUYGM&client_secret=RRNKK4YTYGVVXZUAG11NIHBXHXRUT54WIDCWEFXPMXPHIAPK&v=YYYYMMDD`;

// fetch(userRequestUrl)
// .then(function (response) {
//     console.log(response);
//     console.log(response.status);
//     if (response.status !== 200) {
//         console.log("error");
//     }
//     return response.json();
// })
// .then(function (data) { 
//     console.log(data);
// });
