import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { authFunctions } from '../Firebase';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      success: false,
      login: false,
      uid: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirectToLogin = this.redirectToLogin.bind(this);
  }
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }
  handleSubmit(event) {
    authFunctions.signUp(
      this.state.firstname,
      this.state.lastname,
      this.state.email,
      this.state.password
    );
    authFunctions.onUserActive((uid) => {
      this.setState({success: true, uid: uid});
      console.log(this.state);
    });
    event.preventDefault();
  }
  redirectToLogin() {
    this.setState({login: true})
  }

  render() { 
    if (this.state.login) {
      return <Redirect to='./login' />
    }
    if(this.state.success) {
      return <Redirect to="./home" />
    }
    return ( 
      <React.Fragment>
        <h1>Sign up</h1>
        <form onSubmit={this.handleSubmit}>
          <label>First Name: <input name="firstname" id="firstname" type="text" required onChange={this.handleChange} value={this.state.firstname} /></label><br />
          <label>Last Name: <input name="lastname" id="lastname" type="text" required onChange={this.handleChange} value={this.state.lastname} /></label><br />
          <label>Email: <input name="email" id="email" type="text" required onChange={this.handleChange} value={this.state.email} /></label><br />
          <label>Password: <input name="password" id="password" type="password" required onChange={this.handleChange} /></label><br />
          <button type="submit">Log In</button>
        </form>
      </React.Fragment>
    );
  }
}
 
export default SignUp;