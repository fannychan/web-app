import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Experience from './Components/Experience.js';
import Skills from './Components/Skills.js';
import background from './img/TypedTextBackground.jpg';
import Presentation from './Components/Presentation.js';
import Education from './Components/Education.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header" style={{backgroundImage: `url(${background})`}}>
        </header>

        <div className="container">
          <Presentation />
        </div>
        <br />
        <div className='presentation-container'>
          <div className="container">
            <div className="columns">
              <div className="column">
                <Experience />
              </div>
              <div className="column">
                <Skills />
                <Education />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
