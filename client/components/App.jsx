import React from 'react';
import axios from 'axios';
import Summary from './Summary.jsx';
import Highlights from './Highlights.jsx';
import Description from './Description.jsx';
import Amenities from './Amenities.jsx';
import SleepingArrangements from './SleepingArrangements.jsx';

class App extends React.Component {
  constructor() {
    super();
  }

  getRequest() {
    axios.get('localhost:3003/api/rooms')
    .then((response) => {
      console.log('send a get request to the server')
    })
    .catch((error) => {
      console.log(error)
    })
  }


  render() {
    return (
      <div>
        <div id="listing_container">
          <Summary />
          <Highlights />
          <Description />
          <Amenities />
          <SleepingArrangements />
        </div>
      </div>
    )
  }
}

export default App;