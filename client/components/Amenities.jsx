import React from 'react';

const Amenities = function (props) {
  let listing = props.listing;
  if (listing) {
    return (
      <div id="amenities">
        <div style={{marginBottom: 0}}>
          <section>
            <div style={{marginBottom: 16}}>
              <h2 className="title-bold">
                <div className="sub-header">Amenities</div>
              </h2>
            </div>
            <div className="main-container">
              <div className="amenities-container">
                <div style={{marginBottom: 16}}>
                  <table className="amenity-container">
                    <tbody>
                      <tr>
                        <td className="amenity-icon">
                          󱀁
                        </td>
                        <td className="amenity-name">
                          <div className="amenity">Kitchen</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div style={{marginBottom: 16}}></div>
              </div>
              <div></div>
            </div>
          </section>
        </div>
      </div>
    )
  }

}

export default Amenities;
