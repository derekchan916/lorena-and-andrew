import './Party.scss';

import React, { Component } from 'react';

class Party extends Component {

  render() {
    return (
      <div className="content-wrapper">
        <div className="content-container">
          <h1>PARTY TIME</h1>
          { this.renderPartyList() }
        </div>
      </div>
    )
  }

  renderPartyList() {
    return (
      <li className="Party-list">
        <ul>
          <div className="Party-listDetails">
            <h2>DEREK CHAN</h2>
            <span>Megan and I met during summer school after our freshman year at UCLA — we hit it off and wound up rooming together during junior and senior year. After graduation, we packed up our apartment for San Francisco. We had both gotten our first (grown-up!) jobs in the city and found an apartment together in the Inner Richmond. Our Monday night tradition was pretty much my most favorite thing, ever: pizza from Giorgio’s and the newest episode of The Bachelor.</span>
          </div>
          <div className="Party-listImageWrapper">
            <img
              src="app/images/lorena-andrew-1.jpg"
              className="Party-listImage "/>
          </div>
        </ul>
      </li>
    )
  }
}

export default Party;
