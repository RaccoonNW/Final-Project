function Home({ user, houseList, ownerList }) {

    return (
        <div className="home-page-main-div">
            <h2>Welcome {user.username}</h2>
            <div className="home-page-stats">
                <p>You have {ownerList.length} owners saved</p>
                <p>You have {houseList.length} houses saved</p>
            </div>
        </div>

    )
}

export default Home