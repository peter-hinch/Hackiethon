import React, { Component } from 'react';
import yoga from './yoga.svg';
import './HomeStyle.css';
import { HashRouter, NavLink } from "react-router-dom";

function Home(props) {
    return (
    
            <div className="main">
                <div className="main__container">
                    <div className="main__image--container">
                        <img src={yoga}alt="pic" id ="main__img"></img>
                    </div>

                    <div className="main__content"> 
                        <h1>How Are You?</h1>
                        <button className="main__button"><NavLink to="/RadioForm" >Start Now</ NavLink></button>
                    </div>
                </div>
            </div>
    )
}


export default Home;