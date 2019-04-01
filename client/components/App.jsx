import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
  }

  // getRequest() {
  //   axios.get('localhost:3003/api/rooms')
    
  //   .then((response) => {
  //     console.log('send a get request to the server')
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })
  // }


  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    )
  }
}

export default App;