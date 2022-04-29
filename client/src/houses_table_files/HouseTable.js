import React, { useState, Fragment } from "react";
import EditableHouseRow from "./EditableHouseRow";
import ReadOnlyHouseRow from "./ReadOnlyHouseRow";



function HouseTable({ houseList, setHouseList }) {

    const [editHouseId, setEditHouseId] = useState(null)
    const [editedData, setEditedData] = useState({
        address: "",
        sq_footage: "",
        floor_count: "",
        window_count: "",
        roof_pitch: "",
        notes: ""
    })
    const [updateHouseErrors, setUpdateHouseErrors] = useState([])

    function handleEditClick(e, house) {
        e.preventDefault()
        setEditHouseId(house.id)

        const formValues = {
            address: house.address,
            sq_footage: house.sq_footage,
            floor_count: house.floor_count,
            window_count: house.window_count,
            roof_pitch: house.roof_pitch,
            notes: house.notes
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
        setUpdateHouseErrors([])
        fetch(`/houses/${editHouseId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({editedData})
        })
        .then((r) => {
          if (r.ok) {
            r.json().then((data) => {
                let filteredHouses = houseList.filter((house) => house.id !== data.id)
                let updatedHouseList = [data, ...filteredHouses]
                setHouseList(updatedHouseList)
            })
          } else {
            r.json().then((err) => setUpdateHouseErrors(err.errors));
          }
          console.log(updateHouseErrors)
        });
    }

    return (
        <div>
            <form>
                <table>
                    <thead>
                        <tr>
                            <th>Address</th>
                            <th>Square Footage</th>
                            <th>Floor Count</th>
                            <th>Window Count</th>
                            <th>Roof Pitch</th>
                            <th>Notes</th>
                            <th>Edit / Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {houseList.map((house) => {
                            return (
                                <Fragment key={house.id}>
                                    {editHouseId === house.id ? 
                                        <EditableHouseRow 
                                            editedData={editedData}
                                            handleEditFormChange={handleEditFormChange}
                                            handleEditFormSubmit={handleEditFormSubmit}
                                        /> 
                                        : 
                                        <ReadOnlyHouseRow 
                                            house={house} 
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

export default HouseTable