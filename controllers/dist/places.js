"use strict";
exports.__esModule = true;
var router = require('express').Router();
var models_1 = require("../models");
// Inside your route handler or middleware
app.get('/error', function (_req, res) {
    res.render('error404');
});
router.get('/', function (req, res) {
    models_1["default"].Place.find()
        .then(function (places) {
        res.render('places/index', { places: places });
    })["catch"](function () {
        // res.render('error404')
    });
});
router.post('/', function (req, res) {
    if (!req.body.pic) {
        req.body.pic = undefined;
    }
    if (!req.body.cuisines) {
        req.body.cuisines = undefined;
    }
    if (!req.body.city) {
        req.body.city = undefined;
    }
    if (!req.body.state) {
        req.body.state = undefined;
    }
    models_1["default"].Place.create(req.body)
        .then(function () {
        res.redirect('/places');
    })["catch"](function () {
        res.render('error404');
    });
});
router.get('/new', function (req, res) {
    res.render('places/new');
});
router.get('/:id', function (req, res) {
    models_1["default"].Place.findById(req.params.id)
        .populate('comments')
        .then(function (place) {
        res.render('places/show', { place: place });
    })["catch"](function () {
        // res.render('error404')
    });
});
router.put('/:id', function (req, res) {
    if (!req.body.pic) {
        req.body.pic = undefined;
    }
    if (!req.body.cuisines) {
        req.body.cuisines = undefined;
    }
    if (!req.body.city) {
        req.body.city = undefined;
    }
    if (!req.body.state) {
        req.body.state = undefined;
    }
    models_1["default"].Place.findByIdAndUpdate(req.params.id, req.body)
        .then(function () {
        res.redirect("" + req.params.id);
    })["catch"](function () {
        res.render('error404');
    });
});
router["delete"]('/:id', function (req, res) {
    models_1["default"].Place.findByIdAndDelete(req.params.id)
        .then(function () {
        res.redirect('/places');
    })["catch"](function () {
        res.render('error404');
    });
});
router.get('/:id/edit', function (req, res) {
    models_1["default"].Place.findById(req.params.id)
        .then(function (place) {
        res.render('places/edit', { place: place });
    })["catch"](function () {
        // res.render('error404')
    });
});
router.post('/:id/comment', function (req, res) {
    models_1["default"].Place.findById(req.params.id)
        .then(function (place) {
        models_1["default"].Comment.create(req.body)
            .then(function (comment) {
            place.comments.push(comment.id);
            place.save()
                .then(function () {
                res.redirect("/places/" + req.params.id);
            });
        })["catch"](function () {
            res.render('error404');
        });
    })["catch"](function () {
        res.render('error404');
    });
});
router["delete"]('/:id/comment/:commentId', function (req, res) {
    models_1["default"].Comment.findByIdAndDelete(req.params.commentId)
        .then(function () {
        res.redirect("/places/" + req.params.id);
    })["catch"](function () {
        res.render('error404');
    });
    // db.Comment.findByIdAndDelete(req.params.commentId)
    // .then(place => {
    //   res.redirect(`/places/${req.params.id}`)
    // })
    // .catch(err=>{
    //    res.render('error404')
});
router.post('/:id/rant', function (req, res) {
    res.send('GET /places/:id/rant stub');
});
router["delete"]('/:id/rant/:rantId', function (req, res) {
    res.send('GET /places/:id/rant/:rantId stub');
});
module.exports = router;
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

//# sourceMappingURL=places.js.map
