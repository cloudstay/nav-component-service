import React from 'react';
import axios from 'axios';
import Title from './Title.jsx';
import Highlights from './Highlights.jsx';
import Description from './Description.jsx';
import Amenities from './Amenities.jsx';
import SleepingArrangements from './SleepingArrangements.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: null
    }
    this.getListing = this.getListing.bind(this);
  }


  componentWillMount() {
    this.getListing();
  }


  getListing() {
    var listing_Id=window.location.pathname.split('/')[2];
    console.log(listing_Id);
    axios.get(`/api/rooms/${listing_Id}/listing`)
    .then((response) => {
      console.log('send a get request to the server', response.data);
      this.setState({
        listings: response.data[0]
      })
    })
    .catch((error) => {
      console.log('Error in retrieving listings: ', error)
    })
  }

  render() {
    // console.log('listings:', this.state.listings[0]);
    if (this.state.listings) {
      return (
        <div id="main">
          <div className="main-container">
            <div>
              <Title listing ={this.state.listings}/>
              <Highlights listing ={this.state.listings}/>
              <Description listing={this.state.listings}/>
              <Amenities amenities ={this.state.listings.amenities[0]}/>
              <SleepingArrangements sleepingArrangements ={this.state.listings.sleeping_arrangements}/>
            </div>
          </div>
      </div>
      )
    } else {
      return (
        <div>Loading ...</div>
      )
    }
  }
}

export default App;