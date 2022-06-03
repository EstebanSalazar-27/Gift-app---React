import React, { useState, useEffect } from 'react';
import { ListOfGifts } from '../../../components/ListOfGifts/ListOfGifts';



export const Trending = (props) =>{
    console.log(props)
    return(
        <div>
            <div>
            <h1 color='white'>ASDASDAD</h1>
            </div>
           
            <ListOfGifts {...props} />
        </div>
    )
}