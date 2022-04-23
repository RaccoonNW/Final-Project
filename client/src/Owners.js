import React from "react"
import BasicTable from "./BasicTable"
// import Houses from "./Houses"

function Owners({ ownerList, toggleHomeVis }) {

    // function handleClick(e) {
    //     console.log(e.target.parentElement.id)
    // }

    // const owners = ownerList.map((owner) => {
        return (


            <BasicTable ownerList={ownerList}/>
            // <ul key={owner.id} id={owner.id}>
            //     <li>{owner.name}</li>
            //     <li>{owner.number}</li>
            //     <li>{owner.email}</li>
            //     <li>{owner.notes}</li>
            //     <button id={owner.id} onClick={toggleHomeVis}>Show Home</button>
            //     <button onClick={handleClick}>Click</button>
            // </ul>
        )



    // return (
    //     <div>
    //         {owners}

    //     </div>
    // )


}

export default Owners