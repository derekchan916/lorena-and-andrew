import './RSVPList.scss';

import React, { Component } from 'react';
import Axios from 'axios';

import RSVP from './RSVP';

import { FIREBASE_CONFIG, GUEST_SCHEMA } from '../constants';

class RSVPList extends Component {

  constructor() {
    super();
    this.state = {
      guests: [GUEST_SCHEMA],
      errors: [],
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // Get the list of guests
    Axios.get(FIREBASE_CONFIG.guestURL)
      .then(response => {
        this.guestList = parseData(response.data);
      });
  }

  render() {
    return (
      <div className="content-wrapper">
        <div className="content-container">
          <h1>RSVP</h1>
          { this.state.guests.map((guest, i) => {
            return (
              <RSVP
                key={ i }
                guest={ guest } />
            )
          }) }
          { this.state.errors.map((error, i) => {
            return(
              <span key={ i }>{ error }</span>
            )
          }) }
          <button
            className="RSVP-inputWrapper RSVP-button"
            onClick={ this.handleSubmit }>
            Submit
          </button>
        </div>
      </div>
    )
  }

  handleChange(e) {
    e.preventDefault();
    const name = e.target.name;
    const update = this.state.guest;

    update[name] = e.target.value;
    this.setState({ guest: update });
  }

  handleSubmit(e) {
    e.preventDefault();
    const errors = [];
    const lowercasedData = toLowerCase(this.state.guest);

    if (this.validateData(this.guestList, this.state.guest, errors)) {
      Axios.post(FIREBASE_CONFIG.guestURL, this.state.guest)
      .then( _ => {
        console.log('SUCCESS');
        this.setState(GUEST_SCHEMA);
      });
    } else {
      console.warn('DUPLICATES');
    }

    this.setState({
      errors: errors,
    });
  }

  validateData(guestList, guest, errors) {
    const noDupes = this.validateDupes(guestList, guest, errors);
    const noEmptyInputs = this.validateEmptyInputs(guest, errors);

    return noDupes && noEmptyInputs;
  }

  validateDupes(guestList, guest, errors) {
    return isValid = !guestList.some((RSVPedGuest) => {
      return RSVPedGuest.firstName === guest.firstName
      && guest.lastName === guest.lastName
    });
  }

  validateEmptyInputs(guest, errors) {
    return isValid = !Object.values(guest).some(input => input === "");
  }

  clearErrors() {
    this.setState({
      errors: []
    });
  }
}

function parseData(data) {
  return Object.values(data);
}

function toLowerCase(data) {
  window.guest = data;
}

export default RSVPList;
