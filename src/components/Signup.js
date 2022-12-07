import React, { useState } from "react";

export const Signup = (props) => {
    const [username, setName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState("");



    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            username, 
            password,
            password_confirmation:passwordConfirmation })
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
            <h2>Signup</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={username} onChange={(e)=> setName(e.target.value)} type="text" placeholder="Your Name" id="name" name="name"/>
            <label htmlFor="password">password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <label htmlFor="password">Password Confirmation</label>
        <input type="password" id="password_confirmation" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/> 
        <button type="submit" class="btn btn-outline-success">Sign Up</button>
        </form>
    </div>
    )
}