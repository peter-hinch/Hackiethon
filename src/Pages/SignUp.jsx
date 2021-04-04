import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { authFunctions } from '../Firebase';
import './Signup.css'
import signup from './signin.svg';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = this.props;
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
      return <Redirect to={{
        pathname: '/login',
        state: { user: {firstname: this.state.firstname,
                        lastname: this.state.lastname} }
    }} />
    }
    if(this.state.success) {
      return <Redirect to={{
        pathname: '/sliders',
        state: { user: {firstname: this.state.firstname,
          lastname: this.state.lastname} }
         }
    } />
    }
    return ( 
      <React.Fragment>
        <div id ='main__signup_con'>
          <div className="signup__image--container">
                        <img src={signup} alt="pic" id ="signup__img"></img>
          </div>
          <form onSubmit={this.handleSubmit} id='signin_form'>
            <h1 id = 'sign_up_title'>Sign up</h1>
            <label>First Name: <input name="firstname" id="firstname" type="text"className='form_input_si' required onChange={this.handleChange} value={this.state.firstname} /></label><br />
            <label>Last Name: <input name="lastname" id="lastname" type="text"className='form_input_si' required onChange={this.handleChange} value={this.state.lastname} /></label><br />
            <label>Email: <input name="email" id="email" type="text"className='form_input_si' required onChange={this.handleChange} value={this.state.email} /></label><br />
            <label>Password: <input name="password" id="password" type="password" className='form_input_si'required onChange={this.handleChange} /></label><br />
            <button type="submit" id = "signin_submit">Sign Up</button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
 
export default SignUp;