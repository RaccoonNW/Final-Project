import React from "react"
import { NavLink, useNavigate } from "react-router-dom"

function NavBar({ user, setUser, setIsLoadingLogin }) {

    const navigate = useNavigate()

    function handleLogout() {
        setIsLoadingLogin(true)
        fetch('/logout', {method: 'DELETE' }).then((r) => {
            if (r.ok) {
                setUser(null)
                setIsLoadingLogin(false)
            }
        })
        navigate('/')
    }

    return (
        <nav className="navbar">
            <div className="page-title">Property Poodle</div>
            <div className="navbar-links">
                <NavLink className="nav-links" to='/home'>Home</NavLink>
                <NavLink className="nav-links" to='/owners'>Owners</NavLink>
                <NavLink className="nav-links" to='/houses'>Houses</NavLink>
                <NavLink className="nav-links" to='/add-owner'>Add Owner</NavLink>
                {/* <NavLink className="nav-links" to='/add-house'>Add House</NavLink> */}
                <button className="logout-button" onClick={handleLogout}>Logout</button>
            </div>
        </nav>
    )
}

export default NavBar