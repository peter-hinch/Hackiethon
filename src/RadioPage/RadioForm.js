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

    
    event.preventDefault();
  }

  render() {
  
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row">
        
          <div className="column">
          <div id="heading-autonomy">Autonomy</div>
  
              <div onChange={this.setAutonomy.bind(this)}>
                <input type="radio" name="autonomy" value="yes" id="autonomy1"/>
                <label class="yes autonomy" for="autonomy1">Yes<span></span></label>
              </div>

              <div onChange={this.setAutonomy.bind(this)}>
                <input type="radio" name="autonomy" value="sometimes" id="autonomy2"/>
                <label class="sometimes autonomy"for="autonomy2">Sometimes<span></span></label>
              </div>

              <div onChange={this.setAutonomy.bind(this)}>
                <input type="radio" name="autonomy" value="no" id="autonomy3" active/>
                <label class="no autonomy" for="autonomy3">No<span></span></label>
              </div>
          </div>

            <div className="column">
            <div id="heading-connection">Connection?</div>
        
              <div id="tester"  onChange={this.setConnection.bind(this)}>
                <input type="radio" name="connection" value="yes" id="connection1"/>

                <label class="yes connection" for="connection1">Yes<span></span></label>

              </div>

              <div onChange={this.setConnection.bind(this)}>
                <input type="radio" name="connection" value="sometimes" id="connection2"/>

                <label class="sometimes connection"for="connection2">Sometimes<span></span></label>

              </div>

              <div onChange={this.setConnection.bind(this)}>
                <input type="radio" name="connection" value="no" id="connection3" active/>

                <label class="no connection" for="connection3">No<span></span></label>

              </div>
            </div>

            <div className="column">
            <div id="heading-growth ">Growth?</div>
              <div onChange={this.setGrowth.bind(this)}>
                <input type="radio" name="growth" value="yes" id="growth1"/>
                <label class="yes growth" for="growth1">Yes<span></span></label>
              </div>

              <div onChange={this.setGrowth.bind(this)}>
                <input type="radio" name="growth" value="sometimes" id="growth2"/>
                <label class="sometimes growth"for="growth2">Sometimes<span></span></label>
              </div>

              <div onChange={this.setGrowth.bind(this)}>
                <input type="radio" name="growth" value="no" id="growth3" active/>
                <label class="no growth" for="growth3">No<span></span></label>
              </div>
            </div>
            <input id="submitButton" type="submit" value="Submit"/>
        </div>
        
      </form>
    );
  }
}
