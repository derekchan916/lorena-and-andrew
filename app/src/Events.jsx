import './Events.scss';

import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import EventsPin from './EventsPin';

class Events extends Component {

  render() {
    return (
      <div className="Events-wrapper content-wrapper" id="events">
        <div className="content-container">
          <h1>Events</h1>
          <h3 className="Events-subtitle">Dress Code: Cocktail Attire</h3>
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
          <h2>1. WELCOME DINNER</h2>
          <div className="Events-subDetails">
            <span>TBD, Saturday, July 8th, 2017</span>
            <span>金廷宴 Golden Palace Banquet Hall</span>
            <span>First Markham Place, 3225 Hwy 7 #1, Markham, ON L3R 3P3</span>
          </div>
        </ul>

        <ul>
          <h2>2. CELEBRATION PARTY</h2>
          <div className="Events-subDetails">
            <span>After dinner, Saturday July 8th, 2017</span>
            <span>The Cloak Bar</span>
            <span>488 Wellington St W, Toronto, ON M5V 1E9</span>
          </div>
        </ul>

        <ul>
          <h2>3. CEREMONY & RECEPTION</h2>
          <div className="Events-subDetails">
            <span>TBD, Sunday, July 9th,  2017</span>
            <span>Berkeley Fieldhouse</span>
            <span>311 Queen St. E, Toronto, ON, M5A 1S7</span>
          </div>
        </ul>
      </li>
    )
  }

  renderEventMap() {
    return (
      <div id="map" className="Events-mapWrapper">
        <GoogleMapReact
          defaultCenter={{ lat: 43.711842, lng: -79.3491519 }}
          defaultZoom={ 10 }
          bootstrapURLKeys={{
            key: 'AIzaSyDWxAi_7xdjypBlabS-IEktlLsaW0EpYhY',
            language: 'eng',
          }}>
          <EventsPin
            lat={ 43.848711 }
            lng={ -79.350343 }
            text={ '1' }/>
          <EventsPin
            lat={ 43.643676 }
            lng={ -79.398525 }
            text={ '2' }/>
          <EventsPin
            lat={ 43.655232 }
            lng={ -79.366137 }
            text={ '3' }/>
        </GoogleMapReact>
      </div>
    )
  }
}

export default Events;
