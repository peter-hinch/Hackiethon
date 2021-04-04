import React, { Component } from 'react';
import './radioform.css';

// const stressSlider = document.getElementById('stress');
// const satisfactionSlider = document.getElementById('satisfaction');
// const growthSlider = document.getElementById('growth');
// let growth = 'growth';
// let satisfaction = 'satisfaction';
// let stress = 'stress';

export default class RadioForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autonomy: 'sometimes',
      connection: 'sometimes',
      growth: 'sometimes',
    }
  

    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  setAutonomy(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  setConnection(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  setGrowth(event) {
    this.setState({ [event.target.name]: event.target.value });
  }


  handleSubmit(event) {
    // alert(`Satisfaction: ${this.state.satisfaction}.
    // Growth: ${this.state.growth}
    // Stress levels: ${this.state.stress}`);

    const { autonomy, connection, growth } = this.state;
    console.log(`autonomy = ${autonomy}
    connection = ${connection}
    growth = ${growth}`)

    
    event.preventDefault();
  }

  render() {
  
    return (
      <form id="radio" onSubmit={this.handleSubmit}>
        <div className="row">
          <div></div>
          <div className="column">
         
              <div id="heading-autonomy">Do I have autonomy?</div>
              
              <label class="radioLabel" onChange={this.setAutonomy.bind(this)} class="yes autonomy" for="autonomy1">
                <input type="radio" name="autonomy" value="yes" id="autonomy1"/>
                <span className="text">Yes</span>
                <span className="shape autonomyShape"></span>
              </label>
          
              <label class="radioLabel" onChange={this.setAutonomy.bind(this)} class="sometimes autonomy"for="autonomy2">
                  <input type="radio" name="autonomy" value="sometimes" id="autonomy2"/>
                  <span className="textLong">Sometimes</span>
                  <span className="shape autonomyShape"></span>
              </label>
            
              <label class="radioLabel" onChange={this.setAutonomy.bind(this)} class="no autonomy" for="autonomy3">
                  <input type="radio" name="autonomy" value="no" id="autonomy3" active/>
                  <span className="text">No</span>
                  <span className="shape autonomyShape"></span>
              </label>

          </div>

          <div className="column">
         
              <div id="heading-connection">Do I feel connected?</div>
              
              <label class="radioLabel" onChange={this.setConnection.bind(this)} class="yes connection" for="connection1">
                <input type="radio" name="connection" value="yes" id="connection1"/>
                <span className="text">Yes</span>
                <span className="shape connectionShape"></span>
              </label>
          
              <label class="radioLabel" onChange={this.setConnection.bind(this)} class="sometimes connection"for="connection2">
                  <input type="radio" name="connection" value="sometimes" id="connection2"/>
                  <span className="textLong">Sometimes</span>
                  <span className="shape connectionShape"></span>
              </label>
            
              <label class="radioLabel" onChange={this.setConnection.bind(this)} class="no connection" for="connection3">
                  <input type="radio" name="connection" value="no" id="connection3" active/>
                  <span className="text">No</span>
                  <span className="shape connectionShape"></span>
              </label>
         
          </div>


          <div className="column">
         
              <div id="heading-growth">Am I gaining skills?</div>
              
              <label class="radioLabel" onChange={this.setGrowth.bind(this)} class="yes growth" for="growth1">
                <input type="radio" name="growth" value="yes" id="growth1"/>
                <span className="text">Yes</span>
                <span className="shape growthShape"></span>
              </label>
          
              <label class="radioLabel" onChange={this.setGrowth.bind(this)} class="sometimes growth"for="growth2">
                  <input type="radio" name="growth" value="sometimes" id="growth2"/>
                  <span className="textLong">Sometimes</span>
                  <span className="shape growthShape"></span>
              </label>
            
              <label class="radioLabel" onChange={this.setGrowth.bind(this)} class="no growth" for="growth3">
                  <input type="radio" name="growth" value="no" id="growth3" active/>
                  <span className="text">No</span>
                  <span className="shape growthShape"></span>
              </label>
              
          </div>

        </div>
        <div></div>
        <input value="Next" type="submit"/>
      </form>
    );
  }
}
