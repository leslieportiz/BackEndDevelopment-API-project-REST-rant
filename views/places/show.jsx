const React = require('react')
const Def = require('../default')

function show(data) {
  let comments = (
    <h3 className="inactive"> No Comments Yet! </h3>
  )
  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant! :(' : 'Rave! :)'}</h2>
          <p>{c.content}</p>
          <p>
            <stong>- {c.author}</stong>
          </p>
          <h4>Rating: {c.stars}</h4>
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
        <p>Not Rated</p>
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

      </main>
    </Def>
  )
}

module.exports = show

