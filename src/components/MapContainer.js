import React from 'react'
import PhotoMap from './PhotoMap'
import { connect } from 'react-redux'
import { fetchedPhotos } from '../actions/actions'
import { getLocation } from '../actions/actions'

class MapContainer extends React.Component {

  fetchPhotos(){
    fetch('http://localhost:3000/api/v1/photos')
    .then(res => res.json())
    .then(photos =>  this.props.dispatch(fetchedPhotos(photos)))
  }

  getLocation(){
    navigator.geolocation.getCurrentPosition(data => this.props.dispatch(getLocation(data)) )
  }

  componentDidMount(){
    this.fetchPhotos()
    this.getLocation()

  }

  render(){
    debugger
    return (
      <PhotoMap
        photos={this.props.photos}
        googleMapURL={'https://maps.googleapis.com/maps/api/js?key=AIzaSyB0Ag6Kca263tmba4j83iLV4N2_nj5epO4&v=3.exp&libraries=geometry,drawing,places'}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '600px', width: '600px'}} />}
        mapElement={<div style={{ height: '100%'}} /> }
      />
    )

  }

}

const mapStateToProps = (state) => {
  return { photos: state.photos,
           location: state.location}
}

export default connect(mapStateToProps)(MapContainer)
