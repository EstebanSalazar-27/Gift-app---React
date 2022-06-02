import "./App.css"
import React, { useState, useEffect } from 'react';

// Wooter routes
import { Route } from "wouter";
// Pages
import { Home } from "./pages/Home/Home";
import {SearchResults} from "./pages/SearchResults/SearchResults"
// Components
import { Details } from "./pages/Details/Details";
import { ListOfGifts } from "./components/ListOfGifts/ListOfGifts";
import {Navbar} from "./components/Navbar/Navbar"
import { Spinner } from "./components/Spinner/Spinner";
import { SearchBar } from "./components/SearchBar/SearchBar";

function App() {


useEffect(()=> {

  
}, [])

  return (
    <div className="App">
      <div className="wrapper-layout">
         <Navbar/>
         <SearchBar/>
         {/* Routes */}
         <Route component={Home} path="/" />
         <Route component={SearchResults}  path="/search/:keyword"/> 
         <Route component={ListOfGifts}  path="/category/:keyword"/> 
         <Route component={Details} path="/gifts/details/:id"/>
         
      </div>
    </div>
  );
}

export default App;
