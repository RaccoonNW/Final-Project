import { useState, React } from "react"
import HouseDataForm from "./HouseDataForm"

function AddOwnerForm({ houseList, navigate }) {

    const defaultOwnerData = {
        name: "",
        number: "",
        email: "",
        notes: ""
    }

    const defaultHouseData = {
            address: null,
            sq_footage: null,
            window_count: null,
            roof_pitch: null,
            floor_count: null,
            notes: null
    }


    const [houseData, setHouseData] = useState(defaultHouseData)

    const [addHouseVis, setAddHouseVis] = useState(false)

    const [ownerData, setOwnerData] = useState(defaultOwnerData)

    function toggleAddHouseVis(e) {
        e.preventDefault()
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
                navigate('/owners')
              })
            }
          });
    }

    // const existingHouses = houseList.map((house) => {
    //     return (
    //         <option key={house.id} value={house.id}>{house.address}</option>
    //     )
    // })

    // function selectHouse(e) {
    //     let filteredSelectHouse = houseList.filter((house) => {
    //         return parseInt(e.target.value) === house.id
    //     })

    //     setHouseData({
    //         address: filteredSelectHouse[0].address,
    //         sq_footage: filteredSelectHouse[0].sq_footage,
    //         floor_count: filteredSelectHouse[0].floor_count,
    //         window_count: filteredSelectHouse[0].window_count,
    //         roof_pitch: filteredSelectHouse[0].roof_pitch,
    //         notes: filteredSelectHouse[0].notes
    //     })
    // }





    return (
        <div className="add-owner-main-div">
            <div className="add-owner-container">
                <h4 className='new-owner-title'>Add New Owner</h4>
                <form onSubmit={handleSubmit} className="add-owner-form">
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
                    {/* <div className="house-select-container">
                        <select className="house-select-menu" onChange={selectHouse}>
                            <option value="null">Select Existing House</option>
                            {existingHouses}
                        </select>
                    </div>
                    <p className="or-divide">~ Or ~</p> */}
                    {addHouseVis ? <HouseDataForm houseData={houseData} setHouseData={setHouseData} handleHouseChange={handleHouseChange}/> : <div className="empty-div"></div>}
                    <button className="login-signup-button" onClick={toggleAddHouseVis}>Add New House</button>
                    <button type="submit" className="login-signup-button">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddOwnerForm