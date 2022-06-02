import React, { useState, useEffect } from 'react';
import "./styles.scss"
import SvgComponent from './SvgComponent';
import { Link } from 'wouter';
export const Navbar = () => {
    const [scrollY, setScrollY] = useState(0)

    // Handle navbar depending of scroll value
    const handleNavbar = `${scrollY > 100 ? "sticky" : ""}`
    // Tracking scroll 
    const trackingScroll = () => setScrollY(window.pageYOffset)
    window.addEventListener("scroll", trackingScroll)

    useEffect(() => {

    }, [scrollY])

    return (
        <nav className={`navbar ${handleNavbar}`}>
            <div className='navbar__cont-hero'>
                <SvgComponent />
                <Link to="/" className='navbar__brand'>GIPHY</Link>
            </div>
            <ul className='navbar__menu'>
                <li><Link to="/" className='navbar-menu__item-link'>Home</Link></li>
                <li><Link to="/category/gifts" className='navbar-menu__item-link'>Gifts</Link></li>
                <li><Link to="/category/sports" className='navbar-menu__item-link'>Sports</Link></li>
                <li><Link to="/category/trending" className='navbar-menu__item-link' >Trending</Link></li>
                <li><Link to="/category/fun" className='navbar-menu__item-link'>Fun</Link></li>
            </ul>
            <button className='navbar__btn-menu'>
                <span className='line'></span>
                <span className='line'></span>
                <span className='line'></span>
            </button>
        </nav>
    )
}