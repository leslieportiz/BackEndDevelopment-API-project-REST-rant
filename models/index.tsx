require('dotenv').config()
import mongoose from 'mongoose';
import SomeExport from '../views/default';
export default SomeExport;


mongoose.set('strictQuery', false);
mongoose.set('setDefaultsOnInsert', true);

const uri: string | undefined = process.env.MONGODB_URI; // Assuming the URI is stored in an environment variable
if (uri) {
  mongoose.connect(uri);
} else {
  console.error('No MongoDB URI found.');
}

// mongoose.connect(process.env.MONGO_URI, {
  // useNewUrlParser: true, 
  // useUnifiedTopology: true
// })

module.exports.Place = require('./places')
module.exports.Comment = require('./comment')