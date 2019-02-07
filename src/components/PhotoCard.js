import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { Link } from 'react-router-dom'

const PhotoCard = props => {

  let id = props.photo.id
  return (<div>
    <Card as={ Link } to={{pathname: `show/${id}`, photo: props.photo}} >
      <Image src={props.photo.img} alt={props.photo.title} />
      <Card.Content>
        <Card.Header>{props.photo.title}</Card.Header>
        <Card.Meta>Photo added {props.photo.created_at.split('-')[0]}</Card.Meta>
        <Card.Description>{props.photo.caption}</Card.Description>
      </Card.Content>
      <Card.Content>
        <Card.Description>{navigator.geolocation.getCurrentPosition((data) => data.coords.latitude)}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          10 Friends
        </a>
      </Card.Content>
    </Card>
  </div>)
};

export default PhotoCard;
