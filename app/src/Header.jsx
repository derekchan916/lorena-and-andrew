import './Header.scss';

import React, { Component } from 'react';

import { HEADER_LINKS } from '../constants';

class Header extends Component {

  render() {
    return (
      <div className='Header-wrapper'>
        <li className='Header-list'>
          { HEADER_LINKS.map((link, i) => {
            return (
              <ul key={ i }>{ link }</ul>
            )
          })}
        </li>
      </div>
    )
  }
}

export default Header;
