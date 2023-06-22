"use strict";
exports.__esModule = true;
var react_1 = require("react");
var default_1 = require("../default");
function index(data) {
    var placeFormatted = data.places.map(function (place) {
        return (react_1["default"].createElement("div", { className: "col-sm-6", key: '' },
            react_1["default"].createElement("h2", null,
                react_1["default"].createElement("a", { href: "/places/" + place.id }, place.name)),
            react_1["default"].createElement("p", { className: "text-center" }, place.cuisine),
            react_1["default"].createElement("img", { src: place.pic, alt: place.name, width: 250, height: 250 }),
            react_1["default"].createElement("p", { className: "text-center" },
                "Located in ",
                place.city,
                ", ",
                place.state)));
    });
    return (react_1["default"].createElement(default_1["default"], null,
        react_1["default"].createElement("main", null,
            react_1["default"].createElement("h1", null, "PLACES to Rant or Rave About"),
            react_1["default"].createElement("div", { className: "row" }, placeFormatted))));
}
module.exports = index;

//# sourceMappingURL=index.js.map
