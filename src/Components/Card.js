import React from 'react';
import profile from '../img/profile.JPG';

const Card = () => (
  <div className="card has-text-left">
    <div className="card-image">
      <figure className="image is-2by2">
        <img src={profile} className="App-picture" alt="Avatar" />
      </figure>
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <span>
            <i class="fa fa-3x fa-user-circle-o" aria-hidden="true"></i>
          </span>
        </div>
        <div className="media-content">
          <p className="title is-4">Fanny Chan</p>
        </div>
      </div>
      <div className="content">Soon to be Master of Science in Information and Communication Technology</div>
    </div>
  </div>
);

export default Card;
