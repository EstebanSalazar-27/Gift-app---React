import React, { useState, useEffect } from 'react';
import './giftDetails.scss'

export const GiftDetail = (props) => {
    const { ...gift } = props
    console.log(gift)

    return (
        <div className='gift-details-card'>

            <div className='gift-card__gift-cont'>
                <img src={props.images.downsized_medium.url} className="gift-details__img" width={gift.images.downsized_medium.width} height={gift.images.downsized_medium.height} alt="" />
            </div>

            <div className='gift-card__gift-information-cont'>
               
                    <h3 className='gift-card__heading title'>{gift.title}</h3>
                    <a className='gift-card__heading sub-titles' href={gift.url}>Gif Url</a>
                    <h3 className='gift-card__heading sub-titles'>Width: {gift.images.downsized_medium.width}</h3>
                    <h3 className='gift-card__heading sub-titles'>Height: {gift.images.downsized_medium.height}</h3>

                <div className='gift-datail__rating'>
                    <h6 className='gift-datail__rating'> Rating:  {props.rating}</h6>
                </div>
            </div>

        </div>
    )
}