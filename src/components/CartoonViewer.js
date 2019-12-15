import React from 'react';

import Cartoon from './Cartoon';
import ControlPanel from './ControlPanel';

const CartoonViewer = () => {
  return (
    <div className="ui container segment">
      <Cartoon />
      <div className="ui divider"></div>
      <ControlPanel />
    </div>
  );
};

export default CartoonViewer;
