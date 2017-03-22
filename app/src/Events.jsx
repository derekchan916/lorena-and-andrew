import './Events.scss';

import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class Events extends Component {

  render() {
    return (
      <div className="Events-wrapper content-wrapper">
        <div className="content-container">
          <h1>EVENTS</h1>
          <div className="Events-content">
            { this.renderEventList() }
            { this.renderEventMap() }
          </div>
        </div>
      </div>
    )
  }

  renderEventList() {
    return (
      <li className="Events-detailList">
        <ul>
          <h2>WEDDING CEREMONY</h2>
          <div className="Events-subDetails">
            <span>5:00PM, August 1, 2007</span>
            <span>Golden Gate Park Rose Garden</span>
          </div>
        </ul>

        <ul>
          <h2>RECEPTION</h2>
          <div className="Events-subDetails">
            <span>7:00PM, August 1, 2007</span>
            <span>Golden Gate Park Rose Garden</span>
          </div>
        </ul>
      </li>
    )
  }

  renderEventMap() {
    return (
      <div id="map" className="Events-mapWrapper">
        <GoogleMapReact
          defaultCenter={{ lat: 59.95, lng: 30.33 }}
          defaultZoom={ 11 } />
      </div>
    )
  }
}

export default Events;
