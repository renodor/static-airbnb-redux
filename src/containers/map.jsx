import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';

// eslint-disable-next-line react/prefer-stateless-function
const Map = (props) => {
  let marker = null;
  let center = { lat: 48.856614, lng: 2.352222 };

  if (props.selectedFlat) {
    marker = (
      <div
        style={{
          width: "20px",
          height: "20px",
          backgroundColor: "red",
          borderRadius: "50%"
        }}
        lat={props.selectedFlat.lat}
        lng={props.selectedFlat.lng}
      />
    );
    center = {
      lat: props.selectedFlat.lat,
      lng: props.selectedFlat.lng
    };
  }

  return (
    <div className="col-sm-5" style={{ height: "100vh" }}>
      <GoogleMapReact bootstrapURLKeys={{ key: 'AIzaSyA9eczdhAXBjQXg_Y5E8niGj9bVsr237OM' }} center={center} defaultZoom={15}>
        {marker}
      </GoogleMapReact>
    </div>
  );
};


function mapStateToProps(state) {
  return { selectedFlat: state.selectedFlat };
}
export default connect(mapStateToProps)(Map);
