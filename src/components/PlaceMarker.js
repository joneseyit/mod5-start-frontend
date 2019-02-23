import React, { Component } from "react";
import { Marker } from "react-google-maps";
import PlaceInfoWindow from "./PlaceWindowInfo";
import { connect } from 'react-redux'

//Flows to InfoWindow

export class PlaceMarker extends Component {
  state = {
    showTooltip: false
  };

  clickHandler = (e) => {
    this.setState({ showTooltip: !this.state.showTooltip })
  }


  render() {
    debugger
    const { lat, lng, title, caption, img, id } = this.props;
    return (
      <div>
        <Marker
          position={{
            lat: lat,
            lng: lng
          }}
          onClick={(e) => this.clickHandler(e)}
        >
          {this.state.showTooltip && (
            <PlaceInfoWindow
              title={title}
              caption={caption}
              img={img}
              id={id}
              onClick={this.clickHandler}
            />
          )}
        </Marker>
      </div>
    );
  }
}

export default connect()(PlaceMarker);
