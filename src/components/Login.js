import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassward] = useState("");
  const [errors, setErrors] = useState([]);
  const nav=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://cow-soko-production.up.railway.app/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password })
    })
    .then((res) => {
        if (res.ok) {
          res.json().then((data) => console.log(data));
          nav('/home')
        }
        else {
          res.json().then((err) => setErrors(err.errors));
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
      <formField>
        {errors?.map((err) => (
          <error key={err}>{err}</error>
        ))}
      </formField>
      </form>
    </div>
  );
};
