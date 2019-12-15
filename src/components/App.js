import React from 'react';

import Cartoon from './Cartoon';
import ControlPanel from './ControlPanel';

const App = () => {
  return (
  <div className="ui container" style={{marginTop: '5px'}}>
      <Cartoon />
      <ControlPanel />
  </div>
  );
};

export default App;
