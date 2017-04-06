import './Party.scss';

import React, { Component } from 'react';

import { PARTY_PEOPLE } from '../constants';

class Party extends Component {

  render() {
    return (
      <div className="content-wrapper" id="weddingParty">
        <div className="content-container">
          <h1>Party Time</h1>
          <span className="Party-subtitle">We are so honoured to have our closest friends and family be at our wedding and want you to get to know them too!</span>
          { this.renderPartyList() }
        </div>
      </div>
    )
  }

  renderPartyList() {
    return (
      <ul>
        { PARTY_PEOPLE.map((person, i) => {
          return (
            <li className="Party-listItem" key={ i }>
              <div className="Party-listDetails">
                <h2>{ person.name }</h2>
                <span className="Party-listPosition">{ person.position }</span>
                <a target='_blank' href={ person.link }>{ person.instagram }</a>
                { person.description.map((script, key) => {
                  return (
                    <span key={ key } className="Party-listDescription">{ script }</span>
                  )
                }) }
              </div>
              <div className="Party-listImageWrapper">
                { person.image ? <img
                  src={ person.image }
                  className="Party-listImage "/> : null }
                { person.video ?
                  <video width="300" height="300" autoPlay loop>
                    <source src={ person.video } type="video/mp4" />
                  </video> : null }
              </div>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default Party;
