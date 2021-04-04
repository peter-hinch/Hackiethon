import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { authFunctions } from '../Firebase';
import './LoginStyle.css';
import login from './Login1.svg'

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
            <div id ='main__login_con'>
              <form onSubmit={this.handleSubmit} id='login_form' >
              <h1 id = 'login_title'>Log in</h1>
                <label>Email: <input name="email" className= 'login_input' id="email1" type="text" required onChange={this.handleChange} value={this.state.email} /></label><br />
                <label>Password: <input name="password" className= 'login_input' id="password" type="password" required onChange={this.handleChange} /></label><br />
                <button type="submit" id = "login_submit">Log In</button>
              </form>
              <div className="login__image--container">
                    <img src={login} alt="pic" id ="login__img"></img>
               </div>
            </div>
          </React.Fragment>
         );
    }
}
 
export default LogIn;