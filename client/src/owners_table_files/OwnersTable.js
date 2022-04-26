import React, { Fragment, useState } from "react";
import EditableOwnerRow from "./EditableOwnerRow";
import ReadOnlyOwnerRow from "./ReadOnlyOwnerRow";
// import { useTable } from 'react-table'
// import { OWNERS_COLUMNS } from "./owner_columns";

function OwnersTable({ ownerList, setOwnerList }) {

    const [editOwnerId, setEditOwnerId] = useState(null)
    const [editedData, setEditedData] = useState({
        name: "",
        number: "",
        email: "",
        notes: ""
    })
    const [updateOwnerErrors, setUpdateOwnerErrors] = useState([])

    function handleEditClick(e, owner) {
        e.preventDefault()
        setEditOwnerId(owner.id)

        const formValues = {
            name: owner.name,
            number: owner.number,
            email: owner.email,
            notes: owner.notes
        }

        setEditedData(formValues)
    }

    function handleEditFormChange(e) {
        e.preventDefault()
        const fieldName = e.target.getAttribute("name")
        const fieldValue = e.target.value

        const newFormData = {...editedData}
        newFormData[fieldName] = fieldValue

        setEditedData(newFormData)
    }

    function handleEditFormSubmit(e) {
        setUpdateOwnerErrors([])
        fetch(`/owners/${editOwnerId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({editedData})
        })
        .then((r) => {
          if (r.ok) {
            r.json().then((data) => {
                let filteredOwners = ownerList.filter((owner) => owner.id !== data.id)
                let updatedOwnerList = [data, ...filteredOwners]
                setOwnerList(updatedOwnerList)
            })
          } else {
            r.json().then((err) => setUpdateOwnerErrors(err.errors));
          }
        });
    }

    return (
        <div>
            <form>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Number</th>
                            <th>Email</th>
                            <th>Notes</th>
                            <th>Edit / Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ownerList.map((owner) => {
                            return (
                                <Fragment>
                                    {editOwnerId === owner.id ? 
                                        <EditableOwnerRow 
                                            editedData={editedData}
                                            handleEditFormChange={handleEditFormChange}
                                            handleEditFormSubmit={handleEditFormSubmit}
                                        /> 
                                        : 
                                        <ReadOnlyOwnerRow 
                                            owner={owner} 
                                            handleEditClick={handleEditClick}
                                        />}
                                </Fragment>
                            )
                        })}
                    </tbody>
                </table>
            </form>
        </div>
    )











    //         <div className="edit-owner-form-div" >
    //             <h2 className="edit-owner-title">Edit Owner Details</h2>
    //             <form onSubmit={handleEditOwnerSubmit}>
    //                 <div className="owner-edit-input">
    //                 <label>Name</label>
    //                 <input
    //                     type="text"
    //                     id="name"
    //                     name="name"
    //                     autoComplete="off"
    //                     value={editedData.name}
    //                     onChange={handleOwnerChange}
    //                 />
    //                 </div>
    //                 <div className="edit-owner-form-div">
    //                 <label>Number</label>
    //                 <input
    //                     type="text"
    //                     id="number"
    //                     name="number"
    //                     autoComplete="off"
    //                     value={editedData.number}
    //                     onChange={handleOwnerChange}
    //                 />
    //                 </div>
    //                 <div className="edit-owner-form-div">
    //                 <label>Email</label>
    //                 <input
    //                     type="text"
    //                     id="email"
    //                     name="email"
    //                     autoComplete="off"
    //                     value={editedData.email}
    //                     onChange={handleOwnerChange}
    //                 />
    //                 </div>
    //                 <div className="edit-owner-form-div">
    //                 <label>Notes</label>
    //                 <input
    //                     type="text"
    //                     id="notes"
    //                     name="notes"
    //                     autoComplete="off"
    //                     value={editedData.notes}
    //                     onChange={handleOwnerChange}
    //                 />
    //                 </div>
    //                 <button 
    //                     variant="fill" 
    //                     color="primary" 
    //                     className="edit-owner-form-button"
    //                     type="submit">
    //                     Submit
    //                 </button>
    //                 <div>
    //                     {updateOwnerErrors.map((err) => (
    //                     <p key={err}>{err}</p>
    //                     ))}
    //                 </div>
    //             </form>
    //         </div>


    //     </div>
    // )
}

export default OwnersTable