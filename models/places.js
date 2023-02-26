const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: String,
  cuisines: { type: String, default: 'Fake Food!'},
  city: { type: String, default: 'North Las Vegas' },
  state: { type: String, default: 'Nevada' },
  founded: Number
})

module.exports = mongoose.model('Place', placeSchema)

// module.exports = [
//     {
//         id: 0,
//         name: 'Texas de Brazil',
//         city: 'Las Vegas',
//         state: 'Nevada',
//         cuisine: 'Brazilian',
//         pic: '/images/texas-de-brazil.jpg'
//     },
//     {
//         id: 1,
//         name: 'Fogo de Chao',
//         city: 'Las Vegas',
//         state: 'Nevada',
//         cuisine: 'Brazilian',
//         pic: '/images/fogo-de-chao.jpg'
//     },
//     {
//         id: 2,
//         name: 'Cheesecake Factory',
//         city: 'Henderson',
//         state: 'Nevada',
//         cuisine: 'American',
//         pic: '/images/cheesecake-factory.jpg'
//     }
// ]
