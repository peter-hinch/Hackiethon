import React, { Component } from 'react';
import './slider.css';


export default class SliderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      satisfaction: 50,
      health: 50,
      stress: 50
    }
  

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    alert(`Satisfaction: ${this.state.satisfaction}.
    Health: ${this.state.health}
    Stress levels: ${this.state.stress}`);
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