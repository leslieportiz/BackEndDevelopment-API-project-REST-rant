const db = require('../models')

// To use await, we need an async function.
async function seed() {
    // Get the place
    let place = await db.Place.findOne({ name: 'Texas de Brazil' })
    let place2 = await db.Place.findOne({ name: 'Fogo de Chao' })
    let place3 = await db.Place.findOne({ name: 'Cheesecake Factory' })
    // Create a fake sample comment.
    let comment = await db.Comment.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'Wow, simply amazing! Highly recommended!'
    })
    let comment2 = await db.Comment.create({
        author: 'Famished Fran',
        rant: false,
        stars: 3.0,
        content: 'Idk, its basic!'
    })
    let comment3 = await db.Comment.create({
        author: 'Famished Fran',
        rant: false,
        stars: 4.0,
        content: 'Go for the cheesecake and happy hour!'
    })

    // Add that comment to the place's comment array.
    place.comments.push(comment.id)
    place2.comments.push(comment2.id)
    place3.comments.push(comment3.id)

    //save the place now that it has comment
    await place.save()

    // Exit the program
    process.exit()
}

seed()
