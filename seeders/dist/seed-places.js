"use strict";
exports.__esModule = true;
var models_1 = require("../models");
models_1["default"].Place.create([
    {
        name: 'Texas de Brazil',
        city: 'Las Vegas',
        state: 'Nevada',
        cuisines: 'Brazilian',
        pic: '/images/texas-de-brazil.jpg',
        founded: 1978
    }, {
        name: 'Fogo de Chao',
        city: 'Las Vegas',
        state: 'Nevada',
        cuisines: 'Brazilian',
        pic: '/images/fogo-de-chao.jpg',
        founded: 1979
    }, {
        name: 'Cheesecake Factory',
        city: 'Henderson',
        state: 'Nevada',
        cuisines: 'American',
        pic: '/images/cheesecake-factory.jpg',
        founded: 1972
    }
])
    .then(function () {
    console.log('Success!');
    process.exit();
})["catch"](function (err) {
    console.log('Failure!', err);
    process.exit();
});

//# sourceMappingURL=seed-places.js.map
