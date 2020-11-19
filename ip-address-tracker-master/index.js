const { mapbox_connect, geo_api } = config;

// const input = document.querySelector('input');
// const button = document.getElementById('button');

// input.addEventListener('input', (e) => {
//     const ep = e.target.value;

//     button.addEventListener('click', (e) => {
//         e.preventDefault();
//         console.log(ep);
//     })
// });

var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer(mapbox_connect, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: mapbox_connect
}).addTo(mymap);

var ip = "9.9.9.9";
var api_key = geo_api;
$(function () {
   $.ajax({
       url: "https://geo.ipify.org/api/v1",
       data: {apiKey: api_key, ipAddress: ip},
       success: function(data) {
           $("body").append("<pre>"+ JSON.stringify(data,"",2)+"</pre>");
       }
   });
});



