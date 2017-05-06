import React from 'react';

function Mode(props) {
  const mode = props.mode;

  return (
    <div className="mode">
      {mode.modeName}
    </div>
  );
}

export default Mode;
