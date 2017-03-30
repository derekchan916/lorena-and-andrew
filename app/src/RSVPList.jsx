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
    const isDataValid = this.validateData(guests[0]);
    const submitClass = isDataValid ? '' : 'RSVPList-disable';

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
          <div className={`RSVPList-buttonContainer ${submitClass}`}>
            <button
              className="RSVPList-button"
              onClick={ this.handleSubmit }>
              Submit
            </button>
          </div>
        </div>
      </div>
    )
  }

  handleChange(guestIndex, e) {
    e.preventDefault();
    const { guests } = this.state;
    const name = e.target.name;
    const guestsUpdate = updateObjectInArray(guests, {
      index: guestIndex,
      item: {
        [name]: e.target.value
      }
    });

    this.setState({ guests: guestsUpdate });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { guests } = this.state;

    Axios.post(FIREBASE_CONFIG.guestURL, guests)
    .then(() => {
      console.log('SUCCESS');
      this.setState([GUEST_SCHEMA]);
    });
  }

  validateData(guest) {
    return validateEmptyInput(guest);
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

function updateObjectInArray(array, action) {
  return array.map( (item, index) => {
    if(index !== action.index) {
      return item;
    }

    return {
        ...item,
        ...action.item
    };
  });
}

export default RSVPList;
