import './RSVP.scss';

import React, { Component } from 'react';
import Axios from 'axios';

import { FIREBASE_CONFIG } from '../constants';

class RSVP extends Component {

  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    Axios.get(FIREBASE_CONFIG.guestURL)
      .then(response => {
        console.log(response.data);
      });
  }

  render() {
    return (
      <div className="content-wrapper">
        <div className="content-container">
          <h1>RSVP</h1>
          <div className="RSVP-inputContainer">
            <label className="RSVP-inputWrapper RSVP-inputWrapper--firstName">
              <input
                type="text"
                name='firstName'
                value={ this.state.firstName }
                onChange={ this.handleChange }
                placeholder='First Name' />
            </label>
            <label className="RSVP-inputWrapper RSVP-inputWrapper--lastName">
              <input
                type="text"
                name="lastName"
                value={ this.state.lastName }
                onChange={ this.handleChange }
                placeholder='Last Name' />
            </label>
            <label className="RSVP-inputWrapper RSVP-inputWrapper--email">
              <input
                type="text"
                name="email"
                value={ this.state.email }
                onChange={ this.handleChange }
                placeholder='Email' />
            </label>
            <button
              className="RSVP-inputWrapper RSVP-button"
              onClick={ this.handleSubmit }>
              Submit
            </button>
          </div>
        </div>
      </div>
    )
  }

  handleChange(e) {
    e.preventDefault();
    const name = e.target.name;

    this.setState({ [name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    Axios.post(FIREBASE_CONFIG.guestURL, this.state )
      .then( _ => {
        console.log('SUCCESS');
      });
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
    });
  }
}

export default RSVP;
