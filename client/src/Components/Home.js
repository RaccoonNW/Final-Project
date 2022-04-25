function Home({ user }) {
    return (
        <div className="home-page-main-div">
            <h2>Welcome {user.username}</h2>
        </div>

    )
}

export default Home