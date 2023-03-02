const React = require('react')
const Def = require('../default')

function show(data) {
  let comments = (
    <h3 className="inactive"> No Comments Yet! </h3>
  )
  let rating = (
    <h3 className="inactive"> Not rated Yet! </h3>
  )
  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars
    }, 0)
    let averageRating = Math.round(sumRatings) / data.place.comments.length
    let stars = ''
    for (let i = 0; i < averageRating; i++) {
      stars += '*'
    }
    rating = (
      <h3>
        {stars} stars
      </h3>
    )
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant! :(' : 'Rave! :)'}</h2>
          <p>{c.content}</p>
          <p>
            <stong>- {c.author}</stong>
          </p>
          <h4>Rating: {c.stars}</h4>
          <form method="POST" action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}>
            <input type="submit" className="btn btn-danger" value="Delete Comment" />
          </form>
        </div>

      )
    })
  }
  return (
    <Def>
      <main>
        <h1>{data.place.name}</h1>
        <img src={data.place.pic} alt="Image" width="250" height="250" />
        <h2>Rating</h2>
        {rating}
        <h2>Description</h2>
        <p>Located in {data.place.city}, {data.place.state} and serving {data.place.cuisine} cuisine.</p>
        <p>
          {data.place.showEstablished()}
        </p>

        <h2>Comments</h2>
        {comments}

        <a href={`/places/${data.place._id}/edit`} className="btn btn-warning">
          Edit
        </a>

        <form method="POST" action={`/places/${data.place._id}?_method=DELETE`}>
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </form>
        <form method="POST" action={`/places/${data.place._id}/comment`}>
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input className="form-control" type="text" id="author" name="author" />
          </div>
          <div className="form-group">
            <label htmlFor="rant">Rant</label>
            <input className="form-control" type="checkbox" id="rant" name="rant" value="true" />
          </div>
          <div className="form-group">
            <label htmlFor="stars">Stars</label>
            <input className="form-control" type="number" id="stars" name="stars" />
          </div>
          <div className="form-group">
            <label htmlFor="content">Comment</label>
            <input className="form-control" type="textarea" id="content" name="content" />
          </div>


          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </main>
    </Def>
  )
}

module.exports = show
