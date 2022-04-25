// import React, { useState } from "react"
import Owners from "../owners_table_files/Owners"
// import Houses from "../houses_table_files/Houses"

function CustomerOwnerData({ ownerList, houseList }) {

    // const [homeVis, setHomeVis] = useState(false)

    // function toggleHomeVis(e) {
    //     if (homeVis) {
    //         setHomeVis(false)
    //         console.log(ownerList)
    //         console.log(houseOwnerList)
    //     } else {
    //         setHomeVis(true)
    //         console.log(e.target.id)
    //     }
    // }

    // function showSpecificHouses() {

    // }

    // if (!homeVis) {
        return (
            <div>
                <Owners ownerList={ownerList} houseList={houseList}/>
                {/* <button onClick={toggleHomeVis}>Show Houses</button> */}
                

            </div>
            )

    // } else {
    //     return (
    //         <div>
    //             <Houses houseList={houseList} toggleHomeVis={toggleHomeVis}/>
    //             <button onClick={toggleHomeVis}>Show Owners</button>
    //         </div>
    //     )
    // }
}

export default CustomerOwnerData