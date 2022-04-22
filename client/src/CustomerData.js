import React, { useState } from "react"
import Owners from "./Owners"
import Houses from "./Houses"

function CustomerData({ ownerList, houseList }) {

    const [homeVis, setHomeVis] = useState(false)

    function toggleHomeVis(e) {
        if (homeVis) {
            setHomeVis(false)
            console.log('Button worked false')
        } else {
            setHomeVis(true)
            console.log('Button worked true')
        }
    }

    if (!homeVis) {
        return (
            <Owners ownerList={ownerList} toggleHomeVis={toggleHomeVis}/>
        )
    } else {
        return (
            <div>
                <Houses houseList={houseList} toggleHomeVis={toggleHomeVis}/>
            </div>
        )
    }
}

export default CustomerData