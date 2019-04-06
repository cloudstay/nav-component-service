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
      modal: false
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({
      modal: true
    })
  }

  handleCloseModal(){
    this.setState({
      modal: false
    })
  }

  render() {
    let amenities = this.props.amenities;
    console.log('Amenities are: ', amenities);

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
    return (
      <div>
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
                            <div className="amenity">{amenitiesArray.slice(0, 1)}</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div style={{marginBottom: 16}}>
                    <table className="amenity-container">
                      <tbody>
                        <tr>
                          <td className="amenity-icon">
                            󱀁
                          </td>
                          <td className="amenity-name">
                            <div className="amenity">{amenitiesArray.slice(1, 2)}</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="amenities-container">
                    <div style={{marginBottom: 16}}>
                      <table className="amenity-container">
                        <tbody>
                          <tr>
                            <td className="amenity-icon">
                              󱀁
                            </td>
                            <td className="amenity-name">
                              <div className="amenity">{amenitiesArray.slice(2, 3)}</div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div style={{marginBottom: 16}}>
                      <table className="amenity-container">
                        <tbody>
                          <tr>
                            <td className="amenity-icon">
                              󱀁
                            </td>
                            <td className="amenity-name">
                              <div className="amenity">{amenitiesArray.slice(3, 4)}</div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                </div>
              </div>
              <div style={{marginTop: 8}}>
                <div className="info-header">
                  <button type="button" className="button" aria-expanded="false" aria-busy="false" onClick={this.handleOpenModal}>
                    Show all amenities
                  </button>
                  <div id="amenitiesModal">
                    <Modal
                      isOpen={this.state.modal}
                      onAfterOpen={this.afterOpenModal}
                      onRequestClose={this.handleCloseModal}
                      style={customStyles}
                      contentLabel="Amenities Modal"
                    >
                      <section>
                        <div className="modal-section">
                          <div className="close-container">
                            <button type="button" className="button" aria-busy="false" style={{padding: 0 , margin: 0}} onClick={this.handleCloseModal}>
                              󱀁
                            </button>
                          </div>
                          <header>
                            <div className="amenities-header-container">
                              <h1 className="amenities-header">Amenities</h1>
                            </div>
                          </header>
                          <section>
                            <div style={{marginTop: 8}}>
                              <div style={{marginTop: 16}}>
                                <div style={{marginBottom: 16}}>{amenitiesArray}</div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </section>
                    </Modal>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    )
  }

}

export default Amenities;

