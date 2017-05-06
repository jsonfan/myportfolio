import React from 'react';


function Skill(props) {
  const skillIcon = `${process.env.PUBLIC_URL}/svg/${props.skill.replace(/\s/g,'').toLowerCase()}.svg`;
  return (
    <div className="skill">
      <span className="skill-name">{props.skill}</span>
      <img className="skill-svg" src={skillIcon} alt={props.skill} title={props.skill}/>
    </div>
  );
}

export default Skill;
