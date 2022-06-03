import React, { useState, useEffect, useContext } from 'react';
import "./listOfGifts.scss"
// Components
import { Gifts } from '../Gifts/Gifts';
import { getGifts } from "../../helpers/getGifts"
import { Spinner } from '../Spinner/Spinner';
import useGifts from '../../hooks/useGifts';
import { HeaderForSearched } from '../HeadingResults/HeadingResultsSearch';
import { SearchBarContext } from '../../context/context';

export const ListOfGifts = ({ params = { keyword: "random" } }) => {
    const { keyword } = params
    const { gifts, loading, lastSearch } = useGifts({ keyword })
    const { searchValue,isSearching,setIsSearching} = useContext(SearchBarContext)
    



    
    if (loading) {
        return <Spinner />
    }

    return (
        <div className='listOfGifts-Results'>
            {
                isSearching
                    &&
                    <HeaderForSearched keyword={keyword} gifts={gifts} />      
            }
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