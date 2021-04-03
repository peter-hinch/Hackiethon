import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import{BrowserRouter, Route, Switch} from 'react-router-dom';
import Splash from './Pages/Splash';
import SignUp from './Pages/SignUp';
import LogIn from './Pages/LogIn';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Splash} />
        <Route exact path='/home' component={Splash} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/login' component={LogIn} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
