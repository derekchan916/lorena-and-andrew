import './Party.scss';

import React, { Component } from 'react';

import { PARTY_PEOPLE } from '../constants';

class Party extends Component {

  render() {
    return (
      <div className="content-wrapper" id="weddingParty">
        <div className="content-container">
          <h1>PARTY TIME</h1>
          { this.renderPartyList() }
        </div>
      </div>
    )
  }

  renderPartyList() {
    return (
      <li>
        { PARTY_PEOPLE.map((person, i) => {
          return (
            <ul className="Party-listItem" key={ i }>
              <div className="Party-listDetails">
                <h2>{ person.name }</h2>
                <span>{ person.description }</span>
              </div>
              <div className="Party-listImageWrapper">
                <img
                  src={ person.image }
                  className="Party-listImage "/>
              </div>
            </ul>
          )
        })}
      </li>
    )
  }
}

export default Party;
