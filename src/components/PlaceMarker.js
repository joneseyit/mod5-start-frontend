import React, { Component } from 'react'
import { Marker } from 'react-google-maps'
import PlaceInfoWindow from './PlaceWindowInfo'


export class PlaceMarker extends Component {
  state = {
    showTooltip: false
  }



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
