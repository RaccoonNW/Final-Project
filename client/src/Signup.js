import React, { useState } from 'react'
import './App.css'

function Signup({ onLogin }) {
    const [errors, setErrors] = useState([])
    const [data, setData] = useState({
        username: "",
        password: "",
        password_confirmation: ""
    })

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
          'Content-Type': 'application/json'
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
      <div className="signupForm">
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                autoComplete='off'
                value={data.username}
                onChange={handleChange}
                placeholder="Username..."
            />
            <input
                type="password"
                name="password"
                autoComplete='off'
                value={data.password}
                onChange={handleChange}
                placeholder="Password..."
            />
            <input
                type="password"
                name="password_confirmation"
                autoComplete='off'
                value={data.password_confirmation}
                onChange={handleChange}
                placeholder="Confirm Password..."
            />
            <button type="submit">Signup</button>
            <div className='errors'>
              {errors.map((err) => (
                <p key={err}>{err}</p>
              ))}
            </div>
        </form>
      </div>
    )
}

export default Signup