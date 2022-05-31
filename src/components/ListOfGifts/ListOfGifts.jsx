 import React, { useState, useEffect } from 'react';
import { Gifts } from '../Gifts/Gifts';
import "./styles.scss"

export const ListOfGifts = ({gifts}) =>{
   
  
    return(
        <section className='gifts-list'>
                {gifts.map((el,idx) => <Gifts 
                key={el.id} 
                rating={el.rating} 
                title={el.title}
                id={el.id}
                url={el.images.downsized_medium.url}
                idx={idx+1}
                />)}
        </section>
    )
}