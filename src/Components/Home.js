import React, { Component } from 'react';
import yoga from './yoga.svg'
import './HomeStyle.css'
function Home(props) {
    return (
    
            <div className="main">
                <div className="main__container">
                    <div className="main__image--container">
                        <img src={yoga}alt="pic" id ="main__img"></img>
                    </div>

                    <div className="main__content"> 
                        <h1>How Are You?</h1>
                       
                        
                        <button className="main__button"><a href="signup.html">Get Started</a></button>
                    </div>
                </div>
            </div>
    )
}


export default Home;