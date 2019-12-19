import React, { Component } from 'react';
import { connect } from 'react-redux';

import ControlPanel from './ControlPanel';
import { fetchLatestCartoon } from '../actions';
import { formatDate } from '../helpers';

class Cartoon extends Component {
  componentDidMount() {
    this.props.fetchLatestCartoon();
  }
  render() {
    console.log(this.props.cartoon);
    if (this.props.cartoon !== null) {
      const { month, day, year, safe_title, img } = this.props.cartoon;
      return (
        <div>
          <h1 className="ui center aligned header">
            {safe_title}
            <div className="sub header">{formatDate(month, day, year)}</div>
          </h1>
          <ControlPanel />
          <div className="ui divider"></div>
          <img
            className="ui centered image"
            src={img}
            alt={safe_title}
          />
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

const mapStateToProps = state => {
  return { cartoon: state.cartoon.currentCartoon };
};

export default connect(mapStateToProps, { fetchLatestCartoon })(Cartoon);
