import React, { useState } from "react";
export const Login = (props) => {
  const [username, setUsername] = useState(null);
  const [password, setPassward] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password })
    })
    .then((res) => {
        if (res.ok) {
          res.json().then((data) => console.log(data));
        }
        else {
            res.json().then(err=>console.log(err))
        }
      })
  };

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="username">username</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="name"
          placeholder="Your name"
          id="name"
          name="name"
        />
        <label htmlFor="password">password</label>
        <input
          value={password}
          onChange={(e) => setPassward(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button type="submit">Log In</button>
      </form>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}
      >
        Don't have an account? Register here.
      </button>
    </div>
  );
};
