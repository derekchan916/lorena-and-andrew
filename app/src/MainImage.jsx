import './MainImage.scss';

import React, { Component } from 'react';

class MainImage extends Component {

  render() {

    return (
      <div className="MainImage-wrapper">
        <img
          src="app/images/lorena-andrew-1.jpg"
          className="MainImage-image" />
      </div>
    )
  }
}

export default MainImage;
