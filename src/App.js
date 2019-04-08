import React, { Component } from 'react';
import axios from 'axios';

import Circle from './Circle';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       json: '',
       men: 'true'
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

  getCircleData() {
    if (this.state.men) {
      return {
        color: 'PaleTurquoise',
        number: this.filterTwiceBy("sex", "male", "survived", "Yes").length,
        size: this.filterTwiceBy("sex", "male", "survived", "Yes").length / this.filterBy("sex", "male").length
      }
    } else {
      return {
        color: 'Plum',
        number: this.filterTwiceBy("sex", "female", "survived", "Yes").length,
        size: this.filterTwiceBy("sex", "female", "survived", "Yes").length / this.filterBy("sex", "female").length
      }
    }
  }

  handleClick = (e) => {
    console.log("click", e.target);
    
    if (this.state.men) {
      e.target.innerHTML = "Men"
      this.setState({men: false})
    } else {
      e.target.innerHTML = "Women"
      this.setState({men: true})
    }
  }
  
  render() {

    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {this.state.json &&
          <div>
            <div>
              <Circle color='gray' number='1' size='1'>
                <Circle 
                {...this.getCircleData()}
                />
              </Circle>
              <button type='button' onClick={(e)=> this.handleClick(e)}>Women</button>
            </div>
          </div>
          }
        </header>
      </div>
    );
  }
}

export default App;
