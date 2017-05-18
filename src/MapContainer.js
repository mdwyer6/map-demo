import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from "react-google-maps";

const GettingStartedGoogleMap = withGoogleMap(props => 
  <GoogleMap
    defaultZoom={7}
    center={props.center}
  />
);

class MapContainer extends Component {
  render() {
    return (
      <div style={{height: '50vh',
        width: '80vw'}}>
        <GettingStartedGoogleMap
          center={this.props.coords}
          containerElement={
            <div style={{ height: '50vh' }} />
          }
          mapElement={
            <div style={{ height: '50vh' }} />
          }
        />
      </div>
    );
  }
}

export default MapContainer;
