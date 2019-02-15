import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const STContainer = styled.div`
    border: none;
    border-radius: 4px;
    padding: 5px;
    font-size: 1.6rem;
    margin: 0 8px;
    &:disabled {
      background: rgb(164, 164, 164);
    }
  `
const STRow = styled.div`
    display: flex;
    flex-direction: row;
`
const STTitle = styled.div`
    font-size: 3rem;  
`
const STCategory = styled.div`
    padding: 8px;
    margin-left: 30px;
    color: #fff;
    background: green;
    border-radius: 8px;
    text-transform: capitalize;
    font-size: 2rem;
`
const STCol = styled.div`
    width: 50%;
`
const STPersonImg = styled.img`
    width: 100px;
    border-radius: 10px;
`
const STPersonName = styled.div`
`
const STLinks = styled.div`
`

class Card extends Component {
    render() {
        const { card } = this.props;
        return <STContainer>
          <STRow>
            <STTitle>{card.title}</STTitle>
            {card.categories.map((category, index) => {
              return <STCategory key={'category' + index}>{category.title}</STCategory>;
            })}
          </STRow>
          <STRow style={{background: '#dede9c',marginTop: '10px'}}>
            <STCol>
              <STPersonImg src="https://avatars1.githubusercontent.com/u/810438?s=460&v=4" />
            </STCol>
          </STRow>
        </STContainer>;
    }
}

Card.propTypes = {
    placeholder: PropTypes.string,
    disabled: PropTypes.bool
};

export default Card;
