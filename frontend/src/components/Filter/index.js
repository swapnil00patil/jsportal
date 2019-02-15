import React, { Component } from 'react';
import styled from 'styled-components/macro';

import Textbox from '../Textbox'
import Dropdown from '../Dropdown'

const STContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  color: #fff;
  flex-direction: row;
  display: flex;
  justify-content: flex-end;
  margin-right: 12px;
`

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

class Filter extends Component {
  render() {
    return <STContainer>
      <Textbox 
        placeholder='Search Term' 
      />
      <Dropdown
        onChange={this.onChange}
        options={options}
      />
      <Dropdown
        onChange={this.onChange}
        options={options}
      />
      <Dropdown
        onChange={this.onChange}
        options={options}
      />
    </STContainer>;
  }
}

Filter.propTypes = {
  
};

export default Filter;
