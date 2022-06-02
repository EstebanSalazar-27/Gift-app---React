import React, { useState, useEffect } from 'react';
import "./listOfGifts.scss"
// Components
import { Gifts } from '../Gifts/Gifts';
import { getGifts } from "../../helpers/getGifts"
import { Spinner } from '../Spinner/Spinner';
import useGifts from '../../hooks/useGifts';

export const ListOfGifts = ({ params = { keyword: "perro" } }) => {
    const { keyword } = params
    const { gifts, loading } = useGifts({ keyword })

    if (loading) {
        return <Spinner />
    }
    return (
        <div className='listOfGifts-Results'>
            <div className='busquedas-titles'>
                <h2 className="title-search">Busqueda: {keyword}</h2>
                <h5 className='title-results'>(results {gifts.length})</h5>
            </div>
            <section className='gifts-list'>
                {gifts.map((el, idx) => <Gifts
                    key={el.id}
                    rating={el.rating}
                    title={el.title}
                    id={el.id}
                    url={el.images.downsized_medium.url}
                    height={el.images.downsized_medium.height}
                    width={el.images.downsized_medium.width}
                    idx={idx + 1}
                />)}
            </section>
        </div>

    )
}