import './Party.scss';

import React, { Component } from 'react';

import { PARTY_PEOPLE } from '../constants';

class Party extends Component {

  constructor() {
    super();

    this.state = ({ showVideo: false });
    this.openVideo = this.openVideo.bind(this);
    this.closeVideo = this.closeVideo.bind(this);
  }

  render() {
    return (
      <div className="content-wrapper" id="weddingParty">
        <div className="content-container">
          <h1>Party Time</h1>
          <span className="Party-subtitle">We are so honoured to have our closest friends and family be at our wedding and want you to get to know them too!</span>
          { this.renderPartyList() }
          { this.renderFullVideo() }
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
                { person.name === 'HAYLIE WU' ?
                <span className="Party-videoLink" onClick={ this.openVideo }>Click Here</span> : null }
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
              </div>
            </li>
          )
        })}
      </ul>
    )
  }

  renderFullVideo() {
    const { showVideo } = this.state;

    if (!showVideo) { return null };

    return (
      <div className="Party-videoWrapper">
        <video className="Party-video" autoPlay loop>
          <source src='app/images/haylie-video.mp4' type="video/mp4" />
        </video>
        <span className="Party-videoExit" onClick={ this.closeVideo }>x</span>
      </div>
    )
  }

  openVideo() {
    this.setState({ showVideo: true });
  }

  closeVideo() {
    this.setState({ showVideo: false });
  }
}

export default Party;
