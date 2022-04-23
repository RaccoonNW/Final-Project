// import React, { useState } from "react"

function Houses({ houseList, toggleHomeVis }) {
    const houses = houseList.map((house) => {
        return (
            <ul key={house.id} id={house.id}>
                <li>Address: {house.address}</li>
                <li>Sq Footage: {house.sq_footage}</li>
                <li>Window Count: {house.window_count}</li>
                <li>Roof Pitch: {house.roof_pitch}</li>
                <li>Floor Count: {house.floor_count}</li>
                <li>Notes: {house.notes}</li>
                <button id={house.id} onClick={toggleHomeVis}>Owner</button>
            </ul>
        )
    })

    return (
        houses
    )

}

export default Houses