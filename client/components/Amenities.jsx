import React from 'react';
import Modal from 'react-modal';
import uuidv4 from 'uuid/v4';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
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
    console.log(amenities)
    let amenitiesArray = [];

    for (let key in amenities) {
      if(key !== '_id'){
        if(amenities[key]) {
          amenitiesArray.push(<div key={uuidv4()}>{key}</div>)
        } else {
          amenitiesArray.push(<div key={uuidv4()}><s>{key}</s></div>)
        }
      }
    }

    return(
      <div className="listing-amenities">
        <div className="listing-amenities-section">
          <div className="listing-amenities-title">
            Amenities
          </div>
          <div className="listing-amenities-items">
            <div className="listing-amenities-left">
                <div className="listing-amenities-item">
                  <div className="listing-amenities-cell">
                    {amenitiesArray.slice(0, 4)}
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div id="amenitiesModal">
          <button onClick={this.handleOpenModal}>Open Modal</button>
          <Modal
            isOpen={this.state.popUp}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.handleCloseModal}
            style={customStyles}
            contentLabel="Example Modal"
          >

            <h2>Amenities</h2>
            <button onClick={this.handleCloseModal}>close</button>
            <div>{amenitiesArray}</div>
          </Modal>
        </div>
      </div>
    )
  }
}

export default Amenities;
