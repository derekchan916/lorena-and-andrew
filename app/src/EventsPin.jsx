import './EventsPin.scss';

import React, { Component } from 'react';

class EventsPin extends Component {

  render() {
    return (
      <div className="EventsPin">
        {this.props.text}
      </div>
    )
  }

}

export default EventsPin;
