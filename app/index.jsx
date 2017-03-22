import './stylesheets/_styleguide.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Homepage from './src/Homepage';

class Index extends Component {

  render () {
    return (
      <div className="Styleguide">
        <Homepage />
      </div>
    )
  }
}

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<Index />, document.getElementById('main'));
});
