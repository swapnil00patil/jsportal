import React, { Component } from 'react';
import styled from 'styled-components';

import Filter from '../Filter'

const STContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  background: #6d0505;
  color: #fff;
  flex-direction: row;
`
const STLogo = styled.div`
  font-size: 2.5rem;
  margin: 0 20px;
`

class Header extends Component {
    render() {
        return <STContainer>
          <STLogo>JSPortal</STLogo>
          <Filter />
        </STContainer>;
    }
}

Header.propTypes = {
  
};

export default Header;
