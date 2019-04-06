import React, { useEffect, useState } from 'react';

import Input from '../../components/Input';
import SNIPPETS from '../../helpers/snippets';
import './styles.css';

const TyperaceHook = () => {
  useEffect(() => {
    if (gameState.victory) document.title = 'Victory!';
  });

  const INITIAL_GAME_STATE = { victory: false, startTime: null, endTime: null };

  const [gameState, setGameState] = useState(INITIAL_GAME_STATE);
  const [snippet, setSnippet] = useState('');
  const [text, setText] = useState('');

  // double arrow syntax sets up chooseSnippet to return a callback function
  const chooseSnippet = snippetIndex => () => {
    console.log('setSnippet', snippetIndex);
    setSnippet(SNIPPETS[snippetIndex]);
    setGameState({ ...gameState, startTime: new Date().getTime() });
  };

  const updateText = event => {
    setText(event.target.value);

    if (event.target.value === snippet) {
      setGameState({
        ...gameState,
        victory: true,
        endTime: new Date().getTime() - gameState.startTime
      });
    }
  };

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
          <button onClick={chooseSnippet(index)} key={index}>
            {SNIPPET.substring(0, 10)}...
          </button>
        ))}
      </div>
    </div>
  );
};

export default TyperaceHook;
