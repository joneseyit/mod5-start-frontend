import React, { Component } from 'react'
import { Marker } from 'react-google-maps'

export class PlaceMarker extends Component {
  render() {
      const { lat, lng } = this.props
      return(
      <Marker
        position={{
          lat: 50.0515918,
          lng: 19.9357531
        }}
      />
    );
  }
}

export default PlaceMarker
