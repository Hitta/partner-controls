partner-controls
================

> Hitta.se controls to use with any leaflet map

## Set up

* `brew install node`
* `npm install -g grunt-cli`
* `npm install`
* 
* `grunt connect` - Starts server http://localhost:9002/
* `grunt` (no taskname) - Will watch for changes and build
* `grunt build` - Copies and minifies controls to dist

## Controls

### L.Control.HittaLogo.js

> L.Control.HittaLogo.js is a control that shows the hitta.se logo on a leaflet map

To use, clone this repository and include the `L.Control.HittaLogo.js` or `L.Control.HittaLogo.min.js` from the `dist/controls/L.Control.HittaLogo` folder. Include this file in your project and add this setting when initiating your leaflet map

```
L.map({ 
    // Other leaflet settings here 
    hittaLogo: {
        position: 'topleft',
        logoSrc: '/images/hitta-logo.png',
        logoSrc2x: '/images/hitta-logo-2x.png'
    }
});
```

#### position
Type: `String`

Decides the position of the control on the map

#### logoSrc
Type: `String`

A absolute or relative path to the hitta logo

#### logoSrc2x
Type: `String`

A absolute or relative path to the hitta logo (used only on retina displays)

### L.Control.BigMapLink.js

> L.Control.BigMapLink.js is a control that shows the a link to hitta.se

To use, clone this repository and include the `L.Control.BigMapLink.js` or `L.Control.BigMapLink.min.js` from the `dist/controls/L.Control.BigMapLink` folder. Include this file in your project and add this setting when initiating your leaflet map

This control also needs the `L.Hitta.BigMapLink.css` from the folder `dist/controls/L.Hitta.BigMapLink`

```
L.map({ 
    // Other leaflet settings here 
    hittaBigMapLink: {
        position: 'topright'
    }
});
```

#### position
Type: `String`

Decides the position of the control on the map












