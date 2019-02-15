import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const STTextbox = styled.input`
    border: none;
    padding: 10px;
    border-radius: 4px;
    width: 200px;
    font-size: 1.6rem;
    margin: 0 8px;
    &:disabled {
      background: rgb(164, 164, 164);
    }
  `

class Textbox extends Component {
    render() {
        const { type = 'text', isLoading, disabled, ...remaining } = this.props;
        return <STTextbox {...remaining} type={type} disabled={disabled} />;
    }
}

Textbox.propTypes = {
    placeholder: PropTypes.string,
    disabled: PropTypes.bool
};

export default Textbox;
