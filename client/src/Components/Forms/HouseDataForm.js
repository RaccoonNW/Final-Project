function HouseDataForm({ houseData, setHouseData, handleHouseChange }) {
    return (
            <div className="house-owner-add-form">
                <div className='new-owner-form-input'>
                    <label>Address:</label>
                    <input
                        type="text"
                        name="address"
                        autoComplete='off'
                        onChange={handleHouseChange}
                    />
                </div>
                <div className='new-owner-form-input'>
                    <label>Square Footage:</label>
                    <input
                        type="text"
                        name="sq_footage"
                        autoComplete='off'
                        onChange={handleHouseChange}
                    />
                </div>
                <div className='new-owner-form-input'>
                    <label>Floor Count:</label>
                    <input
                        type="text"
                        name="floor_count"
                        autoComplete='off'
                        onChange={handleHouseChange}
                    />
                </div>
                <div className='new-owner-form-input'>
                    <label>Window Count:</label>
                    <input
                        type="text"
                        name="window_count"
                        autoComplete='off'
                        onChange={handleHouseChange}
                    />
                </div>
                <div className='new-owner-form-input'>
                    <label>Roof Pitch:</label>
                    <input
                        type="text"
                        name="roof_pitch"
                        autoComplete='off'
                        onChange={handleHouseChange}
                    />
                </div>
                <div className='new-owner-form-input'>
                    <label>Notes:</label>
                    <input
                        type="text"
                        name="notes"
                        autoComplete='off'
                        onChange={handleHouseChange}
                    />
                </div>
            </div>
    )
}

export default HouseDataForm