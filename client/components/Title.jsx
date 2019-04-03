import React from 'react';

const Title = function(props) {
  let listing = props.listing;
  if (listing) {
    // console.log('props', listing.city);
    let name = listing.listing_name.charAt(0).toUpperCase() + listing.listing_name.slice(1)
    return (
      <div className="title-container">
        <div style={{marginBottom: 6}}>
          <div className="listing-detail" key={listing.listing_id}>
            <span className="listing_title_text">
              <h1 className="listing_title_bold">{name}</h1>
            </span>
            <div style={{marginBottom: 16}}>
              <div className="city">
                {listing.city}
              </div>
            </div>
            <div className="host_container">
              <div style={{marginTop: 12}}>
                <div className="text-center text-muted">
                  <div style={{marginBottom: 6}}>
                    <div className="host_image_box" style={{height: 64, width: 64, display: 'block'}}>
                      <img src={listing.host_picture_url} className="host_image" alt={listing.host_name}/>
                    </div>
                  </div>
                  <div className="host_name">{listing.host_name}</div>
                </div>
              </div>
            </div>
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
