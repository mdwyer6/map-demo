import React, { Component } from 'react';
import MapContainer from './MapContainer';
import LocationList from './LocationList';

const cities = {
  'London': {
    lat: 51.5074,
    lng: -0.1278
  }, 
  'New York': {
    lat: 40.713845,
    lng: -74.005912
  },
  'Denver': {
    lat: 39.7392,
    lng: -104.9903
  },
  'San Francisco': {
    lat: 37.7749,
    lng: -122.4194
  }, 
  'Paris': {
    lat: 48.8566,
    lng: 2.3522
  }, 
  'Berlin': {
    lat: 52.5200,
    lng: 13.4050
  },
  'Moscow': {
    lat: 55.7558,
    lng: 37.6173
  },
  'Sao Paulo': {
    lat: -23.5505,
    lng: -46.6333
  },
  'Hong Kong': {
    lat: 22.3964,
    lng: 114.1095
  },
  'Istanbul': {
    lat: 41.0082,
    lng: 28.9784
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      coords: {
        lat: 40.713845,
        lng: -74.005912
      }
    }
  }

  handleClick(city) {
    this.setState({
      coords: cities[city]
    })
  }

  render() {
    return (
      <div>
        <MapContainer coords={this.state.coords} />
        <LocationList cities={cities} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
