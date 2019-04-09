import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components/macro'

import Circle from './Circle';
import Visualization from './Visualization'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       json: '',
    }
  }

  componentDidMount = async () => {
    const json = await axios.get('http://385913b2.ngrok.io')

    if(json) {
    this.setState({
      json: json.data
    })
    }
  }
  
  render() {

    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {this.state.json &&
          <div>
            <Visualization data={this.state.json}/>
          </div>
          }
        </header>
      </div>
    );
  }
}



export default App;
