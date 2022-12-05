import React, {useState}from "react";
impo

function Signup()
const [username, setUsername]= useState("")
const [password, setPassword] = useState("")
const [passwordConfirmation, setPasswordConfirmation] = useState("");
const [errors, setErrors] = useState([]);



return(
  <>
  <form>
    <label for="username">Username</label>
  <input value={username} ></input>
  </form>
  </>
)

export default Signup