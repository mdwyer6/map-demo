import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from "react-google-maps";
import styles from '../styles/MapContainer.css';

const GettingStartedGoogleMap = withGoogleMap(props => 
  <GoogleMap
    defaultZoom={7}
    ref={props.onMapMounted}
    center={props.center}
    onCenterChanged={props.onCenterChanged}
  />
);


class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.handleMapMounted = this.handleMapMounted.bind(this);
    this.handleCenterChanged = this.handleCenterChanged.bind(this);
  }

  handleMapMounted(map) {
    this._map = map;
  }

  handleCenterChanged() {
    let coords = {
      lat: this._map.getCenter().lat(),
      lng: this._map.getCenter().lng()
    };
    this.props.handleCenterChanged(coords);
  }

  render() {
    return (
      <div className={styles.container}>
        <GettingStartedGoogleMap
          center={this.props.coords}
          onCenterChanged={this.handleCenterChanged}
          onMapMounted={this.handleMapMounted}
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
