import React from 'react';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Heading from '../../components/Text/heading';
import Subheading from '../../components/Text/subheading';
import Text from '../../components/Text/text';
import msconverter from '../../helpers/msconverter';
import SNIPPETS from '../../helpers/snippets';
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
          <div className="SnippetContainer">
            <Subheading text="Select a race" />
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
        {gameState.victory && (
          <div className="VictoryContainer">
            <h4>
              {gameState.victory ? (
                <Text
                  text={`🎉 Victory! Time taken: ${msconverter(
                    gameState.endTime
                  )} ${gameState.endTime < 60000 && 'seconds'} 🎉`}
                />
              ) : null}
            </h4>
            <Button onClick={resetState} text="Play again" />
          </div>
        )}
      </div>
    );
  }
}

export default Typerace;
