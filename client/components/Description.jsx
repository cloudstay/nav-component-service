import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';


class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
    this.handleShowMore = this.handleShowMore.bind(this)
  }

  handleShowMore() {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked
    }));
  }

  render() {
    // let listing = props.listing;
    if(!this.state.isClicked) {
      return (
        <div className="description">
          <div className="detail details-text text">
            {this.props.listing.description.slice(0, 250)}
          </div>
          <br />
          <div className="read-more" onClick={this.handleShowMore}>
            Read more about the space <FontAwesomeIcon icon={faChevronDown}/>
          </div>
          <div className="line"></div>
        </div>
      );
    }
    return (
      <div className="description">
          <div className="detail details-text text">
            {this.props.listing.description}
          </div>
        <br />
          <div className="read-more" onClick={this.handleShowMore}>
            Hide <FontAwesomeIcon icon={faChevronUp} />
          </div>
      </div>
    )
  }
}

export default Description;