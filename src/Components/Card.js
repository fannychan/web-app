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
        <div className="media-content">
          <p className="title is-4">Fanny Chan</p>
        </div>
      </div>
      <div className="content">Consultant at OmegaPoint</div>
    </div>
  </div>
);

export default Card;
