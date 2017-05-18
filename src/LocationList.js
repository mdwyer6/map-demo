import React, { Component } from 'react';
import Location from './Location';

class LocationList extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      selected: 'New York'
    }
  }

  handleClick(city) {
    this.setState({
      selected: city
    });
    this.props.handleClick(city);
  }

  render() {
    return (
      <div>
        <ul>
          {Object.keys(this.props.cities).map((city) => <Location selected={city === this.state.selected} location={city} key={city} handleClick={this.handleClick} />)}
        </ul>
      </div>
    );
  }
}

export default LocationList;
