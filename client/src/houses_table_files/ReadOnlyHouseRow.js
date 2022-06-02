function ReadOnlyHouseRow({ house, handleEditClick, handleHouseDelete }) {

    // function handleHouseDelete(e) {
    //     e.preventDefault()
    //     fetch(`/houses/${e.target.id}`, {
    //         method: 'DELETE'
    //     }).then((r) => {
    //         if (r.ok) {
    //             console.log(r)
    //         } else {
    //             r.json().then((err) => console.log(err))
    //         }
    //     })
    //     console.log(typeof(e.target.id))
    // }

    return (
        <tr key={house.id}>
            <td>{house.address}</td>
            <td>{house.sq_footage}</td>
            <td>{house.floor_count}</td>
            <td>{house.window_count}</td>
            <td>{house.roof_pitch}</td>
            <td>{house.notes}</td>
            <td><button onClick={(e) => handleEditClick(e, house)}>Edit</button><button id={house.id} onClick={(e) => handleHouseDelete(e)}>Delete</button></td>
        </tr>
    )
}

export default ReadOnlyHouseRow