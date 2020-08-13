import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

// eslint-disable-next-line react/prefer-stateless-function
class Map extends Component {
  render() {
    let marker = null;
    let center = { lat: 48.856614, lng: 2.352222 };

    return (
      <div className="col-sm-5" style={{ height: '100vh' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyA9eczdhAXBjQXg_Y5E8niGj9bVsr237OM' }}
          center={center}
          defaultZoom={15}
        >
          {marker}
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
