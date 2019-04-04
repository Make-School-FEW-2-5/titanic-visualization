import React, { Component } from 'react'
import styled from 'styled-components/macro'

const Bubble = styled.div`
  border-radius: 50%;
  width: ${props => props.size * 50 + 'vw'};
  height: ${props =>  props.size * 50 + 'vw'};
  background-color: ${props => props.color || 'red'};
`;


export default class Circle extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return (
      <Bubble {...this.props}>
        {this.props.children || this.props.number}
      </Bubble>
    )
  }
}

