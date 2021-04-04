import React, { Component } from 'react';
import ByeBye from '../Components/ByeBye';

class Final extends Component {
  constructor(props) {
    super(props)
    this.state = this.props;
  }
  render() { 
    return ( 
      <React.Fragment>
        <ByeBye />
      </React.Fragment>
      );
  }
}
 
export default Final;