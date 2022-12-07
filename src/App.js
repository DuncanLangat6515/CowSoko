import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import {Signup}  from "./components/Signup";
import Navbar from "./components/Navbar";
import  {Login}  from "./components/Login";
import Home from "./components/Home"
import NewCow from "./components/NewCow";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
        {/* <Route exact path="/logout" element={<Logout/>}/> */}
        <Route exact path="/addcow" element={<NewCow/>}/>
      </Routes>
    </div>
  );
}

export default App;
;

