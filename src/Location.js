import React, { Component } from 'react';

class Location extends Component {
  render() {
    const location = this.props.location;
    return (
      <li onClick={this.props.handleClick.bind(this, location)}>{location}</li>
    );
  }
}

export default Location;
