import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { fetchedPhotos } from '../actions/actions'

class PhotoContainer extends Component {

  fetchPhotos(){
    fetch('http://localhost:3000/api/v1/photos')
    .then(res => res.json())
    .then(photos =>  this.props.dispatch(fetchedPhotos(photos)))
  }

  componentDidMount(){
    this.fetchPhotos()
  }

  render (){
    return (

      <div>
        { !this.props.photos.length ? <p>Loading un momento...</p> :
          (<Card>
          <Image src={this.props.photos} />
          <Card.Content>
            <Card.Header>Daniel</Card.Header>
            <Card.Meta>Joined in 2016</Card.Meta>
            <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              10 Friends
            </a>
          </Card.Content>
        </Card>)
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { photos: state.photos }
}

export default connect(mapStateToProps)(PhotoContainer)
