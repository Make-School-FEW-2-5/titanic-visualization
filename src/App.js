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
    const json = await axios.get('http://385913b2.ngrok.io')
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
          <div>
            <div>
              <Circle color='blue' number='1' size='1'>
                <Circle 
                color='green'
                number={this.filterTwiceBy("sex", "male", "survived", "Yes").length}
                size={this.filterTwiceBy("sex", "male", "survived", "Yes").length / this.filterBy("sex", "male").length }
                />
              </Circle>
              <Circle color='blue' number='1' size='1'>
                <Circle
                number={this.filterTwiceBy("sex", "female", "survived", "Yes").length}
                size={this.filterTwiceBy("sex", "female", "survived", "Yes").length / this.filterBy("sex", "female").length }
                />
              </Circle>
            </div>
          </div>
          }
        </header>
      </div>
    );
  }
}

export default App;
