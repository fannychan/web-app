import React, { Component } from 'react';
import './App.css';
import TypedText from './TypedText.js';
import Card from './Components/Card.js';
import Navbar from './Components/Navbar.js';
import back from './img/bakgrund.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header" style={{backgroundImage: `url(${back})`}}>
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
                <h1 className="title">Hi there!</h1>
                <p>My name is Fanny and this is a small project I have been working on for a while. It is a small project where I can try out React and Bulma.
                </p>
                <br />
                <p> You can also find me here!</p>
                <span className="icons">
                  <a href="https://www.linkedin.com/in/fanny-chan/" target="_blank">
                    <i className="fa fa-3x fa-linkedin-square" aria-hidden="true"></i>
                  </a>
                  <a href="https://saujean.wordpress.com/" target="_blank">
                    <i className="fa fa-3x fa-wordpress" aria-hidden="true"></i>
                  </a>
                  <a href="https://github.com/fannychan" target="_blank">
                    <i class="fa fa-3x fa-github" aria-hidden="true"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
