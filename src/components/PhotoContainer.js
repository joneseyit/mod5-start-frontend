import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Grid } from 'semantic-ui-react'
import { fetchedPhotos } from '../actions/actions'
import PhotoCard from './PhotoCard'


class PhotoContainer extends Component {

  fetchPhotos(){
    fetch('http://localhost:3000/api/v1/photos')
    .then(res => res.json())
    .then(photos =>  this.props.dispatch(fetchedPhotos(photos))

    )
  }

  componentDidMount(){
    this.fetchPhotos()
  }




  render (){
    return (

      <div>
        <div>
          <Grid relaxed padded columns={4}>
            <Card.Group>
            { !this.props.photos.length ? <p>Loading un momento...</p> :
              (this.props.photos.map(photo => <PhotoCard photo={photo} /> ))
            }
            </Card.Group>
          </Grid>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { photos: state.photos }
}

export default connect(mapStateToProps)(PhotoContainer)
