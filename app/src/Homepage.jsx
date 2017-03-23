import './Homepage.scss';

import React, { Component } from 'react';

import Header from './Header';
import MainImage from './MainImage';
import Summary from './Summary';
import Events from './Events';
import Party from './Party';
import RSVPList from './RSVPList';

class Homepage extends Component {

  render () {

    return (
      <div className="Homepage">
        <Header />
        <MainImage />
        <Summary />
        <Events />
        <Party />
        <RSVPList />
      </div>
    )
  }
}

export default Homepage;
