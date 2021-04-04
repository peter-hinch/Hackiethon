import React, { Component } from 'react';
import campfire from './campfire.svg';
import './HomeStyle.css';
import { HashRouter, NavLink } from "react-router-dom";

function ByeBye(props) {
    return (
    
            <div className="main">
                <div className="main__container">
                    <div className="main__content"> 
                        <h1>Stay Hydrated</h1>
                </div>
                <div className="main__image--container">
                        <img src={campfire}alt="pic" id ="main__img"></img>
                 </div>
                </div>
            </div>
    )
}


export default ByeBye;