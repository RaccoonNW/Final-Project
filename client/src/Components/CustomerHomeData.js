import Houses from "../houses_table_files/Houses"

function CustomerHomeData({ houseList }) {
    return (
        <div>
            <Houses houseList={houseList}/>
            {/* <button onClick={toggleHomeVis}>Show Houses</button> */}
        </div>
        )
}

export default CustomerHomeData