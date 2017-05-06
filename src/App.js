import React, { Component } from 'react';

import Skills from './Skills';
import Projects from './Projects';
import Footer from './Footer';

import './App.css';
import './App-mq600.css';
import './App-mq900.css';
import './App-mq1024.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <fieldset className="profile">
            <legend>1P</legend>
          </fieldset>
          <h2 id="greeting" title="too many commas" >Hi, I'm Jason, software engineer.</h2>
        </header>
        <p className="section-label">SKILL TREE</p>
        <Skills />
        <p className="section-label">SELECT MODE</p>
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
