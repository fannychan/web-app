import React from 'react';
import MediaObject from './MediaObject.js';
import AW from '../img/AW.svg';
import Saab from '../img/Saab-logo.png';

const Education = () => (
  <div className="container">
    <MediaObject
      jobRole="Master thesis Internship"
      jobName="Saab"
      imageSource = { Saab }
      information="My master thesis is about user experience, continuous delivery and creating a dashboard for visualizing the system status"
    />
  </div>
);

export default Education;
