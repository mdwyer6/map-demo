import React, { Component } from 'react';
import Maps from './Maps';
import LocationList from './LocationList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Maps />
        <LocationList />
      </div>
    );
  }
}

export default App;
