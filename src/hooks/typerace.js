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
    isValid: null,
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
    const { target } = event;
    const { value } = target;
    setText(value);

    if (value === snippet) {
      setGameState({
        ...gameState,
        endTime: new Date().getTime() - gameState.startTime,
        victory: true
      });
    } else {
      if (snippet.substring(0, value.length) === value) {
        setGameState({
          ...gameState,
          isValid: true
        });
      } else {
        setGameState({
          ...gameState,
          isValid: false
        });
      }
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
