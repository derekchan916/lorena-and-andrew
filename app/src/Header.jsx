import './Header.scss';

import React, { Component } from 'react';

import { HEADER_LINKS } from '../constants';

import Scroll from 'react-scroll';
const Link = Scroll.Link;

class Header extends Component {

  render() {
    return (
      <div>
        { this.renderHeader('normal') }
        { this.renderHeader('fixed') }
      </div>
    )
  }

  renderHeader(format) {
    const className = format === 'fixed' ? 'Header-fixed' : '';

    return (
      <div className={`Header-wrapper ${className}`}>
        { format === 'normal' ?
        <div className="Header-headerWrapper">
          <span className="Header-header">Lorena + Andrew</span>
        </div> : null }
        <li className='Header-list'>
          { HEADER_LINKS.map((linkObj, key) => {
            return (
              <ul key={ key }>
                <Link to={ linkObj.id } smooth={true} duration={200}>
                  { linkObj.title }
                </Link>
              </ul>
            )
          }) }
        </li>
      </div>
    )
  }
}

export default Header;
