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
    this.getListing = this.getListing.bind(this);
  }


  componentWillMount() {
    this.getListing();
  }


  getListing() {
    var randomListing = Math.floor(Math.random() * 100) + 100;
    // console.log('random Listing:', randomListing);
    axios.get(`/api/rooms/${randomListing}`)
    .then((response) => {
      console.log('send a get request to the server', response.data);
      this.setState({
        listings: response.data
      })
    })
    .catch((error) => {
      console.log('Error in retrieving listings: ', error)
    })
  }


  render() {
    // console.log('listings:', this.state.listings);
    return (
      <div id="main">
        <div className="main-container">
          <div>
            <Title listing ={this.state.listings[0]}/>
            <Highlights />
            <Description />
            <Amenities />
            <SleepingArrangements />
          </div>
        </div>
      </div>
    )
  }
}

export default App;