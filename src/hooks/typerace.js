import React, { useEffect, useState } from 'react';

import Typerace from '../containers/Typerace';
import SNIPPETS from '../helpers/snippets';

const TyperaceHook = () => {
  useEffect(() => {
    if (gameState.victory) {
      document.title = 'Victory!';
    } else {
      document.title = 'Typerace';
    }
  });

  const INITIAL_GAME_STATE = {
    endTime: null,
    isPlaying: false,
    startTime: null,
    victory: false
  };

  const INITIAL_TEXT_STATE = '';

  const [gameState, setGameState] = useState(INITIAL_GAME_STATE);
  const [snippet, setSnippet] = useState('');
  const [text, setText] = useState(INITIAL_TEXT_STATE);

  // double arrow syntax sets up chooseSnippet to return a callback function
  const chooseSnippet = snippetIndex => () => {
    setSnippet(SNIPPETS[snippetIndex]);
    setGameState({
      ...gameState,
      isPlaying: true,
      startTime: new Date().getTime()
    });
  };

  const resetState = () => {
    setGameState({ INITIAL_GAME_STATE });
    setText(INITIAL_TEXT_STATE);
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
      resetState={resetState}
      snippet={snippet}
      text={text}
      updateText={updateText}
    />
  );
};

export default TyperaceHook;
