import React, { Component } from 'react'
import styled from 'styled-components/macro'

const vwMultiplier = 50;

const Bubble = styled.div`
  border-radius: 50%;
  width: ${props => props.size * vwMultiplier + 'vw'};
  height: ${props =>  props.size * vwMultiplier + 'vw'};
  position:  ${props => props.children.type? 'relative': 'absolute'};
  left: ${props => props.children.type? '0':vwMultiplier / 2 - (props.size * vwMultiplier / 2) + 'vw'};
  top: ${props => props.children.type? '0':vwMultiplier / 2 - (props.size * vwMultiplier / 2) + 'vw'};
  background-color: ${props => props.color || 'red'};
  text-align: center;
  line-height:${props => props.size * vwMultiplier + 'vw'};
  transition: 1000ms;
  box-shadow: 0px 10px 40px -12px rgba(0,0,0,0.75);
  `


export default class Circle extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return (
      <Bubble {...this.props} ref={ref => this.bubble = ref}>
        {this.props.children || this.props.number}
      </Bubble>
    )
  }
}

