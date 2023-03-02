const db = require('../models')

db.Place.create([{
    name: 'Fogo de Chao',
    city: 'Las Vegas',
    state: 'Nevada',
    cuisines: 'Brazilian',
    pic: '/images/fogo-de-chao.jpg',
    founded: 1979
}, {
    name: 'Cheesecake Factory',
    city: 'Henderson',
    state: 'Nevada',
    cuisines: 'American',
    pic: '/images/cheesecake-factory.jpg',
    founded: 1972
}])
    .then(() => {
        console.log('Success!')
        process.exit()
    })
    .catch(err => {
        console.log('Failure!', err)
        process.exit()
    })