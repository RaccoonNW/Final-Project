import React from "react"
import OwnersTable from "./OwnersTable"
// import { ShowHousesButton } from "./owner_columns"
// import Houses from "./Houses"

function Owners({ ownerList, houseList }) {

    return (
        <div>
            <OwnersTable ownerList={ownerList}/>
        </div>
    )
}

export default Owners