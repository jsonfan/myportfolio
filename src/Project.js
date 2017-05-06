import React from 'react';


function Project(props) {
  const project = props.project;
  const img = `${process.env.PUBLIC_URL}/img/${project.img}`;
  const link = project.link ? project.link : "#";

  return (
    <div className="project">
      <span>{project.projectName}</span>
      <a href={link} target="_blank">
        <img className="project-img" src={img} alt={project.shortSummary} title={project.shortSummary}></img>
      </a>
    </div>
  );
}

export default Project;
