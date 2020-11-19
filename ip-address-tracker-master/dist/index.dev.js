"use strict";

var _config = config,
    mapbox_connect = _config.mapbox_connect,
    geo_api = _config.geo_api;
var button = document.getElementById('button');
var search = document.querySelector('input');
var ipInput = document.getElementById('ipInput');
button.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(search.value);
  var input = search.value;
  ipInput.innerText = input;
});
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
    data: {
      apiKey: api_key,
      ipAddress: ip
    },
    success: function success(data) {
      $("body").append("<pre>" + JSON.stringify(data, "", 2) + "</pre>");
    }
  });
});