import React, { Component } from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import { PlaceMarker } from './PlaceMarker'
import { connect } from 'react-redux'
import { fetchedPhotos } from '../actions/actions'
import { getLocation } from '../actions/actions'
import { withRouter } from 'react-router-dom'
//Flows to PlaceMarker
//Get the map up
//check each photo for the lat/lng - if it fits on the map show it
//get info window to show up
//for each marker add a showWindow state of true or false - on the marker render it
//if it's true using the &&

//https://www.google.com/maps/@33.785968,-84.3804785,15z

// test directions lat lnf 34.026249,-84.345349
// 33.787119,-84.382543
// how to allow api access to just maps and directions
//
const PhotoMap = withGoogleMap(props => {
  return <GoogleMap defaultCenter={props.center} defaultZoom={props.zoom}>
    {props.places}
  </GoogleMap>;
});

//if trigger then photos

class Map extends Component {

  fetchPhotos(){
    fetch(`https://sleepy-cliffs-94580.herokuapp.com/api/v1/photos/`)
    .then(res => res.json())
    .then(photos =>  this.props.dispatch(fetchedPhotos(photos))
    )
  }

  setLocation = () => {
    navigator.geolocation.getCurrentPosition( data => this.props.dispatch( getLocation(data) ))
  }

  componentDidMount() {
    this.setLocation()
    this.fetchPhotos()
  }




  render() {
    //assign state to var
    //test to see if we have an id in params.  If so just show that one

    //comes from mapstate to props i get the data on the photos
    // const { caption, title, img } = this.props
    //use an or statement to see if we have just one marker or many
    const {lat, lng} = this.props.location;
    const places =
        <div>
           {this.props.photos.map(photo => <PlaceMarker lat={parseFloat(photo.latitude)} lng={parseFloat(photo.longitude)} title={photo.title} caption={photo.caption} img={photo.img} id={photo.id}/> )}
        </div>

  return (
      <div style={{ width: '750px', height: '750px' }}>
        {(lat > 0)  ?
        (<PhotoMap
          center={{
            lat: lat,
            lng: lng
          }}
          zoom={14}
          containerElement={
            <div style={{ height: '100%' }} />
          }
          mapElement={
            <div style={{ height: '100%' }} />
          }
          places={places}
        />)
        : <p>Loading...</p>
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let photos = state.photos;
  let location = state.location;
  if ((state.photos.length > 0) && (ownProps.match.params.id !== undefined )  ) {
    photos = state.photos.filter(p => p.id === parseInt(ownProps.match.params.id))
    location = { lat: parseFloat(photos[0].latitude), lng: parseFloat(photos[0].longitude) }
  }

  return { photos: photos, location: location, markedPhoto: state.markedPhoto }
}

export default withRouter(connect(mapStateToProps)(Map))
