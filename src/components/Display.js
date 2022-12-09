import React from "react";
import { Link } from 'react-router-dom'


function Display(){
    return(
        <div className="display">
            <h3>Welcome to <span>CowSoko</span></h3>
            <p><span>The Battle</span>for the Future of Farming<br></br>
            CowSoko allow you to own a cow at a cheaper price
            <br></br>CowSoko Solutioz(NZ)Limited has be operating since 2010</p>
            <div>
                <ul>
                    <li>1: Take a test to know how your farm is performing ...</li>
                    <li>2: How much money you can make by starting a dairy farm</li>
                    <li>3: Share results with friends</li>
                    <li>4: Get recommendations on what you need to improve</li>
                </ul>
            </div>

                <div>
                    <img src="https://images.pexels.com/photos/254178/pexels-photo-254178.jpeg?auto=compress&cs=tinysrgb&w=300"></img>
                    <img src="https://images.pexels.com/photos/2350739/pexels-photo-2350739.jpeg?auto=compress&cs=tinysrgb&w=300"></img>
                </div>
                <h2>To view Available Cows <br></br></h2>
             <Link to="/signup"><button >View More</button></Link>
             <Link to="/addcow"><button >Add Cow</button></Link>

        
            

        </div>
    )
}

export default Display