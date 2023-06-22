"use strict";
exports.__esModule = true;
require('dotenv').config();
var mongoose_1 = require("mongoose");
var default_1 = require("../views/default");
exports["default"] = default_1["default"];
mongoose_1["default"].set('strictQuery', false);
mongoose_1["default"].set('setDefaultsOnInsert', true);
var uri = process.env.MONGODB_URI; // Assuming the URI is stored in an environment variable
if (uri) {
    mongoose_1["default"].connect(uri);
}
else {
    console.error('No MongoDB URI found.');
}
// mongoose.connect(process.env.MONGO_URI, {
// useNewUrlParser: true, 
// useUnifiedTopology: true
// })
module.exports.Place = require('./places');
module.exports.Comment = require('./comment');

//# sourceMappingURL=index.js.map
