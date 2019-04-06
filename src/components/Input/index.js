import React from 'react';

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
    <input id="typeraceInput" onChange={props.onChange} value={props.value} />
  );
};

export default Input;
