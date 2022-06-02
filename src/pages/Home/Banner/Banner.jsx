 import React, { useState, useEffect } from 'react';
 import logo from "./pride-banner.gif"

export const Banner = () =>{

    return(
        <div className='home__banner'>
              <img src={logo} alt="" className='banner'/> 
        </div>
    )
}