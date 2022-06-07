import "./App.css"
import React from "react";

// Wooter routes
import { Route } from "wouter";
// Pages
import { Home } from "./pages/Home/Home";
import { SearchResults } from "./pages/SearchResults/SearchResults"
// Components
import { Details } from "./pages/Details/Details";
import { Navbar } from "./components/Navbar/Navbar"
import { SearchBar } from "./components/SearchBar/SearchBar";

import { ListOfGifts } from "./components/ListOfGifts/ListOfGifts";

// Context
import SearchProvider from "./context/context";
import GiftsProvider from "./context/giftsContext";
function App() {

  return (

    <SearchProvider>
      <GiftsProvider >
        <div className="App">

          <div className="wrapper-layout">
            <Navbar />
            <SearchBar />

            {/* Routes */}
            <Route component={Home} path="/" />
            <Route component={SearchResults} path="/search/:keyword" />
            <Route component={Details} path="/gifts/details/::id" />
            <Route component={ListOfGifts} path="/category/:keyword" />


          </div>
        </div>
      </GiftsProvider>
    </SearchProvider>

  );
}

export default App;
