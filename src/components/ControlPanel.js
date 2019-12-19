import './ControlPanel.css';
import React from 'react';
import { connect } from 'react-redux';
import {
  fetchLatestCartoon,
  fetchFirstCartoon,
  fetchPreviousCartoon,
  fetchNextCartoon,
  fetchRandomCartoon
} from '../actions';

const ControlPanel = props => {
  return (
    <div className="ui container control-panel">
      <button className="ui icon button" onClick={props.fetchFirstCartoon}>
        <i className="angle left icon"></i>
      </button>
      <button className="ui icon button" onClick={props.fetchPreviousCartoon}>
        <i className="angle double left icon"></i>
      </button>
      <button className="ui icon button" onClick={props.fetchRandomCartoon}>
        <i className="random icon"></i>
      </button>
      <button className="ui icon button" onClick={props.fetchNextCartoon}>
        <i className="angle double right icon"></i>
      </button>
      <button className="ui icon button" onClick={props.fetchLatestCartoon}>
        <i className="angle right icon"></i>
      </button>
      <button className="ui red icon button">
        <i className="heart icon"></i>
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return { cartoon: state.cartoon };
};

export default connect(mapStateToProps, {
  fetchLatestCartoon,
  fetchFirstCartoon,
  fetchPreviousCartoon,
  fetchNextCartoon,
  fetchRandomCartoon
})(ControlPanel);
