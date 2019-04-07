import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faKey, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Highlights = function(props) {
  let listing = props.listing;
   console.log('props', listing);
  return (
    <div className="listing">
       <div className="listing-highlights-section">
        <div className="listing-highlight">
          <div className="listing-highlight_title" >
            <span className="icon" aria-hidden="true">
              <FontAwesomeIcon icon={faHome} />
            </span>
            <div className="listing-highlight_title_name">{listing.type_of_listings}</div>
          </div>
          <div className="listing-highlight_details" >
            <span className="listing-highlight_text">{listing.max_guests === 1 ? '1 Guest . ' : listing.max_guests.toString() + ' Guests . '}
            {listing.bedrooms === 0 ? 'Studio . ' : listing.bedrooms === 1 ? '1 Bedroom . ' : `${listing.bedrooms} Bedrooms . `}
            {listing.beds === 1 ? '1 Bed . ' : listing.beds.toString() + ' Beds . '}
            {listing.baths === 1 ? '1 Bath' : listing.baths.toString() + ' Baths'} </span>
          </div>
        </div>
        <div className="listing-highlight">
          <div className="listing-highlight_title" >
            <span className="icon" aria-hidden="true">
              <FontAwesomeIcon icon={faKey} />
            </span>
            <div className="listing-highlight_title_name"> Great check-in experience </div>
          </div>
          <div className="listing-highlight_text">{listing.checkin_rating}</div>
        </div>
        <div className="listing-highlight">
          <div className="listing-highlight_title" >
            <span className="icon" aria-hidden="true">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </span>
            <div className="listing-highlight_title_name"> Great location </div>
          </div>
          <div className="listing-highlight_text">{listing.location_rating}</div>
        </div>
        <div className="line"></div>
      </div>
    </div>
  )
}

export default Highlights;

{/* div>
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
    </div> */}