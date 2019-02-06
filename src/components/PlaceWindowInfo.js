import React, { Component } from "react";
import { InfoWindow } from "react-google-maps";

export class PlaceInfoWindow extends Component {
  render() {
    const { caption, title, img } = this.props;

    return (
      <InfoWindow onCloseClick={this.props.closeWindow}>
        <div>
          <h1>{title}</h1>
          <p>{caption}</p>
          <img src={img} />
        </div>
      </InfoWindow>
    )
  }
}

export default PlaceInfoWindow
