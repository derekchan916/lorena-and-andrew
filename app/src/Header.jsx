import './Header.scss';

import React, { Component } from 'react';

import { HEADER_LINKS } from '../constants';

import Scroll from 'react-scroll';
const Link = Scroll.Link;

class Header extends Component {
  constructor() {
    super();

    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      fixedHeaderActive: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <div>
        { this.renderHeader('normal') }
        { this.renderHeader('fixed') }
      </div>
    )
  }

  renderHeader(format) {
    const className = format === 'fixed' ?
      this.state.fixedHeaderActive ? 'Header-fixed' : 'Header-fixedDisable' : 'Header-normal';

    return (
      <div className={`Header-wrapper ${className}`}>
        { format === 'normal' ?
        <div className="Header-header">
          <span>Lorena + Andrew</span>
        </div> : null }
        <ul className='Header-list'>
          { HEADER_LINKS.map((linkObj, key) => {
            return (
              <li key={ key }>
                <Link
                  to={ linkObj.id }
                  smooth={true}
                  duration={200}
                  offset={ linkObj.offset }>
                  { linkObj.title }
                </Link>
              </li>
            )
          }) }
        </ul>
      </div>
    )
  }

  handleScroll() {
    if (scrollY > 70) {
      this.setState({ fixedHeaderActive: true });
    } else {
      this.setState({ fixedHeaderActive: false });
    }
  }
}

export default Header;
