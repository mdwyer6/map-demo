import React, { Component } from 'react';
import classnames from 'classnames';

class Location extends Component {
  render() {
    const location = this.props.location;
    const selectedClass = classnames({'selected': this.props.selected});
    return (
      <li onClick={this.props.handleClick.bind(this, location)} className={selectedClass}>{location}</li>
    );
  }
}

export default Location;
