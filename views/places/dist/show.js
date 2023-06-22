"use strict";
exports.__esModule = true;
var react_1 = require("react");
var default_1 = require("../default");
function show(data) {
    var comments = (react_1["default"].createElement("h3", { className: "inactive" }, " No Comments Yet! "));
    var rating = (react_1["default"].createElement("h3", { className: "inactive" }, " Not rated Yet! "));
    if (data.place.cents.length) {
        comments;
        var sumRatings = data.place.comments.reduce(function (tot, c) {
            return tot + c.stars;
        }, 0);
        var averageRating = Math.round(sumRatings) / data.place.comments.length;
        var stars = '';
        for (var i = 0; i < averageRating; i++) {
            stars += '*';
        }
        rating = (react_1["default"].createElement("h3", null,
            stars,
            " stars"));
        comments = data.place.comments.map(function (c) {
            return (react_1["default"].createElement("div", { className: "border" },
                react_1["default"].createElement("h2", { className: "rant" }, c.rant ? 'Rant! :(' : 'Rave! :)'),
                react_1["default"].createElement("p", null, c.content),
                react_1["default"].createElement("p", null,
                    react_1["default"].createElement("strong", null,
                        "- ",
                        c.author)),
                "s",
                react_1["default"].createElement("h4", null,
                    "Rating: ",
                    c.stars),
                react_1["default"].createElement("form", { method: "POST", action: "/places/" + data.place.id + "/comment/" + c.id + "?_method=DELETE" },
                    react_1["default"].createElement("input", { type: "submit", className: "btn btn-danger", value: "Delete Comment" }))));
        });
    }
    return (react_1["default"].createElement(default_1["default"], null,
        react_1["default"].createElement("main", null,
            react_1["default"].createElement("h1", null, data.place.name),
            react_1["default"].createElement("img", { src: data.place.pic, alt: "Image", width: "250", height: "250" }),
            react_1["default"].createElement("h2", null, "Rating"),
            rating,
            react_1["default"].createElement("h2", null, "Description"),
            react_1["default"].createElement("p", null,
                "Located in ",
                data.place.city,
                ", ",
                data.place.state,
                " and serving ",
                data.place.cuisine,
                " cuisine."),
            react_1["default"].createElement("p", null, data.place.showEstablished()),
            react_1["default"].createElement("h2", null, "Comments"),
            comments,
            react_1["default"].createElement("a", { href: "/places/" + data.place._id + "/edit", className: "btn btn-warning" }, "Edit"),
            react_1["default"].createElement("form", { method: "POST", action: "/places/" + data.place._id + "?_method=DELETE" },
                react_1["default"].createElement("button", { type: "submit", className: "btn btn-danger" }, "Delete")),
            react_1["default"].createElement("form", { method: "POST", action: "/places/" + data.place._id + "/comment" },
                react_1["default"].createElement("div", { className: "form-group" },
                    react_1["default"].createElement("label", { htmlFor: "author" }, "Author"),
                    react_1["default"].createElement("input", { className: "form-control", type: "text", id: "author", name: "author" })),
                react_1["default"].createElement("div", { className: "form-group" },
                    react_1["default"].createElement("label", { htmlFor: "rant" }, "Rant"),
                    react_1["default"].createElement("input", { className: "form-control", type: "checkbox", id: "rant", name: "rant", value: "true" })),
                react_1["default"].createElement("div", { className: "form-group" },
                    react_1["default"].createElement("label", { htmlFor: "stars" }, "Stars"),
                    react_1["default"].createElement("input", { className: "form-control", type: "number", id: "stars", name: "stars" })),
                react_1["default"].createElement("div", { className: "form-group" },
                    react_1["default"].createElement("label", { htmlFor: "content" }, "Comment"),
                    react_1["default"].createElement("input", { className: "form-control", type: "textarea", id: "content", name: "content" })),
                react_1["default"].createElement("button", { type: "submit", className: "btn btn-primary" }, "Submit")))));
}
module.exports = show;

//# sourceMappingURL=show.js.map
