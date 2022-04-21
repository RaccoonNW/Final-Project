import React from "react"
import { NavLink, useNavigate } from "react-router-dom"
// import Signup from "./Signup"

function NavBar({ user, setUser }) {

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
            <button className="logoutButton" onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default NavBar