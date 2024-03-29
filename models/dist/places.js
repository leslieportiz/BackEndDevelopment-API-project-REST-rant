"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var placeSchema = new mongoose_1["default"].Schema({
    name: { type: String, required: true },
    pic: { type: String, "default": 'http://placekitten.com/350/350' },
    cuisines: { type: String, "default": 'Fast food' },
    city: { type: String, "default": 'North Las Vegas' },
    state: { type: String, "default": 'Henderson' },
    founded: {
        type: Number,
        min: [1673, 'Surely not that old?!'],
        max: [new Date().getFullYear(), 'Hey, this year is in the future!']
    },
    comments: [{ type: mongoose_1["default"].Schema.Types.ObjectId, ref: 'Comment' }]
});
placeSchema.methods.showEstablished = function () {
    return this.name + " has been serving " + this.city + ", " + this.state + " since " + this.founded + ".";
};
module.exports = mongoose_1["default"].model('Place', placeSchema);

//# sourceMappingURL=places.js.map
