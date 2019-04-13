import React from 'react';

import Button from '../../components/Button';
import Heading from '../../components/Text/heading';
import Text from '../../components/Text/text';
import msconverter from '../../helpers/msconverter';

import Play from './Play';
import Start from './Start';
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
          <div className="VictoryContainer">
            <Text
              text={`🎉 Victory! Time taken: ${msconverter(
                gameState.endTime
              )} ${gameState.endTime < 60000 && 'seconds'} 🎉`}
            />
            <Button onClick={resetState} text="Play again" />
          </div>
        )}
      </div>
    );
  }
}

export default Typerace;
