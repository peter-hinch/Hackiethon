import React, { Component } from 'react';
import Home from '../Components/Home';

class Splash extends Component {
  constructor(props) {
    super(props)
    this.state = this.props;
  }
  render() { 
    return ( 
      <React.Fragment>
        <Home />
      </React.Fragment>
      );
  }
}
 
export default Splash;