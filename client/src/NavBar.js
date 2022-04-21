import React from "react"
import { Link, useHistory } from "react-router-dom"

function NavBar() {
    return (
        <div className="navBar">
            <Link to="/signup" className="signupButton">Signup</Link>
        </div>
    )
}

export default NavBar