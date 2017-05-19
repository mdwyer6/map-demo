import React, { Component } from 'react';
import Location from './Location';

class LocationList extends Component {
  render() {
    return (
      <div>
        <ul>
          {Object.keys(this.props.cities).map((city) => <Location selected={city === this.props.selected} location={city} key={city} handleClick={this.props.handleClick} />)}
        </ul>
      </div>
    );
  }
}

export default LocationList;
