import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { Route, HashRouter } from "react-router-dom";
import Navbar from './Components/Navbar';
import Splash from './Pages/Splash';
import SignUp from './Pages/SignUp';
import LogIn from './Pages/LogIn';
import RadioForm from './RadioPage/RadioForm';
import EvaluatePage from './Pages/EvaluatePage';

let state = {
  // email: "",
  // password: "",
  // firstname: "",
  // lastname: "",
  // success: false,
  // login: false,
  // uid: null
}

function withProps(Component, props) {
  return function(matchProps) {
    return <Component {...props} {...matchProps} />
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <HashRouter>
      <Route exact path='/' component={withProps(Splash, { ...state })} />
      <Route exact path='/home' component={withProps(Splash, { ...state })} />
      <Route exact path='/evaluate' component={withProps(EvaluatePage, { ...state })} />
      <Route exact path='/signup' component={withProps(SignUp, { ...state })} />
      <Route exact path='/login' component={withProps(LogIn, { ...state })} />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
