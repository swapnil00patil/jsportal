import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getAllTimelineEvents } from './model/actions'
import  VerticalTimeline from '../../components/timeline/VerticalTimeline';
import  VerticalTimelineElement from '../../components/timeline/VerticalTimelineElement';

const STIcon = styled.div`

`

class Timeline extends Component {
  componentDidMount() {
    const { getAllTimelineEvents } = this.props;
    getAllTimelineEvents();
  }

  render() {
    return (
      <VerticalTimeline layout='1-column'>
        <VerticalTimelineElement
          icon="JUN 29 2017"
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    );
  }
}
// Title	event heading
// description	few details of the event
// date	month and year
// links	multiple links related to the event
// media 	images, (video embed?)
// personnel	people involved. E.g. creator of js, creator of jquery, node, angular, react
// Topic category	e.g. language, library, framework, tooling
// Learning Material	links to tuts, docs, videos, courses
export const mapStateToProps = state => {
  return { 
    timeline: (state.timeline) || {}
  };
};


export default connect(
  mapStateToProps,
  { getAllTimelineEvents }
)(Timeline);
