import './Header.scss';

import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <div className="Header-wrapper">
        <li className='Header-list'>
          <ul>HOME</ul>
          <ul>EVENTS</ul>
          <ul>WEDDING PARTY</ul>
          <ul>TRAVEL</ul>
        </li>
      </div>
    )
  }
}

export default Header;
