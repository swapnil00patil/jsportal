import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

class Dropdown extends Component {
  state = {
    selectedOption: null,
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    const { onChange } = this.props;
    onChange(selectedOption);
  }

  render() {
    const { selectedOption } = this.state;  
    const { options } = this.props;
    return <Select
      className='dropdown'
      value={selectedOption}
      onChange={this.handleChange}
      options={options}
    />;
  }
}

Dropdown.propTypes = {
    disabled: PropTypes.bool
};

export default Dropdown;
