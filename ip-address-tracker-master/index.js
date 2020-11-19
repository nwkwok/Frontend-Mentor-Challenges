const { mapbox_connect, geo_api } = config;
const button = document.getElementById('button');
const search = document.querySelector('input');
const ipInput = document.getElementById('ipInput')
const mymap = L.map('mapid').setView([51.505, -0.09], 13);
const marker = L.marker([51.505,-0.09]).addTo(mymap);

L.tileLayer(mapbox_connect, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: mapbox_connect
}).addTo(mymap);


    button.addEventListener('click', (e) => {
        e.preventDefault();
        const input = search.value;
        const ip = input;
        const api_key = geo_api;
        
        $(function () {
           $.ajax({
               url: "https://geo.ipify.org/api/v1",
               data: {apiKey: api_key, ipAddress: ip},
               success: function(data) {
                   
                   console.log(data);
                   const { ip, location, isp } = data

                    console.log(location.lat, location.lng)
                $('#ipInput').html(ip);
                $('#location').html(`
                    ${location.city}, ${location.country} <br /> 
                    <span style='line-height: 1.5;'>${location.postalCode} </span>`);
                $('#time').html(`UTC ${location.timezone}`)
                $('#isp').html(`
                <span style='line-height: 1.5;'>${isp}</span>`); 

                mymap.panTo(new L.LatLng(location.lat, location.lng));
                marker.setLatLng([location.lat, location.lng]);

               }
           });
        });

    });







