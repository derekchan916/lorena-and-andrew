import './Homepage.scss';

import React, { Component } from 'react';

import Header from './Header';
import MainImage from './MainImage';
import Summary from './Summary';

class Homepage extends Component {

  render () {

    return (
      <div className="Homepage">
        <Header />
        <MainImage />
        <Summary />
      </div>
    )
  }
}

export default Homepage;
