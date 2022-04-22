import React, { useState } from "react"
import Houses from "./Houses"

function Owners({ ownerList, toggleHomeVis }) {

    // const [homeVis, setHomeVis] = useState(false)

    // function toggleHomeVis(e) {
    //     if (homeVis) {
    //         setHomeVis(false)
    //         console.log('Button worked false')
    //     } else {
    //         setHomeVis(true)
    //         console.log('Button worked true')
    //     }
    // }

    const owners = ownerList.map((owner) => {
        return (
            <ul key={owner.id}>
                <li><button onClick={toggleHomeVis}>{owner.name}</button></li>
                <li>{owner.number}</li>
                <li>{owner.email}</li>
                <li>{owner.notes}</li>
            </ul>
        )

    })

    return (
        <div>
            {owners}

        </div>
    )


}

export default Owners