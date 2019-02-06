import React, { Component } from 'react'
import { withGoogleMap, GoogleMap, InfoWindow } from 'react-google-maps'
import { PlaceMarker } from './PlaceMarker'
import { connect } from 'react-redux'
import { fetchedPhotos } from '../actions/actions'


const PhotoMap = withGoogleMap(props => {
  return <GoogleMap defaultCenter={props.center} defaultZoom={props.zoom}>
    {props.places}
  </GoogleMap>;
});



class Map extends Component {
  state = {
    lat: 50.0515918,
    lng: 19.9357531,
    showInfoWindow: false
  }

  fetchPhotos(){
    fetch('http://localhost:3000/api/v1/photos')
    .then(res => res.json())
    .then(photos =>  this.props.dispatch(fetchedPhotos(photos))

    )
  }

  componentDidMount() {
    this.fetchPhotos()
  }

  render() {
    const { caption, title, img } = this.props
    const {lat, lng} = this.state;
    const places =
                <div>
                   <PlaceMarker lat={40.0515918} lng={15.9357531} />
                </div>

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

const mapStateToProps = (state) => {
  return { photos: state.photos }
}

export default connect(mapStateToProps)(Map)
