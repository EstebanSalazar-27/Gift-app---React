import "./App.css"
import React, { useState, useEffect } from 'react';

// Wooter routes
import { Route } from "wouter";
// Components

import { ListOfGifts } from "./components/ListOfGifts/ListOfGifts";
import {Navbar} from "./components/Navbar/Navbar"
import { Spinner } from "./components/Spinner/Spinner";
function App() {
const [loading, setLoading] = useState(true)

useEffect(()=> {
  setInterval(() => {
    setLoading(false)
   }, 1000);
}, [])
 
  return (
    <div className="App">
      <div className="wrapper-layout">
         <Navbar/>
         { loading ? <Spinner/> : <Route component={ListOfGifts}  path="/gifts/:keyword"/> }
      </div>
    </div>
  );
}

export default App;
