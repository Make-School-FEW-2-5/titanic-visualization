import React, { Component } from 'react'
import styled from 'styled-components/macro'

const vwMultiplier = 30;

const Bubble = styled.div`
  border-radius: 50%;
  width: ${props => props.size * vwMultiplier + 'vw'};
  height: ${props =>  props.size * vwMultiplier + 'vw'};
  position:  ${props => props.children.type? 'relative': 'absolute'};
  left: ${props => props.children.type? '0': '0vw'};
  top: ${props => props.children.type? '0':vwMultiplier / 2 - (props.size * vwMultiplier / 2) + 'vw'};
  background-color: ${props => props.color || 'red'};
  text-align: center;
  line-height:${props => props.size * vwMultiplier + 'vw'};
`;


export default class Circle extends Component {
  constructor(props) {
    console.log(props.children);
    
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

