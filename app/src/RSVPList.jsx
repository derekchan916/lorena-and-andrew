import './RSVPList.scss';

import React, { Component } from 'react';
import Axios from 'axios';

import RSVP from './RSVP';

import { FIREBASE_CONFIG, GUEST_SCHEMA } from '../constants';

class RSVPList extends Component {

  constructor() {
    super();
    this.state = {
      guests: [GUEST_SCHEMA, GUEST_SCHEMA],
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    const { guests } = this.state;
    const isDataValid = this.validateData(guests);

    return (
      <div className="content-wrapper">
        <div className="content-container">
          <h1>RSVP</h1>
          { this.state.guests.map((guest, i) => {
            return (
              <RSVP
                key={ i }
                index={ i }
                guest={ guest }
                handleChange={ this.handleChange }/>
            )
          }) }
          <button
            className="RSVP-inputWrapper RSVPList-button"
            onClick={ this.handleSubmit }>
            Submit
          </button>
        </div>
      </div>
    )
  }

  handleChange(guestIndex, e) {
    e.preventDefault();
    const { guests } = this.state;
    const name = e.target.name;
    let guestsClone = guests.slice(0);
    window.guestsClone = guestsClone;
    guestsClone[guestIndex][name] = e.target.value;

    this.setState({ guests: guestsClone });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { guests } = this.state;
    const mainGuest = guests[0];

    guests.forEach((guest, i) => {
      const guestToPush = i === 0 ? guest :  Object.assign(guest, { main: mainGuest });
      Axios.post(FIREBASE_CONFIG.guestURL, Object.assign(guestToPush))
      .then(() => {
        console.log('SUCCESS');
        this.setState([GUEST_SCHEMA]);
      });
    })
  }

  validateData(guests) {
    return validateEmptyInputs(guests);
  }
}

// Validation functions
function validateDupes(guestList, guest) {
  return isValid = !guestList.some((RSVPedGuest) => {
    return RSVPedGuest.firstName === guest.firstName
    && guest.lastName === guest.lastName
  });
}

function validateEmptyInputs(guests) {
  return guests.every(guest => validateEmptyInput(guest));
}

function validateEmptyInput(guest) {
  return !Object.values(guest).some(input => input === "");
}
// Helper functions

function parseData(data) {
  return Object.values(data);
}

function toLowerCase(data) {
  window.guest = data;
}

export default RSVPList;
