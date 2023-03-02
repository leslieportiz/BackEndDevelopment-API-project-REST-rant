require('dotenv').config()
const mongoose = require('mongoose')
mongoose.set('strictQuery', false);
mongoose.set('setDefaultsOnInsert', true);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

module.exports.Place = require('./places')