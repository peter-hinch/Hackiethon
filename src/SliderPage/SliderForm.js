import React, {
  Component
} from 'react';
import {
  Redirect
} from 'react-router-dom';
import './slider.css';
import {
  HashRouter,
  NavLink
} from "react-router-dom";


export default class SliderForm extends Component {
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


   
    console.log(JSON.stringify(this.props.location.state));
    console.log(this.props.location.state);
    this.changeHealth = this.changeHealth.bind(this);
    this.changeSatisfaction = this.changeSatisfaction.bind(this);
    this.changeStress = this.changeStress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeGrowth = event => {
    // this.data[event.target.name] = event.target.value;
    // this.props.location.state[event.target.name] = event.target.value;
    this.setState({

      user: {
        name: {
          lastname: this.state.user.name.lastname,
          firstname: this.state.user.name.firstname
        },
        sliders: {
          [event.target.name]: event.target.value
        },
        radios: {
          autonomy: 'sometimes',
          growth: 'sometimes',
          connection: 'sometimes'
        },
        redirect: false
      }
    });
  }
   
  changeStress = event => {
    // this.data[event.target.name] = event.target.value;
    // this.props.location.state[event.target.name] = event.target.value;
    this.setState({

      user: {
        name: {
          lastname: this.state.user.name.lastname,
          firstname: this.state.user.name.firstname
        },
        sliders: {
          satisfaction: this.state.user.sliders.satisfaction,
          stress: event.target.value,
          health: this.state.user.sliders.satisfaction
        },
        radios: {
          autonomy: 'sometimes',
          growth: 'sometimes',
          connection: 'sometimes'
        },
        redirect: false
      }
    });
  }

  changeSatisfaction = event => {
    // this.data[event.target.name] = event.target.value;
    // this.props.location.state[event.target.name] = event.target.value;
    this.setState({

      user: {
        name: {
          lastname: this.state.user.name.lastname,
          firstname: this.state.user.name.firstname
        },
        sliders: {
          satisfaction: event.target.value,
          stress: this.state.user.sliders.stress,
          health: this.state.user.sliders.satisfaction
        },
        radios: {
          autonomy: 'sometimes',
          growth: 'sometimes',
          connection: 'sometimes'
        },
        redirect: false
      }
    });
  }

  changeHealth = event => {
    // this.data[event.target.name] = event.target.value;
    // this.props.location.state[event.target.name] = event.target.value;
    this.setState({

      user: {
        name: {
          lastname: this.state.user.name.lastname,
          firstname: this.state.user.name.firstname
        },
        sliders: {
          satisfaction: this.state.user.sliders.satisfaction,
          stress: this.state.user.sliders.stress,
          health: event.target.value,
        },
        radios: {
          autonomy: 'sometimes',
          growth: 'sometimes',
          connection: 'sometimes'
        },
        redirect: false
      }
    });
  }


 
      // (prevState) => ({...prevState.user.redirect} = true))
  
  handleSubmit(event) {
    console.log("submit clicked");
    // alert(`Satisfaction: ${this.state.satisfaction}.
    // Health: ${this.state.health}
    // // Stress levels: ${this.state.stress}`);
    // this.props.location.state = this.data;
    // // console.log(this.props.location.state);

    // this.data.satisfaction = this.state.satisfaction;
    // this.data.stress = this.state.stress;
    // this.data.health =  this.state.health;
    console.log('test');

    this.setState({
      redirect: true
    });
    // this.setState( (prevState) => ({...prevState.user[event.target.name] = event.target.value}));
    console.log(JSON.stringify(this.state));
    event.preventDefault();
  }


  render() {
  
    if (this.state.redirect) {
      console.log("redirect will happen");
      return (
      <Redirect to = {
        {
          pathname: '/RadioForm',
          user: {
            name: {
              lastname: this.props.location.state.user.lastname,
              firstname: this.props.location.state.user.firstname
            },
            sliders: {
              satisfaction: this.state.user.sliders.satisfaction,
              stress: this.state.user.sliders.stress,
              health: this.state.user.sliders.health
            },
            radios: {
              autonomy: 'sometimes',
              growth: 'sometimes',
              connection: 'sometimes'
            },
            redirect: false
          }
          
        }}
      />)
    }
    console.log("not redirecting");
    return ( 
        <div id='main__body'>
        <div  id='sliderform'>
          <div id="sliderContainer">
            <label>Satisfaction:<br/>
              <input id = "satisfaction" name='satisfaction' type="range" value={this.state.value} onChange={this.changeSatisfaction} />
            </label>
            <label>
              <br/>Stress levels:<br/>
              <input id="stress" name='stress' type="range" value={this.state.value} onChange={this.changeStress} />
            </label>
            <label>
              <br/>Physical Health:<br/>
              <input id="health" name='health' type="range" value={this.state.value} onChange={this.changeHealth} />
            </label>
            <button onClick={this.handleSubmit} id="submitButton" className="navbar__links">Next</button>
          </div>
        </div>
      </div>
    );
  }
}