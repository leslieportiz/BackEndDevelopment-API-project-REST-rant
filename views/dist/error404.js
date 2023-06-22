"use strict";
exports.__esModule = true;
var react_1 = require("react");
var default_1 = require("./default");
function error404() {
    return (react_1["default"].createElement(default_1["default"], null,
        react_1["default"].createElement("main", null,
            react_1["default"].createElement("h1", null, "404: PAGE NOT FOUND"),
            react_1["default"].createElement("p", null, "Oops, sorry, we can't find this page!"),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("img", { src: "/images/fruit-platter.jpg", width: "250", height: "250\r\n          ", alt: "Fruit Shake" }),
                react_1["default"].createElement("div", null,
                    "Photo by ",
                    react_1["default"].createElement("a", { href: "AUTHOR_LINK" }, "Brenda Godinez"),
                    " on ",
                    react_1["default"].createElement("a", { href: "UNSPLASH_LINK" }, "Unsplash"))))));
}
module.exports = error404;

//# sourceMappingURL=error404.js.map
