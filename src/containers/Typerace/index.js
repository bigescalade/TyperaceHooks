import React from 'react';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Subheading from '../../components/Text/subheading';
import SNIPPETS from '../../helpers/snippets';
import './styles.css';

const Typerace = props => {
  const {
    chooseSnippet,
    gameState,
    resetState,
    snippet,
    text,
    updateText
  } = props;
  return (
    <div className="TyperaceContainer">
      {gameState.isPlaying ? (
        <React.Fragment>
          <Subheading text="Snippet" />
          {snippet}
          <Input id="typeraceInput" onChange={updateText} value={text} />
          <h4>
            {gameState.victory
              ? alert(`Done! 🎉 Time: ${gameState.endTime}ms`)
              : null}
          </h4>
        </React.Fragment>
      ) : (
        <div className="SnippetContainer">
          <Subheading text="Select a snippet" />
          <div className="ButtonsContainer">
            {SNIPPETS.map((SNIPPET, index) => (
              <Button
                key={`button_${index.toString()}`}
                onClick={chooseSnippet(index)}
                text={`${SNIPPET.substring(0, 10)}...`}
              />
            ))}
          </div>
        </div>
      )}
      {gameState.victory && <Button onClick={resetState} text="Play again" />}
    </div>
  );
};

export default Typerace;
