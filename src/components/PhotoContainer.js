import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'


class PhotoContainer extends Component {

  render (){
    return (
      <div>
        <Card>
          <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' />
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
        </Card>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { photos: state.photos }
}

export default PhotoContainer
