import React  from 'react';

import '../Stylesheets/Presentation.css';
import styled from 'styled-components';


const JobTitle = styled.p`
  border-bottom: 2px solid #336b87;
  font-family: "Consolas", "Courier New", "Courier";
  font-weight: bold;
`;

const JobDescription = styled.p`
  font-family: "Consolas", "Courier New", "Courier";
`;

const Timeline = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;

  ::after {
  content: '';
  position: absolute;
  width: 1px;
  background-color: grey;
  top: 15px;
  bottom: 0;
  left: 5%;
  margin-left: -3px;
  }
`;


const Content = styled.div`
  padding: 0px 30px;
  position: relative;
`;

const Entry = styled.div`
  padding: 10px 40px;
  position: relative;
  width: 90%;


  ::after {
  content: '';
  position: absolute;
  width: 15px;
  height: 15px;
  right: -17px;
  background-color:#336B87;
  border: 4px solid #336B87;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
  left: 3.8%;
  }
`;


const Experience = () => (
<div>
  <div>
    <p className="secondary-title">Experiences</p>
  </div>

  <Timeline>
    <Entry>
      <Content>
        <JobTitle>IT Consultant / Omegapoint</JobTitle>
        <JobDescription>I am a fullstack developer and work with AWS.
        I am currently working as consultant at Kronans Apotek. </JobDescription>
        <p>September 2018 - Present</p>
      </Content>
    </Entry>
    <Entry>
      <Content>
        <JobTitle>Master Thesis Intern / SAAB</JobTitle>
        <JobDescription>My master thesis was about continuous delivery and investigating if a
        dashboard system could provide support in the continuous delivery pipeline by creating better monitoring. </JobDescription>
        <p>January 2018 - June 2018</p>
      </Content>
    </Entry>
    <Entry>
    <Content>
      <JobTitle>IT Support / Academic Work</JobTitle>
      <JobDescription>My assignments as an IT support was to be first-line support for the internal organization.</JobDescription>
      <p>May 2016 - August 2018</p>
    </Content>
    </Entry>

  </Timeline>
</div>
);



export default Experience;
