import React, { Component } from 'react';
class  App extends Component 
state = {
    step: 1,
    firstName: '',
    lastName: '',
    occupation:'',
    city:'',
    address:'',
  }
// proceed to next step
next step = () => {
  const {step } = this.state;
  this.setState({
  step: step + 1  
  });
}
// Go to prev step
next step = () => {
  const {step } = this.state;
  this.setState({
  step: step - 1  
  });

  Handle fields change

