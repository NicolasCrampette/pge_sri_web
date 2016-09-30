function initMap() {
var latLngUPS = {lat: 43.562257, lng: 1.469931};
var latLngCNES = {lat: 43.567158, lng: 1.473916};


var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 15,
  center: latLngUPS
});

var markerUPS = new google.maps.Marker({
  position: latLngUPS,
  map: map,
  title: 'Hello World!'
});

var markerCNES = new google.maps.Marker({
  position: latLngCNES,
  map: map,
  title: 'Hello World!'
});
}
