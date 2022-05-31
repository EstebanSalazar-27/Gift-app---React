import React, { useState, useEffect } from 'react';
import "./styles.scss"

export const Navbar = () => {
    const [scrollY,setScrollY] =  useState(0)

    // Handle navbar depending of scroll value
        const handleNavbar = `${scrollY > 200 ? "sticky" : ""}`
    // Tracking scroll 
    const trackingScroll=()=>setScrollY(window.pageYOffset)
    window.addEventListener("scroll", trackingScroll)

    useEffect(()=>{
       
    },[scrollY])

    return (
        <nav className={`navbar ${handleNavbar}`}>
            <div>
            <h1 className='navbar__brand'>Giphy</h1>
            </div>
            

            <ul className='navbar__menu'>
                <li><a className='navbar-menu__item-link' href="#">Home</a></li>
                <li><a className='navbar-menu__item-link' href="#">Gifts</a></li>
                <li><a className='navbar-menu__item-link' href="#">Sports</a></li>
                <li><a className='navbar-menu__item-link' href="#">Trending</a></li>
                <li><a className='navbar-menu__item-link' href="#">Fun</a></li>
            </ul>

            
            <button className='navbar__btn-menu'>
                <span className='line'></span>
                <span className='line'></span>
                <span className='line'></span>
            </button>
        </nav>
    )
}