const React = require('react')
const Def = require('../default')

function index(data) {
    let placeFormatted = data.places.map((place,index) => {
        return (
            <div className="col-sm-6">
                <h2>
                    <a href={`/places/${index}`} >
                        {place.name}
                    </a>
                </h2>
                <p className="text-center">
                    {place.cuisine}
                </p>
                <img src={place.pic} alt={place.name} width={250} height={250} />
                <p className="text-center">
                    Located in {place.city}, {place.state}
                </p>
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>PLACES to Rant or Rave About</h1>
                <div className="row">
                    {placeFormatted}
                </div>
            </main>
        </Def>
    )
}

module.exports = index
