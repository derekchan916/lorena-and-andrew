'use strict';

import './stylesheets/_styleguide.scss';
import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';

import App from './src/App';

class Index extends Component {

	render () {
		return (
			<div className="Styleguide">
        <App />
			</div>
		)
	}
}

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<Index />, document.getElementById('main'));
});
