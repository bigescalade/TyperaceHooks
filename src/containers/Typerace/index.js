import React from 'react';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Heading from '../../components/Text/heading';
import Subheading from '../../components/Text/subheading';
import Text from '../../components/Text/text';
import msconverter from '../../helpers/msconverter';
import SNIPPETS from '../../helpers/snippets';
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
        {gameState.isPlaying ? (
          <React.Fragment>
            <Text text={snippet} />
            <Input id="typeraceInput" onChange={updateText} value={text} />
          </React.Fragment>
        ) : (
          <Start chooseSnippet={chooseSnippet} />
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
