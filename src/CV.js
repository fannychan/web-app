import React, { Component } from 'react';
import Navbar from './Components/Navbar.js';
import './CV.css';

class CV extends Component {
  render(){
    return(
    <div>
      <section className="hero is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="CV-title">
              Online CV
            </h1>
            <h2 className="subtitle">
              Primary bold subtitle
            </h2>
          </div>
        </div>
      </section>

      <div className="tabs is-centered">
        <ul>
          <li className="is-active"><a>Something</a></li>
          <li><a>Work</a></li>
          <li><a>Education</a></li>
          <li><a>Extra Curricular</a></li>
        </ul>
      </div>
    </div>
    );
  }
}

export default CV;
