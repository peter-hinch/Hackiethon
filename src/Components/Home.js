import React, { Component } from 'react';
import './HomeStyle.css';
import { HashRouter, NavLink } from "react-router-dom";
import campfire from './campfire.svg';
import joyride from './joyride.svg';

function Home(props) {
    return (
    
            <div className="main">
                <div className="main__container">
                    <div className="main__image--container">
                        <img src={joyride} alt="pic" id ="main__img"></img>
                    </div>

                    <div className="main__content"> 
                        <h1>How Are You?</h1>
                        <button className="main__button"><NavLink to="/SliderForm">Start Now</ NavLink></button>
                    </div>
                </div>
            </div>
    )
}


export default Home;