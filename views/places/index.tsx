import React from 'react'
import Def from '../default'

function index(data: { places: any[] }) {
    let placeFormatted = data.places.map((place) => {
        return (
            <div  className="col-sm-6" key=''>
                <h2>
                    <a href={`/places/${place.id}`} >
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
