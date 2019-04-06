import React from 'react';

import Button from '../../components/Button';
import Input from '../../components/Input';
import SNIPPETS from '../../helpers/snippets';
import './styles.css';

const Typerace = props => {
  const { chooseSnippet, gameState, snippet, text, updateText } = props;
  return (
    <div className="TyperaceContainer">
      <h3>Snippet</h3>
      {snippet}
      <h4>
        {gameState.victory ? `Done! 🎉 Time: ${gameState.endTime}ms` : null}
      </h4>
      <Input id="typeraceInput" onChange={updateText} value={text} />
      <div>
        {SNIPPETS.map((SNIPPET, index) => (
          <Button
            key={`button_${index.toString()}`}
            onClick={chooseSnippet(index)}
            text={`${SNIPPET.substring(0, 10)}...`}
          />
        ))}
      </div>
    </div>
  );
};

export default Typerace;
