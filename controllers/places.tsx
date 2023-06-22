const router = require('express').Router()
import db from '../models'
import { Response } from 'express';

// Inside your route handler or middleware
app.get('/error', (_req: any, res: Response) => {
  res.render('error404');
});


router.get('/', (req: any, res: { render: (arg0: string, arg1: { places: any } | undefined) => void }) => {
    db.Place.find()
    .then((places: any) => {
      res.render('places/index', { places })
    })
    .catch(() => {
      // res.render('error404')
    })
})

router.post('/', (req: { body: { pic: undefined; cuisines: undefined; city: undefined; state: undefined } }, res: { redirect: (arg0: string) => void; render: (arg0: string) => void }) => {
  if (!req.body.pic){
    req.body.pic = undefined
  }
  if (!req.body.cuisines){
    req.body.cuisines = undefined
  }
  if (!req.body.city){
    req.body.city = undefined
  }
  if (!req.body.state){
    req.body.state = undefined
  }
    db.Place.create(req.body)
    .then(() => {
        res.redirect('/places')
    })
    .catch(()=>{
      res.render('error404')
    })
})

  
router.get('/new', (req: any, res: { render: (arg0: string) => void }) => {
  res.render('places/new')
})

router.get('/:id', (req: { params: { id: any } }, res: { render: (arg0: string, arg1: { place: any } | undefined) => void }) => {
  db.Place.findById(req.params.id)
  .populate('comments')
  .then((place: any) => {
      res.render('places/show', { place })
  })
  .catch(() => {
      // res.render('error404')
  })
})

router.put('/:id', (req: { body: { pic: undefined; cuisines: undefined; city: undefined; state: undefined }; params: { id: any } }, res: { redirect: (arg0: string) => void; render: (arg0: string) => void }) => {
  if (!req.body.pic){
    req.body.pic = undefined
  }
  if (!req.body.cuisines){
    req.body.cuisines = undefined
  }
  if (!req.body.city){
    req.body.city = undefined
  }
  if (!req.body.state){
    req.body.state = undefined
  }
  db.Place.findByIdAndUpdate(req.params.id,req.body)
  .then(()=>{
    res.redirect(`${req.params.id}`)
  })
  .catch(() => {
    res.render('error404')
  })
})

router.delete('/:id', (req: { params: { id: any } }, res: { redirect: (arg0: string) => void; render: (arg0: string) => void }) => {
  db.Place.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect('/places')
  })
  .catch(()=>{
     res.render('error404')
})
})

router.get('/:id/edit', (req: { params: { id: any } }, res: { render: (arg0: string, arg1: { place: any } | undefined) => void }) => {
  db.Place.findById(req.params.id)
    .then((place: any) => {
      res.render('places/edit', { place })
    })
    .catch(() => {
      // res.render('error404')
    })

  })

  router.post('/:id/comment', (req: { params: { id: any }; body: any }, res: { redirect: (arg0: string) => void; render: (arg0: string) => void }) => {
    db.Place.findById(req.params.id)
    .then((place: { comments: any[]; save: () => Promise<any> }) => {
        db.Comment.create(req.body)
        .then((comment: { id: any }) => {
            place.comments.push(comment.id)
            place.save()
            .then(() => {
                res.redirect(`/places/${req.params.id}`)
            })
        })
        .catch(() => {
            res.render('error404')
        })
    })
    .catch(() => {
        res.render('error404')
    })
})

router.delete('/:id/comment/:commentId', (req: { params: { commentId: any; id: any } }, res: { redirect: (arg0: string) => void; render: (arg0: string) => void }) => {
  db.Comment.findByIdAndDelete(req.params.commentId)
  .then(() =>{
    res.redirect(`/places/${req.params.id}`)
  })
  .catch(() => {
    res.render('error404')
  })
  // db.Comment.findByIdAndDelete(req.params.commentId)
  // .then(place => {
  //   res.redirect(`/places/${req.params.id}`)
  // })
  // .catch(err=>{
  //    res.render('error404')
})

router.post('/:id/rant', (req: any, res: { send: (arg0: string) => void }) => {
  res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req: any, res: { send: (arg0: string) => void }) => {
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