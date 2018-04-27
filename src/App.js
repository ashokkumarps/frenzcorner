import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">FRENZCORNER</h1>
          <h6> A place where you will find all varieties of Chats, Chiniese, Sandwiches, Juice and Milkshakes.</h6>
        </header>
        <p className="App-intro">
          Complete site along with order option and all available items will be coming soon........
        </p>
      </div>
    );
  }
}

export default App;
