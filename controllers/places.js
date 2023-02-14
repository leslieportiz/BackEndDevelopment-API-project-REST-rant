const router = require('express').Router()

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/', (req, res) => {
    let places = [
        {
            name: 'Texas de Brazil',
            city: 'Las Vegas',
            state: 'Nevada',
            cuisine: 'Brazilian',
            pic: '/images/texas-de-brazil.jpg'
        },
        {
            name: 'Fogo de Chao',
            city: 'Las Vegas',
            state: 'Nevada',
            cuisine: 'Brazilian',
            pic: '/images/fogo-de-chao.jpg'
        },
        {
            name: 'Cheesecake Factory',
            city: 'Henderson',
            state: 'Nevada',
            cuisine: 'American',
            pic: '/images/cheesecake-factory.jpg'
        }
    ]
    res.render('places/index', { places })
})
module.exports = router
