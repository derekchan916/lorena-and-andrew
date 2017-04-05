import './Travel.scss';

import React, { Component } from 'react';

class Travel extends Component {

  render() {
    return (
      <div className="content-wrapper" id="travel">
        <div className="content-container">
          <h1>Travel</h1>

          <ul className="Travel-HotelsContainer">
            <li>
              <div className="Travel-HotelsLogoWrapper">
                <img src='app/images/Sheraton_Hotels.svg.png'/>
              </div>
              <h2>Sheraton Centre Hotel</h2>
              <span>123 Queen St W, Toronto, ON M5H 2M9</span>
              <span>Please use discount code, Set Code: #211555</span>
              <a target='_blank' href="https://www.starwoodhotels.com/sheraton/rates/calendar.html?propertyId=271&sortOrder=&corporateAccountNumber=211555&refPage=predecider&accessible=&ctx=search&priceMin=&priceMax=&bedType=&rp=SN:211555,,,&nonSmoking=">Discount Link</a>
            </li>
            <li>
              <div className="Travel-HotelsLogoWrapper">
                <img src='app/images/Westin.svg.png'/>
              </div>
              <h2>Westin Harbour Castle Hotel</h2>
              <span>1 Harbour Square, Toronto, ON M5J 1A6</span>
              <span>Please use discount code, Set Code: #211555</span>
              <a target='_blank' href="https://www.starwoodhotels.com/westin/rates/calendar.html?sortOrder=&propertyId=1084&corporateAccountNumber=211555&refPage=predecider&accessible=&ctx=search&priceMin=&priceMax=&bedType=&rp=SN%3A211555%2C%2C%2C&nonSmoking=">Discount Link</a>
            </li>
          </ul>

          <div className="Travel-OtherAccomodations">
            <h2>Other Accommodations in the area:</h2>
            <span>Airbnb</span>
            <h4>There are several great options in the downtown Toronto area</h4>
            <span>Shangri-La</span>
            <h4>188 University Ave, Toronto, ON M5H 0A3</h4>
            <span>Hilton Toronto</span>
            <h4>145 Richmond St. W, Toronto, ON M5H 2L2</h4>
          </div>
        </div>
      </div>
    )
  }
}

export default Travel;
