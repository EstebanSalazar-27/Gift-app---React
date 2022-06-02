import React, { useState, useEffect } from 'react';
import "./searchbar.scss"
import { Link,useLocation } from 'wouter';
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SearchBar = ({params}) => {
    const [keyword, setKeyword] = useState("")
    const [path, pushLocation] = useLocation()

    const handleSubmit = (evt) => {
        evt.preventDefault()
         // Move to other rute
         pushLocation(`/search/${keyword}`)
    }
    const handleInput = (evt) => {
        setKeyword(evt.target.value)
    }
    
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
                   { keyword && <input type="submit" value="Search" className='searchbar-submit-btn' />}
            </form>
        </div>
    )
}