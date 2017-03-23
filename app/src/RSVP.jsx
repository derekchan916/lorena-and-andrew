import './RSVP.scss';

import React, { Component, PropTypes } from 'react';
import Axios from 'axios';

import { FIREBASE_CONFIG, GUEST_SCHEMA } from '../constants';

class RSVP extends Component {

  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    const {
      firstName,
      lastName,
      email,
    } = this.props;

    return (
      <div className="RSVP-inputContainer">
        <label className="RSVP-inputWrapper RSVP-inputWrapper--firstName">
          <input
            type="text"
            name='firstName'
            value={ firstName }
            onChange={ this.handleChange }
            placeholder='First Name' />
        </label>
        <label className="RSVP-inputWrapper RSVP-inputWrapper--lastName">
          <input
            type="text"
            name="lastName"
            value={ lastName }
            onChange={ this.handleChange }
            placeholder='Last Name' />
        </label>
        <label className="RSVP-inputWrapper RSVP-inputWrapper--email">
          <input
            type="text"
            name="email"
            value={ email }
            onChange={ this.handleChange }
            placeholder='Email' />
        </label>
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
}

export default RSVP;
