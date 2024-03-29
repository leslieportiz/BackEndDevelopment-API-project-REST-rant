"use strict";
exports.__esModule = true;
var react_1 = require("react");
var default_1 = require("../default");
// function new_form(data) {
// let message = ''                 
// if (data.message) {
//   message = (
//     <h4 className="alert-danger">
//       {data.message}
//     </h4>
//   )
// }
function new_form() {
    return (react_1["default"].createElement(default_1["default"], null,
        react_1["default"].createElement("main", null,
            react_1["default"].createElement("h1", null, "Add a New Place"),
            react_1["default"].createElement("form", { method: "POST", action: "/places" },
                react_1["default"].createElement("div", { className: "form-group" },
                    react_1["default"].createElement("label", { htmlFor: "name" }, "Place Name"),
                    react_1["default"].createElement("input", { className: "form-control", id: "name", name: "name", required: true })),
                react_1["default"].createElement("div", { className: "form-group" },
                    react_1["default"].createElement("label", { htmlFor: "pic" }, "Place Picture"),
                    react_1["default"].createElement("input", { className: "form-control", id: "pic", name: "pic" })),
                react_1["default"].createElement("div", { className: "form-group" },
                    react_1["default"].createElement("label", { htmlFor: "city" }, "City"),
                    react_1["default"].createElement("input", { className: "form-control", id: "city", name: "city" })),
                react_1["default"].createElement("div", { className: "form-group" },
                    react_1["default"].createElement("label", { htmlFor: "state" }, "State"),
                    react_1["default"].createElement("input", { className: "form-control", id: "state", name: "state" })),
                react_1["default"].createElement("div", { className: "form-group" },
                    react_1["default"].createElement("label", { htmlFor: "cuisines" }, "Cuisine"),
                    react_1["default"].createElement("input", { className: "form-control", id: "cuisines", name: "cuisines" })),
                react_1["default"].createElement("div", { className: "form-group" },
                    react_1["default"].createElement("label", { htmlFor: "founded" }, "Founded Year"),
                    react_1["default"].createElement("input", { type: "number", className: "form-control", id: "founded", name: "founded", value: new Date().getFullYear() })),
                react_1["default"].createElement("input", { className: "btn btn-primary", type: "submit", value: "Add Place" })))));
}
module.exports = new_form;

//# sourceMappingURL=new.js.map
