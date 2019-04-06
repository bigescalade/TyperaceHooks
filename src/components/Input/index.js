import React from 'react';

import './styles.css';

const Input = props => {
  return (
    <input
      autoComplete="off"
      autoFocus
      className="Input"
      id={props.id}
      onChange={props.onChange}
      value={props.value}
    />
  );
};

export default Input;
