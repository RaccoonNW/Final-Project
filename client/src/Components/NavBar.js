import React from "react"
import { NavLink, useNavigate } from "react-router-dom"

function NavBar({ setUser }) {

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
        <nav className="navbar">
            <div className="page-title">Project</div>
            <div className="navbar-links">
                <NavLink className="nav-links" to='/'>Home</NavLink>
                <NavLink className="nav-links" to='/owners'>Owners</NavLink>
                <NavLink className="nav-links" to='/houses'>Houses</NavLink>
                <button className="logout-button" onClick={handleLogout}>Logout</button>
            </div>
        </nav>
    )
}

export default NavBar