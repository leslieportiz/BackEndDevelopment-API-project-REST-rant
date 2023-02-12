const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [
        {
            name: 'Texas de Brazil',
            city: 'Las Vegas',
            state: 'Nevada',
            cuisine: 'Brazilian',
            pic: 'http://placekitten.com/250/250'
        },
        {
            name: 'Fogo de Chao',
            city: 'Las Vegas',
            state: 'Nevada',
            cuisine: 'Brazilian',
            pic: 'http://placekitten.com/250/250'
        },
        {
            name: 'Cheesecake Factory',
            city: 'Henderson',
            state: 'Nevada',
            cuisine: 'American',
            pic: 'http://placekitten.com/250/250'
        }
    ]
    res.render('places/index', {places})
})
module.exports = router
