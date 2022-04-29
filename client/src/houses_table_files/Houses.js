import { useEffect, useState } from "react"
import HouseTable from "./HouseTable"

function Houses() {

    const [houseList, setHouseList] = useState([])

    useEffect(() => {
        fetch('/houses').then((r) => {
            if (r.ok) {
              r.json().then((data) => setHouseList(data))
            } else {
              r.json().then((data) => console.log(data))
            }
          });
    }, [])

    return (
        <div>
            <HouseTable houseList={houseList} setHouseList={setHouseList}/>
        </div>
    )
}

export default Houses