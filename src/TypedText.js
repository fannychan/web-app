import React, { Component } from 'react';
import Typed from 'typed.js';
import './Typed.css'

class TypedText extends Component {
  componentDidMount() {
  	// If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    const { strings } = this.props;
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
    	strings: strings,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      loopCount: Infinity,
      showCursor: true,
      cursorChar: '|'
    };
    // this.el refers to the <span> in the render() method
    console.log(this.el);
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
  	// Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }

  render() {
    return (
      <div className="wrap">
        <div className="type-wrap">
          <span className="type-text"
            style={{ whiteSpace: 'pre'}}
            ref={(el) => { this.el = el; }}
          />
        </div>
      </div>
    );
  }
}

export default TypedText;
