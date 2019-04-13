import React from 'react';

import './styles.css';

const Text = props => {
  return (
    <p className={props.valid === false ? 'Text Error' : 'Text'}>
      {props.text}
    </p>
  );
};

export default Text;
