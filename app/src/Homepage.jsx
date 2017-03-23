import './Homepage.scss';

import React, { Component } from 'react';

import Header from './Header';
import MainImage from './MainImage';
import Summary from './Summary';
import Events from './Events';
import Party from './Party';
import RSVP from './RSVP';

class Homepage extends Component {

  render () {

    return (
      <div className="Homepage">
        <Header />
        <MainImage />
        <Summary />
        <Events />
        <Party />
        <RSVP />
      </div>
    )
  }
}

export default Homepage;
