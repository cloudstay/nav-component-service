import React from 'react';

const Title = function(props) {
  let listing = props.listing;
  if (listing) {
    // console.log('props', listing.city);
    let name = listing.listing_name.charAt(0).toUpperCase() + listing.listing_name.slice(1)
    return (
      <div className="listing">
        <div className="listing-title-section">
          <div className="listing-title">
            <h1 className="listing-title-bold">{name}</h1>
            <h5>{listing.city}</h5>
          </div>
          <div className="host-image-box">
            <img src={listing.host_picture_url} className="host-picture host-image" alt={listing.host_name}/>
            <h5>{listing.host_name}</h5>
          </div>
        </div>
      </div>
    )} else {
      return (
        <div>Loading...</div>
      )
    }
}

export default Title;
