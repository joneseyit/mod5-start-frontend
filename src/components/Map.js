import React, { Component } from 'react'
import { withGoogleMap, GoogleMap } from 'react-google-maps'
import { PlaceMarker } from './PlaceMarker'
import { connect } from 'react-redux'



const PhotoMap = withGoogleMap(props => {
  return <GoogleMap defaultCenter={props.center} defaultZoom={props.zoom}>
    {props.places}
  </GoogleMap>;
});


export default class Map extends Component {
  state = {
    lat: 50.0515918,
    lng: 19.9357531
  }

  render() {
    const {lat, lng} = this.state;
    const places = <PlaceMarker lat={50.0515918} lng={19.9357531} />

  return (
      <div style={{ width: '750px', height: '750px' }}>

        <PhotoMap
          center={{
            lat: lat,
            lng: lng
          }}
          zoom={7}
          containerElement={
            <div style={{ height: '100%' }} />
          }
          mapElement={
            <div style={{ height: '100%' }} />
          }
          places={places}
        />
      </div>
    )
  }
}
