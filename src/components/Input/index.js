import React from 'react';

import './styles.css';

const Input = props => {
  window.onload = () => {
    console.log('onload');
    const typeraceInput = document.getElementById('typeraceInput');
    typeraceInput.onpaste = event => {
      event.preventDefault();
      alert('Hey! No cheating!');
    };
  };

  return (
    <input
      className="Input"
      id="typeraceInput"
      onChange={props.onChange}
      value={props.value}
    />
  );
};

export default Input;
