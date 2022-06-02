import React, { useState, useEffect } from 'react';

import "./home.scss"
// Components
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { Banner } from './Banner/Banner';
import { ListOfGifts } from '../../components/ListOfGifts/ListOfGifts';
import useGifts from '../../hooks/useGifts';
import { Navbar } from '../../components/Navbar/Navbar';
import { useLocation } from 'wouter';


export const Home  = (props) =>{
  
    
    return(
        <div className='home-page'>
            <Banner/>
            <ListOfGifts />
            
        </div>
    )
}