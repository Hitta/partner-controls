var hitta = hitta || {};

hitta.Map = function(elementId, options) {

    //this.defaultControls = [],
    this.tileType = options.tileType || 'normal',

    this.tileURLs = {
        'normal': 'http://static.hitta.se/tile/v3/0/{z}/{x}/{y}',
        'satellite': 'http://static.hitta.se/tile/v3/1/{z}/{x}/{y}'
    },

    // create a new tile layer
    this.tileLayer = L.tileLayer(this.tileURLs[this.tileType], {
        attribution: '&copy; <a href="http://www.hitta.se/">hitta.se</a>',
        tms: true,
        maxZoom: 17
    });

    this.map = L.map(elementId, {
        center: options.center || [59.32496, 18.07096],
        zoom: options.zoom || 13,
        maxZoom: options.maxZoom || 17,
        minZoom: options.minZoom || 4,
        zoomControl: options.zoomControl || false,
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

    this.tileLayer.addTo(this.map);

};