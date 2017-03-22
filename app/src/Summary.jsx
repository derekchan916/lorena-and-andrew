import './Summary.scss';

import React, { Component } from 'react';

class Summary extends Component {

  render() {
    return (
      <div className='Summary-wrapper'>
        <h1 className='Summary-title'>OUR STORY</h1>
        <div className="Summary-block">
          <span>
            Leighton and Hunter met in 2009 during senior year of high school, during an Intro to Photography class. Students were assigned a project that required them to shoot architectural buildings throughout San Francisco. One afternoon, they ran into each other on the street - they were photographing the same building, just from different vantage points! - and decided to shoot together. The afternoon turned to evening and ended with ice cream, where they talked until the shop closed. And the rest, as they say, is history.
          </span>
          <span>
            In November, after dinner at Little Star (where they had their first "real" date!), Hunter surprised Leighton by proposing in Buena Vista Park, where they often take their dog Luna for walks.
          </span>
          <span>
            They're so excited to start the next phase of their lives together and can't wait to celebrate with you in August!
          </span>
        </div>
      </div>
    )
  }
}

export default Summary;
