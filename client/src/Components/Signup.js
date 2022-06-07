import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../App.css'

function Signup({ onLogin, setIsLoadingLogin, setLoggedInLocal }) {

  const navigate = useNavigate()
  const [errors, setErrors] = useState([])
  const [userData, setUserData] = useState({
      username: "",
      password: "",
      password_confirmation: ""
    });

  function handleChange(e) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
  }
  
  function handleSubmit(e) {
    e.preventDefault()
    setErrors([])
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({userData})
    })
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user), localStorage.setItem('logged-in', JSON.stringify(true)), setIsLoadingLogin(false), navigate("/home"))
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    }); 
  }
    
  return(
    <div className="login-signup-main-div">
      <div className="login-signup-container">
        <h2 className='login-signup-title'>Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className='login-signup-input'>
            <label>Username</label>
            <input
                type="text"
                name="username"
                autoComplete='off'
                value={userData.username}
                onChange={handleChange}
                // placeholder="Username..."
            />
          </div>
          <div className='login-signup-input'>
            <label>Password</label>
            <input
                type="password"
                name="password"
                autoComplete='off'
                value={userData.password}
                onChange={handleChange}
                // placeholder="Password..."
            />
          </div>
          <div className='login-signup-input'>
            <label>Confirm Password</label>
            <input
                type="password"
                name="password_confirmation"
                autoComplete='off'
                value={userData.password_confirmation}
                onChange={handleChange}
                // placeholder="Confirm Password..."
            />
          </div>
            <button type="submit" className="login-signup-button">Signup</button>
            <div className='errors'>
              {errors.map((err) => (
                <p key={err}>{err}</p>
              ))}
            </div>
            <p>--------------------</p>
            <div className="toggle-login-signup-div">
              <p>
                  Already have an account?
                  <button className="toggle-login-signup-button" onClick={() => navigate('/login')}>
                      Log In
                  </button>
              </p>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Signup