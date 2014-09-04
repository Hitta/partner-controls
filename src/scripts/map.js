// namespace
var hitta = {};

// create a new tile layer
hitta.tileLayer = L.tileLayer('http://static.hitta.se/tile/v3/0/{z}/{x}/{y}', {
    attribution: '&copy; <a href="http://www.hitta.se/">hitta.se</a>',
    tms: true,
    maxZoom: 17
});

// create the leaflet map and set center and zoom
hitta.map = L.map('map', {
    center: [59.32496, 18.07096],
    zoom: 13,
    maxZoom: 17,
    minZoom: 4,
    // Add the hitta logo control
    hittaLogo: {
        position: 'topright',
        logoSrc: '/images/hitta-logo.png',
        logoSrc2x: '/images/hitta-logo-2x.png'
    }
});

// add tile layer to map
hitta.tileLayer.addTo(hitta.map);
