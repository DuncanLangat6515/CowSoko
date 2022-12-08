import React,{useState} from "react";
import {useNavigate} from 'react-router-dom'

function NewCow() {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
    const nav=useNavigate()
    function handleSubmit(e) {
        e.preventDefault();
        fetch("/cows", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            image: image,
            price: price,
          }),
        })
        .then(r=>{
          if(r.ok){
            nav('/')
          }
        })
      }
      return (
        <div className="new-cow-form">
          <h2>New Cow</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Cow breed"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(parseFloat(e.target.value))}
            />
            <button type="submit">Add Cow</button>
          </form>
        </div>
      );
}

export default NewCow
