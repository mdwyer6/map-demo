import React, { Component } from 'react';
import classnames from 'classnames';
import styles from '../styles/Location.css';

class Location extends Component {
  render() {
    const location = this.props.location;
    const selectedClass = classnames({[styles.selected]: this.props.selected});
    return (
      <li onClick={this.props.handleClick.bind(this, location)} className={selectedClass}>{location}</li>
    );
  }
}

export default Location;
