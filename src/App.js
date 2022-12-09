import { Route, Routes } from "react-router-dom";
import './App.css';
import {Signup}  from "./components/Signup";
import Navbar from "./components/Navbar";
import  {Login}  from "./components/Login";
import Home from "./components/Home"
import NewCow from "./components/NewCow";
import React, { useEffect, useState } from 'react'
import Display from "./components/Display";

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const[cows, setCows]=useState([])
  const [newData, setNewData] = useState(false);

  useEffect(()=>{
      fetch("https://cow-soko-production.up.railway.app/cows")
      .then(r=>r.json())
      .then(data=>{
          setCows(data)
      })
  },[newData])
  
  function handleDelete(id){
    console.log(id)
    fetch(`https://cow-soko-production.up.railway.app/cows/${id}`,{
      method: "DELETE",
    })
    .then(res=>res.json())
    .then(()=>{
      const remainingCows=cows.filter((remaining)=>remaining.id!==id)
      setCows(remainingCows)
    })
    handleNewData()
  }
  function handleNewData() {
    setNewData((newData) => !newData);
  }

  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Display/>}/>
        <Route exact path="/home" element={<Home cows={cows} handleDelete={handleDelete}/>}/>
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

