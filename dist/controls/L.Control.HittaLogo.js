/**
 * L.Control.HittaLogo is used to display the Hitta.se logo
 */
L.Control.HittaLogo = L.Control.extend({

    options: {
        position: 'topright'
    },

    _logoSize: {
        width: 55,
        height: 55
    },

    _getLogoSrc: function() {

        return L.Browser.retina ? this.options.logoSrc2x : this.options.logoSrc;

    },

    _createLogoLink: function(logoImg) {

        var logoLink = L.DomUtil.create('a', 'hitta-logo-control');
        logoLink.href = 'http://www.hitta.se';
        logoLink.target = '_blank';
        logoLink.appendChild(logoImg);

        return logoLink;

    },

    _createLogoImg: function() {

        var logoImg = L.DomUtil.create('img', 'hitta-logo-control');
        logoImg.src = this._getLogoSrc();
        logoImg.style.width = this._logoSize.width + 'px';
        logoImg.style.height = this._logoSize.height + 'px';

        return logoImg;

    },

    onAdd: function() {

        var logoImg = this._createLogoImg();
        return this._createLogoLink(logoImg);

    }

});

L.Map.addInitHook(function() {

    if(this.options.hittaLogo) {

        this.hittaLogoControl = new L.Control.HittaLogo(this.options.hittaLogo);
        this.addControl(this.hittaLogoControl);

    }

});

L.control.hittaLogo = function(options) {

    return new L.Control.HittaLogo(options);

};
