import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm({ onLogin, setIsLoadingLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  let navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user), setIsLoadingLogin(false), navigate("/home"));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div className="login-signup-main-div">
      <div className="login-signup-container" >
        <h2 className="login-signup-title">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="login-signup-input">
          <label>Username</label>
            <input
              type="text"
              id="username"
              autoComplete="off"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="login-signup-input">
          <label>Password</label>
            <input
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
            <button 
              variant="fill" 
              color="primary" 
              className="login-signup-button"
              type="submit"
            >
              Login
            </button>
            <div>
              {errors.map((err) => (
                <p key={err}>{err}</p>
              ))}
            </div>
            <p>--------------------</p>
            <div className="toggle-login-signup-div">
              <p>
                Don't have an account?
                <button className="toggle-login-signup-button" onClick={() => navigate('/signup')}>
                    Sign Up
                </button>
              </p>

            </div>
        </form>
      </div>

    </div>
  );
}

export default LoginForm;
