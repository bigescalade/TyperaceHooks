import React, { Component } from 'react';

import TyperaceHook from '../../hooks/Typerace';
import './styles.css';

class Typerace extends Component {
  render() {
    return (
      <div className="MainContainer">
        <h2>Type Race</h2>
        <TyperaceHook />
      </div>
    );
  }
}

export default Typerace;
