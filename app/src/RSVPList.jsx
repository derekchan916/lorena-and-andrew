import './RSVPList.scss';

import React, { Component } from 'react';
import Axios from 'axios';

import RSVP from './RSVP';

import { FIREBASE_CONFIG, GUEST_SCHEMA, GUEST_SCHEME_CHECKBOXES } from '../constants';

class RSVPList extends Component {

  constructor() {
    super();

    this.state = {
      guests: [GUEST_SCHEMA, GUEST_SCHEMA],
      errors: "",
      formFilled: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  render() {
    const { guests, errors, formFilled} = this.state;
    const isDataValid = this.validateData(guests[0]);
    const submitClass = isDataValid ? '' : 'RSVPList-disable';

    if (formFilled) {
      return (
        <div className="content-wrapper" id="rsvp">
          <div className="content-container">
            <h1>RSVP & GIFTS</h1>
            <div className="RSVPList-successMessage">
              <img
                className="RSVPList-successImage"
                src='app/images/lorena-andrew-2.gif'/>
              <h2>Can't wait to see you there!</h2>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="content-wrapper" id="rsvp">
        <div className="content-container">
          <h1>RSVP</h1>
          <h3 className="RSVPList-subtitle">Please RSVP before May 28th.</h3>
          { this.state.guests.map((guest, i) => {
            return (
              <RSVP
                key={ i }
                index={ i }
                guest={ guest }
                handleChange={ this.handleChange }
                handleCheckboxChange={ this.handleCheckboxChange }/>
            )
          }) }
          <div className={`RSVPList-buttonContainer ${submitClass}`}>
            <button
              className="RSVPList-button"
              onClick={ (e) => this.handleSubmit(isDataValid, e) }>
              Submit
            </button>
          </div>
          <span className="RSVPList-errors">{ errors }</span>
          { this.renderGifts() }
        </div>
      </div>
    )
  }

  renderGifts() {
    return ([
      <h1>Gifts</h1>,
      <h3 className="RSVPList-subtitle">What we want most for our wedding is to have all of our friends and family together for a good time. More than anything, your well wishes and friendship is enough and gifts are not necessary. There is no registry, as we are in preparation for another big move in our life, moving to Hong Kong. If you would still like to gift us, envelopes and cards would be greatly appreciated.</h3>
    ]);
  }

  handleChange(guestIndex, e) {
    e.preventDefault();
    const { guests } = this.state;
    const name = e.target.name;
    const guestsUpdate = updateObjectInArray(guests, {
      index: guestIndex,
      item: { [name]: e.target.value },
    });

    this.setState({ guests: guestsUpdate });
  }

  handleCheckboxChange(guestIndex, e) {
    e.preventDefault();
    const { guests } = this.state;
    const name = e.target.name;
    const status = guests[guestIndex][name];
    const guestsUpdate = updateObjectInArray(guests, {
      index: guestIndex,
      item: { [name]: !status },
    });

    setTimeout( () => this.setState({ guests: guestsUpdate }), 0);
  }

  handleSubmit(isDataValid, e) {
    e.preventDefault();
    const { guests, errors } = this.state;
    const filteredGuests = filterArray(guests);

    if (!isDataValid) {
      this.setState({ errors: "Please fill in everything for Guest 1"});
      return;
    } else {
      Axios.post(FIREBASE_CONFIG.guestURL, filteredGuests)
      .then(() => {
        this.setState({
          guests: [GUEST_SCHEMA, GUEST_SCHEMA],
          errors: "",
          formFilled: true,
        });
      }).catch((error) => {
        this.setState({
          errors: "Something went wrong :(",
        });
        console.warn(errors);
      });
    }
  }

  validateData(guest) {
    return validateEmptyInput(guest) && validateCheckboxes(guest);
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
  return !Object.keys(guest).some(input => guest[input] === "");
}

function validateCheckboxes(guest) {
  return !GUEST_SCHEME_CHECKBOXES.every(check => guest[check] === false);
}

// Helper functions
function parseData(data) {
  return Object.keys(data);
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

function filterArray(array) {
  return array.filter((object) => {
    return !Object.keys(object).every(el => object[el] === "");
  });
}

export default RSVPList;
