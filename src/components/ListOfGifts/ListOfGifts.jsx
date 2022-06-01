 import React, { useState, useEffect } from 'react';
import { Gifts } from '../Gifts/Gifts';
import {getGifts} from "../../helpers/getGifts"
import "./styles.scss"

export const ListOfGifts = ({params}) =>{
    const [gifts, setGifts] = useState([])
    const {keyword} = params
    console.log(keyword)
    useEffect(()=>{
        getGifts(50,0,keyword).then(data => setGifts(data)) 
      },[keyword])
  
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