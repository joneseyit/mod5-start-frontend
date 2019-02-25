import React from "react";
import { Card, Image } from "semantic-ui-react";
import { Redirect, withRouter, Link } from 'react-router-dom'
import { markedPhoto } from '../actions/actions'
import { connect } from 'react-redux'
import { getLocation } from '../actions/actions'


////www.google.com/maps/search/?api=1&query=${props.photo.latitude},${props.photo.longitude}
const ShowCard = props => {

  navigator.geolocation.getCurrentPosition( data => props.dispatch( getLocation(data) ))

  return (<div>
    <Card>
      <Image src={props.photo.img} alt={props.photo.title} />
      <Card.Content>
        <Card.Header>{props.photo.title}</Card.Header>
        <Card.Meta>Photo added {props.photo.created_at.split('-')[0]}</Card.Meta>
        <Card.Description>{props.photo.caption}</Card.Description>
      </Card.Content>
      <Card.Content>
        <Card.Description>Location notes: {props.photo.location}</Card.Description>
      </Card.Content>
      <Link to={`/map/${props.photo.id}`}>
        Find This Art on the Map
      </Link>
      <Link to={{ pathname: '/directions', state: { photo: props.photo } }}>
        Get Directions
      </Link>
    </Card>
  </div>)
};

export default connect()(ShowCard)
