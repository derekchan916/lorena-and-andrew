import './Homepage.scss';

import React, { Component } from 'react';

import Header from './Header';
import MainImage from './MainImage';

class Homepage extends Component {

  render () {

    return (
      <div className="Homepage">
        <Header />
        <MainImage />
      </div>
    )
  }
}

export default Homepage;
