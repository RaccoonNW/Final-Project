function AddNewOwner({ newOwnerData, setNewOwnerData, handleAddNewOwnerFormChange, handleAddOwnerFormSubmit }) {
    return (
        <tr>
        <td>
            <input 
                type="text" 
                required="required" 
                placeholder="Name..." 
                name="name"
                value={newOwnerData.name}
                onChange={handleAddNewOwnerFormChange}
            />
        </td>
        <td>
            <input
                type="text" 
                required="required" 
                placeholder="Number..." 
                name="number"
                value={newOwnerData.number}
                onChange={handleAddNewOwnerFormChange}
            />
        </td>
        <td>
            <input
                type="text" 
                required="required" 
                placeholder="Email..." 
                name="email"
                value={newOwnerData.email}
                onChange={handleAddNewOwnerFormChange}
            />
        </td>
        <td>
            <input
                type="text" 
                required="required" 
                placeholder="Notes..." 
                name="notes"
                value={newOwnerData.notes}
                onChange={handleAddNewOwnerFormChange}
            />
        </td>
        <td>
            <button type="submit" onClick={handleAddOwnerFormSubmit}>Submit</button>
        </td>
    </tr>
    )
}

export default AddNewOwner;