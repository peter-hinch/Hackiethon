import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import { Route, HashRouter } from "react-router-dom";
import SignUp from './Pages/SignUp';
import SliderForm from './SliderPage/SliderForm';
import LogIn from './Pages/LogIn';
import Final from './Pages/Final';
import RadioForm from './RadioPage/RadioForm'
import EvaluatePage from './Pages/EvaluatePage';
import Navbar from './Components/Navbar';
import Splash from './Pages/Splash';

let state = {
  // email: "",
  // password: "",
  // firstname: "",
  // lastname: "",
  // success: false,
  // login: false,
  // uid: null
}

// function withProps(Component, props) {
//   return function(matchProps) {
//     return <Component {...props} {...matchProps} />
//   }
// }

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <HashRouter>
      <Route exact path='/' component={Splash} />
      <Route exact path='/home' component={Splash} />
      <Route exact path='/evaluate' component={EvaluatePage} />
      <Route exact path='/signup' component={SignUp} />
      <Route exact path='/login' component={LogIn} />
      <Route exact path='/sliders' component={SliderForm} />
      <Route exact path='/SliderForm' component={SliderForm} />
      <Route exact path='/RadioForm' component={RadioForm} />
      <Route exact path='/final' component={Final} />

    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
