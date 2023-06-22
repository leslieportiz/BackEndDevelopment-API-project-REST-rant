"use strict";
exports.__esModule = true;
var react_1 = require("react");
var default_jsx_1 = require("../default.jsx");
function edit_form(data) {
    console.log(data);
    return (react_1["default"].createElement(default_jsx_1["default"], null,
        react_1["default"].createElement("main", null,
            react_1["default"].createElement("h1", null,
                "Edit Place ",
                data.place.name),
            react_1["default"].createElement("form", { method: "POST", action: "/places/" + data.place._id + "?_method=PUT" },
                react_1["default"].createElement("div", { className: "form-group" },
                    react_1["default"].createElement("label", { htmlFor: "name" }, "Place Name"),
                    react_1["default"].createElement("input", { className: "form-control", id: "name", name: "name", defaultValue: data.place.pic, required: true })),
                react_1["default"].createElement("div", { className: "form-group" },
                    react_1["default"].createElement("label", { htmlFor: "pic" }, "Place Picture"),
                    react_1["default"].createElement("input", { className: "form-control", id: "pic", name: "pic", defaultValue: data.place.pic })),
                react_1["default"].createElement("div", { className: "form-group" },
                    react_1["default"].createElement("label", { htmlFor: "city" }, "City"),
                    react_1["default"].createElement("input", { className: "form-control", id: "city", name: "city", defaultValue: data.place.city })),
                react_1["default"].createElement("div", { className: "form-group" },
                    react_1["default"].createElement("label", { htmlFor: "state" }, "State"),
                    react_1["default"].createElement("input", { className: "form-control", id: "state", name: "state", defaultValue: data.place.state })),
                react_1["default"].createElement("div", { className: "form-group" },
                    react_1["default"].createElement("label", { htmlFor: "cuisine" }, "Cuisine"),
                    react_1["default"].createElement("input", { className: "form-control", id: "cuisines", name: "cuisines", defaultValue: data.place.cuisines })),
                react_1["default"].createElement("div", { className: "form-group" },
                    react_1["default"].createElement("label", { htmlFor: "founded" }, "Founded Year"),
                    react_1["default"].createElement("input", { type: "number", className: "form-control", id: "founded", name: "founded", defaultValue: data.place.founded })),
                react_1["default"].createElement("input", { className: "btn btn-primary", type: "submit", value: 'Update Place' })))));
}
module.exports = edit_form;

//# sourceMappingURL=edit.js.map
