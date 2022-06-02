function ReadOnlyOwnerRow({ owner, handleEditClick, handleDelete, houseOwnerList }) {

    

    return (
        <tr key={owner.id}>
            <td>{owner.name}</td>
            <td>{owner.number}</td>
            <td>{owner.email}</td>
            <td>{owner.notes}</td>
            <td><button onClick={(e) => handleEditClick(e, owner)}>Edit</button><button id={owner.id} onClick={(e) => handleDelete(e)}>Delete</button></td>
        </tr>
    )
}

export default ReadOnlyOwnerRow