import React, { Component } from 'react';
import axios from 'axios';

import Circle from './Circle';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       json: ''
    }
  }

  componentDidMount = async () => {
    const json = await axios.get('http://584f50b4.ngrok.io')
    console.log('hi', json);

    if(json) {
    this.setState({
      json: json.data
    })
    this.setState({
      fare: this.getMaxMin("fare"),
      age: this.getMaxMin("age"),
      maleAge: this.getMaxMinWhere("age", "sex", "male"),
      femaleAge: this.getMaxMinWhere("age", "sex", "female"),
      survivorAge: this.getMaxMinWhere("age", "survived", "Yes"),
      males: this.filterBy("sex", "male"),
      maleSurviors: this.filterTwiceBy("sex", "male", "survived", "Yes"),
      females: this.filterBy("sex", "female"),
      femaleSurviors: this.filterTwiceBy("sex", "female", "survived", "Yes"),
    })
    }

    console.log(this.state);
    

    
  }

  filterBy = (fieldName, value) => {
    return this.state.json.filter(passenger => 
      passenger.fields[fieldName] == value
    )
  }

  filterTwiceBy = (fieldName, value, fieldName1, value1) => {
    return this.state.json.filter(passenger => 
      passenger.fields[fieldName] == value
    ).filter(passenger => 
      passenger.fields[fieldName1] == value1
    )
  }

  getMaxMin = (fieldName) => {
    return this.state.json.reduce((accum, passenger) => {
      if (passenger.fields[fieldName] > accum.max) {
        accum.max = passenger.fields[fieldName]
      }
      if (passenger.fields[fieldName] < accum.min) {
        accum.min = passenger.fields[fieldName]
      }
      return accum
    }, {"max": this.state.json[1].fields[fieldName], "min": this.state.json[1].fields[fieldName]})
  }

  getMaxMinWhere = (fieldName, checkField, value) => {
    const filteredPassengers = this.state.json.filter(passenger => 
      passenger.fields[checkField] == value
      )
    return filteredPassengers.reduce((accum, passenger) => {
      if (passenger.fields[fieldName] > accum.max) {
        accum.max = passenger.fields[fieldName]
      }
      if (passenger.fields[fieldName] < accum.min) {
        accum.min = passenger.fields[fieldName]
      }
      return accum
    }, {"max": this.state.json[1].fields[fieldName], "min": this.state.json[1].fields[fieldName]})
  }
  
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.state.json &&
          <>
          <div>
            <p>
              Max Fare: { this.state.fare? this.state.fare.max: "" }
              <br/>
              Min Fare: { this.state.fare? this.state.fare.min: "" }
            </p>
            <p>
              Oldest: { this.state.age? this.state.age.max: "" }
              <br/>
              Youngest: { this.state.age? this.state.age.min: "" }
            </p>
            <p>
              Oldest Male: { this.state.maleAge? this.state.maleAge.max: "" }
              <br/>
              Oldest Female: { this.state.femaleAge? this.state.femaleAge.max: "" }
            </p>
            <p>
              Youngest Male: { this.state.maleAge? this.state.maleAge.min: "" }
              <br/>
              Youngest Female: { this.state.femaleAge? this.state.femaleAge.min: "" }
            </p>
            <p>
              Oldest Survivor: { this.state.survivorAge? this.state.survivorAge.max: "" }
              <br/>
              Youngest Survivor: { this.state.survivorAge? this.state.survivorAge.min: "" }
            </p>
          </div>
          <div>
            <Circle 
            number={this.state.maleSurviors.length}
            total={this.state.males.length}
            />
          </div>
          </>
          }
        </header>
      </div>
    );
  }
}

export default App;
