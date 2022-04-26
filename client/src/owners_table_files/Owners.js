import React from "react"
import OwnersTable from "./OwnersTable"
// import { ShowHousesButton } from "./owner_columns"
// import Houses from "./Houses"

function Owners({ ownerList, setOwnerList }) {

    return (
        <div>
            <OwnersTable ownerList={ownerList} setOwnerList={setOwnerList}/>
        </div>
    )
}

export default Owners