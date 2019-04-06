import React from 'react';

import './styles.css';

const Input = props => {
  return (
    <input
      autoComplete="off"
      className="Input"
      id="typeraceInput"
      onChange={props.onChange}
      value={props.value}
    />
  );
};

export default Input;
