import React, { Component }  from 'react'
import { withGoogleMap, GoogleMap } from 'react-google-maps'

const PhotosMap = withGoogleMap(props => (
  <GoogleMap
    defaultCenter={props.center}
    defaultZoom={7} />
));

class SearchPhotos extends Component {
  state = {
    lat: 0,
    lng: 0
  }

  render () {
    return (
      <div style={{width: `750px`, height: `750px`}}>
        <PhotosMap
          center=({
            lat: lat,
            lng: lng
          })
        />
      </div>
    )
  }
}
