import React, { useState, useEffect, useContext } from 'react';
import "./searchbar.scss"
import { Link, useLocation } from 'wouter';
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Context
import { SearchBarContext } from '../../context/context';
export const SearchBar = ({ params }) => {
    const [keyword, setKeyword] = useState("");
    const [path, pushLocation] = useLocation();
    const {searchValue,setSearchValue,isSearching, setIsSearching} = useContext(SearchBarContext)   
   console.log(isSearching)
   

    const handleSubmit = (evt) => {
        evt.preventDefault()
        setIsSearching(true)
        // Move to other rute
        pushLocation(`/search/${keyword}`)
    }
    const handleInput = (evt) => {
        setKeyword(evt.target.value)
       
    }
    
    useEffect(() => {
        setSearchValue(keyword)
    }, [keyword]);
    return (
        <div>
            <form className='searchbar-cont' onSubmit={handleSubmit}>
                <input
                    type="text"
                    className='searchbar__input'
                    onChange={handleInput}
                    placeholder="Search your gifts"
                    value={keyword}
                    autoComplete="none"
                    autoCapitalize='none'
                    autoFocus='none'
                />
                {keyword && <input type="submit" value="Search" className='searchbar-submit-btn' />}
                
            </form>
        </div>
    )
}