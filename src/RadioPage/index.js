import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RadioForm from './RadioForm'
import Navbar from './Navbar';

ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <RadioForm/>
  </React.StrictMode>,
  document.getElementById('root')
);

