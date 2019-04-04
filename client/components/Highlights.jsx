import React from 'react';

const Highlights = function(props) {
  let listing = props.listing;
  //  console.log('props', listing.city);
  return (
    <div>
      <div>
        <div>
          <div className="container1"></div>
          <div style={{marginTop: 16}}>
            <div className="icon-container">
              <div style={{marginRight: 8}}>
                <div className="icons">
                  <span className="icon" aria-hidden="true">󱀁</span>
                </div>
              </div>
            </div>
            <div className="info-container">
              <div className="info-header">{listing.type_of_listings}</div>
              <div>
                <div>
                  <span className="text">{listing.max_guests} guests</span>
                  <span aria-hidden="true"> . </span>
                  <span className="text">{listing.bedrooms} bedrooms</span>
                  <span aria-hidden="true"> . </span>
                  <span className="text">{listing.beds} beds</span>
                  <span aria-hidden="true"> . </span>
                  <span className="text">{listing.baths} baths</span>
                </div>
              </div>
            </div>
          </div>
          <div style={{marginTop: 16}}>
            <div className="container1">
              <div className="icon-container">
                <div style={{marginRight: 8}}>
                  <div className="icons">
                    <span className="icon" aria-hidden="true">󱀁</span>
                  </div>
                </div>
              </div>
              <div className="info-container">
                <div className="info-header"> Great check-in experience </div>
                <div className="text">{listing.checkin_rating}</div>
              </div>
            </div>
          </div>
          <div style={{marginTop: 16}}>
            <div className="container1">
              <div className="icon-container">
                <div style={{marginRight: 8}}>
                  <div className="icons">
                    <span className="icon" aria-hidden="true">󱀁</span>
                  </div>
                </div>
              </div>
              <div className="info-container">
                <div className="info-header"> Great location </div>
                <div className="text">{listing.location_rating}</div>
              </div>
            </div>
          </div>
          <div style={{marginTop: 24, marginBottom: 24}}>
            <div className="line-break"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Highlights;