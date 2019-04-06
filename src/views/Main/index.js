import React, { Component } from 'react';

import Heading from '../../components/Text/heading';
import TyperaceHook from '../../hooks/typerace';
import './styles.css';

class Typerace extends Component {
  render() {
    return (
      <div className="MainContainer">
        <Heading text="Typerace" />
        <TyperaceHook />
      </div>
    );
  }
}

export default Typerace;
