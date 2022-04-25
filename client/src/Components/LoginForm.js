import React, { useState } from "react";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

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
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div className="login-signup-container" >
      <h2 className="login-signup-title">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="login-signup-input">
        <label>Username</label>
          <input
            type="text"
            id="username"
            autoComplete="off"
            // placeholder="username"
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
            // placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
          <button 
            variant="fill" 
            color="primary" 
            className="login-signup-button"
            type="submit">
            Login
          </button>
          <div>
            {errors.map((err) => (
              <p key={err}>{err}</p>
            ))}
          </div>
      </form>
    </div>
  );
}

export default LoginForm;
