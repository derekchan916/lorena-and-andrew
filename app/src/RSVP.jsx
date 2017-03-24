import './RSVP.scss';

import React, { Component, PropTypes } from 'react';
import Axios from 'axios';

import { FIREBASE_CONFIG, GUEST_SCHEMA } from '../constants';

class RSVP extends Component {

  render() {
    const {
      index,
      guest,
      handleChange,
    } = this.props;

    return (
      <div className="RSVP-inputContainer">
        <h4 className="RSVP-title">{`Guest ${index + 1}`}</h4>
        <label className="RSVP-inputWrapper RSVP-inputWrapper--firstName">
          <input
            type="text"
            name='firstName'
            value={ guest.firstName }
            onChange={ (e) => handleChange(index, e) }
            placeholder='First Name' />
        </label>
        <label className="RSVP-inputWrapper RSVP-inputWrapper--lastName">
          <input
            type="text"
            name="lastName"
            value={ guest.lastName }
            onChange={ (e) => handleChange(index, e) }
            placeholder='Last Name' />
        </label>
        <label className="RSVP-inputWrapper RSVP-inputWrapper--email">
          <input
            type="text"
            name="email"
            value={ guest.email }
            onChange={ (e) => handleChange(index, e) }
            placeholder='Email' />
        </label>
      </div>
    )
  }
}

export default RSVP;
