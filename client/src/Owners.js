function Owners({ ownerList }) {

    const owners = ownerList.map((owner) => {
        return (
            <ul key={owner.name}>
                <li>{owner.name}</li>
                <li>{owner.number}</li>
                <li>{owner.email}</li>
                <li>{owner.notes}</li>
            </ul>
        )

    })


    return (
        <div>
            {owners}
        </div>
    )

}

export default Owners