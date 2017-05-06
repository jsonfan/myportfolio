import React, {Component} from 'react';
import ProjectsList from './ProjectsList';
import shuffleArray from './shuffle.js';

import './projects.css';
import './projects-mq.css';
import projects from './projects.json';


const modes = [
  {
    "modeName" : "Web Dev",
    "modeKey" : "webDev"
  },
  {
    "modeName": "Mobile",
    "modeKey" : "mobile"
  },
  {
    "modeName": "Embedded Systems",
    "modeKey" : "embeddedSys"
  }
];

class Projects extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projects : []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (k) => {
    let proj = shuffleArray(projects[k].projects);
    this.setState(
      {
        projectsState: proj
      }
    )
  }

  render() {
    const projectsState = this.state.projectsState;
    const modeRender = modes.map((mode) => {
      const svgSrc = `${process.env.PUBLIC_URL}/svg/${mode.modeKey}.svg`;
      return (
        <div className="mode"
          onClick={() => this.handleClick(mode.modeKey)}
          key={mode.modeKey}
        >
         <img src={svgSrc} alt={mode.modeKey}/>
         <span className="mode-name">{mode.modeName}</span>
        </div>
      );
    });
    return (
      <section className="projects">
        <div className="mode-select">
          {modeRender}
        </div>
        <ProjectsList projects={projectsState} />
      </section>
    );
  }
}

export default Projects;
