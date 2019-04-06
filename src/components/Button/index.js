import React from 'react';

import './styles.css';

const Button = props => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

export default Button;
