import React from 'react';
import styled from 'styled-components';


const SkillTitle = styled.p`
  font-family: "Consolas", "Courier New", "Courier";
  font-weight: bold;
`;

const SkillBar = styled.div`
    background: linear-gradient(
        to right,
        #336b87 calc(300px * ${props => props.fill}),
        rgba(167,84,134,0) calc(300px * ${props => props.fill})
        );
    border: 1px solid black;
    box-shadow: 20px 38px 34px -26px hsla(0,0%,0%,.2);
    height: 20px;
    width: 300px;
`;

const Skills = () => (
  <div>
    <p className="secondary-title">Skills</p>
    <div>
    <Skill
        text = "JavaScript"
        proficiency = "0.7"
      />
      <Skill
        text = "UX Design"
        proficiency = "0.7"
      />
      <Skill
        text = "AWS"
        proficiency = "0.5"
      />
      <Skill
        text = "Java"
        proficiency = "0.5"
      />
      <Skill
        text = "Python"
        proficiency = "0.3"
      />
    </div>
  </div>
);

const Wrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 430px;
    margin-top: 8px;
    margin-bottom: 40px;
`;


const Skill = props => (
  <Wrapper>
      <SkillTitle>{props.text}</SkillTitle>
      <SkillBar fill={props.proficiency} />
  </Wrapper>
);




export default Skills;
