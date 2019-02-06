import React, { Component } from "react";
import { Marker } from "react-google-maps";
import PlaceInfoWindow from "./PlaceWindowInfo";

export class PlaceMarker extends Component {
  state = {
    showTooltip: false
  };

  render() {
    const { lat, lng } = this.props;
    console.log(lat)
    return (
      <div>
        <Marker
          position={{
            lat: lat,
            lng: lng
          }}
        />
      </div>
    );
  }
}

export default PlaceMarker;
