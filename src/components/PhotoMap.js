import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import PhotoMarker from "./PhotoMarker";
import InfoWindow from 'react-google-maps'
import PlaceInfoWindow from './PlaceInfoWindow'

const PhotoMap = withScriptjs(
  withGoogleMap(props => {
    const markers = props.photos.map(photo => (
      <PhotoMarker
        key={photo.uid}
        photo={photo}
        location={{ lat: parseFloat(photo.latitude), lng: parseFloat(photo.longitude) }}

      >
      <PlaceInfoWindow
        title={photo.title}
        caption={photo.caption}
        img={photo.img}
      />
      </PhotoMarker>
      ))
    return (
      <GoogleMap
        defaultZoom={14}
        center={props.location}
        >
        {markers}
      </ GoogleMap>
    )
  }
));

export default PhotoMap
