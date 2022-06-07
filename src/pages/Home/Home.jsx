import React from "react";

import "./home.scss"
// Components
import { Banner } from './Banner/Banner';
import { ListOfGifts } from '../../components/ListOfGifts/ListOfGifts';



export const Home = (props) => {

    return (
        <div className='home-page'>
            <div>
            <Banner />
            <ListOfGifts/>
            </div>
          

        </div>
    )
}