import React, { Component } from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import { PlaceMarker } from './PlaceMarker'
import { connect } from 'react-redux'
import { fetchedPhotos } from '../actions/actions'
//Flows to PlaceMarker


//Get the map up
//check each photo for the lat/lng - if it fits on the map show it
//get info window to show up
//for each marker add a showWindow state of true or false - on the marker render it
//if it's true using the &&

const PhotoMap = withGoogleMap(props => {
  return <GoogleMap defaultCenter={props.center} defaultZoom={props.zoom}>
    {props.places}
  </GoogleMap>;
});



class Map extends Component {

  state = {
    //lat/long passed into PhotoMap center
    lat: 0,
    lng: 0,
    showInfoWindow: false
  }

  fetchPhotos(){
    fetch('http://localhost:3000/api/v1/photos')
    .then(res => res.json())
    .then(photos =>  this.props.dispatch(fetchedPhotos(photos))
    )
  }

  setLocation = () => {
    lat: navigator.geolocation.getCurrentPosition( data => this.setState({ lat: data.coords.latitude }))
    lng: navigator.geolocation.getCurrentPosition( data => this.setState({ lng: data.coords.longitude }) )

  }

  componentDidMount() {
    this.setLocation()
    this.fetchPhotos()


    console.log(this.state, 'in didmount')
  }


  render() {

    //comes from mapstate to props i get the data on the photos
    // const { caption, title, img } = this.props
    const {lat, lng} = this.state;
    const places =
        <div>
           {this.props.photos.map(photo => <PlaceMarker lat={parseFloat(photo.latitude)} lng={parseFloat(photo.longitude)} title={photo.title} caption={photo.caption} img={photo.img} id={photo.id}/> )}
        </div>
  return (
      <div style={{ width: '750px', height: '750px' }}>
        {(this.state.lat > 0)  ?
        (<PhotoMap
          state={console.log(this.state, 'in photomap')}
          center={{
            lat: lat,
            lng: lng
          }}
          zoom={10}
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

const mapStateToProps = (state) => {
  return { photos: state.photos }
}

export default connect(mapStateToProps)(Map)
