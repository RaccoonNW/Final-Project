// import React, { useState } from "react"
import HouseTable from "./HouseTable"

function Houses({ houseList, toggleHomeVis }) {

    return (
        <div>
            <HouseTable houseList={houseList}/>
        </div>
    )
}

export default Houses