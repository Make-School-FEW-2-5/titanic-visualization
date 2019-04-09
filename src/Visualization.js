import React, { Component } from 'react'
import styled from 'styled-components/macro'

import Circle from './Circle';
import { filterTwiceBy, filterBy } from './helperFunctions'

const Button = styled.button`
  margin: 40px auto;
  width: 25%;
  height: 32px;
  border: none;
  border-radius: 8px;
  background-color: ${props => props.men? 'Plum': 'PaleTurquoise'};
  transition: 1000ms;
`


export default class Visualization extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
      toggle: true
    }
  }

  getCircleData() {
    if (this.state.toggle) {
      return {
        color: 'PaleTurquoise',
        number: filterTwiceBy(this.props.data, "sex", "male", "survived", "Yes").length,
        size: filterTwiceBy(this.props.data, "sex", "male", "survived", "Yes").length / filterBy(this.props.data, "sex", "male").length
      }
    } else {
      return {
        color: 'Plum',
        number: filterTwiceBy(this.props.data, "sex", "female", "survived", "Yes").length,
        size: filterTwiceBy(this.props.data, "sex", "female", "survived", "Yes").length / filterBy(this.props.data, "sex", "female").length
      }
    }
  }
  handleClick = (e) => {
    
    if (this.state.toggle) {
      e.target.innerHTML = "Show Men"
      this.setState({toggle: false})
    } else {
      e.target.innerHTML = "Show Women"
      this.setState({toggle: true})
    }
  }
  
  render() {
    return (
      <div>
        <Circle color='gray' number='1' size='1'>
          <Circle
          {...this.getCircleData()}
          />
        </Circle>
        <Button men={this.state.toggle} type='button' onClick={(e)=> this.handleClick(e)}>Show Women</Button>
      </div>
    )
  }
}
