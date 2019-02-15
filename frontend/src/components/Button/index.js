import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const STButton = styled.button`
    margin: 16px 0;
    background: rgb(234, 32, 66);
    font-family: 'AvenirLTStd-Heavy', 'AvenirLTStd-Book', sans-serif;
    padding: 12px;
    width: 100%;
    color: rgb(255, 255, 255);
    border-radius: 5px;
    border: none;
    outline: none;
    font-size: 15px;

    &:active {
      box-shadow: inset 0 1px 4px rgb(177, 63, 82);
      background: rgb(212, 75, 98);
    }

    &:disabled {
      background: rgb(164, 164, 164);
    }
  `

class Button extends Component {
    render() {
        const { title, isLoading, disabled, ...remaining } = this.props;
        return <STButton {...remaining} disabled={disabled}>{title}</STButton>;
    }
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    disabled: PropTypes.bool
};

export default Button;
