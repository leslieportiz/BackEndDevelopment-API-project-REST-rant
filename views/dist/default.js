"use strict";
exports.__esModule = true;
var models_1 = require("../models");
exports["default"] = models_1["default"];
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var DefaultComponent = function () {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(react_router_dom_1.Link, { to: "/some-route" }, "Go to Some Route")));
};
function Def(html) {
    return (react_1["default"].createElement("html", null,
        react_1["default"].createElement("head", null,
            react_1["default"].createElement("title", null, "Title"),
            react_1["default"].createElement("link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css", integrity: "sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65", crossOrigin: "anonymous" }),
            react_1["default"].createElement("link", { rel: "stylesheet", href: "/css/style.css" })),
        react_1["default"].createElement("body", null,
            react_1["default"].createElement("nav", null,
                react_1["default"].createElement("ul", null,
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement("a", { href: "/" }, "Home")),
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement("a", { href: "/places" }, "Places")),
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement("a", { href: "/places/new" }, "New Place")))),
            html.children)));
}
module.exports = Def;

//# sourceMappingURL=default.js.map
