import React from 'react';
import axios from 'axios';
import Title from './Title.jsx';
import Highlights from './Highlights.jsx';
import Description from './Description.jsx';
import Amenities from './Amenities.jsx';
import SleepingArrangements from './SleepingArrangements.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listings: []
    }
  }


  getRequest() {
    var randomListing = Math.floor(Math.random() * 100) + 100;
    axios.get(`localhost:3003/api/rooms/${randomListing}`)
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
        <div>
          <Title />
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