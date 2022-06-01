import React, { useState, useEffect } from 'react';
import "./styles.scss"
import SvgComponent from './SvgComponent';
export const Navbar = () => {
    const [scrollY, setScrollY] = useState(0)

    // Handle navbar depending of scroll value
    const handleNavbar = `${scrollY >100 ? "sticky" : ""}`
    // Tracking scroll 
    const trackingScroll = () => setScrollY(window.pageYOffset)
    window.addEventListener("scroll", trackingScroll)

    useEffect(() => {

    }, [scrollY])

    return (
        <nav className={`navbar ${handleNavbar}`}>
            <div className='navbar__cont-hero'>
                <SvgComponent />
                <h1 className='navbar__brand'>Giphy</h1>
            </div>


            <ul className='navbar__menu'>
                <li><a className='navbar-menu__item-link' href="/gifts/giphy">Home</a></li>
                <li><a className='navbar-menu__item-link' href="/gifts/gifts">Gifts</a></li>
                <li><a className='navbar-menu__item-link' href="/gifts/sports">Sports</a></li>
                <li><a className='navbar-menu__item-link' href="/gifts/trending">Trending</a></li>
                <li><a className='navbar-menu__item-link' href="/gifts/fun">Fun</a></li>
            </ul>


            <button className='navbar__btn-menu'>
                <span className='line'></span>
                <span className='line'></span>
                <span className='line'></span>
            </button>
        </nav>
    )
}