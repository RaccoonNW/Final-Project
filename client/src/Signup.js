import { useState } from "react"
import './App.css'

function Signup() {
    // const [username, setUsername] = useState('')
    // const [password, setPassword] = useState('')
    // const [confirmPassword, setConfirmPassword] = useState('')
    const [user, setUser] = useState(null)
    const [errors, setErrors] = useState(null)
  
    const [data, setData] = useState({
        username: "",
        password: "",
        confirmPassword: ""
    })
    // let data = {
    //   "username": username,
    //   "password": password,
    //   "password_confirmation": confirmPassword
    // }
    function handleChange(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
  
    function handleSubmit(e) {
      e.preventDefault()
      fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({data})
        
      })
      .then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user))
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
    }

    // function handleUserName(e) {
    //     setUsername(e.target.value)
    //   }
    
    //   function handlePassword(e) {
    //     setPassword(e.target.value)
    //   }
    
    //   function handleConfirmPassword(e) {
    //     setConfirmPassword(e.target.value)
    //   }
    
    return(
      <div className="signupForm">
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                value={data.username}
                onChange={handleChange}
                placeholder="Username..."
            />
            <input
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                placeholder="Password..."
            />
            <input
                type="password"
                name="confirmPassword"
                value={data.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password..."
            />
            <button type="submit">Signup</button>
        </form>
      </div>
        // <div>
        //     <form>
        //     <label className="label">Username</label>
        //     <input onChange={handleUserName} className="input"
        //     value={username} type="text" />

        //     <label className="label">Password</label>
        //     <input onChange={handlePassword} className="input"
        //     value={password} type="password" />

        //     <label className="label">Confirm Password</label>
        //     <input onChange={handleConfirmPassword} className="input"
        //     value={confirmPassword} type="password" />

        //     <button onClick={handleSubmit} className="btn" type="submit">
        //     Submit
        //     </button>
        //     </form>
            
        // </div>
    )
}

export default Signup