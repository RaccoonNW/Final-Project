// import React, { useState } from "react"
import Owners from "../owners_table_files/Owners"
// import Houses from "../houses_table_files/Houses"

function CustomerOwnerData({ ownerList, setOwnerList }) {
    // const {id, name, number, email, notes} = ownerList


    // const [editedData, setEditedData] = useState({
    //     name: "",
    //     number: "",
    //     email: "",
    //     notes: ""
    // })
    // const [updateOwnerErrors, setUpdateOwnerErrors] = useState([])

    // function handleOwnerChange(e) {
    //     setEditedData({
    //         ...editedData,
    //         [e.target.name]: e.target.value
    //     })
    // }

    // function handleEditOwnerSubmit(e) {
    //     e.preventDefault()
    //     setUpdateOwnerErrors([])
    //     fetch(`/owners/${id}`, {
    //       method: 'PATCH',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify({editedData})
    //     })
    //     .then((r) => {
    //       if (r.ok) {
    //         r.json().then((r) => r.json())
    //       } else {
    //         r.json().then((err) => setUpdateOwnerErrors(err.errors));
    //       }
    //     });

    // }
    
        return (
            <div>
                <Owners ownerList={ownerList} setOwnerList={setOwnerList}/>
                {/* <div className="edit-owner-form-div" >
                    <h2 className="edit-owner-title">Edit Owner Details</h2>
                    <form onSubmit={handleEditOwnerSubmit}>
                        <div className="owner-edit-input">
                        <label>Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            autoComplete="off"
                            value={editedData.name}
                            onChange={handleOwnerChange}
                        />
                        </div>
                        <div className="edit-owner-form-div">
                        <label>Number</label>
                        <input
                            type="text"
                            id="number"
                            name="number"
                            autoComplete="off"
                            value={editedData.number}
                            onChange={handleOwnerChange}
                        />
                        </div>
                        <div className="edit-owner-form-div">
                        <label>Email</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            autoComplete="off"
                            value={editedData.email}
                            onChange={handleOwnerChange}
                        />
                        </div>
                        <div className="edit-owner-form-div">
                        <label>Notes</label>
                        <input
                            type="text"
                            id="notes"
                            name="notes"
                            autoComplete="off"
                            value={editedData.notes}
                            onChange={handleOwnerChange}
                        />
                        </div>
                        <button 
                            variant="fill" 
                            color="primary" 
                            className="edit-owner-form-button"
                            type="submit">
                            Submit
                        </button>
                        <div>
                            {errors.map((err) => (
                            <p key={err}>{err}</p>
                            ))}
                        </div>
                    </form>
                </div> */}
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