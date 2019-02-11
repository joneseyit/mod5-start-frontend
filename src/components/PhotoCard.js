import React from "react";
import { Card, Icon, Image, Grid } from "semantic-ui-react";
import { Link } from 'react-router-dom'




const PhotoCard = props => {
  let id = props.photo.id
  return (<div>
    <Grid.Column style={{padding: '10px'}}>
    <Card as={Link} to={{pathname: `show/${id}`, photo: props.photo}}>
      <Image src={props.photo.img} alt={props.photo.title} />
      <Card.Content>
        <Card.Header>{props.photo.title}</Card.Header>
        <Card.Meta>Photo added {props.photo.created_at.split('-')[0]}</Card.Meta>
        <Card.Description>{props.photo.caption}</Card.Description>
      </Card.Content>
      <Card.Content>
        <Card.Description>{props.photo.location}</Card.Description>
      </Card.Content>

    </Card>
    </Grid.Column>
  </div>)
};

export default PhotoCard;
