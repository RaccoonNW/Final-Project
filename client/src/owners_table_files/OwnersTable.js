import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
// import AddNewOwner from "./AddNewOwner";
import EditableOwnerRow from "./EditableOwnerRow";
import ReadOnlyOwnerRow from "./ReadOnlyOwnerRow";

function OwnersTable({ ownerList, setOwnerList, houseOwnerList }) {

    const [deleteData, setDeleteData] = useState({})
    const [editOwnerId, setEditOwnerId] = useState(null)
    const [editedData, setEditedData] = useState({
        name: "",
        number: "",
        email: "",
        notes: ""
    })
    const [updateOwnerErrors, setUpdateOwnerErrors] = useState([])
    // const [newOwnerErrors, setNewOwnerErrors] = useState([])

    // const [newOwnerData, setNewOwnerData] = useState({
    //     name: "",
    //     number: "",
    //     email: "",
    //     notes: ""
    // })

    // function handleAddNewOwnerFormChange(e) {
    //     e.preventDefault()
    //     const fieldName = e.target.getAttribute("name")
    //     const fieldValue = e.target.value

    //     const newOwnerList = {...newOwnerData}
    //     newOwnerList[fieldName] = fieldValue

    //     setNewOwnerData(newOwnerList)
    // }

    // function handleAddOwnerFormSubmit(e) {
    //     setNewOwnerErrors([])
    //     fetch('/owners', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify({newOwnerData})
    //     })
    //     .then((r) => {
    //       if (r.ok) {
    //         r.json().then((data) => {
    //             let newOwnerList = [data, ...ownerList]
    //             setOwnerList(newOwnerList)
    //         })
    //       } else {
    //         r.json().then((err) => setNewOwnerErrors(err.errors));
    //       }
    //       console.log(newOwnerErrors)
    //     });
    // }

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

    function handleDelete(e) {
        e.preventDefault()

        for (let i = 0; i < houseOwnerList.length; i++) {
            if(houseOwnerList[i].owner_id.toString() === e.target.id) {
                setDeleteData({
                    owner_id: houseOwnerList[i].owner_id,
                    house_id: houseOwnerList[i].house_id
                })
            }
        }
        if(deleteData) {
            fetch(`/owners/${deleteData.owner_id}`, {
                method: 'DELETE'
            }).then((r) => {
                if (r.ok) {
                    fetch(`/houses/${deleteData.house_id}`, {
                        method: 'DELETE'
                    })
                    // r.json().then((data) => console.log(data))
                } else {
                    r.json().then((err) => console.log(err))
                }
            })
        }

        // fetch(`/owners/${e.target.id}`, {
        //     method: 'DELETE'
        // })
    }

    // function handleOrg() {
    //     fetch("/organized").then((r) => r.json())
    //     .then((orgOwnerData) => setOwnerList(orgOwnerData))
    // }

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
                                            handleDelete={handleDelete}
                                            houseOwnerList={houseOwnerList}
                                        />}
                                </Fragment>
                            )
                        })}
                        {/* <AddNewOwner 
                            newOwnerData={newOwnerData} 
                            setNewOwnerData={setNewOwnerData} 
                            handleAddNewOwnerFormChange={handleAddNewOwnerFormChange}
                            handleAddOwnerFormSubmit={handleAddOwnerFormSubmit}
                        /> */}
                    </tbody>
                </table>
            </form>
            <NavLink className="nav-link-new-client" to='/add-owner'>Add Owner</NavLink>
        </div>
    )
}

export default OwnersTable