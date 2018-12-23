import React from 'react';

import '../Stylesheets/Presentation.css';
import styled from 'styled-components';
import profile from '../img/profile.JPG';
import TypedText from './TypedText.js';

const ProfilePicture = styled.div`
    vertical-align: middle;
    text-align: center;
    padding-top: 30px;
    padding-left: 5px;
  `;


const Presentation = () => (
  <div className="columns is-desktop">
      <ProfilePicture className="column is-one-third">
        <img src={profile} className="app-picture" alt="Avatar" />
      </ProfilePicture>
    <div>
      <div className="introduction">
        <TypedText strings={[
          'Hi there, stranger!',
          'Hi there, bestie!',
          'Hi there, friend!'
        ]}
        />
        <div  className="wrapper">
        <p>My name is Fanny and this is my website as a part of my online cv. It is a small project where I can try out React and Bulma.
            I'm currently located in Stockholm and working as an IT consultant at Omegapoint. I work with <strong> AWS </strong>  and I have a big
            interest in <strong> UX </strong> and <strong> front-end development</strong>.
        </p>
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
            <i className="fa fa-2x fa-github" aria-hidden="true"></i>
          </a>
        </span>
        <br />
        <p> You can also find send me an email on&nbsp; 
          <i className="fa fa-envelope-o" aria-hidden="true"></i>
          fanny.chan@omegapoint.se</p>

          </div>
      </div>
    </div>
  </div>
);

export default Presentation;
