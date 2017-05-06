import React from 'react';
import SkillGroup from './SkillGroup';

import './Skills.css';
import './Skills-mq.css';

import data from './skills.json';
import shuffleArray from './shuffle';

function Skills(props) {
  const skills = shuffleArray(data);
  const skillGroups = skills.map((skill) => {
    return (
      <SkillGroup
        key={skill.skillType}
        skill={skill}
      />
    );
  });
  return (
    <section className="skills">
      {skillGroups}
    </section>
  );
}

export default Skills;
