/**
 * L.Control.HittaBigMapLink is used to display a link to hitta.se
 */
L.Control.HittaBigMapLink = L.Control.extend({

    options: {
        position: 'topright'
    },

    _createButton: function() {

        var buttonLink = L.DomUtil.create('a', 'hitta-big-map-link');
        buttonLink.href = 'http://www.hitta.se';
        buttonLink.id = 'hitta-big-map-link';
        buttonLink.target = '_blank';
        buttonLink.innerHTML = 'Stor karta';

        return buttonLink;

    },

    onAdd: function() {

        return this._createButton();

    }

});

L.Map.addInitHook(function() {
    if(this.options.hittaBigMapLink) {
        this.hittaBigMapLinkControl = new L.Control.HittaBigMapLink(this.options.hittaBigMapLink);
        this.addControl(this.hittaBigMapLinkControl);
    }
});

L.control.hittaBigMapLink = function(options) {
    return new L.Control.HittaBigMapLink(options);
};
