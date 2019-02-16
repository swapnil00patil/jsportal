import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Gallery from '../../../../components/Gallery';

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
    display: flex;
    align-items: center;
`
const STCategory = styled.a`
    padding: 8px; 
    margin: 5px;
    color: #fff;
    background: green;
    border-radius: 8px;
    text-transform: capitalize;
    font-size: 2rem;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
`
const STCol = styled.div`
    flex-direction: row;
    display: flex;
`
const STSection = styled.div`
    flex-direction: column;
    display: flex;
`
const STPersonName = styled.div`
  font-size: 2rem;
  margin-bottom: 15px;
`
const STLink = styled(STCategory)`
 
`
const STLinks = styled.div`
 
`
const STDescription = styled.div`
  margin-bottom: 15px;
`


class Card extends Component {
  render() {
    const { card } = this.props;
    return <STContainer>
      <STRow>
        <STTitle>{card.title}</STTitle>
        {card.categories.map((category, index) => <STCategory key={'category' + index}>{category.title}</STCategory>)}
      </STRow>
      <STRow style={{ background: '#dede9c', marginTop: '10px', padding: '20px 10px' }}>
        <STCol style={{marginRight: '30px',paddingRight: '30px',borderRight: '2px dotted #6d0505'}}>
          {card.people.map((person, index) => {
            return <React.Fragment key={'person' + index}>
              <STSection>
                <Gallery
                  media={person.media} />
              </STSection>
              <STSection style={{ marginLeft: '20px' }}>
                <STPersonName>{person.name}</STPersonName>
                {person.links.map((link, index) => <STLink 
                  key={'cardlink' + index} 
                  href={link.url} 
                  target='_blank' 
                  style={index === 0 && { marginLeft: 0 }}>
                    {link.type}
                  </STLink>)}
              </STSection>
            </React.Fragment>
          })}
        </STCol>
        <STCol>
          <STSection>
            <STDescription>{card.description}</STDescription>
            <STLinks>
              {card.links.map((link, index) => <STLink 
                key={'personlink' + index} 
                href={link.url} 
                target='_blank'>
                  {link.type}
                </STLink>)}
            </STLinks>
          </STSection>
          <STSection style={{ marginLeft: '20px' }}>
            <Gallery
              media={card.media} />
          </STSection>
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
