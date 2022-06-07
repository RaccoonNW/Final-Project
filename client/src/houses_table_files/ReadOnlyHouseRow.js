function ReadOnlyHouseRow({ house, handleEditClick }) {

    return (
        <tr key={house.id}>
            <td>{house.address}</td>
            <td>{house.sq_footage}</td>
            <td>{house.floor_count}</td>
            <td>{house.window_count}</td>
            <td>{house.roof_pitch}</td>
            <td>{house.notes}</td>
            <td><button onClick={(e) => handleEditClick(e, house)}>Edit</button></td>
        </tr>
    )
}

export default ReadOnlyHouseRow