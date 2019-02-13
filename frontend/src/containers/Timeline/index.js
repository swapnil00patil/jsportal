import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAllTimelineEvents } from './model/actions'

class Timeline extends Component {
  componentDidMount() {
    const { getAllTimelineEvents } = this.props;
    getAllTimelineEvents();
  }

  render() {
    return (
      <React.Fragment>
        I am timeline
      </React.Fragment>
    );
  }
}
export const mapStateToProps = state => {
  return { 
    timeline: (state.timeline) || {}
  };
};


export default connect(
  mapStateToProps,
  { getAllTimelineEvents }
)(Timeline);
