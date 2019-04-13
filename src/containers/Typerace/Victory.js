import React from 'react';

import Button from '../../components/Button';
import Text from '../../components/Text/text';
import msconverter from '../../helpers/msconverter';

import './styles.css';

const Victory = props => {
  const { gameState, resetState } = props;
  return (
    <div className="VictoryContainer">
      <Text
        text={`🎉 Victory! Time taken: ${msconverter(
          gameState.endTime
        )} ${gameState.endTime < 60000 && 'seconds'} 🎉`}
      />
      <Button onClick={resetState} text="Play again" />
    </div>
  );
};

export default Victory;
