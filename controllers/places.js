const router = require('express').Router()
const db = require('../models')


router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
      res.render('places/index', { places })
    })
    .catch(err => {
      console.log(err) 
      res.render('error404')
    })
})

router.post('/', (req, res) => {
  // if (!req.body.pic){
  //   req.body.pic = 'http://placekitten.com/350/350'
  // }
  // if (!req.body.cuisines){
  //   req.body.cuisines = 'Fast food'
  // }
  // if (!req.body.city){
  //   req.body.city = 'North Las Vegas'
  // }
  // if (!req.body.state){
  //   req.body.state = 'Nevada'
  // }
    db.Place.create(req.body)
    .then(() => {
        res.redirect('/places')
    })
    // .catch(err => {
    //     if (err && err.name == 'ValidationError') {
    //         let message = 'Validation Error: '
    //         for (var field in err.errors) {
    //             message += `${field} was ${err.errors[field].value}. `
    //             message += `${err.errors[field].message}`
    //         }
    //         console.log('Validation error message', message)
    //         res.render('places/new', { message })
    //     }
    //     else {
    //         res.render('error404')
    //     }

    // })
    .catch(err=>{
      res.render('error404')
    })
})

  
router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id,req.body)
  .then(()=>{
    res.redirect(`${req.params.id}`)
  })
  .catch(err => {
    console.log("Error Edit")
    res.render('error404')
  })
})

router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
  .then(place => {
    console.log("Deleted Item")
    res.redirect('/places')
  })
  .catch(err=>{
      console.log("Delete Error!")
     res.render('error404')
})
})

router.get('/:id/edit', (req, res) => {
  // console.log (req.route)
  db.Place.findById(req.params.id)
    .then(place => {
      console.log("Edit id")
      console.log(place)

      res.render('places/edit', { place })
      // console.log(place._id)
    })
    .catch(err => {
      console.log("Error Edit")
      res.render('error404')
    })

  })


router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router

// const router = require('express').Router()
// const places = require('../models/places.js')

// router.get('/new', (req, res) => {
//     res.render('places/new')
// })

// router.get('/:id', (req, res) => {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//         res.render('error404')
//     }
//     else if (!places[id]) {
//         res.render('error404')
//     }
//     else {
//         res.render('places/show', { place: places[id], id })
//     }
// })

// router.delete('/:id', (req, res) => {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//         res.render('error404')
//     }
//     else if (!places[id]) {
//         res.render('error404')
//     }
//     else {
//         places.splice(id, 1)
//         res.redirect('/places')
//     }
// })

// router.put('/:id', (req, res) => {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//         res.render('error404')
//     }
//     else if (!places[id]) {
//         res.render('error404')
//     }
//     else {
//         // Dig into req.body and make sure data is valid
//         if (!req.body.pic) {
//             // Default image if one is not provided
//             req.body.pic = 'http://placekitten.com/400/400'
//         }
//         if (!req.body.city) {
//             req.body.city = 'North Las Vegas'
//         }
//         if (!req.body.state) {
//             req.body.state = 'Nevada'
//         }
//         // Save the new data into places[id]
//         places[id] = req.body
//         res.redirect(`/places/${id}`)
//     }
//   })
  

  // router.get('/:id/edit', (req, res) => {
  //     let id = Number(req.params.id)
//     if (isNaN(id)) {
//         res.render('error404')
//     }
//     else if (!places[id]) {
//         res.render('error404')
//     }
//     else {
//           res.render('places/edit', { place: places[id] })
//     }

// router.post('/', (req, res) => {
//     // console.log(req.body)
//     if (!req.body.pic) {
//         // Default image if one is not provided
//         req.body.pic = 'http://placekitten.com/400/400'
//     }
//     if (!req.body.city) {
//         req.body.city = 'North Las Vegas'
//     }
//     if (!req.body.state) {
//         req.body.state = 'Nevada'
//     }
//     places.push(req.body)
//     res.redirect('/places')
// })

// router.get('/', (req, res) => {
//     res.render('places/index', { places })
// })
// module.exports = router