import React from 'react';
import MediaObject from './MediaObject.js';
import AW from '../img/AW.svg';
import Saab from '../img/Saab-logo.png';

const Work = () => (
  <div className="container">
    <MediaObject
      jobRole="Master thesis Internship"
      jobName="Saab"
      imageSource = { Saab }
      information="My master thesis is about user experience, continuous delivery and creating a dashboard for visualizing the system status"
    />
    <MediaObject
      jobRole="Support Technician"
      jobName="Academic Work"
      imageSource={ AW }
      information="My role as support technician is to support the organization in all aspects of technical issues. That includes giving access, software issues,
      bla bla"
    />
  </div>
);

export default Work;
