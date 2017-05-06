import React from 'react';
import Skill from './Skill';

function SkillGroup(props) {
  const skills = props.skill.skills.map((skill) => {
    return (
      <Skill skill={skill} key={skill}>
      </Skill>
    );
  });
  return (
    <div className="skillgroup" data-bg-text="Backend">
      <div className="skill-label">
        <span>{props.skill.skillType}</span>
      </div>
      {skills}
    </div>
  );
}

export default SkillGroup;
