import React from 'react';
import Contact from './Contact.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

class Description extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      showMore: false,
    };
    this.handleShowMore = this.handleShowMore.bind(this);
  }

  handleShowMore() {
    this.setState(prevState => ({
      showMore: !prevState.showMore
    }));
  }

  render() {
    if(this.props.listing) {
      return (
        <div id="details">
          <div className="detail details-text text" aria-hidden="true">
            {this.props.listing.description.slice(0, 250)}
          </div>
          <div style={{marginTop: 16}}>
            <div className="dropdown">
              <div style={{marginTop: 8, marginBottom: 24}}>
                <div className="info-header">
                  <button type="button" className="button" aria-expanded="false" aria-busy="false" onClick={this.handleShowMore}>
                    <div className="read-more">
                      {this.state.showMore ? "Hide" : "Read more about the space"}
                    </div>
                    <div className="read-more">
                      <div style={{marginLeft: 8}}>
                        <div className="dropdown-icon">
                          <FontAwesomeIcon icon={faChevronDown}/>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Contact />
          <div style={{marginTop: 24, marginBottom: 24}}>
            <div className="line-break"></div>
          </div>
        </div>
      )
    }
  }
}

export default Description;