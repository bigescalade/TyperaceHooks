import React from 'react';

import './styles.css';

const Heading = props => {
  return (
    <h1 className={`${props.center && 'Centered'} Heading`}>{props.text}</h1>
  );
};

export default Heading;
