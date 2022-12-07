import React, { useEffect, useState } from 'react'

function Home() {
    const[cows, setCows]=useState([])
    useEffect(()=>{
        fetch('/cows')
        .then(r=>r.json())
        .then(data=>{
            console.log(data)
            setCows(data)
        })
    },[])

    const cowPic=cows.map((cow)=>(
        <div className='cow_card'>
        <img src={cow.image}/>
        <h2>Breeds: {cow.name}</h2>
        <p><span>Ksh:</span>{cow.price}</p>
        <button>Purchase</button>
        </div>
    ))
  return (
    <div>
      {cowPic}
    </div>
  )
}

export default Home
