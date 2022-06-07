import React, { useState, useEffect, useContext } from 'react';
import "./listOfGifts.scss"
// Components
import { Gifts } from '../Gifts/Gifts';
import { Spinner } from '../Spinner/Spinner';
import useGifts from '../../hooks/useGifts';
import { HeaderForSearched } from '../HeadingResults/HeadingResultsSearch';
import { SearchBarContext } from '../../context/context';

export const ListOfGifts = ({ params = { keyword: "giphy" } }) => {
    const { keyword } = params
    const { gifts, loading, lastSearch } = useGifts({ keyword })

    if (loading) {
        return <Spinner />
    }

    return (
        <div className='listOfGifts-Results'>

            <section className='gifts-list'>


                {gifts.length <= 0 
                    ?
                    <h2>reto</h2>
                    :
                    <>
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
                    </>

                }
            </section>
        </div>

    )
}