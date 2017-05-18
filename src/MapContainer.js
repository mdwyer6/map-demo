import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from "react-google-maps";
import styles from '../styles/MapContainer.css';

const GettingStartedGoogleMap = withGoogleMap(props => 
  <GoogleMap
    defaultZoom={7}
    center={props.center}
    onCenterChange={props.handleCenterChange}
  />
);

class MapContainer extends Component {
  render() {
    return (
      <div className={styles.container}>
        <GettingStartedGoogleMap
          center={this.props.coords}
          onCenterChange={this.props.handleCenterChange}
          containerElement={
            <div className={styles.container} />
          }
          mapElement={
            <div className={styles.map} />
          }
        />
      </div>
    );
  }
}

export default MapContainer;
