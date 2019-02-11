import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import PhotoMarker from "./PhotoMarker";

const PhotoMap = withScriptjs(
  withGoogleMap(props => {
    debugger
    const markers = props.photos.map(photo => (
      <PhotoMarker
        key={photo.uid}
        photo={photo}
        location={{ lat: parseFloat(photo.latitude), lng: parseFloat(photo.longitude) }}

      />))
    return (
      <GoogleMap
        defaultZoom={14}
        center={{lat: 33, lng: -84 }}
        >
        {markers}
      </ GoogleMap>
    )
  }
));

export default PhotoMap
