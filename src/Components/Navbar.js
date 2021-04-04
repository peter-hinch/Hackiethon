import React, { Component } from 'react';
import { HashRouter, NavLink } from "react-router-dom";
import './NavStyle.css';

const menu = document.querySelector('#mobile-menu'); //targets the spans
const menulink = document.querySelector('.navbar__menu');// targets the navbar_menu list

console.log(menu);


const Navbar = () => {
    function handleClick(e)
    {   const menu = document.querySelector('#mobile-menu'); 
        const menulink = document.querySelector('.navbar__menu');
        menu.classList.toggle('is-active');     
        menulink.classList.toggle('active');   
    }
    return (
        <nav className="navbar">
        <HashRouter>
            <div className="navbar__container">
                <NavLink to="/home" id="navbar__logo"><i className="fas fa-laptop-code"></i>I Am Here</ NavLink>
                    <div  className="navbar__toggle" id="mobile-menu"onClick={handleClick}>
                    <span className="bar"></span> 
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul className="navbar__menu">
                    <li className="navbar__item">
                        <NavLink to="/" className="navbar__links">Home</ NavLink>
                    </li>
                    {/* <li className="navbar__item">
                        <NavLink to="/" class="navbar__links">Employee</ NavLink>
                    </li> */}
                    <li className="navbar__item">
                        <NavLink to="/login" className="navbar__links">Login</ NavLink>
                    </li>
                    <li className="navbar__btn">
                        <NavLink to="/signup" className="button" id = "signup__btn">Sign Up</ NavLink>
                    </li>
                </ul>
            </div>
        </HashRouter>
    </nav>
    )
}

export default Navbar;
