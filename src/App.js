import React, { Component } from 'react';
import './App.css';

const MobialsAPI = require("reviewsii-javascript-api");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  getDealerRating() {
    const DEALER_ID = 3;

    MobialsAPI.init({
      APIKey: '918bc979-9ebf-4423-a416-58daf5074459',
      debug: true,
    });

    MobialsAPI.fetchRating(DEALER_ID, res => {
      this.setState({
        data: res.data,
      });
    });
  }

  componentDidMount() {
    this.getDealerRating();
  }

  render() {
    let rating;
    if (this.state.data) {
      rating = <span>Rating: {this.state.data.rating}</span>;
    } else {
      rating = <span>Loading...</span>;
    }

    return (
      <div className="App">
        <div className="App-header">
          <h2>reviewsii-javascript-api test</h2>
        </div>
        <p className="App-intro">
          {rating}
        </p>
      </div>
    );
  }
}

export default App;
