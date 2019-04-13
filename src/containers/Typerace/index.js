import React from 'react';

import Heading from '../../components/Text/heading';

import Play from './Play';
import Start from './Start';
import Victory from './Victory';
import './styles.css';

class Typerace extends React.Component {
  componentDidUpdate() {
    const typeraceInput = document.getElementById('typeraceInput');
    if (typeraceInput) {
      typeraceInput.onpaste = event => {
        event.preventDefault();
        alert('Hey! No cheating!');
      };
    }
  }

  render() {
    const {
      chooseSnippet,
      gameState,
      resetState,
      snippet,
      text,
      updateText
    } = this.props;
    return (
      <div className="TyperaceContainer">
        <Heading
          center={!gameState.isPlaying}
          text={!gameState.isPlaying ? 'Typerace' : 'START TYPING:'}
        />
        {!gameState.isPlaying ? (
          <Start chooseSnippet={chooseSnippet} />
        ) : (
          <Play snippet={snippet} text={text} updateText={updateText} />
        )}
        {gameState.victory && (
          <Victory gameState={gameState} resetState={resetState} />
        )}
      </div>
    );
  }
}

export default Typerace;
