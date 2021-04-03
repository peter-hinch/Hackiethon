import React, { Component } from 'react';
import Navbar from '../Components/Navbar';
import Home from '../Components/Home';

class Splash extends Component {
  state = {  }
  render() { 
    return ( 
      <React.Fragment>
        <Home />
      </React.Fragment>
      );
  }
}
 
export default Splash;