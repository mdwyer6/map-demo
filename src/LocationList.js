import React from 'react';
import Location from './Location';
import styles from '../styles/LocationList.css';

const LocationList = (props) => (
  <ul className={styles.list}>
    {Object.keys(props.cities).map((city) => <Location selected={city === props.selected} location={city} key={city} handleClick={props.handleClick} />)}
  </ul>
);

export default LocationList;
