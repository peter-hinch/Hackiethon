import React, { Component } from 'react';
import ByeBye from '../Components/ByeBye';

class Splash extends Component {
  constructor(props) {
    super(props)
    this.state = this.props;
  }
  render() { 
    return ( 
      <React.Fragment>
        <Bye />
      </React.Fragment>
      );
  }
}
 
export default Final;