import React, { Component } from 'react'
import { connect } from 'react-redux'
import PhotoCard from './PhotoCard'
import { showPhoto } from '../actions/actions'

class ShowPhotos extends Component {
  //fetch
  //render
  //container
  //

  fetchPhoto = () => {
    const id = this.props.id
    fetch(`http://localhost:3000/api/v1/photos/${id}`)
    .then(res => res.json())
    .then(photo => this.props.dispatch(showPhoto(photo)))
  }

  componentDidMount(){
    this.fetchPhoto()
  }

  render() {
    const photo = () => {
      let id = this.props.id
      let curPhoto = this.props.photos.filter(photo => id === photo.id)
      return curPhoto
    }
    return (
      <PhotoCard photo={photo()}/>
    )
  }



}

export default connect()(ShowPhotos)
