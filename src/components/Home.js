import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function Home({cows, handleDelete}) {


function handleUpdate(id){
let price = parseInt(prompt('Price input'));
  fetch(`https://cow-soko-production.up.railway.app/cows/${id}`,{
    method:'PATCH',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(price)
  })
 
}
    const cowPic=cows.map((cow)=>(
        <div className='cow_card'>
        <img src={cow.image}/>
        <h2>Breeds: {cow.name}</h2>
        <p><span>Ksh:</span>{cow.price}</p>
        <button onClick={()=>handleUpdate(cow.id)}>update price</button>
        <button onClick={()=>handleDelete(cow.id)}>Purchase</button>
        </div>
    ))
  return (
    <div>
      {cowPic}
    </div>
  )
}

export default Home
