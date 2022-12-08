import React, { useEffect, useState } from 'react'


function Home({cows, handleDelete}) {



    const cowPic=cows.map((cow)=>(
        <div className='cow_card'>
        <img src={cow.image}/>
        <h2>Breeds: {cow.name}</h2>
        <p><span>Ksh:</span>{cow.price}</p>
        <button>update price</button>
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
