 import React, { useState, useEffect } from 'react';
 import "./gifts.scss"

export const Gifts = ({title,url,rating,id,idx}) =>{
    

   
    return(
        <a href={`#${title}`} className='gifts-list__gift-card'>
            <img className='gift-card__img-gift' src={url} alt={title} />
            <div className='gift-card__info'>
                {title ? <h6 className='gift-card__title'>{title}</h6> :  <h6 className='gift-card__title'>{id}</h6>  }
                <div className='gift-card__rating-cont'>
                     <h6 className='gift-card__rating'>{rating}</h6>
                </div>
               
            </div>
     
        </a>
    )
}