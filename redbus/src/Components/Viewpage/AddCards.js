
import React, { useState } from "react";
function AddCards() {
  const [Travelsname, setTravelsname] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(0);

  
  return (
    <div className="container" style={{ backgroundColor:'' ,boxShadow: "10px 10px 5px #ccc" , paddingTop:'20px',textAlign:'center'}}>
        <form>
            
            <p>Travelsname</p>
            <input type="text" placeholder="Travelsname"></input>

            <p>Travelsname</p>
            <input type="text" placeholder="Travelsname"></input>

             <p>Travelsname</p>
            <input type="text" placeholder="Travelsname"></input>           
        </form>

    </div>
    )}

export default AddCards;