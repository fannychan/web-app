import React, { Component } from 'react';
import './App.css';
import TypedText from './TypedText.js';
import { Link } from 'react-router-dom';
import Card from './Components/Card.js';
import Presentation from './Components/Presentation.js';
import Skills from './Components/Skills.js';
import background from './img/TypedTextBackground.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header" style={{backgroundImage: `url(${background})`}}>
        </header>

        <div className="container">
          <div className="columns is-mobile is-gapless">
            <div className="column is-one-quarter">
              <Card />
            </div>
            <div className="container">
              <div className="introduction">
                <TypedText strings={[
                  'Hi there, stranger!',
                  'Hi there, friend!',
                  'Hi there, bestie!'
                ]}
                />
                <p>My name is Fanny and this is my website as a part of my online cv. It is a small project where I can try out React and Bulma.
                   I'm currently located in Stockholm and working as an IT consultant at Omegapoint. I work with <strong> AWS </strong>  and I have a big
                   interest in <strong> UX </strong> and <strong> front-end development</strong>.
                </p>
                <br />
                <br />
                <p>You can find me here!</p>
                <span className="icons">
                  <a href="https://www.linkedin.com/in/fanny-chan/" target="_blank">
                    <i className="fa fa-2x fa-linkedin-square" aria-hidden="true"></i>
                  </a>
                  <a href="https://saujean.wordpress.com/" target="_blank">
                    <i className="fa fa-2x fa-wordpress" aria-hidden="true"></i>
                  </a>
                  <a href="https://github.com/fannychan" target="_blank">
                    <i class="fa fa-2x fa-github" aria-hidden="true"></i>
                  </a>
                </span>
                <br />
                <p> You can also find send me an email on
                  <i className="fa fa-envelope-o" aria-hidden="true"></i>
                  fanny.chan@omegapoint.se</p>

              </div>
            </div>
          </div>
        </div>
        <br />

        <div className='presentation-container'>
        <div className="container">
        <div className="columns">
          <div className="column">
            <Presentation/>
          </div>
          <div className="column">
            <Skills/>
          </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
