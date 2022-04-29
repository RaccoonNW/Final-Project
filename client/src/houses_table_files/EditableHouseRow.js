function EditableHouseRow({ editedData, handleEditFormChange, handleEditFormSubmit }) {
    return (
        <tr>
            <td>
                <input 
                    type="text" 
                    required="required" 
                    placeholder="Address..." 
                    onChange={handleEditFormChange}
                    name="address"
                    value={editedData.address}
                ></input>
            </td>
            <td>
                <input
                    type="text" 
                    required="required" 
                    placeholder="Square Footage..." 
                    onChange={handleEditFormChange}
                    name="sq_footage"
                    value={editedData.sq_footage}
                ></input>
            </td>
            <td>
                <input
                    type="text" 
                    required="required" 
                    placeholder="Floor Count..." 
                    onChange={handleEditFormChange}
                    name="floor_count"
                    value={editedData.floor_count}
                ></input>
            </td>
            <td>
                <input
                    type="text" 
                    required="required" 
                    placeholder="Window Count..." 
                    onChange={handleEditFormChange}
                    name="window_count"
                    value={editedData.window_count}
                ></input>
            </td>
            <td>
                <input
                    type="text" 
                    required="required" 
                    placeholder="Roof Pitch..." 
                    onChange={handleEditFormChange}
                    name="roof_pitch"
                    value={editedData.roof_pitch}
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

export default EditableHouseRow