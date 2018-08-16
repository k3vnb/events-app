import React, { Component } from 'react';
import logo from './logo.svg';
import Blank from './';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Events React App</h1>
        </header>
        <p className="App-intro">
          Amazement and Delightful Swill.
        </p>
        <p>
        Hot module
        </p>
      </div>
    );
  }
}

export default App;
