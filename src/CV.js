import React, { Component } from 'react';
import Navbar from './Components/Navbar.js';
import './CV.css';
import back from './img/bakgrund.jpg';
import Work from './Components/Work.js';
import Education from './Components/Education.js';

class CV extends Component {
  constructor(props){
    super(props);
    this.handleWork = this.handleWork.bind(this);
    this.handleEducation = this.handleEducation.bind(this);
    this.state = {showWork : true};
  }
  handleWork() {
    this.setState({showWork : true})
    this.setState({showEducation : false});
  }

  handleEducation() {
    this.setState({showEducation : true});
    this.setState({showWork : false});
  }

  render(){
    let downpart = null;
    const showWork = this.state.showWork;
    const showEducation = this.state.showWork;

    if(showWork) {
      downpart = <Work />;
    }
    else {
      downpart = <Education />;
    }
    return(
    <div>
      <Navbar />
      <section className="hero is-primary is-bold" style={{backgroundImage: `url(${back})`}}>
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
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
          <li className="is-active"  onClick={this.handleWork} ><a>Work</a></li>
          <li onClick={this.handleEducation}><a>Education</a></li>
          <li><a>Project</a></li>
        </ul>
      </div>
      {downpart}
    </div>
    );
  }
}

export default CV;
