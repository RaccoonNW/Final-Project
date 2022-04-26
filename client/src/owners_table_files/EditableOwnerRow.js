function EditableOwnerRow({ editedData, handleEditFormChange, handleEditFormSubmit }) {
    return (
        <tr>
            <td>
                <input 
                    type="text" 
                    required="required" 
                    placeholder="Name..." 
                    onChange={handleEditFormChange}
                    name="name"
                    value={editedData.name}
                ></input>
            </td>
            <td>
                <input
                    type="text" 
                    required="required" 
                    placeholder="Number..." 
                    onChange={handleEditFormChange}
                    name="number"
                    value={editedData.number}
                ></input>
            </td>
            <td>
                <input
                    type="text" 
                    required="required" 
                    placeholder="Email..." 
                    onChange={handleEditFormChange}
                    name="email"
                    value={editedData.email}
                ></input>
            </td>
            <td>
                <input
                    type="text" 
                    required="required" 
                    placeholder="Notes..." 
                    onChange={handleEditFormChange}
                    name="notes"
                    value={editedData.notes}
                ></input>
            </td>
            <td>
                <button type="submit" onClick={handleEditFormSubmit}>Save</button>
            </td>
        </tr>
    )
}

export default EditableOwnerRow