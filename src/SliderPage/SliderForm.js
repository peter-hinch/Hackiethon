import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './slider.css';
import { HashRouter, NavLink } from "react-router-dom";


export default class SliderForm extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      satisfaction: 50,
      stress: 50,
      health: 50,
      user: this.props.location.state.user,
      redirect: false
    }

    this.data = {
      // user: this.props.location.state.user,
      satisfaction: 50,
      health: 50,
      stress: 50,
      autonomy: 'sometimes',
      connection: 'sometimes',
      growth: 'sometimes'
    }
    this.props.location.state = this.data;
    console.log(JSON.stringify(this.props.location.state));
    console.log(this.props.location.state['satisfaction']);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange = event => {
    // this.data[event.target.name] = event.target.value;
    // this.props.location.state[event.target.name] = event.target.value;
    this.setState({ [event.target.name]: event.target.value });
  }


  handleSubmit(event) {
    // alert(`Satisfaction: ${this.state.satisfaction}.
    // Health: ${this.state.health}
    // // Stress levels: ${this.state.stress}`);
    // this.props.location.state = this.data;
    // // console.log(this.props.location.state);
    
    // this.data.satisfaction = this.state.satisfaction;
    // this.data.stress = this.state.stress;
    // this.data.health =  this.state.health;
    console.log('test');
    
    this.setState({redirect: true});
    console.log(this.state);
   event.preventDefault();
  }


  render() {
    if (this.state.redirect) {
      console.log("Ready to redirect");
      return <Redirect to={{
        pathname: '/RadioForm',
        state: { user: {firstname: this.user.firstname,
          lastname: this.user.lastname},
        sliders: {health: this.state.health,
          satisfaction: this.state.satisfaction, stress: this.state.stress} }
      }
         
    } />
    }
    console.log("arrived");
    return (
      <div id = 'main__body'>
        <div  onSubmit={this.handleSubmit} id = 'sliderform'>
          <div id="sliderContainer">
            <label>
              Satisfaction: <br/>  
            <input id="satisfaction" name='satisfaction' type="range" value={this.state.value} onChange={this.handleChange} />
          </label>

          <label>
          <br/>Stress levels: <br/>
            <input id="stress" name='stress' type="range" value={this.state.value} onChange={this.handleChange} />
          </label>

          <label>
          <br/>Physical Health: <br/>
            <input id="health" name='health' type="range" value={this.state.value} onChange={this.handleChange} />
          </label>
       
          <button onClick = {this.handleSubmit} id="submitButton" className="navbar__links">Next</button>
          </div>
          </div>
        </div>
    );
  }
}