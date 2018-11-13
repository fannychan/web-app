import React  from 'react';

import '../Stylesheets/Presentation.css';
import styled from 'styled-components';

const EducationTitle = styled.p`
  border-bottom: 2px solid #336b87;
  font-family: "Consolas", "Courier New", "Courier";
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 8px;
`;

const EducationDescription = styled.p`
  font-family: "Consolas", "Courier New", "Courier";
`;

const Wrapper = styled.div`
    padding-right: 80px;
    width: 90%;
`;

const Education = () => (
    <Wrapper>
        <p className="secondary-title">Education</p>
        <EducationTitle>Royal Institute of Technology</EducationTitle>
        <EducationDescription>Master of Science in Information and Communication Technology, with a master's degree in Human Computer Interaction and Design.</EducationDescription>
        <p>2013-2018</p>
    </Wrapper>
);

export default Education;