"use strict";

var _config = config,
    mapbox_connect = _config.mapbox_connect,
    geo = _config.geo;
var button = document.getElementById('button');
var search = document.querySelector('input');
var ipInput = document.getElementById('ipInput');
var mymap = L.map('mapid').setView([51.505, -0.09], 13);
var blackMarker = L.icon({
  iconUrl: '/images/icon-location.svg',
  iconSize: [30, 37],
  iconAnchor: [22, 52],
  popupAnchor: [0, -52]
});
var marker = L.marker([51.505, -0.09], {
  icon: blackMarker
}).addTo(mymap);
L.tileLayer(mapbox_connect, {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: mapbox_connect
}).addTo(mymap);
button.addEventListener('click', function (e) {
  e.preventDefault();
  var input = search.value;
  var ip = input;
  var api_key = geo;
  $(function () {
    $.ajax({
      url: "https://geo.ipify.org/api/v1",
      data: {
        apiKey: api_key,
        ipAddress: ip,
        domain: ip
      },
      success: function success(data) {
        var ip = data.ip,
            location = data.location,
            isp = data.isp;
        $('#ipInput').html(ip);
        $('#location').html("\n                    ".concat(location.city, ", ").concat(location.country, " <br /> \n                    <span style='line-height: 1.5;'>").concat(location.postalCode, " </span>"));
        $('#time').html("UTC ".concat(location.timezone));
        $('#isp').html("\n                <span style='line-height: 1.5;'>".concat(isp, "</span>"));
        mymap.panTo(new L.LatLng(location.lat, location.lng));
        marker.setLatLng([location.lat, location.lng]);
      }
    });
  });
});