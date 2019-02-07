import React, { Component } from 'react'
import { connect } from 'react-redux'
import PhotoCard from './PhotoCard'
import { showPhoto } from '../actions/actions'

class ShowPhotos extends Component {
  //fetch
  //render
  //container
  //
  //
  // fetchPhoto = () => {
  //   const id = this.props.match.id
  //   fetch(`http://localhost:3000/api/v1/photos/${id}`)
  //   .then(res => res.json())
  //   .then(photo => this.props.dispatch(showPhoto(photo)))
  // }
  //
  // componentDidMount(){
  //   this.fetchPhoto()
  // }

  render() {
      debugger
      let id = parseInt(this.props.match.params.id)
      let curPhoto = (this.props.photos.filter(photo => id === photo.id))[0]
    return (

      <PhotoCard style={{align: 'center'}}photo={curPhoto}/>
    )
  }
}

const mapStateToProps = (state) => {
  return { photos: state.photos }
}

export default connect(mapStateToProps)(ShowPhotos)
