import React, { useEffect, useState } from 'react';

import Typerace from '../containers/Typerace';
import SNIPPETS from '../helpers/snippets';

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
    <Typerace
      chooseSnippet={chooseSnippet}
      gameState={gameState}
      snippet={snippet}
      text={text}
      updateText={updateText}
    />
  );
};

export default TyperaceHook;
