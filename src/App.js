import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TypedText from './TypedText.js';
import Card from './Components/Card.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="App-title">Welcome welcome to Chinatown</h1>
          <TypedText strings={[
            'Welcome to my online cv',
            'Welcome to my web app',
            'Welcome to my hobby project'
          ]}
          />
        </header>

        <div className="container">
          <div className="columns is-mobile">
            <div className="column is-one-quarter">
              <Card />
            </div>
            <div className="container">
              <div className="introduction">
                <h1 className="title">This is me!</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
