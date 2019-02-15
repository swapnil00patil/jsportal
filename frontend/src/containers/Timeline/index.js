import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/macro'; 

import { getAllTimelineEvents } from './model/actions'
import  VerticalTimeline from '../../components/timeline/VerticalTimeline';
import  VerticalTimelineElement from '../../components/timeline/VerticalTimelineElement';
import Loading from '../../components/Loading';
import Header from '../../components/Header';
import { loaderTime } from '../../config';
import Card from './components/Card'

const STContainer = styled.div`

`

class Timeline extends Component {
  state = {
    showLoader: false
  }

  componentDidMount() {
    const { getAllTimelineEvents } = this.props;
    getAllTimelineEvents();
    setTimeout(() => {
      this.setState({
        showLoader: true
      })
    }, loaderTime * 1000)
  }

  render() {
    const { allEvents } = this.props;
    const { showLoader } = this.state;
    return <STContainer>
        { (allEvents.loading || !showLoader) ? <Loading /> : <React.Fragment>
          <Header key="headerkey" />
          <VerticalTimeline layout='1-column'>
            { allEvents.data.map((event, index) => <VerticalTimelineElement
                data={event} 
                key={'event' + index}
                icon={event.date}>
                <Card card={event} />
              </VerticalTimelineElement>)}
          </VerticalTimeline> 
          </React.Fragment>
      }
      </STContainer>;
  }
}

export const mapStateToProps = state => {
  return { 
    allEvents: (state.timeline.all) || {}
  };
};


export default connect(
  mapStateToProps,
  { getAllTimelineEvents }
)(Timeline);
