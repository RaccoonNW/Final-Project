import React, { useState } from 'react'
import { useNavigate, Outlet } from 'react-router-dom';
import '../App.css'

function Signup({ onLogin }) {

  let navigate = useNavigate()
  const [errors, setErrors] = useState([])
  const [data, setData] = useState({
      username: "",
      password: "",
      password_confirmation: ""
    });

  function handleChange(e) {
    setData({
      ...data,
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
      body: JSON.stringify({data})
    })
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user))
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
                value={data.username}
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
                value={data.password}
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
                value={data.password_confirmation}
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
        </form>
      </div>
    </div>
  )
}

export default Signup