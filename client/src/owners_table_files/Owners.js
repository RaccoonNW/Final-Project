import React, { useEffect, useState } from "react"
import OwnersTable from "./OwnersTable"

function Owners({ user }) {

    const [ownerList, setOwnerList] = useState([])

    useEffect(() => {
        fetch('/owners').then((r) => {
            if (r.ok) {
              r.json().then((data) => setOwnerList(data))
            } else {
              r.json().then((data) => console.log(data))
            }
          });
    }, [user])

    return (
        <div>
            <OwnersTable ownerList={ownerList} setOwnerList={setOwnerList}/>
        </div>
    )
}

export default Owners