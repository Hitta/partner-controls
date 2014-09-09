// namespace
var hitta = hitta || {};




// EXAMPLE 1 - Barebone Leaflet -----------------------------------------------

// create a new tile layer
hitta.tileLayer = L.tileLayer('http://static.hitta.se/tile/v3/0/{z}/{x}/{y}', {
    attribution: '&copy; <a href="http://www.hitta.se/">hitta.se</a>',
    tms: true,
    maxZoom: 17
});

// create the leaflet map and set center and zoom
hitta.map = L.map('map_one', {
    center: [59.32496, 18.07096],
    zoom: 13,
    maxZoom: 17,
    minZoom: 4,
    zoomControl: false,
    // Add the hitta logo control
    hittaLogo: {
        position: 'topleft',
        logoSrc: '/images/hitta-logo.png',
        logoSrc2x: '/images/hitta-logo-2x.png'
    },
    // Add the hitta big map button
    hittaBigMapLink: {
        position: 'topright'
    }
});

// add tile layer to map
hitta.tileLayer.addTo(hitta.map);





// EXAMPLE 2 - With wrapper ----------------------------------------------------

var myMap = new hitta.Map('map_two', {
    center: [59.32496, 18.07096],
    zoom: 13,
    maxZoom: 17,
    minZoom: 4,
    zoomControl: false
});

// If you want the contained Leaflet map, do this:
var leafletMap = myMap.getLMap();

// Then you can do anything you can normally do with a leaflet map, like:
leafletMap.panTo([59.31496, 18.06096]);
