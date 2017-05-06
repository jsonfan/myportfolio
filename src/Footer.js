import React from 'react';

import './Footer.css';

function Footer(props) {
  return (
    <footer className="footer">
      <a className="footer-item" href="mailto:jsonfan@gmail.com">
        <img src={process.env.PUBLIC_URL + "/svg/envelope.svg"} alt="mail"/>
      </a>
      <a className="footer-item" href="https://www.linkedin.com/in/jasoncfan">
        <img src={process.env.PUBLIC_URL + "/svg/linkedin.svg"} alt="linkedin"/>
      </a>
      <a className="footer-item" href="https://github.com/jsonfan">
        <img src={process.env.PUBLIC_URL + "/svg/github_badge.svg"} alt="github"/>
      </a>
    </footer>
  );
}

export default Footer;
