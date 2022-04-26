function ReadOnlyOwnerRow({ owner, handleEditClick }) {

    return (
        <tr key={owner.id}>
            <td>{owner.name}</td>
            <td>{owner.number}</td>
            <td>{owner.email}</td>
            <td>{owner.notes}</td>
            <td><button onClick={(e) => handleEditClick(e, owner)}>Edit</button><button>Delete</button></td>
        </tr>
    )
}

export default ReadOnlyOwnerRow