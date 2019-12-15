import './ControlPanel.css';
import React from 'react';

const ControlPanel = () => {
  return (
    <div className="ui container control-panel">
      <button className="ui icon button"><i className="angle left icon"></i></button>
      <button className="ui icon button"><i className="angle double left icon"></i></button>
      <button className="ui icon button"><i className="random icon"></i></button>
      <button className="ui icon button"><i className="angle double right icon"></i></button>
      <button className="ui icon button"><i className="angle right icon"></i></button>
      <button className="ui red icon button"><i className="heart icon"></i></button>
    </div>
  );
};

export default ControlPanel;
