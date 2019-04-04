import React, { Component } from 'react'
import styled from 'styled-components/macro'

const Bubble = styled.div`
  border-radius: 50%;
  width: ${props => props.size * 50 + 'vw'};
  height: ${props =>  props.size * 50 + 'vw'};
  position:  ${props => props.children.type? 'relative': 'absolute'};
  left: ${props => props.children.type? '0': '0vw'};
  top: ${props => props.children.type? '0':25 - (props.size * 25) + 'vw'};
  background-color: ${props => props.color || 'red'};
  text-align: center;
  line-height:${props => props.size * 50 + 'vw'};
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

