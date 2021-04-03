import React, { Component } from 'react';
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
        <div className="navbar__container">
            <a id="navbar__logo" href="index.html"><i className="fas fa-laptop-code"></i>I Am Here</a>
                <div  className="navbar__toggle" id="mobile-menu"onClick={handleClick}>
                <span className="bar"></span> 
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <ul className="navbar__menu">
                <li className="navbar__item">
                    <a href="./home" className="navbar__links">Home</a>
                </li>
                <li className="navbar__item">
                    <a href="./" class="navbar__links">Employee</a>
                </li>
                <li className="navbar__item">
                        <a href="./" className="navbar__links">Employer</a>
                </li>
                <li className="navbar__btn">
                    <a href="./SignUp" className="button" id = "signup__btn">Sign In</a>
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default Navbar;
