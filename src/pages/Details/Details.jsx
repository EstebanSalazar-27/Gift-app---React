import React, { useState, useEffect, useContext } from 'react';
import { useRoute } from 'wouter';
import {Gifts} from "../../components/Gifts/Gifts"
import { GiftsContext } from '../../context/giftsContext';
import { GiftDetail } from './GiftDetail/GiftDetail';

export const Details = ({params}) => {
    const {gifts} = useContext(GiftsContext)
    
    
        const gift = gifts.find(gift => gift.id === params.id )
       
    
   
    return (
        <div>
          <GiftDetail {...gift} />
        </div>
    )
}