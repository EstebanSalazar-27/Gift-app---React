import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import "./gifts.scss"

export const Gifts = (props) => {

    return (
        <Link to={`/gifts/details/:${props.id}`} className='gifts-list__gift-card' >
            <img className='gift-card__img-gift' height={props.height} width={props.width} src={props.url} alt={props.title} />
            <div className='gift-card__info'>
                {props.title ? <h6 className='gift-card__title'>{props.title}</h6> : <h6 className='gift-card__title'>{props.id}</h6>}
                <div className='gift-card__rating-cont'>
                    <h6 className='gift-card__rating'>{props.rating}</h6>
                </div>

            </div>

        </Link>
    )
}