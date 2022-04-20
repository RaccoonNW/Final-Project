import { useState } from 'react';
import './App.css';

function App() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  let data = {
    "username": username,
    "password": password,
    "password_confirmation": confirmPassword
  }

  function handleSubmit(e) {
    e.preventDefault()

    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
      
    })

    // if (password === confirmPassword) {
    //   console.log('They match')
    // } else {
    //   console.log('Passwords do not match')
    // }



    // console.log(username, password, confirmPassword)
    // setUsername('')
    // setPassword('')
    // setConfirmPassword('')
  }

  //helpers

  function handleUserName(e) {
    setUsername(e.target.value)
  }

  function handlePassword(e) {
    setPassword(e.target.value)
  }

  function handleConfirmPassword(e) {
    setConfirmPassword(e.target.value)
  }

  return(
    <div>
      <form>
        <label className="label">Username</label>
        <input onChange={handleUserName} className="input"
        value={username} type="text" />

        <label className="label">Password</label>
        <input onChange={handlePassword} className="input"
        value={password} type="password" />

        <label className="label">Confirm Password</label>
        <input onChange={handleConfirmPassword} className="input"
        value={confirmPassword} type="password" />

        <button onClick={handleSubmit} className="btn" type="submit">
        Submit
        </button>
      </form>
      
    </div>
  )
}

export default App;
