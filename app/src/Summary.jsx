import './Summary.scss';

import React, { Component } from 'react';

class Summary extends Component {

  render() {
    return (
      <div className='content-wrapper'>
        <div className='content-container'>
          <h1>Our Story</h1>
          <div className="Summary-block">
            <span>
              We met each other on the first day of university during Orientation week at Waterloo and became fast friends through late-night study groups, piano sessions and dumplings. In summer of second year, we officially started dating.
            </span>
            <span>
              Fast forward eight years after that summer, we're so excited to celebrate our marriage with you this July!
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default Summary;
