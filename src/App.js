import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TypedText from './TypedText.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="App-title">Welcome welcome to Chinatown</h1>
          <TypedText strings={[
            'Du ar bast',
            'Patchi',
            'Hello'
          ]}
          />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
