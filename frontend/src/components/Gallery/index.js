import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactImageVideoLightbox from 'react-image-video-lightbox';

const STContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  height: 200px;
  width: 200px;
`

class Gallery extends Component {
    render() {
        const { media } = this.props;
        return <STContainer>
        <ReactImageVideoLightbox
          data={media}
          startIndex={0}
          showResourceCount={true}/>
      </STContainer>
    }
}

Gallery.propTypes = {
  media: PropTypes.array.isRequired
};

export default Gallery;
