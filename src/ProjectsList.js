import React from 'react';
import Project from './Project';
import NoSelection from './NoSelection';

function ProjectsList(props) {
  let projects = null;

  if(props.projects) {
    projects = props.projects.map((project) => {
      return (
        <Project project={project} key={project.projectName}/>
      );
    })
  }

  return (
    <div className="projects-list">
      {projects === null ? <NoSelection /> : projects }
    </div>
  );
}

export default ProjectsList;
