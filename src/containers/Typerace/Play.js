import React from 'react';

import Input from '../../components/Input';
import Text from '../../components/Text/text';

import './styles.css';

const Play = props => {
  const { snippet, text, updateText } = props;
  return (
    <React.Fragment>
      <Text text={snippet} />
      <Input id="typeraceInput" onChange={updateText} value={text} />
    </React.Fragment>
  );
};

export default Play;
