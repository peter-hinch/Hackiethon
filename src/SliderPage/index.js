import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SliderForm from './SliderForm';
import Navbar from './Navbar';
import './NavStyle.css';

ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <SliderForm/>
  </React.StrictMode>,
  document.getElementById('root')
);

