import React, { Component } from 'react';
import './slider.css';


export default class SliderForm extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      satisfaction: 50,
      stress: 50,
      health: 50
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
    // Stress levels: ${this.state.stress}`);
    this.props.location.state = this.data;
    console.log(this.props.location.state);
    event.preventDefault();
  }


  render() {
  
    return (
      <div id = 'main__body'>
        <form onSubmit={this.handleSubmit} id = 'sliderform'>
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
          <input id="submitButton" type="submit" value="Submit" />
          </div>
          </form>
        </div>
    );
  }
}