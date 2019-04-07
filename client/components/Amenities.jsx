import React from 'react';
import Modal from 'react-modal';
import uuidv4 from 'uuid/v4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    overflow              : 'scroll',
    height                : '600px',
    width                 : '600px'
  }
};

if (process.env.NODE_ENV !== 'test') Modal.setAppElement('div');

class Amenities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popUp: false,
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({
      popUp: true
    })
  }

  handleCloseModal() {
    this.setState({
      popUp: false
    })
  }

  render() {
    let amenities= this.props.amenities
    // console.log(amenities)
    let amenitiesArray = [];

    for (let key in amenities) {
      if(key !== '_id'){
        if(amenities[key]) {
          amenitiesArray.unshift(<div key={uuidv4()}>{key}</div>)
        } else {
          amenitiesArray.push(<div key={uuidv4()}><s>{key}</s></div>)
        }
      }
    }

    return(
      <div className="listing-amenities">
        <div className="listing-amenities_title">
          Amenities
        </div>
        <div className="listing-amenities_wrapper">
  	      {amenitiesArray && amenitiesArray.slice(0, 4).map((item, index) =>
            <div className="listing-amenity-name" key={index}>
  		        <span>{item}</span>
  		      </div>)}
        </div>
        <div id="amenitiesModal">
          <div className="show-all" onClick={this.handleOpenModal}>
            Show all amenities
          </div>
          <Modal
            isOpen={this.state.popUp}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.handleCloseModal}
            style={customStyles}
            contentLabel="Amenities Modal"
          >
            <div>
              <button type='button' className="close-btn" onClick={this.handleCloseModal}>X</button>
            </div>
            <h1 className="modal-title">Amenities</h1>
              {amenitiesArray.map((item, index) =>
                <div className="amenities-detail" key={index}>{item}</div>
              )}
          </Modal>
        </div>
      </div>
    )
  }
}

export default Amenities;
