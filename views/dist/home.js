"use strict";
exports.__esModule = true;
var react_1 = require("react");
var default_1 = require("./default");
function home() {
    return (react_1["default"].createElement(default_1["default"], null,
        react_1["default"].createElement("main", null,
            react_1["default"].createElement("h1", null, "REST-Rant"),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("img", { src: "/images/fruity-smoothie.jpg", width: "250", height: "250", alt: "Fruit Shake" }),
                react_1["default"].createElement("div", null,
                    "Photo by ",
                    react_1["default"].createElement("a", { href: "AUTHOR_LINK" }, "Brenda Godinez"),
                    " on ",
                    react_1["default"].createElement("a", { href: "UNSPLASH_LINK" }, "Unsplash"))),
            react_1["default"].createElement("a", { href: "/places" },
                react_1["default"].createElement("button", { className: "btn-primary" }, "Places Page")))));
}
module.exports = home;

//# sourceMappingURL=home.js.map
