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
      user: {
        name: {
          lastname: this.props.location.state.user.lastname,
          firstname: this.props.location.state.user.firstname
        },
        sliders: {
          satisfaction: 50,
          stress: 50,
          health: 50
        },
        radios: {
          autonomy: 'sometimes',
          growth: 'sometimes',
          connection: 'sometimes'
        },
        redirect: false
      }
    }
      // user: this.props.location.state.user
    
    // this.state = {
    //   user: {
    //     name: {
    //       lastname: this.props.location.state.user.name.lastname,
    //       firstname: this.props.location.state.user.name.firstname
    //     },
    //     sliders: {
    //       satisfaction: this.props.location.state.user.sliders.satisfaction,
    //       stress: this.props.location.state.user.sliders.stress,
    //       health: this.props.location.state.user.sliders.health
    //     },
    //     radios: {
    //       autonomy: 'sometimes',
    //       growth: 'sometimes',
    //       connection: 'sometimes'
    //     },
    //     redirect: false
    //   }
    // }
    console.log(JSON.stringify(this.state));
    
    this.setRadio = this.setRadio.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  setRadio(event) {
    this.setState( (prevState) => ({...prevState.radios[event.target.name] = event.target.value}));
  }

  // setConnection(event) {
  //   this.setState({ [event.target.name]: event.target.value });
  // }

  // setGrowth(event) {
  //   this.setState({ [event.target.name]: event.target.value });
  // }


  handleSubmit(event) {
    // alert(`Satisfaction: ${this.state.satisfaction}.
    // Growth: ${this.state.growth}
    // Stress levels: ${this.state.stress}`);

    event.preventDefault();
  }

  render() {
  
    return (
      <form onSubmit={this.handleSubmit} id = 'radioform'>
        <div className="row">
          <div></div>
          <div className="column">
         
              <div id="heading-autonomy">Do I have autonomy?</div>
              
              <label onChange={this.setRadio.bind(this)} class="yes autonomy  radiolabel" for="autonomy1">
                <input type="radio" name="autonomy" value="yes" id="autonomy1"/>
                <span className="text">Yes</span>
                <span className="shape autonomyShape"></span>
              </label>
          
              <label onChange={this.setRadio.bind(this)} class="sometimes autonomy radiolabel"for="autonomy2">
                  <input type="radio" name="autonomy" value="sometimes" id="autonomy2"/>
                  <span className="textLong">Sometimes</span>
                  <span className="shape autonomyShape"></span>
              </label>
            
              <label onChange={this.setRadio.bind(this)} class="no autonomy radiolabel" for="autonomy3">
                  <input type="radio" name="autonomy" value="no" id="autonomy3" active/>
                  <span className="text">No</span>
                  <span className="shape autonomyShape"></span>
              </label>

          </div>

          <div className="column">
         
              <div id="heading-connection">Do I feel connected?</div>
              
              <label class="radioLabel" onChange={this.setRadio.bind(this)} class="yes connection" for="connection1">
                <input type="radio" name="connection" value="yes" id="connection1"/>
                <span className="text">Yes</span>
                <span className="shape connectionShape"></span>
              </label>
          
              <label class="radioLabel" onChange={this.setRadio.bind(this)} class="sometimes connection"for="connection2">
                  <input type="radio" name="connection" value="sometimes" id="connection2"/>
                  <span className="textLong">Sometimes</span>
                  <span className="shape connectionShape"></span>
              </label>
            
              <label class="radioLabel" onChange={this.setRadio.bind(this)} class="no connection" for="connection3">
                  <input type="radio" name="connection" value="no" id="connection3" active/>
                  <span className="text">No</span>
                  <span className="shape connectionShape"></span>
              </label>
         
          </div>


          <div className="column">
         
              <div id="heading-growth">Am I gaining skills?</div>
              
              <label class="radioLabel" onChange={this.setRadio.bind(this)} class="yes growth" for="growth1">
                <input type="radio" name="growth" value="yes" id="growth1"/>
                <span className="text">Yes</span>
                <span className="shape growthShape"></span>
              </label>
          
              <label class="radioLabel" onChange={this.setRadio.bind(this)} class="sometimes growth"for="growth2">
                  <input type="radio" name="growth" value="sometimes" id="growth2"/>
                  <span className="textLong">Sometimes</span>
                  <span className="shape growthShape"></span>
              </label>
            
              <label class="radioLabel" onChange={this.setRadio.bind(this)} class="no growth" for="growth3">
                  <input type="radio" name="growth" value="no" id="growth3" active/>
                  <span className="text">No</span>
                  <span className="shape growthShape"></span>
              </label>
              
          </div>

        </div>
        <div></div>
        <input value="Next" type="submit" id = 'radiobutton1'/>
      </form>
    );
  }
}
