import React from 'react';

import Button from '../../components/Button';
import Subheading from '../../components/Text/subheading';
import SNIPPETS from '../../helpers/snippets';
import './styles.css';

const Start = props => {
  const { chooseSnippet } = props;
  return (
    <div className="SnippetContainer">
      <Subheading text="Select a race" />
      <div className="ButtonsContainer">
        {SNIPPETS.map((SNIPPET, index) => (
          <Button
            className="Button"
            key={`button_${index.toString()}`}
            onClick={chooseSnippet(index)}
            text={`${SNIPPET.substring(0, 10)}...`}
          />
        ))}
      </div>
    </div>
  );
};

export default Start;
