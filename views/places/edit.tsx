import React from 'react';
import Def from '../default.jsx';

interface edit_form {
    data: any;
}

function edit_form (data: any) {
    console.log(data)
    return (
        <Def>
            <main>
                <h1>Edit Place {data.place.name}</h1>
                <form method="POST" action={`/places/${data.place._id}?_method=PUT`}>
                    <div className="form-group">
                        <label htmlFor="name">Place Name</label>
                        <input className="form-control" id="name" name="name" defaultValue={data.place.pic} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pic">Place Picture</label>
                        <input className="form-control" id="pic" name="pic" defaultValue={data.place.pic}/>
                    </div>              
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input className="form-control" id="city" name="city" defaultValue={data.place.city}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input className="form-control" id="state" name="state" defaultValue={data.place.state}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="cuisine">Cuisine</label>
                        <input className="form-control" id="cuisines" name="cuisines" defaultValue={data.place.cuisines} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="founded">Founded Year</label>
                        <input
                            type="number"
                            className="form-control"
                            id="founded"
                            name="founded"
                            defaultValue={data.place.founded} />
                    </div>

                    <input className="btn btn-primary" type="submit" value='Update Place'  />
                </form>
            </main>
        </Def>
    )
    }
module.exports = edit_form

