import React, { Component } from 'react';
import './NavStyle.css';

const menu = document.querySelector('#mobile-menu'); //targets the spans
const menulink = document.querySelector('.navbar__menu');// targets the navbar_menu list

console.log(menu);


const Navbar = () => {
    return (
        
        <nav className="navbar">
        <div className="navbar__container">
            <a id="navbar__logo" href="index.html"><i className="fas fa-laptop-code"></i>I Am Here</a>
                <div  className="navbar__toggle" id="mobile-menu">
                <span className="bar"></span> 
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <ul className="navbar__menu">
                <li className="navbar__item">
                    <a href="index.html" className="navbar__links">Home</a>
                </li>
                <li className="navbar__item">
                    <a href="tech.html" class="navbar__links">Employee</a>
                </li>
                <li className="navbar__item">
                        <a href="product.html" className="navbar__links">Employer
                    </a>
                </li>
                <li className="navbar__btn">
                    <a href="signup.html" className="button" id = "signup__btn">Sign In</a>
                </li>
                <li>
                    <a href="/" id="search__logo"><i className="fas fa-search"></i> </a>
                </li>
            </ul>
            
            </div>
            
    </nav>
    )
}

export default Navbar;
