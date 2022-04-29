import React, { Fragment, useState } from "react";
import EditableOwnerRow from "./EditableOwnerRow";
import ReadOnlyOwnerRow from "./ReadOnlyOwnerRow";

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
        console.log(fieldName)
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
          console.log(updateOwnerErrors)
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
                                <Fragment key={owner.id}>
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
}

export default OwnersTable