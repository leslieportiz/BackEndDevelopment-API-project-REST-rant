const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    pic: { type: String, default: 'http://placekitten.com/350/350' },
    cuisines: { type: String, default:'Fast food' },
    city: { type: String, default: 'Anytown' },
    state: { type: String, default: 'USA' },
    founded: {
      type: Number,
      min: [1673, 'Surely not that old?!'],
      max: [new Date().getFullYear(), 'Hey, this year is in the future!']
    }
  })
  

placeSchema.methods.showEstablished = function () {
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

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
