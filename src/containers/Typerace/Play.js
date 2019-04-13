import React from 'react';

import Input from '../../components/Input';
import Text from '../../components/Text/text';

import './styles.css';

const Play = props => {
  const { snippet, text, updateText, valid } = props;
  return (
    <React.Fragment>
      <Text text={snippet} valid={valid} />
      <Input id="typeraceInput" onChange={updateText} value={text} />
    </React.Fragment>
  );
};

export default Play;
