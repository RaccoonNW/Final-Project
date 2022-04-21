import React from "react"
import { NavLink, useNavigate } from "react-router-dom"
// import Signup from "./Signup"

function NavBar({ user, setUser, ownerList }) {

    const navigate = useNavigate()

    function handleLogout() {
        fetch('/logout', {method: 'DELETE' }).then((r) => {
            if (r.ok) {
                setUser(null)
            }
        })
        navigate('/')
    }
    
    return (
        <div className="navBar">
            <div className="userInfo">
                <p>User: {user.username}</p>
            </div>
            <div>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/owners'>Owners</NavLink>
            </div>
            <button className="logoutButton" onClick={handleLogout}>Logout</button>
            <button onClick={() => {console.log(ownerList)}}>Click</button>
        </div>
    )
}

export default NavBar