import React from 'react';
import classnames from 'classnames';
import styles from '../styles/Location.css';

const Location = (props) => {
  const location = props.location;
  const selectedClass = classnames({[styles.selected]: props.selected, [styles.item]: !props.selected});
  return (
    <li onClick={props.handleClick.bind(this, location)} className={selectedClass}>{location}</li>
  );
}

export default Location;
