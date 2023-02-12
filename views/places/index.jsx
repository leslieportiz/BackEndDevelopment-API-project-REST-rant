const React = require('react')
const Def = require('../default')

function index(data) {
    let placeFormatted = data.places.map((place) => {
        return (
            <div>
                <h2>{place.name}</h2>
                <img src={place.pic} alt={place.name}/>
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>PLACES/RESTAURANTS INDEX PAGE</h1>
                {placeFormatted}
            </main>
        </Def>
    )
}

module.exports = index
