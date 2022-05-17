import { useState, React } from "react"
import HouseDataForm from "./HouseDataForm"

function AddOwnerForm() {
    const defaultOwnerData = {
        name: "",
        number: "",
        email: "",
        notes: ""
    }

    const defaultHouseData = {
            address: "",
            sq_footage: "",
            window_count: "",
            roof_pitch: "",
            floor_count: "",
            notes: ""
    }


    const [houseData, setHouseData] = useState(defaultHouseData)

    const [addHouseVis, setAddHouseVis] = useState(false)

    const [ownerData, setOwnerData] = useState(defaultOwnerData)

    function toggleAddHouseVis() {
        addHouseVis ? setAddHouseVis(false) : setAddHouseVis(true)
    }

    function handleOwnerChange(e) {
        setOwnerData({
            ...ownerData,
            [e.target.name]: e.target.value
        })
    }

    function handleHouseChange(e) {
        setHouseData({
            ...houseData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch('/owners', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                newOwnerData: {
                    ...ownerData,
                    house_attributes: houseData
                }
            })
        })
        .then((r) => {
            if (r.ok) {
              r.json().then((data) => {
                console.log(data)
              })
            }
          });
    }






    return (
        <div className="add-owner-main-div">
            <div className="add-owner-container">
                <h4 className='new-owner-title'>Add New Owner</h4>
                <form onSubmit={handleSubmit}>
                    <div className='new-owner-form-input'>
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            autoComplete='off'
                            onChange={handleOwnerChange}
                        />
                    </div>
                    <div className='new-owner-form-input'>
                        <label>Number:</label>
                        <input
                            type="text"
                            name="number"
                            autoComplete='off'
                            onChange={handleOwnerChange}
                        />
                    </div>
                    <div className='new-owner-form-input'>
                        <label>Email:</label>
                        <input
                            type="text"
                            name="email"
                            autoComplete='off'
                            onChange={handleOwnerChange}
                        />
                    </div>
                    <div className='new-owner-form-input'>
                        <label>Notes:</label>
                        <input
                            type="text"
                            name="notes"
                            autoComplete='off'
                            onChange={handleOwnerChange}
                        />
                    </div>
                    <div className="house-select-container">
                        <select className="house-select-menu">
                            <option value="">Select Existing House</option>
                            <option value="">Select Existing House</option>
                            <option value="">Select Existing House</option>
                            <option value="">Select Existing House</option>
                        </select>
                    </div>
                    {addHouseVis ? <HouseDataForm houseData={houseData} setHouseData={setHouseData} handleHouseChange={handleHouseChange}/> : <p></p>}
                    <button type="submit" className="login-signup-button">Submit</button>
                </form>
                    <p className="or-divide">~ Or ~</p>
                    <button className="login-signup-button" onClick={toggleAddHouseVis}>Add New House</button>
            </div>
        </div>
    )
}

export default AddOwnerForm