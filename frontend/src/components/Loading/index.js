import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { loaderTime } from '../../config'

const STContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: #6d0505;
  color: #fff;
  flex-direction: column;
`
const STQuote = styled.div`
  position: relative;
  margin-top: -100px;
`
const STTitle = styled.div`
  font-size: 3.0rem;
`
const STBy = styled.div`
  text-align: right;
  font-style: italic;
`
const STLoader = styled.div`
  font-size: 3.0rem;
  background: #f4df4f;
  border-radius: 50%;
  padding: 11px 15px;
  border: 1px solid #6d0505;
  color: #6d0505;
  margin-top: 100px;
 
  /* Animation to spin and move the sphere */
  animation: spin 1500ms linear infinite, moveLeftToRightToCenter ${props => props.loaderTime}s linear ;
  transition: all 1s ease;
  
  position: absolute;
  left: calc(50% - 30px);
`
const quotes = [
  {
    title: 'I decided to drop out and trust that it would all work out ok.',
    by: 'Steve Jobs'
  }
]

class Loading extends Component {
    render() {
        const { show } = this.props;
        const quote = quotes[Math.floor(Math.random() * quotes.length)];
        return <STContainer show={show}>
          <STQuote>
            <STTitle>{quote.title}</STTitle>
            <STBy>{quote.by}</STBy>
            <STLoader loaderTime={loaderTime}>JS</STLoader>
          </STQuote>
        </STContainer>;
    }
}

STContainer.propTypes = {
    show: PropTypes.bool
};

export default Loading;
