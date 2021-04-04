import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { authFunctions } from '../Firebase';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = this.props;
      // email: "",
      // password: "",
      // firstname: "",
      // lastname: "",
      // success: false,
      // login: false,
      // uid: null
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirectToLogin = this.redirectToLogin.bind(this);
    }
    
    handleChange(event) {
      this.setState({[event.target.name]: event.target.value});
    }
    handleSubmit(event) {
      authFunctions.logIn(this.state.email, this.state.password);
      authFunctions.onUserActive((uid) => {
        this.setState({success: true, uid: uid});
      });
      event.preventDefault();
    }
    redirectToLogin() {
      this.setState({login: true})
    }

    render() { 
        return ( 
          <React.Fragment>
            <h1>Log in</h1>
            <form onSubmit={this.handleSubmit}>
              <label>Email: <input name="email" id="email" type="text" required onChange={this.handleChange} value={this.state.email} /></label><br />
              <label>Password: <input name="password" id="password" type="password" required onChange={this.handleChange} /></label><br />
              <button type="submit">Log In</button>
            </form>
          </React.Fragment>
         );
    }
}
 
export default LogIn;