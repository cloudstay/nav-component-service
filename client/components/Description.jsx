import React from 'react';

const Description = function(props) {
  return (
    <div>
      <div id="details">
        <div className="detail details-text text" aria-hidden="true">
          {props.listing.description.slice(0, 496)}
        </div>
        <div style={{marginTop: 16}}>
          <div className="dropdown">
            <div style={{marginTop: 8, marginBottom: 24}}>
              <div className="info-header">
                <button type="button" className="button" aria-expanded="false" aria-busy="false">
                  <div className="read-more">
                    Read more about the space
                  </div>
                  <div className="read-more">
                    <div style={{marginLeft: 8}}>
                      <div className="dropdown-icon">
                        󱀁
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div style={{marginTop: 24}}>
            <span className="info-header">
              <button type="button" className="button" aria-expanded="false" aria-busy="false">
                Contact Host
                </button>
            </span>
          </div>
        </div>
        <div style={{marginTop: 24, marginBottom: 24}}>
            <div className="line-break"></div>
        </div>
      </div>
    </div>
  )
}

export default Description;