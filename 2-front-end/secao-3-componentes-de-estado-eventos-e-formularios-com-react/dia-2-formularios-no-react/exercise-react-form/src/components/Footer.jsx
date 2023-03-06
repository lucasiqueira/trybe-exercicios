import React from 'react';
import '../assets/styles/Footer.css';
import github from '../assets/svg/github-white.svg';
import linkedin from '../assets/svg/linkedin-white.svg';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p>Desenvolvido por Lucas Siqueira - 2023 </p>
        <a href="https://github.com/lucasiqueira"><img src={ github } alt="GitHub" className="logo" /></a>
        <a href="https://www.linkedin.com/in/lucasvsiqueira/"><img src={ linkedin } alt="LinkedIn" className="logo" /></a>
      </footer>
    );
  }
}

export default Footer;
