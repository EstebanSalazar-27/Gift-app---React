import "./App.css"
import React, { useState, useEffect } from 'react';

// Components
import {getGifts} from "./helpers/getGifts"
import { ListOfGifts } from "./components/ListOfGifts/ListOfGifts";
import {Navbar} from "./components/Navbar/Navbar"
function App() {
const [gifts, setGifts] = useState([])
const [loading, setLoading] = useState(true)



 
  

useEffect(()=>{
  setInterval(() => {
   setLoading(false)
  }, 500);
  getGifts(30,0,"rick and morty").then(data => setGifts(data))
  
},[])



  return (
    <div className="App">

      <div className="wrapper-layout">
         <Navbar/>
         { loading ? <h2>Loading...</h2> :<ListOfGifts gifts={gifts} />}
      </div>
    
   


    </div>
  );
}

export default App;
