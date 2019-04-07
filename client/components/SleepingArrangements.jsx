import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed } from '@fortawesome/free-solid-svg-icons';

class SleepingArrangements extends React.Component {
  constructor(props) {
    super(props);
    this.state= {

    }
  }

  render() {
    let sleepingArrangements = this.props.sleepingArrangements;
    console.log('sleepingArrangements: ', this.props.sleepingArrangements)
    return (
      <div className="main">
        <div className="title">Sleeping arrangements</div>
          <div className="container">
            {sleepingArrangements && sleepingArrangements.map( (item, index) =>
              <div className="box" key={index}>
                <FontAwesomeIcon icon={faBed} style={{marginBottom: 24}}/>
                <div style={{marginBottom: 8}}>Bedroom {index + 1}</div>
                <div className="bed">{item}</div>
              </div>)}
          </div>
      </div>
    )
  }
}

export default SleepingArrangements;
