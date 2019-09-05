import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Login from './Login';

class App extends Component {
  
  changename = () => { 
    console.log("welcome to 10decoders")
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.changename}>ok</button>
        <Login page={this.changename}/>

      
      </div>
    );
  }

}
export default App;
