import HouseTable from "./HouseTable"
// import { useState, useEffect } from "react"

function Houses({ houseList, setHouseList, handleHouseDelete }) {

    // const [houseList, setHouseList] = useState([])

    // useEffect(() => {
    //     fetch('/houses').then((r) => {
    //         if (r.ok) {
    //           r.json().then((data) => setHouseList(data))
    //         } else {
    //           r.json().then((data) => console.log(data))
    //         }
    //       });
    // }, [])

    return (
        <div>
            <HouseTable houseList={houseList} setHouseList={setHouseList} handleHouseDelete={handleHouseDelete}/>
        </div>
    )
}

export default Houses