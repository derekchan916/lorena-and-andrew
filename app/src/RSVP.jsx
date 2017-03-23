import './RSVP.scss';

import React, { Component } from 'react';
import Axios from 'axios';

import { FIREBASE_CONFIG, GUEST_SCHEMA } from '../constants';

class RSVP extends Component {

  constructor() {
    super();
    this.state = {
      guest: GUEST_SCHEMA,
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
    console.log(this.state.errors);
    return (
      <div className="content-wrapper">
        <div className="content-container">
          <h1>RSVP</h1>
          <div className="RSVP-inputContainer">
            <label className="RSVP-inputWrapper RSVP-inputWrapper--firstName">
              <input
                type="text"
                name='firstName'
                value={ this.state.guest.firstName }
                onChange={ this.handleChange }
                placeholder='First Name' />
            </label>
            <label className="RSVP-inputWrapper RSVP-inputWrapper--lastName">
              <input
                type="text"
                name="lastName"
                value={ this.state.guest.lastName }
                onChange={ this.handleChange }
                placeholder='Last Name' />
            </label>
            <label className="RSVP-inputWrapper RSVP-inputWrapper--email">
              <input
                type="text"
                name="email"
                value={ this.state.guest.email }
                onChange={ this.handleChange }
                placeholder='Email' />
            </label>
            <button
              className="RSVP-inputWrapper RSVP-button"
              onClick={ this.handleSubmit }>
              Submit
            </button>
          </div>
          { this.state.errors.map((error, i) => {
            return(
              <span key={ i }>{ error }</span>
            )
          })}
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
    const isValid = !guestList.some((RSVPedGuest) => {
      return RSVPedGuest.firstName === guest.firstName
      && guest.lastName === guest.lastName
    });

    if (isValid) {
      return true;
    } else {
      this.setState({
        errors: errors.concat(["You have already been added!"])
      });
    }
  }

  validateEmptyInputs(guest, errors) {
    const isValid = !Object.values(guest).some(input => input === "");

    if (isValid) {
      return true;
    } else {
      this.setState({
        errors: errors.concat(["You missed something!"])
      })
    }
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

export default RSVP;
