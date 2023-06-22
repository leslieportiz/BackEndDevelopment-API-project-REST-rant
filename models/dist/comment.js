"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var commentSchema = new mongoose_1["default"].Schema({
    author: { type: String, "default": 'Anonymous' },
    rant: { type: Boolean, "default": false },
    stars: { type: Number, required: true },
    content: { type: String, "default": '' }
});
module.exports = mongoose_1["default"].model('Comment', commentSchema);

//# sourceMappingURL=comment.js.map
