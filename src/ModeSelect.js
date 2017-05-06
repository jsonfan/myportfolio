import React from 'react';
import Mode from './Mode';

function ModeSelect(props) {
  const modes = props.modes.map((mode) => {
    return (
      <Mode mode={mode} key={mode.modeKey} />
    );
  });
  return (
    <div className="mode-select">
     {modes}
    </div>
  );
}

export default ModeSelect;
