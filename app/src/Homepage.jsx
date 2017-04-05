import './Homepage.scss';

import React, { Component } from 'react';

import Events from './Events';
import Header from './Header';
import MainImage from './MainImage';
import Party from './Party';
import RSVPList from './RSVPList';
import Summary from './Summary';
import Travel from './Travel';

class Homepage extends Component {

  render () {

    return (
      <div className="Homepage" id="home">
        <Header />
        <MainImage />
        <Summary />
        <Events />
        <Party />
        <Travel />
        <RSVPList />
      </div>
    )
  }
}

export default Homepage;
