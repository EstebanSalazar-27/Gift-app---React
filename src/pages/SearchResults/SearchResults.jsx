import React, { useState, useEffect } from 'react';
import { ListOfGifts } from '../../components/ListOfGifts/ListOfGifts';
import useGifts from '../../hooks/useGifts';



export const SearchResults = (props)=>{
   
    
    return(
        <div>
          <ListOfGifts {...props}/>
        </div>
    )
}
